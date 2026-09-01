import { Link } from "react-router-dom";
import { FOOTER_LINKS, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/NITB&WLogo.png"
                alt="NIT Jamshedpur"
                className="h-12 w-auto brightness-0 invert"
              />
              <img
                src="/assets/nitlogosc.png"
                alt="Organizer"
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {SITE.fullName}, organized by the {SITE.organizer}, {SITE.dates}.
            </p>
          </div>

          <div>
            <h5 className="font-display text-sm tracking-wide text-white">
              Quick Links
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.left.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-400 transition hover:text-sky-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm tracking-wide text-white">
              Resources
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.right.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-400 transition hover:text-sky-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.nitjsr.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-sky-400"
                >
                  NIT Jamshedpur Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {SITE.shortName}. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a
              href={`mailto:${SITE.emails.namrata}`}
              className="text-slate-400 hover:text-sky-400"
            >
              {SITE.emails.namrata}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
