import Navbar from '@/components/navbar'
import Portfolio from '@/app/page'
import KgeCaseStudy from '@/KgeCaseStudy'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  return (
    <>
      <Navbar />
      {path === '/kge-reproduction' ? <KgeCaseStudy /> : <Portfolio />}
    </>
  )
}
