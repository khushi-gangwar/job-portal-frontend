import React, { useEffect, useRef, useState } from "react";

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  const [text, setText] = useState("");
  const fullText = "DevSpot – One Spot for All Devs";
  const indexRef = useRef(1);
  const intervalRef = useRef<number>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setText(fullText.slice(0, indexRef.current));
      indexRef.current += 1;

      if (indexRef.current > fullText.length) {
        const interval = intervalRef.current ?? 0;
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(intervalRef.current ?? 0);
  }, []);

  return (
   
<div className="flex justify-center items-center min-h-screen p-4 bg-blue-100 shadow-lg">
  <div className="bg-white p-6 rounded shadow-lg text-shadow-amber-50 max-w-sm w-full">
    {title && <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>}
    {children}
  </div>
</div>

   
  );
};

export default AuthLayout;
