import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to the first accordion open

  // Data for each accordion item
  const accordionData = [
    {
      title: "Where We Want To Be",
      content: `“TekProwess”\n\nWe do not believe in competing with others, rather competing with our-self only. By trusting on our capabilities, our goal is to always set standards of excellence in Technology and inspire upcoming companies. Our vision is to become the most flexible and respected IT services brand. Consistency in our “Wow- Web Apps, Mobile Apps” services is the ultimate breadth of view.`,
    },
    {
      title: "Where We Are",
      content: `Our mission is to catch the expectations, sentiments of the clients, which are attached with their projects and providing valuable results to them. We always want to perform actions with perfection.`,
    },
    {
      title: "Our Ethics",
      content: `“Long term health can only be maintained if we are seeding and pampering well”\n\nWork culture of TekProwess is highly influential. We offer supportive and motivational environment to our employees. Special attention is given to our team and strong performers get created. We strongly believe that, with help of our employees only, we can touch the sky. Going beyond from sales figure, we show gratitude towards our employees and customers. We take in to consideration our client by maintaining Customer focus approach. We say “Yes” to effective ethics, which include persistency, passion, integrity, keeping eye on customer needs and result orientation.`,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if clicked again
  };

  return (
    <div className="px-4 md:px-8 py-4 md:py-12 bg-gray-100">
      {/* Main Heading and Text */}
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center font-custom">
        Our Journey to Success!
      </h2>
      <p className="text-gray-500 pb-4 px-4 text-lg md:text-xl text-center mb-8">
        TekProwess LLP is an IT company specializing in ERP applications, software development, mobile apps, and quality assurance. We deliver valuable services and exceptional support to clients across India, the US, and globally. Our collaborative work environment fosters strong teamwork and timely project delivery. Driven by a focus on client needs, we provide impactful, cost-effective solutions tailored to each project, ensuring complete satisfaction. Our commitment to work ethics ensures excellence in every project we undertake.</p>
      {/* Image and Accordion Section */}
      <div className="flex flex-col md:flex-row  gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src="./Images/about.jpg" alt="Our Journey" className="w-full max-h-[450px] object-cover rounded-lg shadow-lg" />
        </div>

        {/* Accordion Section */}
        <div className="md:w-1/2 w-full">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 mb-4">
              {/* Accordion Title */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 px-6 bg-white rounded-lg shadow-md focus:outline-none transition duration-300"
              >
                <h3 className="text-lg font-bold font-custom">{item.title}</h3>
                {/* Chevron Icon with Rotation */}
                <FaChevronDown
                  className={`transition-transform transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
