import AuthLayout from "@/components/AuthLayout";
import CustomButton from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import { RegisterFormInterface } from "@/libs/interfaces/auth-interfaces";
import { useRegisterMutation } from "@/store/service/authApi";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormInterface>({
    fullname: "",
    email: "",
    password: "",
  });

  const handleDataChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [register, { isError, isLoading, isSuccess, data }] = useRegisterMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await register(formData);
    console.log(res);
  };

  return (
    <AuthLayout title="Sign Up" >
      <form className="w-full max-w-md space-y-6 p-4 border-4 border-gray-200 rounded-lg shadow-md bg-white">
        <InputField
          props={{
            id: "fullname",
            name: "fullname",
            type: "text",
            label: "Fullname",
             icon: <User size={18}/>,
            placeholder: "Enter your fullname",
            autoComplete: "fullname",
            onChange: (e) => handleDataChange("fullname", e.target.value),
          }}
        />
        <InputField
          props={{
            id: "email",
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "Enter your email",
            autoComplete: "email",
            icon:<Mail size={18}/>,
            onChange: (e) => handleDataChange("email", e.target.value),
          }}
        />
        <InputField
          props={{
            id: "password",
            name: "password",
            type: "password",
            label: "Password",
            icon:<Lock size={18}/>,

            placeholder: "Enter your password",
            onChange: (e) => handleDataChange("password", e.target.value),
          }}
        />
        <div className="flex justify-center">
          <CustomButton
            props={{
              name: "Sign Up",
              type: "submit",
              className:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
              onClick: handleSubmit,
            }}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
        <p>Already have an account?</p>
        <Link to="/login" className="text-blue-600 hover:underline">Login </Link></div>
      </form>
    </AuthLayout>
  );
};

export default Register;
