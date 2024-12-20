import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-custom-taskbar-gradient fixed bottom-0 h-10 w-full flex justify-between items-center">
      <div>
        <Image
          src="/StartIcon.png"
          alt="Start menu icon"
          width={90}
          height={0}
          className="h-full"
        />
      </div>
      <div className="flex space-x-2 bg-custom-iconsbar-gradient border-l-[rgb(16, 66, 175)] px-3 ml-3 h-full items-center">
        <Image
          src="/FirewallIcon.png"
          alt="Firewall logo"
          width={0}
          height={8}
          className="h-4 w-4"
        />
        <span>{new Date().toLocaleTimeString([], { timeStyle: "short" })}</span>
      </div>
    </footer>
  );
};
