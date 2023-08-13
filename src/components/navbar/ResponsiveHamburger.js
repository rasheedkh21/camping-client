import React, { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 text-black">
                <a href="/motors" style={{ color: "black", fontSize: "20px" }}>
                  Motors
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/motors" style={{ color: "black", fontSize: "20px" }}>
                  Caravan
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/motors" style={{ color: "black", fontSize: "20px" }}>
                  Tuning
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/motors" style={{ color: "black", fontSize: "20px" }}>
                  Second Hand
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/places" style={{ color: "black", fontSize: "20px" }}>
                  Camping places
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/login" style={{ color: "black", fontSize: "20px" }}>
                  Sign in
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/orders" style={{ color: "black", fontSize: "20px" }}>
                  My orders
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="#" style={{ color: "black", fontSize: "20px" }}>
                  Log out
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="#" style={{ color: "black", fontSize: "20px" }}>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: fixed;
          width: 50%;
          height: 100%
          top: 0;
          left: 0;
          right:0
          bottom:0;
          background: #fafafa;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
