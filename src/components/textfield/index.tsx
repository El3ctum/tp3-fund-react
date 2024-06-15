import { useState, ChangeEvent } from "react";
import Botao from "../botao";

interface TexfieldProps {
  type: "text" | "email" | "password" | "textarea";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

const Texfield = ({
  type,
  placeholder,
  value,
  onChange,
  className
}: TexfieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="relative">
      {type !== 'textarea' ? (
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      )}
      {type === 'password' && (
        <Botao
          content={showPassword ? '🙈' : '👁️'}
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
        />
      )}
    </div>
  );
}

export default Texfield;
