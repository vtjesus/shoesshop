import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full h-32 flex justify-center items-center">
      <div className="text-center">
        <p className="font-extrabold">NOT A REAL WEBSITE!</p>
        <p>
          This website is intended to display my capabilities as a developer.
          You can find the GitHub repository at the link below.
        </p>
        <a
          href="https://github.com/vtjesus"
          className="underline hover:text-gray-400"
        >
          Link to GitHub Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
