import React from 'react';

const qualityData = [
  {
    title: 'Manual Testing',
    description: 'Our hands-on manual testing services involve a detailed examination of applications in real-world usage scenarios. This approach uncovers usability issues, functional inconsistencies, and edge cases that automated methods may miss. We meticulously validate every feature to ensure the final product meets client expectations and industry standards.',
    image: '/images/Manual-testing.jpg'
  },
  {
    title: 'Automation Testing',
    description: 'To enhance efficiency and precision, we offer robust automation testing solutions using advanced tools and frameworks. By automating repetitive tests, we significantly reduce retesting time and broaden test coverage. This accelerates release cycles, ensures consistent results, and enables faster defect detection for high-performing software.',
    image: '/images/automation-testing.jpg'
  },
  {
    title: 'Mobile Testing',
    description: 'Given the critical role of mobile devices, our mobile testing services ensure applications perform flawlessly on diverse devices and operating systems, including iOS and Android. We focus on usability, functionality, and overall user experience, ensuring your app is responsive, intuitive, and optimized for users on the move.',
    image: '/images/mobile-testing.jfif'
  },
  {
    title: 'Performance Testing',
    description: 'Application performance is crucial to success. Our performance testing simulates varying user loads, from a few to hundreds of users, to evaluate how applications handle increased demand. This helps identify bottlenecks and scalability issues early, ensuring optimal performance and reliability even under peak usage conditions.',
    image: '/images/performance-testing.jfif'
  }
];

const Quality = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className=" text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}

      >
        <h1 className="text-4xl font-bold">Quality Assurance</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 md:px-8 py-8 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {qualityData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
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

export default Quality;
