import { Link } from "react-router-dom";
import { FOOTER_LINKS, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/90">
      <div className="mx-auto max-w-[1220px] px-4 pt-14 pb-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/assets/National_Institute_of_Technology,_Jamshedpur_Logo.png"
                alt="NIT Jamshedpur"
                className="h-16 w-auto brightness-0 invert"
              />
              <img
                src="/assets/nitlogosc.png"
                alt="WIE-RISE"
                className="h-14 w-auto rounded-md"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              {SITE.fullName}, organized by the {SITE.organizer}, {SITE.dates}.
            </p>
            <div className="mt-6">
              <h5 className="font-display text-sm font-semibold text-sky-400">
                Visitors
              </h5>
              <a
                href="https://info.flagcounter.com/NpLz"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block"
              >
                <img
                  src="https://s01.flagcounter.com/count2/NpLz/bg_1C1A5C/txt_FFD84D/border_1C1A5C/columns_4/maxflags_12/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
                  alt="Flag Counter"
                />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold text-sky-400">
              Quick Links
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.left.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/85 transition hover:text-sky-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold text-sky-400">
              Resources
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.right.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/85 transition hover:text-sky-400"
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
                  className="text-white/85 transition hover:text-sky-400"
                >
                  NIT Jamshedpur Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/60 pt-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="inline-flex rounded bg-white px-3 py-2">
            <img
              src="/assets/IEEEKSpng.png"
              alt="IEEE Kolkata Section"
              className="h-12 w-auto"
            />
          </div>
          <div className="space-y-1.5 text-[13px] text-white/90 sm:text-right">
            <p>{SITE.institute}</p>
            <p>{SITE.venueAddress}</p>
            <p>
              © {SITE.shortName}. All rights reserved. | Contact us :{" "}
              <a
                href={`mailto:${SITE.emails.namrata}`}
                className="hover:text-sky-400"
              >
                {SITE.emails.namrata}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
