import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="#" className={`flex items-center text-2xl font-bold ${className}`}>
      <div className="grid grid-cols-2 gap-px mr-3 transform -rotate-45">
        <span className="w-3 h-3 rounded-sm bg-primary-red"></span>
        <span className="w-3 h-3 rounded-sm bg-primary-blue"></span>
        <span className="w-3 h-3 rounded-sm bg-primary-blue"></span>
        <span className="w-3 h-3 rounded-sm bg-primary-red"></span>
      </div>
      liva
    </a>
  );
};

export default Logo;
