import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SITE } from '../data/site'

const INSTRUCTIONS = [
  'The registered author or presenter must be present online during the scheduled session.',
  'All authors and co-authors are invited to join the conference virtually.',
  'Presentations must be delivered in English.',
  'Use the official WIE-RISE template or any standard PowerPoint format for your presentation and MP4 video.',
  'Prepare a recorded MP4 video (maximum 10 minutes) ensuring the PPT is clearly visible.',
  'The WIE-RISE team will play the submitted video during the assigned session, followed by a live Q&A segment.',
  'Ensure the video link shared via Google Drive has appropriate access permissions.',
  'Presentations exceeding 10 minutes will not be accepted.',
  'Participants must unmute only during the Q&A session; camera is optional during playback but mandatory during Q&A.',
  'Join at least 10 minutes before your session using a desktop/laptop for the best experience.',
  'A scanned copy of the paid registration invoice will be sent via email within ten days after the conference.',
  'The presenting author will receive the e-certificate within ten days after the event.',
]

export default function ConferenceProgram() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Conference Program" subtitle="Submission of PPT and MP4 files for WIE-RISE 2027" />
      <Container className="py-16">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <strong>Note:</strong> Please submit your presentation materials (PPT & MP4) before{' '}
          <strong>15 March 2027</strong> to ensure smooth inclusion in the conference schedule.
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-display text-lg tracking-wide text-navy-950">Google Form Submission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Submit the link to your MP4 video presentation (maximum 10 minutes) and upload your PPT file
              using the official Google Form.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-display text-lg tracking-wide text-navy-950">PPT Template</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Use the official WIE-RISE template (or any standard template) — ensure all slides are clearly
              visible in your recorded video.
            </p>
          </div>
        </div>

        <h3 className="mt-16 font-display text-xl tracking-wide text-navy-950">On the Day of Virtual Presentation</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {INSTRUCTIONS.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-600">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-slate-500">
          A detailed session-by-session schedule will be published closer to the event. For queries, contact{' '}
          <a href={`mailto:${SITE.emails.namrata}`} className="font-semibold text-navy-700 hover:underline">
            {SITE.emails.namrata}
          </a>
          .
        </p>
      </Container>
    </div>
  )
}
