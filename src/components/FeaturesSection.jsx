import React from "react";
import { Button } from "@nextui-org/react";

const FeaturesSection = () => {
  const features = [
    {
      title: "主打功能 1",
      description: "主打功能 1 說明",
      time: "2 hours ago",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "主打功能 2",
      description: "主打功能 2 說明",
      time: "5 hours ago",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "主打功能 3",
      description: "主打功能 3 說明",
      time: "8 hours ago",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-6 bg-sky-50">
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 pb-2 border-b-2 border-gray-300 inline-block">
          特色功能
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, time, image }) => (
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    {/* Feature Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />

    {/* Text Content */}
    <h3 className="text-lg font-semibold text-gray-800 font-montserrat text-center">
      {title}
    </h3>
    <p className="text-sm text-gray-600 mt-2 font-montserrat leading-relaxed text-center">
      {description}
    </p>
    <div className="text-xs text-gray-400 mt-3 font-montserrat text-center">
      {time}
    </div>

    {/* Read More Button */}
    <div className="mt-4">
      <Button
        auto
        flat
        className="bg-blue-400 hover:bg-blue-700 text-white font-montserrat"
        onPress={() => {
          alert(`Redirecting to more details for "${title}"`);
        }}
      >
        查看更多
      </Button>
    </div>
  </div>
);

export default FeaturesSection;