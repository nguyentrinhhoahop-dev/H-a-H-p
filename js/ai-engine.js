/**
 * OnboardAI - AI Engine Simulation
 * Mô phỏng 3 tính năng AI cốt lõi:
 * AI-1: Policy Q&A with Citations (Hỏi đáp chính sách có trích dẫn)
 * AI-2: Checklist Personalizer (Tạo lộ trình thích ứng theo vai trò)
 * AI-3: Progress Risk Detector (Phân tích rủi ro trễ hạn & đề xuất can thiệp)
 */

const AIEngine = {
  // Trạng thái cấu hình
  config: {
    latencyMs: 900,
    simulateTyping: true,
    forceFailureMode: false
  },

  // -------------------------------------------------------------
  // AI-1: POLICY Q&A (Hỏi đáp chính sách & Quy định công ty)
  // -------------------------------------------------------------
  async askPolicy(question, options = {}) {
    const startTime = Date.now();

    // 1. Kiểm tra hợp lệ đầu vào
    if (!question || question.trim().length < 3) {
      throw new Error("Vui lòng nhập câu hỏi rõ ràng (tối thiểu 3 ký tự).");
    }

    // Mô phỏng độ trễ suy luận AI
    await new Promise(r => setTimeout(r, this.config.latencyMs));

    // Kiểm tra chế độ kiểm thử lỗi thất bại (yêu cầu mục "Trải nghiệm khi AI thất bại")
    if (this.config.forceFailureMode || options.forceError) {
      return {
        status: "uncertain",
        confidence: 0.28,
        question: question,
        answer: "AI chưa tìm thấy đủ dữ liệu trong cơ sở tri thức hiện tại để trả lời câu hỏi này một cách chắc chắn.",
        explanation: "Các tài liệu nội bộ hiện tại không chứa từ khóa tương ứng hoặc chính sách này thuộc thẩm quyền giải quyết riêng của Ban Giám Đốc.",
        citations: [],
        suggestions: [
          "Liên hệ trực tiếp HR qua email thuha.hr@techcorp.vn",
          "Kiểm tra lại từ khóa tìm kiếm (ví dụ: 'nghỉ phép', 'bảo hiểm', 'WFH')",
          "Tạo yêu cầu HR bổ sung tài liệu mới vào Thư viện số"
        ],
        fallbackActions: ["retry", "report", "contact_hr"]
      };
    }

    const q = question.toLowerCase();
    const docs = StorageManager.getDocuments();

    // Tìm kiếm thông minh theo bộ từ khóa tri thức
    let matchedDoc = null;
    let answerText = "";
    let citationDetail = "";
    let confidence = 0.94;

    if (q.includes("nghỉ") || q.includes("phép") || q.includes("ốm") || q.includes("bệnh")) {
      matchedDoc = docs.find(d => d.id === "doc-01") || docs[0];
      answerText = `Theo Sổ tay nhân sự 2026, trong thời gian **thử việc 60 ngày**, bạn được phép nghỉ ốm tối đa **2 ngày** vẫn được hưởng nguyên trợ cấp thử việc nếu có giấy chứng nhận y tế từ bệnh viện. 
Khi trở thành nhân viên chính thức, bạn sẽ có **14 ngày phép năm** nguyên lương và mỗi 3 năm làm việc được cộng thêm 1 ngày.`;
      citationDetail = "Trích từ: Sổ tay Văn hóa & Chế độ Phúc lợi 2026 (Điều 2: Chế độ Nghỉ phép & Nghỉ ốm).";
    } else if (q.includes("wfh") || q.includes("từ xa") || q.includes("ở nhà") || q.includes("giờ làm")) {
      matchedDoc = docs.find(d => d.id === "doc-01") || docs[0];
      answerText = `Giờ làm việc tiêu chuẩn là từ **8h30 đến 17h30** (linh hoạt check-in từ 8h00 - 9h00). 
Về chính sách WFH: Nhân sự mới cần hoàn thành tối thiểu **30 ngày đầu tiên** của hành trình hội nhập trước khi được đăng ký làm việc từ xa tối đa **2 ngày/tháng** (cần Mentor và Trưởng phòng phê duyệt).`;
      citationDetail = "Trích từ: Sổ tay Văn hóa & Chế độ Phúc lợi 2026 (Điều 1: Thời gian làm việc & Linh hoạt).";
    } else if (q.includes("bảo hiểm") || q.includes("lương") || q.includes("phúc lợi") || q.includes("ăn trưa")) {
      matchedDoc = docs.find(d => d.id === "doc-01") || docs[0];
      answerText = `Công ty chi trả phụ cấp ăn trưa **1.200.000 VNĐ/tháng** chuyển thẳng vào tài khoản cùng kỳ lương.
Ngoài bảo hiểm y tế bắt buộc, bạn được cấp gói **Bảo hiểm sức khỏe VIP Bảo Việt** với hạn mức ngoại trú & nội trú lên đến 50.000.000 VNĐ/năm tại Vinmec, FV, Hoàn Mỹ ngay từ ngày ký hợp đồng chính thức.`;
      citationDetail = "Trích từ: Sổ tay Văn hóa & Chế độ Phúc lợi 2026 (Điều 3: Phúc lợi & Trợ cấp).";
    } else if (q.includes("mật khẩu") || q.includes("bảo mật") || q.includes("thiết bị") || q.includes("laptop") || q.includes("vpn")) {
      matchedDoc = docs.find(d => d.id === "doc-02") || docs[1];
      answerText = `Mọi tài khoản nội bộ bắt buộc phải kích hoạt xác thực 2 yếu tố (**2FA**) qua Google Authenticator.
Mật khẩu phải dài tối thiểu **12 ký tự** và được thay đổi mỗi 90 ngày. Laptop công ty phải kích hoạt mã hóa BitLocker/FileVault và luôn nhấn tổ hợp phím **Win + L** khóa máy khi rời bàn làm việc.`;
      citationDetail = "Trích từ: Quy chuẩn An toàn Thông tin & Thiết bị Công nghệ (Điều 1 & Điều 2).";
    } else if (q.includes("đánh giá") || q.includes("thử việc") || q.includes("hợp đồng") || q.includes("kpi")) {
      matchedDoc = docs.find(d => d.id === "doc-03") || docs[2];
      answerText = `Quy trình đánh giá thử việc 60 ngày gồm 3 mốc:
- **Mốc 15 ngày:** Mentor đánh giá độ hòa nhập và kỹ năng thích ứng.
- **Mốc 30 ngày:** Buổi 1-on-1 ba bên giữa Bạn, Mentor và HR People Ops.
- **Mốc 50 - 55 ngày:** Nộp báo cáo thử việc. Hội đồng đánh giá chấm điểm theo thang 100. Điểm đạt từ **75/100 trở lên** sẽ được ký hợp đồng chính thức không xác định thời hạn.`;
      citationDetail = "Trích từ: Quy trình Đánh giá Thử việc & Ký hợp đồng Chính thức (Mục 2 & 3).";
    } else if (q.includes("git") || q.includes("pull request") || q.includes("pr") || q.includes("commit") || q.includes("code")) {
      matchedDoc = docs.find(d => d.id === "doc-04") || docs[3];
      answerText = `Quy chuẩn Git Flow quy định nhánh tính năng đặt tên là \`feature/<ticket-id>-<mô-tả>\`.
Quy chuẩn commit theo Conventional Commits (\`feat:\`, \`fix:\`, \`docs:\`, \`refactor:\`). Mọi Pull Request bắt buộc phải qua pipeline CI 100% pass và có ít nhất **1 Senior Engineer hoặc Tech Lead** duyệt trước khi merge.`;
      citationDetail = "Trích từ: Cẩm nang Kỹ thuật: Git Flow & Release Checklist (Phần 1 & 2).";
    } else {
      confidence = 0.72;
      matchedDoc = docs[0];
      answerText = `Dựa trên tài liệu chung của TechCorp: Các quy tắc làm việc, văn hóa hòa nhập và hướng dẫn công việc đều được ban hành trên cổng thông tin nội bộ. 
Để được hướng dẫn cụ thể về trường hợp này, bạn có thể trao đổi trực tiếp với Mentor hoặc đăng ký buổi 1-on-1 trong tuần.`;
      citationDetail = "Trích từ: Tổng hợp tài liệu hướng dẫn nhân sự TechCorp.";
    }

    return {
      status: "success",
      confidence: confidence,
      question: question,
      answer: answerText,
      explanation: `Hệ thống AI đã quét qua 4 tài liệu chính sách nội bộ được số hóa và trích xuất đoạn phù hợp nhất với ngữ nghĩa câu hỏi '${question}'.`,
      citations: [
        {
          documentId: matchedDoc.id,
          documentTitle: matchedDoc.title,
          excerpt: matchedDoc.excerptForAI || matchedDoc.summary,
          citationDetail: citationDetail
        }
      ],
      suggestedNextQuestions: [
        "Chính sách bảo hiểm sức khỏe VIP chi trả những viện nào?",
        "Mốc 30 ngày thử việc cần chuẩn bị tài liệu gì?",
        "Quy định cấp phát thiết bị và màn hình phụ ra sao?"
      ]
    };
  },

  // -------------------------------------------------------------
  // AI-2: CHECKLIST PERSONALIZER (Cá nhân hóa lộ trình thích ứng)
  // -------------------------------------------------------------
  async generatePersonalizedChecklist(params) {
    const { department, roleTitle, seniority, focusAreas = [] } = params;

    if (!roleTitle || !department) {
      throw new Error("Vui lòng chọn phòng ban và vị trí chuyên môn để AI tạo lộ trình.");
    }

    await new Promise(r => setTimeout(r, this.config.latencyMs + 300));

    // Tạo các đầu việc tùy biến theo cấp bậc và vị trí
    const isTech = department.includes("Công nghệ") || roleTitle.toLowerCase().includes("developer") || roleTitle.toLowerCase().includes("kỹ sư");
    const isMarketing = department.includes("Tiếp thị") || roleTitle.toLowerCase().includes("marketing");
    const isSales = department.includes("Kinh doanh") || roleTitle.toLowerCase().includes("sales");

    let generatedTasks = [];

    // Giai đoạn 1: Ngày đầu tiên
    generatedTasks.push({
      phase: "Ngày đầu tiên (Day 1)",
      title: `Nhận bàn giao thiết bị & Hoàn tất hồ sơ nhân sự (${seniority})`,
      category: "Hành chính",
      priority: "urgent",
      duration: "Ngày 1",
      reason: "Bắt buộc cho mọi nhân sự mới để có đủ tài nguyên pháp lý và công cụ làm việc."
    });

    if (isTech) {
      generatedTasks.push({
        phase: "Ngày đầu tiên (Day 1)",
        title: "Clone Git repository, cài đặt Docker container & phân quyền AWS IAM",
        category: "Kỹ thuật",
        priority: "high",
        duration: "Ngày 1 - Ngày 2",
        reason: "Giúp lập trình viên nhanh chóng dựng được môi trường chạy thử cục bộ mà không gặp xung đột."
      });
    } else if (isMarketing) {
      generatedTasks.push({
        phase: "Ngày đầu tiên (Day 1)",
        title: "Bàn giao quyền quản trị Meta Business Suite, Google Analytics 4 & HubSpot CRM",
        category: "Công cụ",
        priority: "high",
        duration: "Ngày 1",
        reason: "Cung cấp nền tảng truy cập hệ thống phân tích dữ liệu tiếp thị."
      });
    } else {
      generatedTasks.push({
        phase: "Ngày đầu tiên (Day 1)",
        title: "Kích hoạt tài khoản CRM Salesforce & nghiên cứu danh mục gói sản phẩm B2B",
        category: "Công cụ",
        priority: "high",
        duration: "Ngày 1",
        reason: "Làm quen với kho dữ liệu khách hàng tiềm năng và bảng báo giá dịch vụ."
      });
    }

    // Giai đoạn 2: Tuần đầu tiên
    generatedTasks.push({
      phase: "Tuần đầu tiên (Week 1)",
      title: `Buổi 1-on-1 định hướng KPI thử việc với Mentor phòng ${department}`,
      category: "Mentorship",
      priority: "urgent",
      duration: "Ngày 3",
      reason: "Thống nhất kỳ vọng đầu ra rõ ràng và các chỉ số đo lường hiệu suất."
    });

    if (seniority === "Senior" || seniority === "Lead") {
      generatedTasks.push({
        phase: "Tuần đầu tiên (Week 1)",
        title: "Đánh giá hiện trạng kiến trúc hệ thống / Chiến lược quý và đề xuất cải tiến",
        category: "Chiến lược",
        priority: "high",
        duration: "Ngày 5 - Ngày 7",
        reason: "Cấp bậc Senior cần tiếp cận tổng quan cấp cao để đưa ra góc nhìn tối ưu sớm."
      });
    } else {
      generatedTasks.push({
        phase: "Tuần đầu tiên (Week 1)",
        title: "Hoàn thành bài tập mẫu (Starter Project) và thực hiện Pull Request đầu tiên",
        category: "Thực hành",
        priority: "medium",
        duration: "Ngày 4 - Ngày 6",
        reason: "Cọ xát thực tế với quy trình phê duyệt công việc của đồng đội."
      });
    }

    // Giai đoạn 3: Tháng đầu tiên
    generatedTasks.push({
      phase: "Tháng đầu tiên (Month 1)",
      title: `Độc lập phụ trách 01 mục tiêu trọng tâm sprint cho vị trí ${roleTitle}`,
      category: "Chuyên môn",
      priority: "high",
      duration: "Tuần 3 - Tuần 4",
      reason: "Kiểm tra năng lực giải quyết vấn đề độc lập của nhân sự mới."
    });

    generatedTasks.push({
      phase: "Tháng đầu tiên (Month 1)",
      title: "Buổi Check-in đánh giá tiến độ 30 ngày (Mid-probation Review)",
      category: "Đánh giá",
      priority: "high",
      duration: "Ngày 30",
      reason: "Cột mốc quan trọng để kịp thời can thiệp hoặc điều chỉnh khối lượng công việc."
    });

    // Giai đoạn 4: Tháng thứ hai
    generatedTasks.push({
      phase: "Tháng thứ hai (Month 2)",
      title: "Chia sẻ nội bộ 01 buổi Tech Sharing / Best Practices cho các thành viên mới",
      category: "Văn hóa",
      priority: "medium",
      duration: "Tuần 6",
      reason: "Gắn kết văn hóa chia sẻ tri thức và củng cố năng lực diễn đạt trước tập thể."
    });

    generatedTasks.push({
      phase: "Tháng thứ hai (Month 2)",
      title: "Báo cáo tổng kết 60 ngày thử việc & Phỏng vấn chuyển chính thức",
      category: "Đánh giá",
      priority: "urgent",
      duration: "Ngày 50 - 55",
      reason: "Quyết định phê duyệt ký kết Hợp đồng Lao động dài hạn."
    });

    return {
      status: "success",
      metadata: {
        department,
        roleTitle,
        seniority,
        tasksCount: generatedTasks.length,
        generatedAt: new Date().toLocaleString("vi-VN")
      },
      explanation: `Lộ trình này được AI thiết kế tối ưu riêng cho cấp bậc **${seniority}** thuộc bộ phận **${department}**. Với cấp bậc này, AI chú trọng giảm thiểu các đầu việc lý thuyết vụn vặt, tập trung đẩy nhanh mốc đóng góp thực tế vào dự án từ tuần thứ 2.`,
      tasks: generatedTasks
    };
  },

  // -------------------------------------------------------------
  // AI-3: PROGRESS RISK DETECTOR (Cảnh báo rủi ro tiến độ hội nhập)
  // -------------------------------------------------------------
  async analyzeProgressRisk(newHiresList = null) {
    await new Promise(r => setTimeout(r, this.config.latencyMs));

    const hires = newHiresList || StorageManager.getNewHires();
    const tasks = StorageManager.getTasks();
    const checkins = StorageManager.getCheckins();

    const analysisResults = hires.map(nh => {
      const nhTasks = tasks.filter(t => t.newHireId === nh.id || t.newHireId === nh.userId);
      const completedCount = nhTasks.filter(t => t.status === "completed").length;
      const totalCount = nhTasks.length || 1;
      const progress = Math.round((completedCount / totalCount) * 100);

      // Tính số ngày đã trôi qua kể từ ngày bắt đầu
      const start = new Date(nh.startDate);
      const now = new Date();
      const diffTime = Math.abs(now - start);
      const daysElapsed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const expectedProgress = Math.min(100, Math.round((daysElapsed / nh.probationDays) * 100));

      // Tính ngày check-in gần nhất
      const nhCheckins = checkins.filter(c => c.newHireId === nh.id || c.newHireId === nh.userId);
      let daysSinceLastCheckin = 999;
      if (nhCheckins.length > 0) {
        const sorted = [...nhCheckins].sort((a, b) => new Date(b.date) - new Date(a.date));
        const lastDate = new Date(sorted[0].date);
        daysSinceLastCheckin = Math.ceil(Math.abs(now - lastDate) / (1000 * 60 * 60 * 24));
      }

      // Đánh giá nguy cơ
      let riskLevel = "low";
      let riskScore = 15;
      let reasons = [];
      let recommendations = [];

      if (progress < expectedProgress - 25 || progress < 40) {
        riskLevel = "high";
        riskScore = 85;
        reasons.push(`Tiến độ thực tế (${progress}%) tụt hậu đáng kể so với kỳ vọng thời gian (${expectedProgress}% sau ${daysElapsed} ngày).`);
      } else if (progress < expectedProgress - 10) {
        riskLevel = "medium";
        riskScore = 55;
        reasons.push(`Tiến độ chậm hơn 1-2 nhiệm vụ so với kế hoạch ban đầu.`);
      }

      if (daysSinceLastCheckin > 10) {
        if (riskLevel === "low") riskLevel = "medium";
        riskScore += 20;
        reasons.push(`Đã ${daysSinceLastCheckin} ngày không có buổi gặp gỡ Check-in 1-on-1 với Mentor.`);
      }

      // Đề xuất hành động thông minh
      if (riskLevel === "high") {
        recommendations.push({
          actionId: "urgent_checkin",
          label: "Lên lịch 1-on-1 khẩn cấp trong 48h",
          icon: "calendar-alert",
          priority: "urgent"
        });
        recommendations.push({
          actionId: "buddy_assign",
          label: "Bổ sung Buddy hỗ trợ kỹ thuật chuyên sâu",
          icon: "user-plus",
          priority: "high"
        });
        recommendations.push({
          actionId: "extend_milestone",
          label: "Gia hạn mốc đánh giá sprint thêm 7 ngày",
          icon: "clock",
          priority: "medium"
        });
      } else if (riskLevel === "medium") {
        recommendations.push({
          actionId: "send_reminder",
          label: "Gửi thông báo nhắc Mentor cập nhật phản hồi",
          icon: "bell",
          priority: "medium"
        });
        recommendations.push({
          actionId: "check_blocker",
          label: "Khảo sát nhanh các trở ngại về quyền truy cập/công cụ",
          icon: "help-circle",
          priority: "low"
        });
      } else {
        recommendations.push({
          actionId: "praise",
          label: "Ghi nhận khen ngợi biểu dương đúng tiến độ",
          icon: "award",
          priority: "low"
        });
      }

      return {
        newHireId: nh.id,
        name: nh.name,
        avatar: nh.avatar,
        role: nh.role,
        department: nh.department,
        mentorName: nh.mentorName,
        daysElapsed,
        progress,
        expectedProgress,
        daysSinceLastCheckin,
        riskLevel, // 'high' | 'medium' | 'low'
        riskScore: Math.min(99, riskScore),
        reasons,
        recommendations
      };
    });

    const highRisks = analysisResults.filter(r => r.riskLevel === "high");
    const mediumRisks = analysisResults.filter(r => r.riskLevel === "medium");

    return {
      status: "success",
      totalScanned: analysisResults.length,
      highRiskCount: highRisks.length,
      mediumRiskCount: mediumRisks.length,
      normalCount: analysisResults.length - highRisks.length - mediumRisks.length,
      summaryExplanation: `AI đã phân tích dữ liệu ma trận chéo giữa: thời gian gia nhập, tỷ lệ hoàn thành checklist, tần suất tương tác 1-on-1 và phản hồi khó khăn. Phát hiện **${highRisks.length} nhân sự** có nguy cơ chậm tiến độ cần HR/Mentor can thiệp sớm.`,
      results: analysisResults
    };
  }
};

