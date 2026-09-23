import { stories, type Story } from '../data/stories'
import FadeIn from './FadeIn'

interface ProjectsSectionProps {
  onSelectStory: (story: Story) => void
}

export default function ProjectsSection({ onSelectStory }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-24 rounded-t-[3rem] bg-[#0C0C0C] px-6 pb-24 pt-24 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center sm:mb-20">
          <h2 className="hero-heading text-center font-black uppercase leading-none text-[clamp(3rem,8vw,6.5rem)]">
            经历墙
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#D7E2EA]/60">
            二十六个章节，一段从山城走到今天的路。点击任意图片，阅读那个时刻的故事。
          </p>
        </FadeIn>

        {/* 响应式画廊网格 */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onSelectStory(story)}
              title={`第 ${story.number} 章 · ${story.title}`}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60"
            >
              <img
                src={story.image}
                alt={story.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* 悬浮信息 */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
                <span className="text-[10px] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60">
                  {story.number}
                </span>
                <span className="mt-0.5 line-clamp-2 text-sm font-medium leading-snug text-[#D7E2EA]">
                  {story.title}
                </span>
              </div>
              {/* 序号角标 */}
              <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-light tracking-wider text-[#D7E2EA]/80 backdrop-blur-sm">
                {story.number}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
