import React from "react";
import {
  Button,
} from "@nextui-org/react";

const SDKDownloadSection = () => {
  return (
    <section className="downloadbg max-w-screen-xl mx-auto py-12 px-6 flex flex-col items-center text-center bg-[#e5fcff]">
      <h2 className="text-3xl text-gray-900 mb-6">Quick SDK Downloads</h2>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <DownloadButton color="bg-blue-500" label="下載 iOS SDK v4.0.1" fileUrl="https://example.com/path/to/sdk1.zip" />
        <DownloadButton color="bg-emerald-500" label="下載 tvOS SDK v4.1.0" fileUrl="https://example.com/path/to/sdk2.zip" />
        <DownloadButton color="bg-rose-500" label="下載 Android SDK v4.2.3" fileUrl="https://example.com/path/to/sdk3.zip" />
      </div>
    </section>
  );
};

const DownloadButton = ({ color, label, fileUrl }) => {
  const handleDownload = () => {
    // Programmatically create a hidden anchor to trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", ""); // or set a filename: link.download = "SDK.zip";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Button
      className={`${color} text-white px-6 py-3 rounded-md`}
      onPress={handleDownload}
    >
      {label}
    </Button>
  );
};

export default SDKDownloadSection;