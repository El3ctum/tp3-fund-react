import { useState, ChangeEvent } from "react";
import Botao from "../botao";

interface TexfieldProps {
  type: "text" | "email" | "password" | "textarea" | "date" | "file";
  placeholder: string;
  value: string | File | null;  // Faz parte da tentativa de evitar tela branca toda vez que eu carregava um arquivo.
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  name: string;
}

const Texfield = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  name
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
          value={type !== 'file' ? value as string : undefined} // Faz parte da tentativa de evitar tela branca toda vez que eu carregava um arquivo.
          onChange={onChange}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          name={name}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value as string} 
          onChange={onChange}
          rows={4}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          name={name}
        />
      )}
      {type === 'password' && (
        <Botao
          type="button"
          content={showPassword ? '🙈' : '👁️'}
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
        />
      )}
    </div>
  );
}

export default Texfield;
