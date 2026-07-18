import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SITE } from '../data/site'

const IEEE_TEMPLATE_URL = 'https://www.ieee.org/conferences/publishing/templates.html'

const STEPS = [
  {
    title: 'Step 1 — Camera-Ready Submission',
    body: (
      <>
        <p>
          Authors must submit a camera-ready version per the conference guidelines on or before{' '}
          <strong>10 February 2027</strong>. Plagiarism must be less than 20% (checked with standard software
          such as Turnitin) before submission, to confirm inclusion in IEEE Xplore. If plagiarism exceeds 20%,
          the paper will not be forwarded for publication in IEEE Xplore.
        </p>
        <p className="mt-3">
          The camera-ready submission must strictly follow the{' '}
          <a href={IEEE_TEMPLATE_URL} target="_blank" rel="noreferrer" className="font-semibold text-navy-700 hover:underline">
            IEEE Template
          </a>{' '}
          and must be within six pages, or it will not be submitted for further consideration to IEEE Xplore.
        </p>
      </>
    ),
  },
  {
    title: 'Step 2 — Registration & Copyright Notice',
    body: (
      <>
        <p>
          At least one author must complete a Full Author Registration and present the paper at WIE-RISE 2027
          for it to be considered for the IEEE Xplore Digital Library. Each registration is valid for only one
          (1) participant. Co-authors who also wish to attend and receive a certificate must register
          separately.
        </p>
        <p className="mt-3">
          The final manuscript must have the copyright clearance code notice at the bottom of the first page,
          per the{' '}
          <a href={IEEE_TEMPLATE_URL} target="_blank" rel="noreferrer" className="font-semibold text-navy-700 hover:underline">
            IEEE LaTeX/Word template
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: 'Step 3 — IEEE Copyright Form',
    body: (
      <p>
        The IEEE Copyright Form must be signed and uploaded in the corresponding section — accessible upon
        login to your CMT account against the accepted paper.
      </p>
    ),
  },
  {
    title: 'Step 4 — IEEE PDF eXpress™',
    body: (
      <>
        <p className="font-semibold text-navy-950">Before Creating a PDF:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Add the copyright notice to the bottom of the first page of your source document.</li>
          <li>Proofread your source document thoroughly to confirm it requires no revision.</li>
        </ul>
        <p className="mt-4 font-semibold text-navy-950">Creating your PDF eXpress™ Account:</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Log in to the IEEE PDF eXpress™ site.</li>
          <li>
            First-time users: select <em>New Users – Click Here</em>, then enter <strong>66440X</strong> for
            the Conference ID, your email address, and a password.
          </li>
          <li>Continue entering information as prompted.</li>
        </ol>
        <p className="mt-3">
          An online confirmation will be displayed, and a confirmation email will be sent verifying your
          account setup. Previous users should follow the same steps but use the same password as previous
          conferences, and verify their contact information is valid.
        </p>
      </>
    ),
  },
  {
    title: 'Step 5 — IEEE Copyright (eCF) Transfer',
    body: (
      <>
        <p>
          To enable your paper to appear in IEEE Xplore, the corresponding/submitting author must transfer
          copyright to IEEE via eCF:
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Log in to your CMT Paper Submission Portal and click the IEEE copyright link.</li>
          <li>Click "Click here to redirect to the IEEE copyright website" to transfer eCF.</li>
          <li>Follow Steps 1–5 to complete the IEEE Copyright Transfer process.</li>
          <li>Download the completed Copyright Form and save it as a PDF.</li>
          <li>Upload this PDF back into your CMT Paper Submission Portal.</li>
        </ol>
        <p className="mt-3">A separate copyright transfer is required for each paper.</p>
      </>
    ),
  },
]

export default function ManuscriptSubmission() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Manuscript Submission" />
      <Container className="py-16">
        <div className="space-y-4 text-justify leading-relaxed text-slate-600">
          <p>
            Prospective authors are invited to electronically submit regular papers of their work in English.
            Submission is limited to 6 full pages, including title, authors, affiliations, figures, and
            references (maximum size 2MB). Up to 2 additional pages are allowed —{' '}
            <strong>each additional page incurs a fee of ₹2,500 / $30</strong> — with a full paper capped at 8
            pages including additional pages. Manuscripts must use the IEEE two-column format template and be
            submitted as PDF only. The template can be downloaded from the{' '}
            <a href={IEEE_TEMPLATE_URL} target="_blank" rel="noreferrer" className="font-semibold text-navy-700 hover:underline">
              official IEEE website
            </a>
            .
          </p>
          <p>
            Accepted and presented papers will be published in the conference proceedings, and submitted for
            possible inclusion in the IEEE Xplore online digital library.
          </p>
        </div>

        <h2 className="mt-16 font-display text-2xl tracking-wide text-navy-950">
          Final Paper Submission Instructions
        </h2>

        <div className="mt-8 space-y-6">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display text-base tracking-wide text-navy-950">{step.title}</h3>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 p-8">
          <h3 className="font-display text-lg tracking-wide text-navy-950">Further</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Prepare your manuscript according to the guidelines above.</li>
            <li>Submit your manuscript through the online submission portal.</li>
            <li>
              Download the{' '}
              <a href={IEEE_TEMPLATE_URL} target="_blank" rel="noreferrer" className="font-semibold text-navy-700 hover:underline">
                IEEE Template
              </a>
              .
            </li>
            <li>Ensure all required documents are included in the submission.</li>
          </ol>
          <p className="mt-4 text-sm text-slate-600">
            For more details, contact{' '}
            <a href={`mailto:${SITE.emails.nishant}`} className="font-semibold text-navy-700 hover:underline">
              {SITE.emails.nishant}
            </a>{' '}
            or{' '}
            <a href={`mailto:${SITE.emails.namrata}`} className="font-semibold text-navy-700 hover:underline">
              {SITE.emails.namrata}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  )
}
