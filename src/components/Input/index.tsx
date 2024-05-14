import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: any;
}

const InputCustom = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="grid grid-cols-1 space-y-2">
      <label className="text-sm font-bold text-black-500 tracking-wide">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="border-black text-base p-2 border text-black-500  bg-white border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        type=""
        placeholder="Nhập ở đây ..."
      />
    </div>
  );
};

export default InputCustom;
