import { Category } from "@/libs/interfaces/home-interface";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  FiCode,
  FiBriefcase,
  FiBarChart2,
  FiHeart,
  FiDollarSign,
  FiUsers,
  FiTruck,
} from "react-icons/fi";


const CategoryCard: React.FC<Category> = ({ icon, title, jobs }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          scale: {
            type: "spring",
            bounce: 0.5,
            duration: 0.4,
          },
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      className="rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{jobs} jobs</p>
    </motion.div>
  );
};

// const CategoryCard: React.FC<Category> = ({ icon, title, jobs }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const animationControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       animationControls.start({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: { duration: 0.1, ease: "easeOut" },
//       });
//     }
//   }, [isInView, animationControls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30, scale: 0.1 }} // Start tiny, down, and invisible
//       animate={animationControls}
//       className="rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition text-center"
//     >
//       <div className="mb-4 flex justify-center">{icon}</div>
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="text-gray-500 text-sm">{jobs} jobs</p>
//     </motion.div>
//   );
// };


// 🔹 Category list - OCP compliant
const categories: Category[] = [
  { icon: <FiCode className="text-blue-500 text-3xl" />, title: "Technology", jobs: "15,000+" },
  { icon: <FiBriefcase className="text-purple-500 text-3xl" />, title: "Design", jobs: "8,500+" },
  { icon: <FiBarChart2 className="text-green-500 text-3xl" />, title: "Marketing", jobs: "12,000+" },
  { icon: <FiHeart className="text-yellow-500 text-3xl" />, title: "Healthcare", jobs: "20,000+" },
  { icon: <FiDollarSign className="text-purple-500 text-3xl" />, title: "Finance", jobs: "9,200+" },
  { icon: <FiUsers className="text-green-500 text-3xl" />, title: "Human Resources", jobs: "5,800+" },
  { icon: <FiTruck className="text-yellow-500 text-3xl" />, title: "Operations", jobs: "7,400+" },
];

// 🔹 Main component
const JobCategories: React.FC = () => {
  return (
    <section className="text-center px-6 py-12" style={{ background: "#F3F4F6" }}>
      <h2 className="text-4xl font-bold mb-2">Browse Jobs by Category</h2>
      <p className="text-gray-500 mb-10">
        Explore opportunities across various industries and find the perfect match for your skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" >
        {categories.map((category, idx) => (
          <CategoryCard key={idx} {...category} />
        ))}
      </div>

      <button className="mt-10 px-5 py-2 border rounded-full text-sm hover:bg-gray-100 transition">
        View All Categories
      </button>
    </section>
  );
};

export default JobCategories;
