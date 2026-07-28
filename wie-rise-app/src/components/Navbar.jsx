import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../data/site";

function DesktopItem({ item }) {
  if (item.children) {
    return (
      <li className="group relative">
        <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:bg-white/10 hover:text-white">
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
        <ul className="invisible absolute left-0 top-full z-30 min-w-[240px] translate-y-1 rounded-xl bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-navy-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
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
          `block rounded-md px-3 py-2 text-sm font-semibold transition ${
            isActive
              ? "bg-white/15 text-white"
              : "text-slate-100/90 hover:bg-white/10 hover:text-white"
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
          className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-slate-100 hover:bg-white/10"
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
          `block rounded-md px-3 py-2.5 text-sm font-semibold ${isActive ? "bg-white/15 text-white" : "text-slate-100 hover:bg-white/10"}`
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-navy-900/95 py-1.5 shadow-lg shadow-black/20 backdrop-blur"
          : "border-transparent bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 py-3"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/nitlogosc.png"
            alt="NIT Jamshedpur"
            className="h-10 w-auto"
          />
          <span className="hidden font-display text-lg tracking-wide text-white sm:block">
            {SITE.shortName}
          </span>
        </NavLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
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
        <nav className="mx-4 mt-3 rounded-xl bg-navy-900/98 p-2 shadow-2xl lg:hidden">
          <ul className="flex flex-col gap-0.5">
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
