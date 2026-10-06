import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <main className="w-full min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <section className="w-full py-24 bg-neutral-950 border-t border-neutral-900 flex flex-col items-center justify-center text-center px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs tracking-widest uppercase text-neutral-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Interactive Sequence
        </div>
        <p className="text-sm text-neutral-400 font-light max-w-md">
          Scroll-driven journey completed. Scroll back up to reverse the interactive supercar experience.
        </p>
      </section>
    </main>
  )
}
