import React from 'react';

const softwareData = [
  {
    title: 'ERP Systems',
    description: 'Streamline your business operations with robust ERP solutions tailored to your processes. Our systems are designed to enhance efficiency and provide real-time insights for better decision-making.',
    image: '../Images/erp-systems.jpg'
  },
  {
    title: 'Content Management Systems (CMS)',
    description: 'We create flexible and user-friendly CMS platforms that allow for easy content creation, management, and publishing, empowering businesses to maintain a strong online presence.',
    image: '../Images/cms-platforms.jpg'
  },
  {
    title: 'Social Networking Sites',
    description: 'Build interactive and engaging platforms for community building and networking. Our solutions focus on user experience and scalability to foster connections effectively.',
    image: '../Images/social-networking.jpg'
  },
  {
    title: 'E-commerce Platforms',
    description: 'Develop scalable and secure e-commerce solutions that drive sales and enhance user experience. From intuitive design to robust backend systems, we have you covered.',
    image: '../Images/e-commerce.jpg'
  },
  {
    title: 'Custom Web Applications',
    description: 'Craft bespoke web applications tailored to your unique business needs. We combine innovative design with robust functionality to deliver impactful results.',
    image: '../Images/custom-web-app.jpg'
  },
  {
    title: 'Database Development',
    description: 'Design and optimize databases to ensure efficient data storage and retrieval, supporting high-performing applications with reliable data management.',
    image: '../Images/database-development.png'
  }
];

const Software = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div
        className="text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF, #0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Software Development</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 md:px-8 py-8 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {softwareData.map((item, index) => (
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

export default Software;
