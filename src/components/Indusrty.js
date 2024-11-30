import React from 'react';

const industries = [
  {
    title: "Manufacturing",
    description: "In the manufacturing industry, we offer robust ERP features tailored to streamline operational activities. Our solutions improve production planning, inventory management, and quality control.",
    image: "./Images/manufacturing.jpg"
  },
  {
    title: "IT",
    description: "We provide customized implementations for IT firms, focusing on project management, resource allocation, and client relationship management, enhancing service delivery.",
    image: "./Images/it.jpg"
  },
  {
    title: "Education",
    description: "Our tailored solutions in the education sector help institutions build efficient management systems, including student enrollment, course management, and enhanced communication.",
    image: "./Images/education.jpg"
  },
  {
    title: "Retail",
    description: "For the retail sector, we integrate comprehensive tools for inventory, sales tracking, and customer relationship management, empowering retailers to drive growth.",
    image: "./Images/retail.jpg"
  },
  {
    title: "Healthcare",
    description: "We offer specialized solutions to manage patient information, appointments, and billing processes, enhancing compliance and improving data management in healthcare.",
    image: "./Images/health.jpg"
  },
  {
    title: "Media",
    description: "Our customized solutions for media companies enhance content creation, project workflows, and client engagement, fostering creativity and efficient operations.",
    image: "./Images/media.jpg"
  },
  {
    title: "Logistics",
    description: "For logistics, we streamline supply chain management and transportation planning, offering real-time visibility over shipments and inventory to reduce costs.",
    image: "./Images/logistic.png"
  }
];

const Industry = () => {
  return (
    <div className="font-roboto">
      {/* Header Section */}
      <div className="text-white h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={industry.image} alt={industry.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-2">{industry.title}</h2>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
