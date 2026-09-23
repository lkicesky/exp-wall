import { portrait } from '../data/images'
import { stories, type Story } from '../data/stories'
import ContactButton from './ContactButton'
import FadeIn from './FadeIn'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

interface HeroSectionProps {
  onSelectStory: (story: Story) => void
}

export default function HeroSection({ onSelectStory }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex h-screen flex-col overflow-x-clip">
      {/* 导航：延迟 0 */}
      <FadeIn delay={0}>
        <header className="flex items-center justify-between px-6 py-8 sm:px-10">
          <span className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]">木木Woody</span>
          <nav className="flex items-center gap-6 sm:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      </FadeIn>

      {/* 大标题：延迟 0.15 / y40；人像：延迟 0.6 / y30 */}
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-4 sm:gap-12">
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden">
          <h1 className="hero-heading whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            木木Woody之家
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} y={30}>
          <button
            onClick={() => onSelectStory(stories[0])}
            title="点击阅读故事"
            className="group relative block cursor-pointer overflow-hidden rounded-3xl outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60"
          >
            <img
              src={portrait}
              alt="木木Woody 人像"
              className="h-64 w-52 rounded-3xl object-cover sm:h-80 sm:w-64"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10 text-left text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              第一章 · 山城的清晨
            </span>
          </button>
        </FadeIn>
      </div>

      {/* 底部左右布局：左侧小字 0.35 / y20，右侧按钮 0.5 / y20 */}
      <div className="flex items-end justify-between px-6 pb-8 sm:px-10 sm:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[200px] text-xs font-light uppercase leading-relaxed tracking-widest text-[#D7E2EA] sm:text-sm">
            Portfolio — 2026
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
