import React from 'react';

const servicesData = [
  {
    title: 'Implementation',
    description: 'With over a decade of expertise dating back to the early days of TinyERP, TekProwess LLP ensures each implementation is seamless and meticulously planned. Our experienced team handles every detail, allowing your organization to quickly and effectively unlock the full potential of your ERP system with ease and confidence.',
    image: '/images/implementation.jpg'
  },
  {
    title: 'Customization',
    description: 'We understand that no two businesses are alike. That’s why we specialize in tailoring solutions to perfectly fit your specific workflows and requirements. Our customizations prioritize intuitive design and user-friendliness, empowering your team to achieve their goals efficiently.',
    image: '/images/customization.jpg'
  },
  {
    title: 'Development',
    description: 'Our skilled developers bring years of expertise to creating custom modules and features that add real value. By focusing on flexibility and innovation, we help your system evolve alongside your business’s changing needs and market demands.',
    image: '/images/development.jpg'
  },
  {
    title: 'Integration',
    description: 'For a truly seamless operational experience, we ensure your system integrates effortlessly with other tools and platforms. Our integration services enhance data flow, streamline processes, and optimize overall business efficiency.',
    image: '/images/integration.jpg'
  },
  {
    title: 'Consulting',
    description: 'With hands-on expertise, TekProwess LLP offers consulting services that provide strategic insights and practical solutions. We guide you on optimizing your system’s use and making informed decisions tailored to your business objectives.',
    image: '/images/consulting.jpg'
  },
  {
    title: 'Migration',
    description: 'Managing migrations can be challenging, but TekProwess LLP ensures smooth, secure transitions with minimal disruption. From data transfers to system updates, we handle all aspects of migration, keeping your business operations on track and growing.',
    image: '/images/migration.jfif'
  },
  {
    title: 'Support',
    description: 'Our dedication extends far beyond initial deployment. TekProwess provides ongoing support to ensure your system remains reliable, responsive, and optimized. We address troubleshooting needs, performance fine-tuning, and evolving requirements with precision.',
    image: '/images/supportt.jpg'
  },
];

const OdooServices = () => {
  return (
    <div className="font-roboto">
      {/* Header Section with Primary Color Background */}
      <div className=" text-white px-4 h-48 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(to right, #00BFFF,#0066CC)' }}
      >
        <h1 className="text-4xl font-bold">Odoo Services</h1>
        {/* Optional background design */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 md:px-8 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OdooServices;
