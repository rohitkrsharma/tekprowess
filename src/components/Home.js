import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  // JSON data for the cards with your new content
  const services = [
    {
      title: "ERP Services",
      description: "TekProwess offers comprehensive ERP solutions to enhance your business operations, leveraging the world's most widely used business software, Odoo.",
      image: "/Images/erp.jpg",
    },
    {
      title: "Software Development",
      description: "We showcase exceptional use of the latest technology through customized, business-focused, and responsive website development.",
      image: "/Images/software.jpg",
    },
    {
      title: "Mobile App Development",
      description: "Our mobile app development team tackles real business challenges for clients with deep technical expertise and an innovative approach.",
      image: "/Images/mobile-test.jpg",
    },
    {
      title: "Quality Assurance",
      description: "At TekProwess, we are dedicated to delivering high-quality software solutions through our comprehensive Quality Assurance (QA) services.",
      image: "/Images/quality.jpg",
    }
  ];
  const data = [
    {
      heading: "Unwavering Commitment to Work and Clients",
      description: "We uphold the highest level of dedication towards our work and clients, ensuring every project is executed with excellence.",
      image: "/Images/work-client.jpg"
    },
    {
      heading: "Strong Technical Expertise",
      description: "Our team brings unparalleled technical expertise, continuously adopting the latest technologies to deliver top-quality solutions.",
      image: "/Images/tech-expert.jpg"
    },
    {
      heading: "Prompt and Focused Client Response",
      description: "We prioritize quick and effective responses to our clients, ensuring smooth communication and efficient problem resolution.",
      image: "/Images/image.jpg"
    },
    {
      heading: "High Standards of Work Ethics",
      description: "We adhere to the highest standards of ethics, ensuring transparency, integrity, and professionalism in all our dealings.",
      image: "/Images/work.jpg"
    },
    {
      heading: "Exceeding Customer Expectations",
      description: "Our goal is always to go beyond client expectations, delivering solutions that surpass their requirements and desires.",
      image: "/Images/customer-exp.jpg"
    },
    {
      heading: "Exceptional Customer Service",
      description: "We provide exceptional customer service, ensuring our clients receive consistent support and care throughout our collaboration.",
      image: "/Images/customer.jpg"
    },
    {
      heading: "Cost-Effective Solutions",
      description: "We offer solutions that are not only effective but also budget-friendly, providing maximum value without compromising quality.",
      image: "/Images/solution.jpg"
    }
  ];
  const cards = [
    {
      title: "Assistance",
      subtitle: "Reliable",
      icon: "/Images/support.jpg",
      bgColor: "bg-gradient-to-r from-[#0045fd] to-[#007EDF]", // Dark blue to lighter blue
    },
    {
      title: "CONFIDENTIALITY",
      subtitle: "100%",
      icon: "/Images/confidential.jpg",
      bgColor: "bg-gradient-to-r from-[#008000] to-[#66D9EF]", // Dark green to light blue-green
    },
    {
      title: "DELIVERY",
      subtitle: "Timely",
      icon: "/Images/delivery.png",
      bgColor: "bg-gradient-to-r from-[#004C8C] to-[#00AFFF]", // Dark cyan to light cyan
    },
    {
      title: "PRICING",
      subtitle: "Affordable",
      icon: "/Images/pricing.jpg",
      bgColor: "bg-gradient-to-r from-[#B8860B] to-[#FFB347]", // Darker gold to light orange
    },
  ];


  return (
    <>
      {/* Slider Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => (
            `<span class="${className} custom-pagination-dot"></span>`
          ),
        }}
        autoplay={{ delay: 7000 }}
        loop={true}
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: 'url("./Images/banner2.jpg")' }}
          >
            <div className="text-center px-6 md:px-12">
              <h1 className="text-4xl md:text-6xl font-custom font-bold mb-4 animate-slide-in-right">
                Transforming Digital Experiences with Expert Professionals
              </h1>
              <p className="text-lg md:text-2xl animate-slide-in-right delay-150">
                Our team of skilled experts excels at delivering solutions for even the most complex challenges.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: 'url("./Images/inteligent.jpg")' }}
          >
            <div className="text-center px-6 md:px-12">
              <h1 className="text-4xl md:text-6xl font-custom font-bold mb-4 animate-slide-in-right">
                Transforming Digital Experiences with Intelligent Solutions
              </h1>
              <p className="text-lg md:text-2xl animate-slide-in-right delay-150">
                We partner with entrepreneurs, start-ups, and enterprises to bring their ideas to life as impactful products.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: 'url("./Images/banner3.jpg")' }}
          >
            <div className="text-center px-6 md:px-12">
              <h1 className="text-4xl md:text-6xl font-custom font-bold mb-4 animate-slide-in-right">
                Transforming Digital Experiences with Innovative Thinking
              </h1>
              <p className="text-lg md:text-2xl animate-slide-in-right delay-150">
                We bridge the gap between ideas and execution, unlocking limitless possibilities.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Card Section */}
      <div className="px-4 md:px-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-custom">Our Experties</h2>
        <p className="text-gray-500 pb-4 px-4  text-lg md:text-xl text-center mb-8">TekProwess operates with a "Customer-First Approach" philosophy, delivering comprehensive IT services using the latest cutting-edge technology.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-3xl transition-transform duration-300 transform hover:scale-105 p-6"
            // style={{ borderColor: '#0066CC' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-custom font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-custom">
          How We Deliver Value
        </h2>
        <p className="text-gray-500 pb-4 px-4   text-lg md:text-xl text-center mb-8">
          We begin by engaging with our customers to fully understand their goals and vision for the project. Then, we dedicate ourselves to delivering outstanding and valuable results. Our primary goal is to build long-lasting relationships with our clients by consistently meeting their needs and providing support whenever required.
        </p>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-1/2 h-full">
            <img
              src="/Images/dev.jpg"
              alt="Value Delivery"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 h-full">
            <img
              src="/Images/quality.jpg"
              alt="Value Delivery"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>

      <div className="px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-custom">
          Why Choose TekProwess LLP?
        </h2>
        <p className="text-gray-500 pb-4 px-4   text-lg md:text-xl text-center">
          "Experience at Its Peak – Our Quality Speaks for Itself"
        </p>
        <p className="text-gray-500 pb-4 px-4   text-lg md:text-xl text-center">
          We firmly believe that "A Happy Customer is Our True Success." Here are some principles and business rules that we consistently follow:
        </p>
        <div className="px-4 md:px-8 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((item, index) => (
              <div key={index} className="md:flex items-center md:space-x-4 p-6  rounded-lg hover:shadow-lg transition duration-300">
                <div className="w-24 h-24 rounded-lg">
                  <img src={item.image} alt={item.heading} className="w-full h-full rounded-lg object-contain" />
                </div>
                <div>
                  <h3 className="text-xl  text-gray-800">{item.heading}</h3>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-custom mb-8">
          Why Select Us <br /> As We Are the Leading Application Development Company
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="w-16 h-16 mb-4">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-14 h-14 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold">{card.subtitle}</h3>
              <p className="text-lg mt-2 ">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
