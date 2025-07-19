import React, { JSX } from 'react'
import { FiCheckCircle, FiFileText, FiSearch } from 'react-icons/fi';
// Step type
interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  step: string;
}
const StepCard: React.FC<Step> = ({ icon, title, description, step }) => (
  <div className="border rounded-xl p-6 shadow-lg hover:shadow-md transition text-center">
    <div className="mb-4 flex justify-center">
      <span className="text-blue-500 text-3xl">{icon}</span>
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const steps: Step[] = [
    {
    icon: <FiSearch />,
    title: "Search Jobs",
    description: "Browse thousands of job openings from top companies across various industries.",
    step: "01",
  },
  {
    icon: <FiFileText />,
    title: "Apply Easily",
    description: "Submit your application with just a few clicks. Upload your resume and cover letter.",
    step: "02",
  },
  {
    icon: <FiCheckCircle />,
    title: "Get Hired",
    description: "Connect with employers, schedule interviews, and land your dream job.",
    step: "03",
  },
    ];

const HowItWork = () => {
  return (
  <section className="text-center px-6 py-16 bg-white" >
      <h2 className="text-4xl font-bold mb-3">How It Works</h2>
      <p className="text-gray-700 mb-12">
        Getting your dream job is easier than ever. Follow these simple steps to start your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {steps.map((step, idx) => (
          <StepCard key={idx} {...step} />
        ))}
      </div>
    </section>
  );
}

export default HowItWork