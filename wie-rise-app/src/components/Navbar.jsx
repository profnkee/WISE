import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../data/site";

function DesktopItem({ item }) {
  if (item.children) {
    return (
      <li className="group relative">
        <button className="flex items-center gap-1 px-2.5 py-1.5 text-[15px] text-white transition hover:text-sky-400">
          {item.label}
          <svg
            className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.148l3.71-3.918a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className="invisible absolute left-0 top-full z-30 min-w-[250px] translate-y-1 border-t-2 border-sky-500 bg-white py-1 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-navy-950 text-white"
                      : "text-slate-700 hover:bg-navy-950 hover:text-white"
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          `block px-2.5 py-1.5 text-[15px] transition ${
            isActive ? "text-sky-400" : "text-white hover:text-sky-400"
          }`
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
}

function MobileItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <li>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between border-b border-white/10 px-3 py-2.5 text-left text-[15px] text-white hover:text-sky-400"
        >
          {item.label}
          <svg
            className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.148l3.71-3.918a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {open && (
          <ul className="ml-3 border-l border-white/15 pl-3">
            {item.children.map((child) => (
              <li key={child.to}>
                <NavLink
                  onClick={onNavigate}
                  to={child.to}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm ${isActive ? "text-sky-300" : "text-slate-200/90 hover:text-white"}`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <NavLink
        onClick={onNavigate}
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          `block border-b border-white/10 px-3 py-2.5 text-[15px] ${isActive ? "text-sky-400" : "text-white hover:text-sky-400"}`
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy-950 py-2 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-5">
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/assets/National_Institute_of_Technology,_Jamshedpur_Logo.png"
            alt="NIT Jamshedpur"
            className="h-14 w-auto brightness-0 invert"
          />
          <span className="leading-none text-white">
            <span className="block font-display text-[22px] font-bold tracking-tight">
              {SITE.shortName}
            </span>
            <span className="mt-1 block text-[13px] text-white/90">
              NIT Jamshedpur
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:block">
          <ul className="flex max-w-4xl flex-wrap items-center justify-end">
            {NAV_LINKS.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mt-2 border-t border-white/10 bg-navy-950 px-4 pb-3 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
