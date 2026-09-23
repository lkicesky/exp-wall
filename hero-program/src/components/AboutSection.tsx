import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import FadeIn from './FadeIn'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 sm:gap-14"
    >
      <FadeIn>
        <h2 className="hero-heading text-center font-black uppercase leading-none text-[clamp(3rem,8vw,6.5rem)]">
          About me
        </h2>
      </FadeIn>

      <AnimatedText
        text="这里放你的自我介绍啊喂"
        className="max-w-[560px] text-center text-lg font-light leading-relaxed text-[#D7E2EA] sm:text-xl"
      />

      <FadeIn delay={0.2} y={10}>
        <ContactButton />
      </FadeIn>
    </section>
  )
}
