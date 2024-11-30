import React from 'react';

const MobileApp = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className="text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}

      >
        <h1 className="text-4xl font-bold">Mobile App Development</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 text-gray-700">

        {/* Introduction */}
        <p className="text-lg mb-6">
          At TekProwess LLP, we specialize in creating innovative, user-friendly, and scalable mobile applications for both iOS and Android. Our team leverages the latest technologies to develop apps that are secure, reliable, and engaging, offering seamless experiences across devices.
        </p>

        {/* User-Centered Design */}
        <p className="mb-6">
          We focus on user-centered design to ensure intuitive interfaces, and our apps are built to scale as your business grows. Whether it's for e-commerce, enterprise solutions, or simple tools, we provide custom solutions tailored to your needs.
        </p>

        {/* Key Features */}
        <h2 className="text-2xl font-semibold  mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Innovation:</strong> Cutting-edge features that engage users and differentiate your business.
          </li>
          <li>
            <strong>Scalability:</strong> Apps built to grow with your business.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Consistent performance on both Android and iOS.
          </li>
          <li>
            <strong>Security:</strong> Robust security measures to protect user data.
          </li>
          <li>
            <strong>On-Time Delivery:</strong> High-quality apps delivered within deadlines.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileApp;
