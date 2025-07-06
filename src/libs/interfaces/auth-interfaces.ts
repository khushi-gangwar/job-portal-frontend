export interface InputInterface {
  type: string;
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  value?: string;
  icon?:React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginFormInterface {
  email: string;
  password: string;
}

export interface RegisterFormInterface extends LoginFormInterface {
  fullname: string;
}


export interface ButtonInterface{
    name: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (e:any) => void;
    disabled?: boolean;

}