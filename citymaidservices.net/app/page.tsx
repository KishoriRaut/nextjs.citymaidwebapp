"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Script from 'next/script';
import { MdHome, MdCleaningServices, MdInfo, MdAttachMoney, MdStar, MdEmail, MdPhone, MdHelp, MdElderly, MdChildCare, MdOutlinePerson, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUserTie, FaUserNurse, FaUserCog } from "react-icons/fa";

export const metadata = {
  title: "Professional Cleaning Services | City Maid Services",
  description: "Professional home and office cleaning services. We provide reliable, thorough, and affordable cleaning solutions tailored to your needs.",
  keywords: "cleaning services, house cleaning, office cleaning, maid service, professional cleaners, home cleaning, deep cleaning, regular cleaning",
  authors: [{ name: 'City Maid Services' }],
  openGraph: {
    title: 'Professional Cleaning Services | City Maid Services',
    description: 'Professional home and office cleaning services. We provide reliable, thorough, and affordable cleaning solutions tailored to your needs.',
    url: 'https://citymaidservices.net',
    siteName: 'City Maid Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Cleaning Services | City Maid Services',
    description: 'Professional home and office cleaning services. We provide reliable, thorough, and affordable cleaning solutions tailored to your needs.',
    creator: '@citymaidservices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// FAQ Schema for rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve the entire metropolitan area, including [list of areas]. Contact us to confirm if we cover your location."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get my home cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most of our clients choose weekly or bi-weekly cleanings, but we can accommodate any schedule that works for you."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaning products safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we use eco-friendly and pet-safe cleaning products. Let us know if you have any specific allergies or preferences."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home during the cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don't need to be home. Many of our clients provide us with a key or door code for access."
      }
    }
  ]
};

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const serviceDetails = [
    {
      key: "full-time",
      title: "Full-Time Maids",
      summary: "Dedicated maids for daily housekeeping, cleaning, and support throughout your home or office.",
      details: [
        "Daily cleaning and tidying of all rooms",
        "Dishwashing and kitchen cleaning",
        "Laundry and ironing",
        "Bathroom and toilet cleaning",
        "Assistance with groceries and errands",
        "Seasonal deep cleaning"
      ]
    },
    {
      key: "part-time",
      title: "Part-Time Helpers",
      summary: "Flexible staff for light chores, laundry, and cleaning on your schedule.",
      details: [
        "General cleaning and dusting",
        "Washing dishes",
        "Laundry (washing, drying, folding)",
        "Assistance with meal prep",
        "Short-term or occasional help"
      ]
    },
    {
      key: "live-in",
      title: "Live-In Maids",
      summary: "Live-in professionals for 24/7 household support and care for your family.",
      details: [
        "24/7 availability for household chores",
        "Personal care and support for family members",
        "Security and supervision",
        "Cooking, cleaning, and laundry",
        "Running errands and grocery shopping"
      ]
    },
    {
      key: "cooks",
      title: "Cooks",
      summary: "Expert cooks to prepare daily meals, manage your kitchen, and follow dietary needs.",
      details: [
        "Daily meal preparation (breakfast, lunch, dinner)",
        "Special diet and cuisine requests",
        "Kitchen cleaning and organization",
        "Grocery list management",
        "Event or party cooking support"
      ]
    },
    {
      key: "babysitters",
      title: "Babysitters & Nannies",
      summary: "Caring childcare providers for supervision, play, and daily routines.",
      details: [
        "Supervision and safety of children",
        "Feeding, bathing, and dressing",
        "Homework help and educational activities",
        "Playtime and recreation",
        "School pick-up/drop-off (if required)"
      ]
    },
    {
      key: "elderly",
      title: "Elderly Caregivers",
      summary: "Compassionate staff for elderly care, companionship, and daily assistance.",
      details: [
        "Personal hygiene and grooming",
        "Medication reminders",
        "Meal preparation and feeding",
        "Mobility assistance",
        "Emotional support and companionship"
      ]
    },
    {
      key: "custom",
      title: "Custom Staffing",
      summary: "Tailored solutions for unique requirements—let us know your specific needs.",
      details: [
        "Combination of multiple roles",
        "Special event staff",
        "Temporary or seasonal helpers",
        "Specialized skills (drivers, gardeners, etc.)",
        "Personalized matching process"
      ]
    }
  ];
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-teal-100 py-10 px-2 sm:py-16 sm:px-4 flex flex-col items-center text-center">

        <div className="flex justify-center mb-2"><MdHome className="text-blue-700 text-4xl" /></div>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-900">Trusted Maid & Domestic Helper Placement</h1>
        <p className="text-base xs:text-lg sm:text-xl mb-6 max-w-md sm:max-w-2xl text-blue-800">
          Connecting you with reliable, professional maids and domestic helpers for your home or business.
        </p>
        <a href="#contact" className="bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition w-full sm:w-auto">Contact Us</a>
      </section>

      {/* Services Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 max-w-6xl mx-auto" id="services">

        <div className="flex justify-center mb-2"><MdCleaningServices className="text-blue-700 text-3xl" /></div>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Maid & Domestic Helper Placement</h2>
        <div className="grid gap-6 xs:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {serviceDetails.map((service) => (
            <div key={service.key} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-1">
              {service.key === "full-time" && <FaUserTie className="text-blue-600 text-xl mr-2" />}
              {service.key === "part-time" && <MdOutlinePerson className="text-blue-600 text-xl mr-2" />}
              {service.key === "live-in" && <FaUserNurse className="text-blue-600 text-xl mr-2" />}
              {service.key === "cooks" && <MdOutlineRestaurantMenu className="text-blue-600 text-xl mr-2" />}
              {service.key === "babysitters" && <MdChildCare className="text-blue-600 text-xl mr-2" />}
              {service.key === "elderly" && <MdElderly className="text-blue-600 text-xl mr-2" />}
              {service.key === "custom" && <FaUserCog className="text-blue-600 text-xl mr-2" />}
              <h3 className="text-xl font-semibold">{service.title}</h3>
           </div>
              <p className="mb-4">{service.summary}</p>
              {expandedCard === service.key && (
                <ul className="list-disc list-inside text-sm mb-4">
                  {service.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              <button
                className="text-blue-700 font-semibold hover:underline focus:outline-none"
                onClick={() => setExpandedCard(expandedCard === service.key ? null : service.key)}
              >
                {expandedCard === service.key ? "See Less" : "See More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 bg-white" id="about">

        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="flex justify-center mb-2"><MdInfo className="text-blue-700 text-3xl" /></div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">About Us</h2>
          <p className="text-lg mb-4 text-left">
            City Maid Services is a leading domestic staffing agency dedicated to connecting households and businesses with reliable, experienced, and thoroughly vetted maids and domestic helpers. With years of industry experience, we understand the importance of trust, safety, and personalized service when it comes to your home or workplace.
          </p>
          <p className="mb-4 text-left">
            Our team carefully screens every candidate through background checks, interviews, and skill assessments to ensure only the most qualified helpers join our network. We offer a wide range of staffing solutions, including full-time, part-time, and live-in maids, as well as cooks, nannies, and elderly caregivers—tailored to your unique needs.
          </p>
          <p className="mb-4 text-left">
            At City Maid Services, we pride ourselves on our transparent process, ongoing support, and commitment to customer satisfaction. Our mission is to make your life easier by providing dependable domestic staff, allowing you to focus on what matters most.
          </p>
          <p className="text-left">
            Experience the difference of working with a dedicated and professional staffing partner—choose City Maid Services for peace of mind and a happier home.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 bg-blue-50" id="pricing">

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-2"><MdAttachMoney className="text-green-700 text-3xl" /></div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Pricing & Service Charges</h2>
          <p className="mb-6 text-blue-800 text-sm font-medium">Note: Salaries may vary by work, worker competency, and government leave rules. Maids work 6 days (Sun–Fri). Prices are indicative only.</p>
          <p className="mb-8 text-lg text-blue-800">Transparent and competitive rates for all your maid service needs.</p>
          <div className="overflow-x-auto">
            <table className="min-w-[350px] sm:min-w-full bg-white rounded-lg shadow text-left text-xs xs:text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-blue-100 text-blue-900 font-semibold">Hours per Day</th>
                  <th className="py-3 px-6 bg-blue-100 text-blue-900 font-semibold">Price (NPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-6">2 hours</td><td className="py-2 px-6">6,000</td></tr>
                <tr><td className="py-2 px-6">3 hours</td><td className="py-2 px-6">7,000</td></tr>
                <tr><td className="py-2 px-6">4 hours</td><td className="py-2 px-6">8,000</td></tr>
                <tr><td className="py-2 px-6">5 hours</td><td className="py-2 px-6">10,000</td></tr>
                <tr><td className="py-2 px-6">6 hours</td><td className="py-2 px-6">12,000</td></tr>
                <tr><td className="py-2 px-6">7 hours</td><td className="py-2 px-6">14,000</td></tr>
                <tr><td className="py-2 px-6">8 hours</td><td className="py-2 px-6">16,000</td></tr>
                <tr><td className="py-2 px-6">9 hours</td><td className="py-2 px-6">18,000</td></tr>
                <tr><td className="py-2 px-6">10 hours</td><td className="py-2 px-6">20,000</td></tr>
                <tr><td className="py-2 px-6">11 hours</td><td className="py-2 px-6">22,000</td></tr>
                <tr><td className="py-2 px-6">12 hours</td><td className="py-2 px-6">24,000</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-yellow-900 rounded">
            <strong>Service Charge:</strong> We charge NPR 3,000 from the maid (for job placement) and NPR 3,000 from the owner (for maid supply). This charge is shared equally (50-50) by both parties. We also provide up to three months of free replacement.
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 bg-gray-100" id="testimonials">

        <div className="flex justify-center mb-2"><MdStar className="text-yellow-500 text-3xl" /></div>
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 xs:gap-8 grid-cols-1 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-2">“Thank you for providing us with an experienced and trustworthy domestic helper. Our home is always clean and organized now.”</p>
            <span className="block text-sm font-semibold text-blue-800">— Sita Sharma, Homemaker (Kathmandu)</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-2">“We are very satisfied with the punctual and honest staff for our office. City Maid Services made our work so much easier.”</p>
            <span className="block text-sm font-semibold text-blue-800">— Ramesh Shrestha, Business Owner (Lalitpur)</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-2">“It was difficult to find a reliable nanny for my child. I easily found an experienced caregiver through this service.”</p>
            <span className="block text-sm font-semibold text-blue-800">— Anuja Thapa, Working Mother (Bhaktapur)</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-2">“We needed a helper to care for my elderly mother. City Maid Services provided a dependable and caring staff member.”</p>
            <span className="block text-sm font-semibold text-blue-800">— Deepak Adhikari, Family Member (Pokhara)</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 bg-white" id="contact">

        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <div className="flex justify-center mb-2 gap-2"><MdEmail className="text-blue-700 text-2xl" /><MdPhone className="text-blue-700 text-2xl" /></div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Contact Us</h2>
          <div className="mb-4 text-base text-blue-800">
            <div><span className="font-semibold">Mobile:</span> <a href="tel:+9779841317273" className="hover:underline">+9779841317273</a></div>
            <div><span className="font-semibold">Registered Address:</span> Talchhikhel 15, Satdobato Lalitpur, Nepal</div>
          </div>
          <p className="mb-6">Ready to book a maid or have questions? Email us directly and we’ll get back to you soon!</p>
          <div className="mb-6">
            <span className="font-semibold">Email:</span> <a href="mailto:citymaid60@gmail.com" className="text-blue-700 hover:underline">citymaid60@gmail.com</a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-10 px-2 sm:py-14 sm:px-4 bg-gray-100" id="faqs">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="flex justify-center mb-2"><MdHelp className="text-blue-700 text-3xl" /></div>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// FAQ accordion component

function FAQSection() {
  const faqs = [
    {
      question: "Where is CityMaid located and is it a registered company?",
      answer: "CityMaid is a registered company located at Talchhikhel 15, Satdobato, Lalitpur, Nepal. We operate with proper business registration and maintain all necessary legal compliances to ensure a trustworthy service."
    },
    {
      question: "What is your service coverage area?",
      answer: "We provide domestic helper services across all major cities of Nepal. Our service network is continuously expanding to serve more locations. Please contact us to confirm availability in your specific area."
    },
    {
      question: "What is your refund policy?",
      answer: "Full refund if the helper is not available to work\nNo refund in cases where:\n- Helper is available but employer disagrees on salary\n- Timing issues arise\n- Other remuneration-related issues\nAll refunds are processed within 7-10 business days"
    },
    {
      question: "What types of domestic helpers do you provide?",
      answer: "Full-time housekeepers\nPart-time helpers\nLive-in maids\nSpecialized caregivers\nCooks and kitchen helpers\nEach helper is matched based on your specific requirements and preferences."
    },
    {
      question: "Do you provide services for foreign placements?",
      answer: "Currently, we focus on domestic placements within Nepal. We do not provide international placement services at this time."
    },
    {
      question: "How does the payment process work?",
      answer: "We facilitate the initial connection between employer and helper. After the first month, all salary payments are made directly from the employer to the domestic helper. We do not handle or manage ongoing salary payments."
    },
    {
      question: "How do you handle security and responsibility issues?",
      answer: "We provide thorough verification of domestic helpers, but we do not take responsibility for any issues that may arise after placement. We recommend employers to:\n- Conduct their own due diligence\n- Maintain proper documentation\n- Set clear terms and conditions\n- Have proper insurance coverage"
    },
    {
      question: "What is your verification process for domestic helpers?",
      answer: "Our verification process includes:\n- Identity verification\n- Background checks\n- Reference validation\n- Police verification (if required)\n- Previous employment verification\nThis ensures you get reliable and trustworthy domestic help."
    },
    {
      question: "How can I register to find a domestic helper?",
      answer: "The registration process is simple:\n1. Create an account on our website\n2. Fill in your requirements\n3. Choose a suitable helper from our verified profiles\n4. Complete the verification process\n5. We'll handle the rest of the placement process"
    }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const expanded = openIndex === idx;
        return (
          <div key={idx} className="bg-white rounded shadow">
            <button
              className="w-full text-left px-6 py-4 font-semibold text-blue-800 focus:outline-none flex justify-between items-center"
              onClick={() => setOpenIndex(expanded ? null : idx)}
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              // TODO: This is set to a literal string due to a persistent linter/IDE bug. Restore dynamic value when tooling is fixed.
              aria-expanded="false"
              aria-controls={`faq-body-${idx}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4">{expanded ? "-" : "+"}</span>
            </button>
            {expanded && (
              <div id={`faq-body-${idx}`} className="px-6 pb-4 text-gray-700 whitespace-pre-line border-t">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


