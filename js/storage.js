/**
 * OnboardAI - LocalStorage Storage Manager
 * Quản lý lưu trữ trạng thái tập trung và các thao tác CRUD phía client
 */

const STORAGE_KEY = "ONBOARDAI_DB_V1";

const StorageManager = {
  // Khởi tạo cơ sở dữ liệu nếu chưa có
  init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.resetToDefaults();
    }
  },

  // Lấy toàn bộ DB
  getDB() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return this.resetToDefaults();
      }
      return JSON.parse(raw);
    } catch (e) {
      console.error("Lỗi đọc LocalStorage, khởi tạo lại:", e);
      return this.resetToDefaults();
    }
  },

  // Lưu toàn bộ DB
  saveDB(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
      window.dispatchEvent(new CustomEvent("onboardai_db_updated", { detail: db }));
    } catch (e) {
      console.error("Lỗi lưu LocalStorage:", e);
    }
  },

  // Khôi phục dữ liệu mặc định ban đầu
  resetToDefaults() {
    const clone = JSON.parse(JSON.stringify(INITIAL_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clone));
    window.dispatchEvent(new CustomEvent("onboardai_db_updated", { detail: clone }));
    return clone;
  },

  // --- QUẢN LÝ NGƯỜI DÙNG & PHIÊN ĐĂNG NHẬP HIỆN TẠI ---
  getCurrentUser() {
    const db = this.getDB();
    return db.currentUser || INITIAL_DATA.currentUser;
  },

  switchRole(role) {
    const db = this.getDB();
    const targetUser = db.users.find(u => u.role === role);
    if (targetUser) {
      db.currentUser = { ...targetUser };
      this.saveDB(db);
      return targetUser;
    }
    return null;
  },

  setCurrentUser(userId) {
    const db = this.getDB();
    const user = db.users.find(u => u.id === userId);
    if (user) {
      db.currentUser = { ...user };
      this.saveDB(db);
      return user;
    }
    return null;
  },

  getUsers() {
    const db = this.getDB();
    return db.users || [];
  },

  addUser(userData) {
    const db = this.getDB();
    const newUser = {
      id: "usr-" + Date.now().toString(36),
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      status: "active",
      ...userData
    };
    db.users.push(newUser);

    // Nếu tạo newhire, tự động thêm vào newHires table
    if (newUser.role === "newhire") {
      db.newHires.push({
        id: "nh-" + Date.now().toString(36),
        userId: newUser.id,
        name: newUser.name,
        avatar: newUser.avatar,
        email: newUser.email,
        role: newUser.position || "Chuyên viên mới",
        department: newUser.department || "Công nghệ thông tin (IT)",
        mentorId: newUser.mentorId || "mt-01",
        mentorName: newUser.mentorName || "Lê Hoàng Long",
        startDate: newUser.startDate || new Date().toISOString().split("T")[0],
        probationDays: 60,
        progressPercent: 0,
        completedTasks: 0,
        totalTasks: 0,
        riskStatus: "normal",
        riskReason: "Nhân sự mới gia nhập, chuẩn bị khởi động onboarding.",
        lastCheckinDate: "-",
        journeyId: "j-01"
      });
    }

    this.saveDB(db);
    return newUser;
  },

  updateUser(id, updates) {
    const db = this.getDB();
    const index = db.users.findIndex(u => u.id === id);
    if (index !== -1) {
      db.users[index] = { ...db.users[index], ...updates };
      if (db.currentUser && db.currentUser.id === id) {
        db.currentUser = { ...db.currentUser, ...updates };
      }
      this.saveDB(db);
      return db.users[index];
    }
    return null;
  },

  deleteUser(id) {
    const db = this.getDB();
    db.users = db.users.filter(u => u.id !== id);
    db.newHires = db.newHires.filter(nh => nh.userId !== id && nh.id !== id);
    this.saveDB(db);
    return true;
  },

  // --- QUẢN LÝ NHÂN SỰ MỚI (NEW HIRES) ---
  getNewHires() {
    const db = this.getDB();
    return db.newHires || [];
  },

  getNewHire(id) {
    const db = this.getDB();
    return db.newHires.find(nh => nh.id === id || nh.userId === id);
  },

  updateNewHire(id, updates) {
    const db = this.getDB();
    const index = db.newHires.findIndex(nh => nh.id === id || nh.userId === id);
    if (index !== -1) {
      db.newHires[index] = { ...db.newHires[index], ...updates };
      this.saveDB(db);
      return db.newHires[index];
    }
    return null;
  },

  // --- QUẢN LÝ NHIỆM VỤ (TASKS) ---
  getTasks(newHireId = null) {
    const db = this.getDB();
    if (!newHireId) return db.tasks || [];
    return (db.tasks || []).filter(t => t.newHireId === newHireId);
  },

  getTask(id) {
    const db = this.getDB();
    return (db.tasks || []).find(t => t.id === id);
  },

  addTask(taskData) {
    const db = this.getDB();
    const newTask = {
      id: "tsk-" + Date.now().toString(36),
      status: "pending",
      completedAt: null,
      note: "",
      mentorFeedback: "",
      ...taskData
    };
    db.tasks.unshift(newTask);
    this.recalculateNewHireProgress(db, newTask.newHireId);
    this.saveDB(db);
    return newTask;
  },

  updateTask(id, updates) {
    const db = this.getDB();
    const index = db.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      db.tasks[index] = { ...db.tasks[index], ...updates };
      this.recalculateNewHireProgress(db, db.tasks[index].newHireId);
      this.saveDB(db);
      return db.tasks[index];
    }
    return null;
  },

  deleteTask(id) {
    const db = this.getDB();
    const task = db.tasks.find(t => t.id === id);
    if (task) {
      const newHireId = task.newHireId;
      db.tasks = db.tasks.filter(t => t.id !== id);
      this.recalculateNewHireProgress(db, newHireId);
      this.saveDB(db);
      return true;
    }
    return false;
  },

  toggleTaskStatus(id) {
    const db = this.getDB();
    const task = db.tasks.find(t => t.id === id);
    if (task) {
      if (task.status === "completed") {
        task.status = "pending";
        task.completedAt = null;
      } else {
        task.status = "completed";
        task.completedAt = new Date().toLocaleString("vi-VN");
      }
      this.recalculateNewHireProgress(db, task.newHireId);
      this.saveDB(db);
      return task;
    }
    return null;
  },

  recalculateNewHireProgress(db, newHireId) {
    if (!newHireId) return;
    const targetHire = db.newHires.find(nh => nh.id === newHireId || nh.userId === newHireId);
    if (targetHire) {
      const hireTasks = db.tasks.filter(t => t.newHireId === targetHire.id || t.newHireId === targetHire.userId);
      const total = hireTasks.length;
      const completed = hireTasks.filter(t => t.status === "completed").length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      targetHire.totalTasks = total;
      targetHire.completedTasks = completed;
      targetHire.progressPercent = percent;

      // Cập nhật cảnh báo rủi ro dựa trên tiến độ và ngày thử việc
      if (percent < 40 && total > 0) {
        targetHire.riskStatus = "critical";
      } else if (percent < 60) {
        targetHire.riskStatus = "warning";
      } else {
        targetHire.riskStatus = "normal";
      }
    }
  },

  // --- QUẢN LÝ CHECK-IN (CHECKINS) ---
  getCheckins(newHireId = null) {
    const db = this.getDB();
    if (!newHireId) return db.checkins || [];
    return (db.checkins || []).filter(c => c.newHireId === newHireId);
  },

  addCheckin(checkinData) {
    const db = this.getDB();
    const newCheckin = {
      id: "chk-" + Date.now().toString(36),
      status: "completed",
      date: new Date().toISOString().split("T")[0],
      ...checkinData
    };
    db.checkins.unshift(newCheckin);

    // Cập nhật ngày lastCheckinDate cho newHire
    const hire = db.newHires.find(nh => nh.id === newCheckin.newHireId || nh.userId === newCheckin.newHireId);
    if (hire) {
      hire.lastCheckinDate = newCheckin.date;
      if (hire.riskStatus === "critical" && newCheckin.moraleRating >= 3) {
        hire.riskStatus = "warning";
      }
    }

    this.saveDB(db);
    return newCheckin;
  },

  updateCheckin(id, updates) {
    const db = this.getDB();
    const idx = db.checkins.findIndex(c => c.id === id);
    if (idx !== -1) {
      db.checkins[idx] = { ...db.checkins[idx], ...updates };
      this.saveDB(db);
      return db.checkins[idx];
    }
    return null;
  },

  deleteCheckin(id) {
    const db = this.getDB();
    db.checkins = db.checkins.filter(c => c.id !== id);
    this.saveDB(db);
    return true;
  },

  // --- QUẢN LÝ TÀI LIỆU (DOCUMENTS) ---
  getDocuments(category = null, search = "") {
    const db = this.getDB();
    let docs = db.documents || [];
    if (category && category !== "all") {
      docs = docs.filter(d => d.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      docs = docs.filter(d => 
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        (d.tags && d.tags.some(t => t.toLowerCase().includes(q)))
      );
    }
    return docs;
  },

  getDocument(id) {
    const db = this.getDB();
    return (db.documents || []).find(d => d.id === id);
  },

  addDocument(docData) {
    const db = this.getDB();
    const newDoc = {
      id: "doc-" + Date.now().toString(36),
      downloads: 0,
      lastUpdated: new Date().toISOString().split("T")[0],
      format: "PDF",
      fileSize: "1.5 MB",
      tags: [],
      ...docData
    };
    db.documents.unshift(newDoc);
    this.saveDB(db);
    return newDoc;
  },

  updateDocument(id, updates) {
    const db = this.getDB();
    const idx = db.documents.findIndex(d => d.id === id);
    if (idx !== -1) {
      db.documents[idx] = { ...db.documents[idx], ...updates, lastUpdated: new Date().toISOString().split("T")[0] };
      this.saveDB(db);
      return db.documents[idx];
    }
    return null;
  },

  deleteDocument(id) {
    const db = this.getDB();
    db.documents = db.documents.filter(d => d.id !== id);
    this.saveDB(db);
    return true;
  },

  incrementDownload(id) {
    const db = this.getDB();
    const doc = db.documents.find(d => d.id === id);
    if (doc) {
      doc.downloads = (doc.downloads || 0) + 1;
      this.saveDB(db);
      return doc.downloads;
    }
    return 0;
  },

  // --- QUẢN LÝ LỘ TRÌNH (JOURNEYS) ---
  getJourneys() {
    const db = this.getDB();
    return db.journeys || [];
  },

  addJourney(journeyData) {
    const db = this.getDB();
    const newJourney = {
      id: "j-" + Date.now().toString(36),
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
      phasesCount: 4,
      tasksCount: 10,
      ...journeyData
    };
    db.journeys.unshift(newJourney);
    this.saveDB(db);
    return newJourney;
  },

  updateJourney(id, updates) {
    const db = this.getDB();
    const idx = db.journeys.findIndex(j => j.id === id);
    if (idx !== -1) {
      db.journeys[idx] = { ...db.journeys[idx], ...updates };
      this.saveDB(db);
      return db.journeys[idx];
    }
    return null;
  },

  deleteJourney(id) {
    const db = this.getDB();
    db.journeys = db.journeys.filter(j => j.id !== id);
    this.saveDB(db);
    return true;
  },

  // --- QUẢN LÝ PHÒNG BAN (DEPARTMENTS) ---
  getDepartments() {
    const db = this.getDB();
    return db.departments || [];
  },

  addDepartment(deptData) {
    const db = this.getDB();
    const newDept = {
      id: "dept-" + Date.now().toString(36),
      memberCount: 0,
      activeOnboardingCount: 0,
      ...deptData
    };
    db.departments.push(newDept);
    this.saveDB(db);
    return newDept;
  },

  updateDepartment(id, updates) {
    const db = this.getDB();
    const idx = db.departments.findIndex(d => d.id === id);
    if (idx !== -1) {
      db.departments[idx] = { ...db.departments[idx], ...updates };
      this.saveDB(db);
      return db.departments[idx];
    }
    return null;
  },

  deleteDepartment(id) {
    const db = this.getDB();
    db.departments = db.departments.filter(d => d.id !== id);
    this.saveDB(db);
    return true;
  },

  // --- HỆ THỐNG CÀI ĐẶT (SETTINGS) ---
  getSettings() {
    const db = this.getDB();
    return db.systemSettings || INITIAL_DATA.systemSettings;
  },

  updateSettings(updates) {
    const db = this.getDB();
    db.systemSettings = { ...db.systemSettings, ...updates };
    this.saveDB(db);
    return db.systemSettings;
  },

  // --- THÔNG BÁO (NOTIFICATIONS) ---
  getNotifications() {
    const db = this.getDB();
    return db.notifications || [];
  },

  markNotificationsRead() {
    const db = this.getDB();
    db.notifications.forEach(n => n.read = true);
    this.saveDB(db);
  }
};

// Khởi chạy khi script được tải
StorageManager.init();

