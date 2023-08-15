import clsx from "clsx";

export default function Input(props) {
  return (
    <input 
      className={clsx(
        "form-input block w-full rounded-md bg-gray-200 px-3 py-1.5 text-sm leading-6 text-black outline-none ring-1 ring-inset ring-gray-300",
        "focus:ring-2 focus:ring-inset focus:ring-sky-500",
        props.disabled && "cursor-default opacity-50"
      )} 
      {...props}
    />
  );
}