import React from "react";

function Button({ parentClass, ...props }) {
  return (
    <div className={`${parentClass} w-full flex text-center items-center`}>
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className={`w-1/2 m-auto my-2 h-[45px] rounded-md bg-green-500 py-2 px-3 text-sm font-semibold hover:bg-green-300 ${props.className}`}
      >
        {props.label}
        {props.children}
      </button>
    </div>
  );
}

export default Button;
