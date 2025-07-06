import { InputInterface } from "@/libs/interfaces/auth-interfaces";

const InputField = ({ props }: { props: InputInterface }) => {
  return (
    <div>
     <div className="flex">
         {props.icon && (
        <div className=" pl-3 flex items-center text-gray-400">
          {props.icon}
        </div>
      )}
      <label htmlFor={props.id} className="block font-semibold mb-1 px-1">
        {props.label}
      </label>

    </div>

      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        value={props.value}
        required={props.required}
        onChange={props.onChange}
        className={`w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 bg-gray-50`}
      />
   </div>
  );
};

export default InputField;
