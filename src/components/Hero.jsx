import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Stats from './Stats'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(containerRef)

    const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    loadTl
      .fromTo('.hero-badge', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo('.hero-headline', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
      .fromTo('.hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo('.hero-visual-stage', { opacity: 0, y: 25, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-main-visual-box', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo('.stat-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }, '-=0.4')

    mm.add('(min-width: 768px)', () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          pin: heroRef.current,
          anticipatePin: 1
        }
      })

      scrollTl
        .fromTo(
          '.hero-main-visual',
          {
            x: -200,
            y: 4,
            rotation: -2.5,
            scale: 0.98
          },
          {
            x: 0,
            y: -10,
            rotation: 0,
            scale: 1.04,
            ease: 'power1.out'
          }
        )
        .to('.hero-main-visual', {
          x: 200,
          y: 0,
          rotation: 2.5,
          scale: 1,
          ease: 'power1.in'
        })
    })

    mm.add('(max-width: 767px)', () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          pin: heroRef.current,
          anticipatePin: 1
        }
      })

      scrollTl
        .fromTo(
          '.hero-main-visual',
          {
            x: -45,
            y: 2,
            rotation: -1.5,
            scale: 0.98
          },
          {
            x: 0,
            y: -5,
            rotation: 0,
            scale: 1.03,
            ease: 'power1.out'
          }
        )
        .to('.hero-main-visual', {
          x: 45,
          y: 0,
          rotation: 1.5,
          scale: 1,
          ease: 'power1.in'
        })
    })

    return () => {
      loadTl.kill()
      mm.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full min-h-[220vh] bg-neutral-950">
      <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-between py-6 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-neutral-950 text-white overflow-hidden">
        <header className="w-full max-w-5xl flex flex-col items-center text-center space-y-3 sm:space-y-4 pt-2 sm:pt-4 z-10">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs tracking-widest uppercase text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Itzfizz Digital Studio
          </div>

          <h1 className="hero-headline text-lg sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.14em] sm:tracking-[0.22em] md:tracking-[0.3em] uppercase text-white leading-tight max-w-full">
            <span className="inline-block">W E L C O M E</span>{' '}
            <span className="inline-block">I T Z F I Z Z</span>
          </h1>

          <p className="hero-subtext text-xs sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed px-2">
            Crafting high-impact digital experiences and next-generation interactive web platforms.
          </p>
        </header>

        <div className="hero-visual-stage w-full max-w-4xl h-52 sm:h-64 md:h-72 lg:h-80 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-center relative overflow-hidden my-4 sm:my-6 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
          <div className="absolute w-72 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex items-center justify-center w-full h-full px-4 overflow-hidden">
            <div className="hero-main-visual-box flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/car.png`}
                alt="McLaren 720S supercar top view in papaya orange"
                className="hero-main-visual max-h-28 sm:max-h-44 md:max-h-52 lg:max-h-56 max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] filter select-none pointer-events-none will-change-transform"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-center pb-2 sm:pb-4 z-10">
          <Stats />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.03),transparent_65%)] pointer-events-none" />
      </section>
    </div>
  )
}
