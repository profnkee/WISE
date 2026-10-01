import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import GeneralChair from './pages/GeneralChair'
import OrganizingCommittee from './pages/OrganizingCommittee'
import CallForPapers from './pages/CallForPapers'
import SpecialSessions from './pages/SpecialSessions'
import SpecialSessionPapers from './pages/SpecialSessionPapers'
import ImportantDates from './pages/ImportantDates'
import ManuscriptSubmission from './pages/ManuscriptSubmission'
import ConferenceProgram from './pages/ConferenceProgram'
import Speakers from './pages/Speakers'
import Awards from './pages/Awards'
import Sponsorship from './pages/Sponsorship'
import Registration from './pages/Registration'
import Contact from './pages/Contact'
import Venue from './pages/Venue'
import Support from './pages/Support'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="general-chair" element={<GeneralChair />} />
          <Route path="advisory-committee" element={<Navigate to="/organizing-committee?tab=advisory" replace />} />
          <Route path="organizing-committee" element={<OrganizingCommittee />} />
          <Route path="technical-program-committee" element={<Navigate to="/organizing-committee?tab=technical-program" replace />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="special-sessions" element={<SpecialSessions />} />
          <Route path="special-session-papers" element={<SpecialSessionPapers />} />
          <Route path="important-dates" element={<ImportantDates />} />
          <Route path="manuscript-submission" element={<ManuscriptSubmission />} />
          <Route path="conference-program" element={<ConferenceProgram />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="awards" element={<Awards />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="registration" element={<Registration />} />
          <Route path="venue" element={<Venue />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
