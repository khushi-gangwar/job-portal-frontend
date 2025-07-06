import { ButtonInterface } from "@/libs/interfaces/auth-interfaces";
import "./Button.css";

export default function CustomButton({ props }: { props: ButtonInterface }) {
  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.type === "submit" ? false : true}
        className={`rounded-md border border-[#243c5a]-600 shadow-md p-2  ${props.className}`}
        type={props.type}
      >
        {props.name}
      </button>
    </div>
  );
}
