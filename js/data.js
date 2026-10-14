/**
 * OnboardAI - Mock Initial Database
 * Chứa dữ liệu khởi tạo ban đầu cho toàn bộ hệ thống
 */

const INITIAL_DATA = {
  currentUser: {
    id: "nh-01",
    name: "Trần Minh Anh",
    role: "newhire", // 'newhire' | 'mentor' | 'hr' | 'admin'
    email: "minhanh.tran@techcorp.vn",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    department: "Công nghệ thông tin (IT)",
    position: "Frontend Developer (Junior)",
    mentorId: "mt-01",
    mentorName: "Lê Hoàng Long",
    startDate: "2026-09-15",
    probationDays: 60
  },

  users: [
    {
      id: "nh-01",
      name: "Trần Minh Anh",
      email: "minhanh.tran@techcorp.vn",
      role: "newhire",
      department: "Công nghệ thông tin (IT)",
      position: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      status: "active",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      phone: "0912 345 678",
      startDate: "2026-09-15"
    },
    {
      id: "nh-02",
      name: "Nguyễn Văn An",
      email: "vanan.nguyen@techcorp.vn",
      role: "newhire",
      department: "Công nghệ thông tin (IT)",
      position: "Backend Developer Intern",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      status: "active",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      phone: "0908 112 233",
      startDate: "2026-09-10"
    },
    {
      id: "nh-03",
      name: "Phạm Hải Đăng",
      email: "haidang.pham@techcorp.vn",
      role: "newhire",
      department: "Tiếp thị & Truyền thông",
      position: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
      status: "active",
      mentorId: "mt-02",
      mentorName: "Vũ Phương Linh",
      phone: "0934 556 778",
      startDate: "2026-09-20"
    },
    {
      id: "nh-04",
      name: "Đỗ Thùy Trang",
      email: "thuytrang.do@techcorp.vn",
      role: "newhire",
      department: "Kinh doanh & Bán hàng",
      position: "Sales B2B Executive",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      status: "active",
      mentorId: "mt-03",
      mentorName: "Trịnh Đình Khang",
      phone: "0978 990 112",
      startDate: "2026-09-01"
    },
    {
      id: "mt-01",
      name: "Lê Hoàng Long",
      email: "hoanglong.le@techcorp.vn",
      role: "mentor",
      department: "Công nghệ thông tin (IT)",
      position: "Lead Software Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      status: "active",
      phone: "0903 889 900"
    },
    {
      id: "mt-02",
      name: "Vũ Phương Linh",
      email: "phuonglinh.vu@techcorp.vn",
      role: "mentor",
      department: "Tiếp thị & Truyền thông",
      position: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      status: "active",
      phone: "0988 776 655"
    },
    {
      id: "mt-03",
      name: "Trịnh Đình Khang",
      email: "dinhkhang.trinh@techcorp.vn",
      role: "mentor",
      department: "Kinh doanh & Bán hàng",
      position: "Sales Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      status: "active",
      phone: "0911 223 344"
    },
    {
      id: "hr-01",
      name: "Nguyễn Thu Hà",
      email: "thuha.hr@techcorp.vn",
      role: "hr",
      department: "Nhân sự & Đào tạo",
      position: "People Operations Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      status: "active",
      phone: "0945 667 889"
    },
    {
      id: "admin-01",
      name: "Bùi Quốc Cường",
      email: "admin@techcorp.vn",
      role: "admin",
      department: "Quản trị hệ thống",
      position: "Head of Infrastructure & Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      status: "active",
      phone: "0909 000 999"
    }
  ],

  departments: [
    {
      id: "dept-01",
      name: "Công nghệ thông tin (IT)",
      code: "ENG",
      headName: "Lê Hoàng Long",
      headEmail: "hoanglong.le@techcorp.vn",
      memberCount: 42,
      activeOnboardingCount: 2,
      description: "Phát triển phần mềm, kiến trúc giải pháp, DevOps và bảo mật hệ thống."
    },
    {
      id: "dept-02",
      name: "Nhân sự & Đào tạo",
      code: "HR",
      headName: "Nguyễn Thu Hà",
      headEmail: "thuha.hr@techcorp.vn",
      memberCount: 12,
      activeOnboardingCount: 0,
      description: "Thu hút nhân tài, phát triển văn hóa doanh nghiệp và chế độ phúc lợi."
    },
    {
      id: "dept-03",
      name: "Tiếp thị & Truyền thông",
      code: "MKT",
      headName: "Vũ Phương Linh",
      headEmail: "phuonglinh.vu@techcorp.vn",
      memberCount: 18,
      activeOnboardingCount: 1,
      description: "Xây dựng thương hiệu, tăng trưởng người dùng và truyền thông nội bộ."
    },
    {
      id: "dept-04",
      name: "Kinh doanh & Bán hàng",
      code: "SALES",
      headName: "Trịnh Đình Khang",
      headEmail: "dinhkhang.trinh@techcorp.vn",
      memberCount: 28,
      activeOnboardingCount: 1,
      description: "Mở rộng thị phần khách hàng doanh nghiệp B2B và chăm sóc đối tác."
    },
    {
      id: "dept-05",
      name: "Tài chính & Kế toán",
      code: "FIN",
      headName: "Đặng Mai Loan",
      headEmail: "mailoan.dang@techcorp.vn",
      memberCount: 8,
      activeOnboardingCount: 0,
      description: "Quản trị dòng tiền, báo cáo tài chính kiểm toán và quyết toán thuế."
    }
  ],

  newHires: [
    {
      id: "nh-01",
      userId: "nh-01",
      name: "Trần Minh Anh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      email: "minhanh.tran@techcorp.vn",
      role: "Frontend Developer",
      department: "Công nghệ thông tin (IT)",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      startDate: "2026-09-15",
      probationDays: 60,
      progressPercent: 68,
      completedTasks: 8,
      totalTasks: 12,
      riskStatus: "normal", // 'normal' | 'warning' | 'critical'
      riskReason: "Tiến độ đạt chuẩn, phản hồi 1-on-1 tích cực, hoàn thành xong setup môi trường.",
      lastCheckinDate: "2026-09-28",
      journeyId: "j-01"
    },
    {
      id: "nh-02",
      userId: "nh-02",
      name: "Nguyễn Văn An",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      email: "vanan.nguyen@techcorp.vn",
      role: "Backend Developer Intern",
      department: "Công nghệ thông tin (IT)",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      startDate: "2026-09-10",
      probationDays: 60,
      progressPercent: 33,
      completedTasks: 4,
      totalTasks: 12,
      riskStatus: "critical",
      riskReason: "Sau 23 ngày chỉ đạt 33% tiến độ. Chưa có buổi 1-on-1 trong 14 ngày qua. Gặp khó khăn ở module Docker/K8s.",
      lastCheckinDate: "2026-09-18",
      journeyId: "j-01"
    },
    {
      id: "nh-03",
      userId: "nh-03",
      name: "Phạm Hải Đăng",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
      email: "haidang.pham@techcorp.vn",
      role: "Digital Marketing Specialist",
      department: "Tiếp thị & Truyền thông",
      mentorId: "mt-02",
      mentorName: "Vũ Phương Linh",
      startDate: "2026-09-20",
      probationDays: 60,
      progressPercent: 45,
      completedTasks: 5,
      totalTasks: 11,
      riskStatus: "warning",
      riskReason: "Tiến độ hơi trễ 2 ngày so với mốc Tuần 2 do đợi quyền truy cập tài khoản Google Ads Agency.",
      lastCheckinDate: "2026-09-26",
      journeyId: "j-02"
    },
    {
      id: "nh-04",
      userId: "nh-04",
      name: "Đỗ Thùy Trang",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      email: "thuytrang.do@techcorp.vn",
      role: "Sales B2B Executive",
      department: "Kinh doanh & Bán hàng",
      mentorId: "mt-03",
      mentorName: "Trịnh Đình Khang",
      startDate: "2026-09-01",
      probationDays: 60,
      progressPercent: 92,
      completedTasks: 11,
      totalTasks: 12,
      riskStatus: "normal",
      riskReason: "Xuất sắc vượt tiến độ, đã chốt demo thành công 2 khách hàng tiềm năng đầu tiên.",
      lastCheckinDate: "2026-09-30",
      journeyId: "j-03"
    }
  ],

  journeys: [
    {
      id: "j-01",
      name: "Hành trình Kỹ sư Phần mềm (Frontend/Backend)",
      department: "Công nghệ thông tin (IT)",
      targetRole: "Software Engineer",
      durationDays: 60,
      phasesCount: 4,
      tasksCount: 12,
      description: "Quy trình tích hợp kỹ thuật từ cài đặt môi trường, git flow, kiến trúc dịch vụ đến release sprint đầu tiên.",
      status: "active",
      createdAt: "2026-08-01"
    },
    {
      id: "j-02",
      name: "Hành trình Chuyên viên Digital Marketing",
      department: "Tiếp thị & Truyền thông",
      targetRole: "Marketing Specialist",
      durationDays: 60,
      phasesCount: 4,
      tasksCount: 11,
      description: "Tiếp cận hệ thống thương hiệu công ty, bàn giao công cụ tracking, quy chuẩn chiến dịch quảng cáo.",
      status: "active",
      createdAt: "2026-08-10"
    },
    {
      id: "j-03",
      name: "Hành trình Chuyên viên Kinh doanh Doanh nghiệp (B2B Sales)",
      department: "Kinh doanh & Bán hàng",
      targetRole: "Sales B2B",
      durationDays: 60,
      phasesCount: 4,
      tasksCount: 12,
      description: "Nắm vững danh mục giải pháp SaaS, kịch bản chốt deal, chính sách hoa hồng và hệ thống CRM.",
      status: "active",
      createdAt: "2026-08-15"
    }
  ],

  tasks: [
    // Tasks for nh-01 (Trần Minh Anh)
    {
      id: "tsk-01",
      newHireId: "nh-01",
      title: "Ký kết hợp đồng lao động & Nhận bộ thiết bị làm việc",
      description: "Hoàn tất hồ sơ nhân sự, ký hợp đồng thử việc và nhận laptop Dell Precision cùng thẻ ra vào tòa nhà.",
      phase: "Ngày đầu tiên (Day 1)",
      category: "Hành chính & Nhân sự",
      dueDate: "2026-09-15",
      priority: "urgent",
      status: "completed",
      completedAt: "2026-09-15 11:30",
      note: "Đã nhận máy cấu hình i7 32GB RAM và thẻ nhân viên số 1042.",
      mentorFeedback: "Tốt lắm, đã kiểm tra kết nối mạng văn phòng ổn định."
    },
    {
      id: "tsk-02",
      newHireId: "nh-01",
      title: "Cài đặt môi trường phát triển & Quyền truy cập GitHub Org",
      description: "Clone repo chính, thiết lập Node.js v20, Docker, cấu hình ESLint/Prettier và SSH key.",
      phase: "Ngày đầu tiên (Day 1)",
      category: "Kỹ thuật",
      dueDate: "2026-09-16",
      priority: "high",
      status: "completed",
      completedAt: "2026-09-16 16:45",
      note: "Đã build thành công repo frontend local không lỗi.",
      mentorFeedback: "Setup rất nhanh gọn!"
    },
    {
      id: "tsk-03",
      newHireId: "nh-01",
      title: "Đọc và ký cam kết Bảo mật thông tin (NDA) & Văn hóa ứng xử",
      description: "Đọc tài liệu Quy chuẩn an toàn bảo mật thông tin và nội quy làm việc trên thư viện số.",
      phase: "Ngày đầu tiên (Day 1)",
      category: "Chính sách",
      dueDate: "2026-09-16",
      priority: "medium",
      status: "completed",
      completedAt: "2026-09-16 14:00",
      note: "Đã ký điện tử trên hệ thống DocuSign.",
      mentorFeedback: "HR đã nhận được bản ký."
    },
    {
      id: "tsk-04",
      newHireId: "nh-01",
      title: "Gặp gỡ Mentor & Thiết lập mục tiêu thử việc 60 ngày",
      description: "Trao đổi 1-on-1 với Mentor Lê Hoàng Long, thống nhất tiêu chí đánh giá KPI thử việc.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Mentorship",
      dueDate: "2026-09-18",
      priority: "high",
      status: "completed",
      completedAt: "2026-09-18 10:00",
      note: "Thống nhất KPI: hoàn thành 3 feature trong Q4, viết unit test >80%.",
      mentorFeedback: "Minh Anh nắm bắt rất nhanh, định hướng rõ ràng."
    },
    {
      id: "tsk-05",
      newHireId: "nh-01",
      title: "Tìm hiểu kiến trúc Microservices và Design System công ty",
      description: "Nghiên cứu kho UI Component Figma và quy chuẩn viết CSS/SCSS của team Design.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Kỹ thuật",
      dueDate: "2026-09-20",
      priority: "medium",
      status: "completed",
      completedAt: "2026-09-21 17:00",
      note: "Đã làm quen với bộ token màu sắc và typography.",
      mentorFeedback: "Cần chú ý thêm phần responsive breakpoint trên tablet."
    },
    {
      id: "tsk-06",
      newHireId: "nh-01",
      title: "Hoàn thành bài tập onboarding: Tạo module Filter dữ liệu",
      description: "Thực hiện Pull Request đầu tiên vào nhánh dev để Mentor review phong cách code.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Kỹ thuật",
      dueDate: "2026-09-22",
      priority: "high",
      status: "completed",
      completedAt: "2026-09-22 15:30",
      note: "PR #142 đã được approve và merge vào dev.",
      mentorFeedback: "Clean code, xử lý edge cases tốt."
    },
    {
      id: "tsk-07",
      newHireId: "nh-01",
      title: "Tham gia buổi Demo Sprint & Retrospective cùng phòng ban",
      description: "Làm quen với quy trình Agile/Scrum 2 tuần/sprint và chia sẻ góc nhìn thành viên mới.",
      phase: "Tháng đầu tiên (Month 1)",
      category: "Quy trình",
      dueDate: "2026-09-25",
      priority: "medium",
      status: "completed",
      completedAt: "2026-09-25 17:30",
      note: "Đã hiểu cách quản lý backlog trên Jira.",
      mentorFeedback: "Tương tác tốt với đội ngũ BA và QA."
    },
    {
      id: "tsk-08",
      newHireId: "nh-01",
      title: "Buổi Check-in 1-on-1 định kỳ giữa tháng với Mentor",
      description: "Đánh giá 15 ngày làm việc đầu tiên, tháo gỡ khó khăn về mặt nghiệp vụ dự án.",
      phase: "Tháng đầu tiên (Month 1)",
      category: "Mentorship",
      dueDate: "2026-09-28",
      priority: "high",
      status: "completed",
      completedAt: "2026-09-28 14:00",
      note: "Mentor đã giải thích sâu về luồng thanh toán bảo mật.",
      mentorFeedback: "Tinh thần chủ động, thích ứng nhanh."
    },
    {
      id: "tsk-09",
      newHireId: "nh-01",
      title: "Nhận bàn giao và chịu trách nhiệm độc lập User Story #408",
      description: "Tự viết mã tính năng Quản lý danh mục tài liệu nhân sự có kiểm tra hợp lệ phía client.",
      phase: "Tháng đầu tiên (Month 1)",
      category: "Kỹ thuật",
      dueDate: "2026-10-08",
      priority: "urgent",
      status: "in_progress",
      completedAt: null,
      note: "Đang dựng form modal và xử lý debounce tìm kiếm.",
      mentorFeedback: "Nhớ test kỹ các trường hợp rỗng và lỗi mạng."
    },
    {
      id: "tsk-10",
      newHireId: "nh-01",
      title: "Đạt chứng chỉ nội bộ An toàn thông tin cấp độ 1",
      description: "Hoàn tất bài thi trắc nghiệm 25 câu hỏi về phòng chống phishing và mật khẩu mạnh.",
      phase: "Tháng đầu tiên (Month 1)",
      category: "Đào tạo",
      dueDate: "2026-10-12",
      priority: "medium",
      status: "pending",
      completedAt: null,
      note: "",
      mentorFeedback: ""
    },
    {
      id: "tsk-11",
      newHireId: "nh-01",
      title: "Thuyết trình Báo cáo sơ bộ tiến độ thử việc 30 ngày với HR & Mentor",
      description: "Tổng hợp các kết quả đầu việc đã hoàn thành, tự đánh giá điểm mạnh và mong muốn hỗ trợ.",
      phase: "Tháng thứ hai (Month 2)",
      category: "Đánh giá",
      dueDate: "2026-10-18",
      priority: "high",
      status: "pending",
      completedAt: null,
      note: "",
      mentorFeedback: ""
    },
    {
      id: "tsk-12",
      newHireId: "nh-01",
      title: "Kỳ đánh giá thử việc chính thức (Official Probation Review)",
      description: "Hội đồng HR, Lead và Quản lý phòng ban đánh giá để ký hợp đồng lao động chính thức không thời hạn.",
      phase: "Tháng thứ hai (Month 2)",
      category: "Đánh giá",
      dueDate: "2026-11-14",
      priority: "urgent",
      status: "pending",
      completedAt: null,
      note: "",
      mentorFeedback: ""
    },

    // Tasks for nh-02 (Nguyễn Văn An - At Risk)
    {
      id: "tsk-201",
      newHireId: "nh-02",
      title: "Ký hợp đồng thực tập & Nhận máy bàn giao",
      description: "Nhận laptop công ty và tạo tài khoản nội bộ.",
      phase: "Ngày đầu tiên (Day 1)",
      category: "Hành chính",
      dueDate: "2026-09-10",
      priority: "urgent",
      status: "completed",
      completedAt: "2026-09-10 15:00",
      note: "Đã nhận máy tính để bàn.",
      mentorFeedback: "OK."
    },
    {
      id: "tsk-202",
      newHireId: "nh-02",
      title: "Thiết lập môi trường Docker & cơ sở dữ liệu PostgreSQL",
      description: "Chạy compose cụm database và import dữ liệu schema ban đầu.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Kỹ thuật",
      dueDate: "2026-09-15",
      priority: "high",
      status: "completed",
      completedAt: "2026-09-17 18:00",
      note: "Gặp lỗi xung đột port nhưng đã sửa được.",
      mentorFeedback: "Cần chú ý đọc kỹ tài liệu README trước khi cấu hình."
    },
    {
      id: "tsk-203",
      newHireId: "nh-02",
      title: "Viết API CRUD quản lý danh mục phòng ban",
      description: "Xây dựng RESTful endpoint với Express/NestJS và validation.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Kỹ thuật",
      dueDate: "2026-09-22",
      priority: "high",
      status: "in_progress",
      completedAt: null,
      note: "Đang bị vướng quan hệ one-to-many trong ORM.",
      mentorFeedback: "Quá hạn 11 ngày. Đã nhắc nhở trên Slack nhưng chưa thấy đẩy code mới."
    },
    {
      id: "tsk-204",
      newHireId: "nh-02",
      title: "Buổi Check-in 1-on-1 tuần thứ 2 với Mentor",
      description: "Họp rà soát tiến độ và giải đáp thắc mắc.",
      phase: "Tuần đầu tiên (Week 1)",
      category: "Mentorship",
      dueDate: "2026-09-24",
      priority: "urgent",
      status: "pending",
      completedAt: null,
      note: "Chưa đặt lịch hẹn.",
      mentorFeedback: "Chưa thực hiện được vì vướng lịch trình."
    }
  ],

  checkins: [
    {
      id: "chk-01",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      newHireId: "nh-01",
      newHireName: "Trần Minh Anh",
      department: "Công nghệ thông tin (IT)",
      date: "2026-09-18",
      moraleRating: 5, // 1 - 5
      status: "completed",
      summary: "Buổi gặp mặt tuần đầu tiên: Thảo luận mục tiêu 60 ngày thử việc",
      challenges: "Cần thêm thời gian làm quen với kho component UI nội bộ và quy trình CI/CD.",
      actionItems: "1. Đọc doc Design System trong 2 ngày tới; 2. Tạo PR thử nghiệm tính năng filter; 3. Tham gia daily standup ngày mai.",
      nextDate: "2026-09-28"
    },
    {
      id: "chk-02",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      newHireId: "nh-01",
      newHireName: "Trần Minh Anh",
      department: "Công nghệ thông tin (IT)",
      date: "2026-09-28",
      moraleRating: 5,
      status: "completed",
      summary: "Buổi check-in 15 ngày: Đánh giá PR đầu tiên và giao task độc lập",
      challenges: "Không có vấn đề lớn. Hợp tác ăn ý với Designer và Tech lead.",
      actionItems: "Bắt đầu làm User Story #408 độc lập; chuẩn bị cho kỳ đánh giá giữa kỳ.",
      nextDate: "2026-10-12"
    },
    {
      id: "chk-03",
      mentorId: "mt-01",
      mentorName: "Lê Hoàng Long",
      newHireId: "nh-02",
      newHireName: "Nguyễn Văn An",
      department: "Công nghệ thông tin (IT)",
      date: "2026-09-18",
      moraleRating: 2,
      status: "completed",
      summary: "Buổi check-in tuần 1: Cảnh báo lỗ hổng kiến thức backend cơ bản",
      challenges: "An chưa quen mô hình Async/Await và ORM database, cảm thấy bị ngợp trước quy mô codebase.",
      actionItems: "Cung cấp tài liệu khoá học nội bộ; cặp đôi lập trình (Pair-programming) 1 buổi với Senior.",
      nextDate: "2026-09-25"
    },
    {
      id: "chk-04",
      mentorId: "mt-02",
      mentorName: "Vũ Phương Linh",
      newHireId: "nh-03",
      newHireName: "Phạm Hải Đăng",
      department: "Tiếp thị & Truyền thông",
      date: "2026-09-26",
      moraleRating: 4,
      status: "completed",
      summary: "Check-in tuần 1: Bàn giao tài khoản quảng cáo và hướng dẫn tone & voice",
      challenges: "Chờ phê duyệt bảo mật tài khoản Agency tốn thời gian.",
      actionItems: "Gửi ticket ưu tiên sang đội IT bảo mật; chuẩn bị kịch bản content cho Q4.",
      nextDate: "2026-10-06"
    }
  ],

  documents: [
    {
      id: "doc-01",
      title: "Sổ tay Văn hóa & Chế độ Phúc lợi Nhân sự 2026",
      category: "Chính sách nhân sự",
      department: "Toàn công ty",
      lastUpdated: "2026-09-01",
      downloads: 342,
      fileSize: "2.4 MB",
      format: "PDF",
      tags: ["Chính sách", "Phúc lợi", "Nghỉ phép", "Bảo hiểm"],
      summary: "Tất cả quy định về giờ làm việc (8h30 - 17h30, linh hoạt 30p), 14 ngày phép năm, chế độ làm việc từ xa (WFH 2 ngày/tháng), bảo hiểm sức khỏe VIP Bảo Việt và phụ cấp ăn trưa 1.200.000đ/tháng.",
      content: `### 1. Thời gian làm việc & Linh hoạt
- Giờ làm việc tiêu chuẩn: Từ Thứ 2 đến Thứ 6 (8h30 - 17h30, nghỉ trưa 12h00 - 13h30).
- Chế độ Flexible Hours: Cho phép check-in trong khung giờ 8h00 - 9h00 và về sau 8 tiếng làm việc thực tế.
- Chế độ Làm việc từ xa (WFH): Nhân viên chính thức được đăng ký 2 ngày WFH/tháng với sự đồng ý của Quản lý trực tiếp. Nhân viên thử việc cần tối thiểu 30 ngày onboard trước khi áp dụng WFH.

### 2. Chế độ Nghỉ phép & Nghỉ ốm
- Nhân viên có 14 ngày phép năm có hưởng nguyên lương. Mỗi 3 năm thâm niên được cộng thêm 1 ngày.
- Trong thời gian thử việc 60 ngày: Nếu phát sinh việc khẩn cấp hoặc ốm đau có chỉ định bác sĩ, nhân sự mới được nghỉ tối đa 2 ngày (vẫn được tính trợ cấp thử việc tương ứng).
- Nghỉ hưởng chế độ BHXH: Nghỉ ốm đau, thai sản được thanh toán theo quy định bảo hiểm xã hội hiện hành.

### 3. Phúc lợi & Trợ cấp
- Trợ cấp cơm trưa: 1.200.000 VNĐ/tháng (chuyển thẳng vào tài khoản lương).
- Bảo hiểm sức khỏe VIP: Khám chữa bệnh ngoại trú & nội trú hạn mức 50.000.000 VNĐ/năm tại các bệnh viện quốc tế (Vinmec, FV, Hoàn Mỹ).
- Thưởng hiệu quả kinh doanh (KPI bonus): Xét duyệt định kỳ 6 tháng/lần vào tháng 6 và tháng 12.
- Teambuilding & Du lịch: Chuyến đi hàng năm được công ty đài thọ 100% chi phí.`,
      excerptForAI: "Quy định giờ làm 8h30 - 17h30, linh hoạt 30p. Thử việc được nghỉ ốm tối đa 2 ngày có lương nếu có giấy bác sĩ. Phép năm 14 ngày. Trợ cấp ăn trưa 1.2M/tháng. WFH 2 ngày/tháng sau 30 ngày onboard."
    },
    {
      id: "doc-02",
      title: "Quy chuẩn An toàn Thông tin & Thiết bị Công nghệ (IT Security Policy)",
      category: "Kỹ thuật & Bảo mật",
      department: "Công nghệ thông tin (IT)",
      lastUpdated: "2026-08-15",
      downloads: 215,
      fileSize: "1.8 MB",
      format: "PDF",
      tags: ["Bảo mật", "Mật khẩu", "Thiết bị", "VPN"],
      summary: "Hướng dẫn cài đặt xác thực 2 lớp (2FA), mã hóa ổ đĩa BitLocker/FileVault, kết nối VPN nội bộ khi làm việc từ xa, cấm cắm USB không rõ nguồn gốc.",
      content: `### 1. Quản lý Mật khẩu & Xác thực
- Mọi tài khoản công ty (Email, GitHub, Slack, Jira) bắt buộc bật xác thực 2 yếu tố (2FA qua Google Authenticator hoặc Yubikey).
- Mật khẩu tối thiểu 12 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt. Đổi mật khẩu mỗi 90 ngày.

### 2. Sử dụng Thiết bị Làm việc
- Laptop công ty bàn giao bắt buộc bật mã hóa toàn bộ ổ cứng (BitLocker trên Windows hoặc FileVault trên macOS).
- Tuyệt đối không cài đặt các phần mềm bẻ khóa (crack), ứng dụng chia sẻ file ngang hàng (P2P torrent).
- Luôn khóa màn hình (Win + L hoặc Cmd + Ctrl + Q) khi rời khỏi bàn làm việc quá 2 phút.`,
      excerptForAI: "Bắt buộc 2FA trên mọi tài khoản. Mật khẩu >= 12 ký tự, đổi mỗi 90 ngày. Khóa máy khi rời bàn. Cấm cắm USB lạ hoặc phần mềm không có bản quyền."
    },
    {
      id: "doc-03",
      title: "Quy trình Đánh giá Thử việc & Ký hợp đồng Chính thức",
      category: "Chính sách nhân sự",
      department: "Nhân sự & Đào tạo",
      lastUpdated: "2026-07-20",
      downloads: 180,
      fileSize: "1.1 MB",
      format: "DOCX",
      tags: ["Thử việc", "Đánh giá", "Hợp đồng", "KPI"],
      summary: "Chi tiết các mốc đánh giá: Mốc 15 ngày (định hướng), Mốc 30 ngày (giữa kỳ), Mốc 50 ngày (hội đồng đánh giá chính thức). Mẫu tự đánh giá năng lực.",
      content: `### Quy trình đánh giá gồm 3 giai đoạn:
1. Giai đoạn 1 (Ngày thứ 15): Mentor đánh giá mức độ thích ứng, tinh thần học hỏi và kỹ năng giao tiếp.
2. Giai đoạn 2 (Ngày thứ 30): Buổi 1-on-1 giữa Nhân sự mới, Mentor và đại diện HR để rà soát tiến độ hoàn thành checklist.
3. Giai đoạn 3 (Ngày thứ 50 - 55): Nhân sự mới nộp Báo cáo thử việc. Hội đồng gồm Trưởng bộ phận, Mentor và Giám đốc Nhân sự chấm điểm theo thang điểm 100. Đạt từ 75/100 trở lên sẽ được đề xuất ký HĐLĐ chính thức.`,
      excerptForAI: "Thời gian thử việc 60 ngày. Đánh giá ở ngày 15, ngày 30 và chính thức ở ngày 50. Điểm đạt >= 75/100 để ký Hợp đồng lao động chính thức."
    },
    {
      id: "doc-04",
      title: "Cẩm nang Kỹ thuật: Git Flow & Release Checklist",
      category: "Kỹ thuật & Bảo mật",
      department: "Công nghệ thông tin (IT)",
      lastUpdated: "2026-08-30",
      downloads: 410,
      fileSize: "3.2 MB",
      format: "PDF",
      tags: ["Git", "CI/CD", "Coding Standard", "Review"],
      summary: "Quy tắc đặt tên nhánh (feature/*, bugfix/*), chuẩn commit message theo Conventional Commits, quy định bắt buộc ít nhất 1 Senior approve trước khi merge PR.",
      content: `### 1. Quy tắc đặt tên nhánh:
- Tính năng mới: feature/<ticket-id>-<short-description>
- Sửa lỗi: fix/<ticket-id>-<short-description>
- Tối ưu mã: refactor/<short-description>

### 2. Quy tắc Commit:
- feat: thêm tính năng mới
- fix: sửa lỗi
- docs: cập nhật tài liệu
- style: định dạng code không ảnh hưởng logic
- test: thêm unit test

### 3. Tiêu chí Merge Pull Request (PR):
- Pipeline kiểm tra tự động (CI) pass 100% (lint, test, build).
- Tối thiểu 1 Senior Engineer hoặc Tech Lead review và approve.
- Không có xung đột (merge conflicts) với nhánh dev/main.`,
      excerptForAI: "Quy tắc Git: feature/*, fix/*. Chuẩn Conventional Commits (feat, fix, docs). Cần ít nhất 1 Senior approve và pass CI 100% trước khi merge."
    }
  ],

  notifications: [
    {
      id: "notif-01",
      userId: "nh-01",
      title: "Lời nhắc Check-in",
      message: "Bạn có lịch hẹn Check-in 1-on-1 với Mentor Lê Hoàng Long vào ngày 12/10/2026.",
      time: "10 phút trước",
      read: false,
      type: "checkin"
    },
    {
      id: "notif-02",
      userId: "nh-01",
      title: "Nhiệm vụ mới",
      message: "Mentor đã cập nhật yêu cầu cho nhiệm vụ: 'User Story #408'.",
      time: "2 giờ trước",
      read: false,
      type: "task"
    },
    {
      id: "notif-03",
      userId: "nh-01",
      title: "AI Trợ lý Gợi ý",
      message: "AI phát hiện bạn đã hoàn thành 68% checklist! Tiếp tục duy trì phong độ nhé.",
      time: "Hôm qua",
      read: true,
      type: "ai"
    }
  ],

  systemSettings: {
    companyName: "TechCorp Vietnam Technology Group",
    systemName: "OnboardAI Enterprise Platform",
    defaultProbationDays: 60,
    checkinWarningThresholdDays: 7,
    riskThresholdPercent: 50,
    enableAiSuggestions: true,
    aiModelSelected: "Gemini 1.5 Pro / GPT-4o Mini (Mô phỏng Frontend)",
    aiTemperature: 0.3,
    autoAssignBuddy: true,
    emailNotificationEnabled: true,
    lastBackupDate: "2026-10-01 02:00:00"
  }
};

