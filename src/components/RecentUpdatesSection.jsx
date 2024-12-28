import React from "react";

const RecentUpdatesSection = () => {
  const updates = [
    {
      title: "新版 SDK 上線",
      description: "我們全面更新了 SDK 的功能，趕快下載!",
      time: "2 hours ago",
    },
    {
      title: "更新素材支援",
      description:
        "新增 320x50 以及 300x250 橫幅素材支援，詳細請見 SDK 文件",
      time: "5 hours ago",
    },
    {
      title: "緊急更新",
      description:
        "修正安全性問題，請即刻下載更新。關於修正內容詳見更新內容",
      time: "8 hours ago",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-6 bg-gray-50">
      {/* Optional subtle border or accent for section title */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl text-gray-900 font-semibold border-b-2 border-gray-200 inline-block pb-2">
          近期更新
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {updates.map((update, index) => (
          <UpdateCard key={index} {...update} />
        ))}
      </div>
    </section>
  );
};

const UpdateCard = ({ title, description, time }) => (
  <div className="bg-[#f7fafc] p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-base font-semibold text-gray-800 font-montserrat">
      {title}
    </h3>
    <p className="text-sm text-gray-700 mt-3 font-montserrat leading-relaxed">
      {description}
    </p>
    <div className="text-xs text-gray-500 mt-3 font-montserrat">{time}</div>
    {/* Optional "Read more" link */}
    <div className="mt-3">
      <a
        href="#"
        className="text-xs font-montserrat text-blue-600 hover:text-blue-800"
      >
        查看詳情
      </a>
    </div>
  </div>
);

export default RecentUpdatesSection;