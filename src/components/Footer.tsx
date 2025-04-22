import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-white/70 text-center">
            © {currentYear} Ricky Romansyah. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;