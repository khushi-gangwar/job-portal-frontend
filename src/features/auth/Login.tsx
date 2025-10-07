import AuthLayout from "@/components/AuthLayout";
import CustomButton from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import { LoginFormInterface } from "@/libs/interfaces/auth-interfaces";
import { useLoginMutation } from "@/store/service/authApi";
import { Mail, Lock } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux.hooks";
import { setAuthData } from "@/store/slice/authSlice"; // ✅ import your slice action

const Login = () => {
  const [formData, setFormData] = React.useState<LoginFormInterface>({
    email: "",
    password: "",
  });

  const [login, { isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDataChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ Token validation & redirect if already logged in
  useEffect(() => {
    console.log("Login useEffect running");

    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("Decoded token payload:", payload);
        const exp = payload.exp * 1000;

        if (Date.now() < exp) {
          navigate("/home"); // valid token → redirect
        } else {
          localStorage.removeItem("token"); // expired → remove
        }
      } catch (err) {
        console.error("Error decoding token:", err);
      }
    }
  }, []);

  // ✅ Handle login + update both localStorage & Redux
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      const res = await login(formData).unwrap();
      console.log("Login API response:", res);

      // ⚠️ Check backend field names — might be 'accessToken' or 'jwt'
      const token = res.token ;
      const username = res.username || "";
      const email = res.email || formData.email;

      if (!token) {
        throw new Error("No token returned from backend!");
      }

      // ✅ Save to Redux
      dispatch(setAuthData({ username, email, token }));

localStorage.setItem("token", token);
localStorage.setItem("username", username);
localStorage.setItem("email", email);

      // ✅ Navigate after saving
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthLayout title="Login">
      <form
        className="w-full max-w-md space-y-6 p-4 border-4 border-gray-200 rounded-lg shadow-md bg-white"
        onSubmit={handleSubmit}
      >
        <InputField
          props={{
            id: "email",
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "Enter your email",
            autoComplete: "email",
            icon: <Mail size={18} />,
            onChange: (e) => handleDataChange("email", e.target.value),
          }}
        />

        <InputField
          props={{
            id: "password",
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            icon: <Lock size={18} />,
            onChange: (e) => handleDataChange("password", e.target.value),
          }}
        />

        <div className="flex justify-center">
          <CustomButton
            props={{
              name: isLoading ? "Logging in..." : "Login",
              type: "submit",
              className:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            }}
          />
        </div>

        <div className="flex items-center justify-center space-x-2">
          <p>Don't have an account?</p>
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
