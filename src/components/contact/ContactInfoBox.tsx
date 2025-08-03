import React from "react";

const ContactInfoBox: React.FC<{
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
}> = ({ icon, title, line1, line2 }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-primary-blue rounded-lg">
      {React.cloneElement(icon as React.ReactElement, {})}
    </div>
    <div>
      <h3 className="text-lg font-bold text-text-dark">{title}</h3>
      <p className="text-gray-600">{line1}</p>
      <p className="text-gray-600">{line2}</p>
    </div>
  </div>
);

export default ContactInfoBox