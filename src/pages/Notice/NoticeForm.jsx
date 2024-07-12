import "./NoticeForm.css";

const notices = [
  {
    date: "2024-07-09",
    category: "시스템점검",
    title: "7월 13일(토) 0시 ~ 24시 서비스 정기점검 안내",
  },
  {
    date: "2024-06-13",
    category: "시스템점검",
    title: "중앙 공약간 대중교통 합승 적립금 환급 지원 안내",
  },
  {
    date: "2024-05-01",
    category: "시스템점검",
    title: "유사 어플리케이션에 다운로드 주의 안내",
  },
  {
    date: "2024-04-30",
    category: "시스템점검",
    title: "K-패스 신규 카드 발급 및 지원 안내",
  },
  {
    date: "2024-04-29",
    category: "시스템점검",
    title: "만근공무원 마일리지 지급 안내(24.04 적립금)",
  },
];

const NoticeForm = () => {
  return (
    <div className="notice-board">
      <div className="notice-name"> 공지사항 </div>
      <div className="wrapper">
        <input type="text" placeholder="검색어 입력" className="search-input" />
        <div className="categories">
          <button className="category-btn">전체</button>
          <button className="category-btn">공지사항</button>
          <button className="category-btn">이벤트</button>
          <button className="category-btn1">시스템점검</button>
          <button className="category-btn">기타</button>
        </div>
        <div className="notices-form">
          <div className="notices">
            {notices.map((notice, index) => (
              <div className="notice" key={index}>
                <span className="notice-category">{notice.category}</span>
                <span className="notice-date">{notice.date}</span>
                <div className="notice-title">{notice.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
