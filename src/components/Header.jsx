import React, { useState } from "react";

function Header() {
  const [dark, setDark] = useState(true);
  return (
    <header className="bg-slate-300 text-black flex justify-between items-center px-10 py-2">
      <div>
         darkMode:{" "}
        <input type="checkbox" checked={dark} onClick={() => setDark(!dark)} />
      </div>
      <p>فروشگاه </p>
    </header>
  );
}

export default Header;
