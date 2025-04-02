import classNames from "classnames";
import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
  checked 
} : InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames("input", className, type === 'checkbox' ? 'checkbox' : '')}
      disabled={disabled}
      checked={checked}
    />
  );
};