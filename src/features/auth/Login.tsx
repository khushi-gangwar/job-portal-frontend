import AuthLayout from '@/components/AuthLayout'
import CustomButton from '@/components/common/Button/Button'
import InputField from '@/components/common/InputField/InputField'
import { LoginFormInterface } from '@/libs/interfaces/auth-interfaces'
import { useLoginMutation } from '@/store/service/authApi'
import { Mail ,Lock} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = React.useState<LoginFormInterface>({
    email: '',
    password: '',
  })
    const handleDataChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [login,{isError,isLoading,isSuccess,data}]=useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
const res=await login(formData);
    console.log('Form submitted:', formData);
  };

  return (
   <AuthLayout title="Login" >
      <form className="w-full max-w-md space-y-6 p-4 border-4 border-gray-200 rounded-lg shadow-md bg-white">
       
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
            placeholder: "Enter your password",
            icon:<Lock size={18}/>,
           onChange: (e) => handleDataChange("password", e.target.value),
          }}
        />
        <div className="flex justify-center">
          <CustomButton
            props={{
              name: "Login",
              type: "submit",
              className:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
              onClick: handleSubmit,
            }}
          />
        </div>
        <p>Don't have an account?</p>
        <Link to="/login" className="text-blue-600 hover:underline">Register </Link>
      </form>
    </AuthLayout>
  )
}

export default Login