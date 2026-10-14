/**
 * OnboardAI - Shared UI Components & Layout Engine
 * Tự động kết xuất Sidebar, Topbar, Toast, Modal và Quản lý phiên làm việc đa vai trò
 */

const UI = {
  // Bản đồ cấu trúc điều hướng theo 4 vai trò
  navigationMap: {
    newhire: [
      {
        section: "Hội nhập của tôi",
        items: [
          { title: "Bảng điều khiển (Dashboard)", icon: "grid", url: "newhire-onboarding-dashboard.html", badge: null },
          { title: "Checklist Hội nhập", icon: "check-square", url: "newhire-checklist.html", badge: "Live" },
          { title: "Trợ lý AI Trả lời Chính sách", icon: "sparkles", url: "newhire-ai-help.html", badge: "AI-1", isAi: true }
        ]
      },
      {
        section: "Tài nguyên & Trợ giúp",
        items: [
          { title: "Thư viện Tài liệu & Sổ tay", icon: "book-open", url: "hr-document-library.html", badge: null }
        ]
      }
    ],
    mentor: [
      {
        section: "Quản lý Cố vấn (Mentorship)",
        items: [
          { title: "Danh sách Nhân sự mới (Mentees)", icon: "users", url: "mentor-mentee-list.html", badge: null },
          { title: "Sổ tay Check-in 1-on-1", icon: "file-text", url: "mentor-checkin-note.html", badge: null },
          { title: "Phân công Nhiệm vụ (Tasks)", icon: "clipboard", url: "mentor-task-assignment.html", badge: "CRUD" }
        ]
      },
      {
        section: "Công cụ Hỗ trợ",
        items: [
          { title: "Thư viện Tài liệu", icon: "book-open", url: "hr-document-library.html", badge: null }
        ]
      }
    ],
    hr: [
      {
        section: "Vận hành Nhân sự (People Ops)",
        items: [
          { title: "Bảng điều khiển HR & Cảnh báo", icon: "pie-chart", url: "hr-dashboard.html", badge: "AI-3", isAi: true },
          { title: "Thiết kế Lộ trình (Journeys)", icon: "compass", url: "hr-journey-management.html", badge: "AI-2", isAi: true },
          { title: "Thư viện Số & Chính sách", icon: "folder", url: "hr-document-library.html", badge: "CRUD" }
        ]
      },
      {
        section: "Theo dõi Nhân sự",
        items: [
          { title: "Danh sách Nhân sự mới", icon: "users", url: "mentor-mentee-list.html", badge: null },
          { title: "Nhật ký Check-in toàn công ty", icon: "calendar", url: "mentor-checkin-note.html", badge: null }
        ]
      }
    ],
    admin: [
      {
        section: "Quản trị Hệ thống (System Admin)",
        items: [
          { title: "Quản lý Phòng ban", icon: "briefcase", url: "admin-department-management.html", badge: null },
          { title: "Quản lý Tài khoản & Phân quyền", icon: "shield", url: "admin-user-management.html", badge: "CRUD" },
          { title: "Cấu hình Hệ thống & AI SLA", icon: "sliders", url: "admin-system-settings.html", badge: null }
        ]
      },
      {
        section: "Chuyển tiếp Nghiệp vụ",
        items: [
          { title: "Báo cáo Tổng thể HR", icon: "activity", url: "hr-dashboard.html", badge: null }
        ]
      }
    ]
  },

  // Icon SVG Helper
  getIconSvg(name) {
    const icons = {
      grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      "check-square": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"></path></svg>`,
      "book-open": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
      users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      "file-text": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      clipboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
      "pie-chart": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
      compass: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
      folder: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
      briefcase: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      sliders: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
      activity: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
    };
    return icons[name] || icons.grid;
  },

  // Khởi tạo giao diện chung
  initLayout(activePageFileName, breadcrumbTitle = "") {
    const user = StorageManager.getCurrentUser();
    this.renderSidebar(user, activePageFileName);
    this.renderTopbar(user, breadcrumbTitle);
    this.bindGlobalEvents();
  },

  // Kết xuất Sidebar
  renderSidebar(user, activePageFileName) {
    const sidebar = document.getElementById("app-sidebar");
    if (!sidebar) return;

    const roleNavs = this.navigationMap[user.role] || this.navigationMap.newhire;

    let navHtml = "";
    roleNavs.forEach(group => {
      navHtml += `<div class="nav-section-title">${group.section}</div>`;
      group.items.forEach(item => {
        const isActive = activePageFileName === item.url ? "active" : "";
        const badgeHtml = item.badge ? `<span class="nav-badge ${item.isAi ? 'ai-badge' : ''}">${item.badge}</span>` : "";
        navHtml += `
          <a href="${item.url}" class="nav-item ${isActive}">
            ${this.getIconSvg(item.icon)}
            <span>${item.title}</span>
            ${badgeHtml}
          </a>
        `;
      });
    });

    const roleNameMap = {
      newhire: "Nhân sự mới",
      mentor: "Mentor / Quản lý",
      hr: "Nhân sự (HR)",
      admin: "Quản trị viên"
    };

    sidebar.innerHTML = `
      <div class="sidebar-header">
        <a href="../index.html" class="logo-brand">
          <div class="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span>Onboard<span style="color: #06b6d4;">AI</span></span>
          <span class="logo-tag">BTL-20</span>
        </a>
      </div>

      <div class="sidebar-role-indicator">
        <div class="role-badge-box">
          <img src="${user.avatar}" alt="${user.name}" class="role-avatar" />
          <div class="role-info-text">
            <div class="user-name" title="${user.name}">${user.name}</div>
            <div class="user-role">
              <span class="role-pill ${user.role}">${roleNameMap[user.role] || user.role}</span>
            </div>
          </div>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${navHtml}
      </nav>

      <div class="sidebar-footer">
        <div class="quick-role-switch">
          <div class="switch-label">
            <span>Đổi vai trò xem thử</span>
            <span style="font-size:0.65rem; color:#64748b;">4 Role</span>
          </div>
          <div class="role-btn-grid">
            <button class="btn-role-opt ${user.role === 'newhire' ? 'active' : ''}" onclick="UI.handleSwitchRole('newhire')">Nhân sự mới</button>
            <button class="btn-role-opt ${user.role === 'mentor' ? 'active' : ''}" onclick="UI.handleSwitchRole('mentor')">Mentor</button>
            <button class="btn-role-opt ${user.role === 'hr' ? 'active' : ''}" onclick="UI.handleSwitchRole('hr')">HR Ops</button>
            <button class="btn-role-opt ${user.role === 'admin' ? 'active' : ''}" onclick="UI.handleSwitchRole('admin')">Quản trị</button>
          </div>
        </div>
      </div>
    `;
  },

  // Kết xuất Topbar
  renderTopbar(user, breadcrumbTitle) {
    const topbar = document.getElementById("app-topbar");
    if (!topbar) return;

    const notifs = StorageManager.getNotifications();
    const unreadCount = notifs.filter(n => !n.read).length;

    topbar.innerHTML = `
      <div class="topbar-left">
        <button class="menu-toggle-btn" id="mobile-toggle" aria-label="Toggle Menu">
          ${this.getIconSvg("menu")}
        </button>
        <div class="breadcrumbs">
          <a href="../index.html">OnboardAI</a>
          <span>/</span>
          <span class="current">${breadcrumbTitle || "Trang làm việc"}</span>
        </div>
      </div>

      <div class="topbar-right">
        <div class="search-input-box">
          <span class="search-icon">${this.getIconSvg("search")}</span>
          <input type="text" placeholder="Tìm tài liệu, nhiệm vụ, mentee..." onkeyup="UI.handleGlobalSearch(event)" />
        </div>

        <button class="topbar-btn" id="notif-btn" title="Thông báo" onclick="UI.toggleNotificationDropdown()">
          ${this.getIconSvg("bell")}
          ${unreadCount > 0 ? `<span class="btn-badge">${unreadCount}</span>` : ""}
        </button>

        <a href="../login.html" class="user-profile-menu" title="Chuyển tài khoản / Đăng xuất">
          <img src="${user.avatar}" alt="${user.name}" />
          <div class="u-info">
            <div class="u-name">${user.name}</div>
            <div class="u-role">${user.email}</div>
          </div>
        </a>
      </div>
    `;
  },

  // Xử lý chuyển vai trò nhanh
  handleSwitchRole(newRole) {
    const user = StorageManager.switchRole(newRole);
    if (!user) return;

    this.showToast("Chuyển vai trò thành công", `Đang hoạt động với vai trò: ${user.name} (${newRole.toUpperCase()})`, "success");

    // Điều hướng tới trang đại diện của role đó
    const roleDefaultPages = {
      newhire: "newhire-onboarding-dashboard.html",
      mentor: "mentor-mentee-list.html",
      hr: "hr-journey-management.html",
      admin: "admin-department-management.html"
    };

    setTimeout(() => {
      window.location.href = roleDefaultPages[newRole] || "newhire-onboarding-dashboard.html";
    }, 350);
  },

  // Hiển thị Toast thông báo
  showToast(title, message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div style="flex:1;">
        <div style="font-weight:700; font-size:0.9rem; margin-bottom:2px;">${title}</div>
        <div style="font-size:0.8rem; color:#475569;">${message}</div>
      </div>
      <button style="background:none; border:none; color:#94a3b8; cursor:pointer;" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  // Bật / Tắt Modal
  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("active");
  },

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove("active");
  },

  // Thông báo xác nhận hành động
  showConfirm(title, message, onConfirm) {
    let modal = document.getElementById("confirm-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "confirm-modal";
      modal.className = "modal-overlay";
      modal.innerHTML = `
        <div class="modal-card" style="max-width: 440px;">
          <div class="modal-header">
            <h3 id="confirm-title">${title}</h3>
            <button class="modal-close-btn" onclick="UI.closeModal('confirm-modal')">✕</button>
          </div>
          <div class="modal-body">
            <p id="confirm-msg" style="font-size:0.95rem; color:#475569;">${message}</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline" onclick="UI.closeModal('confirm-modal')">Hủy bỏ</button>
            <button class="btn btn-danger" id="confirm-ok-btn">Xác nhận</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    } else {
      document.getElementById("confirm-title").textContent = title;
      document.getElementById("confirm-msg").textContent = message;
    }

    const okBtn = document.getElementById("confirm-ok-btn");
    okBtn.onclick = () => {
      UI.closeModal("confirm-modal");
      if (typeof onConfirm === "function") onConfirm();
    };

    UI.openModal("confirm-modal");
  },

  // Xử lý sự kiện chung (Drawer mobile, backdrop...)
  bindGlobalEvents() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const sidebar = document.getElementById("app-sidebar");

    let backdrop = document.getElementById("sidebar-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.id = "sidebar-backdrop";
      backdrop.className = "sidebar-backdrop";
      document.body.appendChild(backdrop);
    }

    if (toggleBtn && sidebar) {
      toggleBtn.onclick = () => {
        sidebar.classList.toggle("mobile-open");
        backdrop.classList.toggle("active");
      };
      backdrop.onclick = () => {
        sidebar.classList.remove("mobile-open");
        backdrop.classList.remove("active");
      };
    }
  },

  // Bật popover thông báo
  toggleNotificationDropdown() {
    const notifs = StorageManager.getNotifications();
    StorageManager.markNotificationsRead();

    // Xóa badge số lượng đỏ
    const badge = document.querySelector("#notif-btn .btn-badge");
    if (badge) badge.remove();

    let html = `<div style="max-height: 280px; overflow-y: auto;">`;
    if (notifs.length === 0) {
      html += `<div style="text-align:center; padding:1.5rem; color:#64748b;">Không có thông báo mới.</div>`;
    } else {
      notifs.forEach(n => {
        html += `
          <div style="padding: 0.75rem 0.5rem; border-bottom: 1px solid #f1f5f9; display:flex; gap:0.75rem;">
            <div style="width:8px; height:8px; border-radius:50%; background:#4f46e5; margin-top:6px;"></div>
            <div>
              <div style="font-weight:600; font-size:0.85rem;">${n.title}</div>
              <div style="font-size:0.785rem; color:#475569; margin: 2px 0;">${n.message}</div>
              <div style="font-size:0.7rem; color:#94a3b8;">${n.time}</div>
            </div>
          </div>
        `;
      });
    }
    html += `</div>`;

    let notifModal = document.getElementById("notif-modal");
    if (!notifModal) {
      notifModal = document.createElement("div");
      notifModal.id = "notif-modal";
      notifModal.className = "modal-overlay";
      notifModal.innerHTML = `
        <div class="modal-card" style="max-width: 450px;">
          <div class="modal-header">
            <h3>Thông báo hệ thống (${notifs.length})</h3>
            <button class="modal-close-btn" onclick="UI.closeModal('notif-modal')">✕</button>
          </div>
          <div class="modal-body" id="notif-modal-body">${html}</div>
          <div class="modal-footer">
            <button class="btn btn-outline btn-sm" onclick="UI.closeModal('notif-modal')">Đóng</button>
          </div>
        </div>
      `;
      document.body.appendChild(notifModal);
    } else {
      document.getElementById("notif-modal-body").innerHTML = html;
    }
    UI.openModal("notif-modal");
  },

  handleGlobalSearch(event) {
    if (event.key === "Enter") {
      const q = event.target.value.trim();
      if (q) {
        window.location.href = `hr-document-library.html?q=${encodeURIComponent(q)}`;
      }
    }
  }
};

