import React, { JSX, useEffect, useRef } from 'react'
import { steps } from "@/data/stepsData"; // Adjust the import path as necessary
import { Step } from '@/libs/interfaces/home-interface';
import { motion, useAnimation, useInView } from 'framer-motion';




const StepCard: React.FC<Step> = ({ icon, title, description, step }) => {
  const ref=useRef(null);
  const isInView=useInView(ref,{once:true});
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
return(
<motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0 }}
    animate={controls}
    className="border rounded-xl p-6 shadow-lg hover:shadow-md transition text-center"
  >    <div className="mb-4 flex justify-center">
      <span className="text-blue-500 text-3xl">{icon}</span>
    </div>
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-gray-500 text-lg">{description}</p>
  </motion.div>
);

}

const HowItWork = () => {
  return (
  <section className="text-center px-6 py-16 bg-white" >
      <h2 className="text-6xl font-bold mb-3">How It Works</h2>
      <p className="text-gray-700 mb-12 text-3xl">
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