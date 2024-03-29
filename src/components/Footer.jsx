import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      {/* Social Icons */}
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Apolline Diaz. Tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;
