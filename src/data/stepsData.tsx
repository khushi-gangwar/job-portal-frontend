import { FiSearch, FiFileText, FiCheckCircle } from "react-icons/fi";
import { Step } from "../libs/interfaces/step-interface"; // assuming you place the interface in a types folder

export const steps: Step[] = [
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
