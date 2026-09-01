import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import { AWARDS } from "../data/dates";

export default function Awards() {
  return (
    <div>
      <PageHeader
        eyebrow="Recognition"
        title="Awards"
        subtitle="WIE-RISE 2027 will recognize exceptional contributions and innovations in smart engineering."
      />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="flex flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-900/10 text-navy-900">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15a5 5 0 100-10 5 5 0 000 10zm0 0v6m-4-3h8"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg tracking-wide text-navy-950">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {a.description}
              </p>
              {/* <p className="mt-4 font-display text-2xl text-sky-600">{a.prize}</p> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
