import React from 'react';

const Software = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className=" text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}

      >
        <h1 className="text-4xl font-bold">Software Development</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 text-gray-700">

        {/* Introduction */}
        <p className="text-lg mb-6">
          At TekProwess LLP, our development team combines innovative thinking with technical expertise to deliver successful web applications and visually appealing designs. We understand what it takes to build impactful web solutions that drive business growth and enhance user engagement.
        </p>

        {/* Development Approach */}
        <p className="mb-6">
          Web development encompasses a wide range of activities related to websites and web applications. Our developers use top frameworks and cutting-edge technologies to create real-world applications tailored to meet your specific needs.
        </p>

        {/* Key Services */}
        <h2 className="text-2xl font-semibold  mb-4">Our Key Services:</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>ERP Systems:</strong> Streamlining business operations with robust ERP solutions tailored to your processes.
          </li>
          <li>
            <strong>Content Management Systems (CMS):</strong> Creating flexible and user-friendly CMS platforms for easy content management.
          </li>
          <li>
            <strong>Social Networking Sites:</strong> Building interactive and engaging platforms for community building and networking.
          </li>
          <li>
            <strong>E-commerce Platforms:</strong> Developing scalable and secure e-commerce solutions that drive sales and enhance user experience.
          </li>
          <li>
            <strong>Custom Web Applications:</strong> Crafting bespoke web applications tailored to your unique business needs.
          </li>
          <li>
            <strong>Database Development:</strong> Designing and optimizing databases to ensure efficient data storage and retrieval.
          </li>
          <li>
            <strong>Blogs and Directory Sites:</strong> Creating dynamic and user-friendly blogs and directory platforms.
          </li>
          <li>
            <strong>Discussion Forums:</strong> Developing interactive forums to foster community discussions and knowledge sharing.
          </li>
        </ul>

        {/* Additional Points */}
        <h2 className="text-2xl font-semibold  mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Expertise in Latest Technologies:</strong> We leverage modern frameworks like React, Angular, and Node.js to build scalable applications.
          </li>
          <li>
            <strong>Client-Centric Approach:</strong> Our development process focuses on understanding your business goals to deliver solutions that exceed expectations.
          </li>
          <li>
            <strong>End-to-End Solutions:</strong> From ideation to deployment and support, we provide comprehensive development services.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Rigorous testing processes to ensure high performance, security, and reliability.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Software;
