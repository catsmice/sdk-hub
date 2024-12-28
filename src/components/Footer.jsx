import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fafafb] border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Top Row: Logo + Subscribe */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 border-2 border-[#29c3e5] rounded flex items-center justify-center overflow-hidden">
              <span className="text-xs text-gray-400">Icon</span>
            </div>
            <div className="text-3xl font-bold font-poppins text-gray-800">
              Logo
            </div>
          </div>

          
        </div>

        {/* Middle Row: Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
          <FooterColumn title="Product" links={["Features", "Pricing"]} />
          <FooterColumn
            title="Resources"
            links={["Blog", "User guides", "Webinars"]}
          />
          <FooterColumn title="Company" links={["About us", "Contact us"]} />
          <FooterColumn
            title="Plans & Pricing"
            links={["Personal", "Start up", "Organization"]}
          />
        </div>

        {/* Bottom Row: Copyright + Language + Social */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mt-8">
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </div>

          <div className="flex items-center space-x-4">
            

            {/* Social Icons */}
            <div className="flex space-x-2">
              <SocialIcon label="F" />
              <SocialIcon label="T" />
              <SocialIcon label="L" />
              <SocialIcon label="Y" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold font-poppins text-gray-800 mb-2">
      {title}
    </h4>
    <ul className="space-y-1 text-sm text-gray-700 font-montserrat">
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ label }) => (
  <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
    {label}
  </div>
);

export default Footer;