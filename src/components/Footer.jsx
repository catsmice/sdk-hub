import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f2937] border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Centered Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FooterColumn
            title="關於我們"
            links={[
              { label: "About Us 關於我們", url: "https://example.com/about" },
              { label: "AdTech 廣告科技", url: "https://example.com/adtech" },
              { label: "HybridData 數據核心", url: "https://example.com/hybriddata" },
              { label: "公司簡介", url: "https://example.com/company" },
            ]}
          />
          <FooterColumn
            title="新知新訊"
            links={[
              { label: "最新消息", url: "https://example.com/news" },
              { label: "技術專欄", url: "https://example.com/blog" },
            ]}
          />
          <FooterColumn
            title="技術產品"
            links={[
              { label: "Holmes 廣告系統", url: "https://example.com/holmes" },
              { label: "MultiForce 聯播網", url: "https://example.com/multiforce" },
              { label: "HybridData 混血數據", url: "https://example.com/hybriddata" },
            ]}
          />
          <FooterColumn
            title="商業合作"
            links={[
              { label: "經銷商合作", url: "https://example.com/dealer" },
              { label: "網站主合作", url: "https://example.com/webmaster" },
              { label: "數據合作", url: "https://example.com/data-partnership" },
              { label: "雲端技術合作", url: "https://example.com/cloud" },
            ]}
          />
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center mt-8">
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            © 2025 Powered by CLICKFORCE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold font-poppins text-white mb-4">
      {title}
    </h4>
    <ul className="space-y-2 text-sm font-montserrat">
      {links.map(({ label, url }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;