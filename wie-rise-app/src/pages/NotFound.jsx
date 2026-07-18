import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl text-navy-900">404</p>
      <h1 className="mt-4 text-xl font-semibold text-navy-950">Page not found</h1>
      <p className="mt-2 text-slate-500">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-6 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110">
        Back to Home
      </Link>
    </Container>
  )
}
