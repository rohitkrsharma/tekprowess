import React from 'react';

const mobileAppData = [
  {
    title: 'Cross-Platform Development',
    description: 'We build mobile applications that perform seamlessly on both iOS and Android platforms, ensuring a consistent user experience across devices. Our cross-platform development approach maximizes reach while minimizing development costs.',
    image: '../Images/cross-platform.jpg'
  },
  {
    title: 'User-Centered Design',
    description: 'Our team prioritizes user experience by creating intuitive and easy-to-navigate designs. We focus on making mobile apps that are not only functional but also delightful to use, ensuring higher user engagement and satisfaction.',
    image: '../Images/user-centered-design.jpg'
  },
  {
    title: 'Scalability & Performance',
    description: 'We develop scalable mobile applications capable of handling growing user bases and increasing demands. Our apps are optimized for performance to provide fast, responsive experiences, even under heavy loads.',
    image: '../Images/scalability-performance.jpg'
  },
  {
    title: 'Security & Privacy',
    description: 'Mobile app security is a top priority. We integrate industry-leading security measures to protect user data and ensure safe transactions, keeping your app protected from potential vulnerabilities and threats.',
    image: '../Images/security-privacy.jpg'
  },
  {
    title: 'App Maintenance & Support',
    description: 'We provide ongoing support and maintenance to ensure your mobile app remains up-to-date with the latest features, security patches, and performance improvements, ensuring long-term success.',
    image: '../Images/app-maintenance.png'
  },
];

const MobileApp = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div
        className="text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF, #0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Mobile App Development</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 md:px-8 py-8 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {mobileAppData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileApp;
