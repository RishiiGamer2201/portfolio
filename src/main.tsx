import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import { MotionConfig } from 'framer-motion'
import 'lenis/dist/lenis.css'
import '@/app/globals.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={{ autoRaf: true, anchors: { offset: -72 } }}>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </ReactLenis>
  </StrictMode>,
)
