// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
};

export default Header;
