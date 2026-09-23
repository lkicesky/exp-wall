import { useEffect, useRef, type RefObject } from 'react'
import { marqueeRow1, marqueeRow2 } from '../data/images'
import { stories, type Story } from '../data/stories'

interface MarqueeRowProps {
  images: string[]
  rowIndex: number
  rowRef: RefObject<HTMLDivElement>
  onSelectStory: (story: Story) => void
}

function MarqueeRow({ images, rowIndex, rowRef, onSelectStory }: MarqueeRowProps) {
  const tripled = [...images, ...images, ...images]

  const findStory = (imgSrc: string): Story | undefined => {
    // rowIndex 0 -> stories[0..12], rowIndex 1 -> stories[13..25]
    const base = rowIndex * 13
    const idx = images.indexOf(imgSrc)
    return stories[base + idx]
  }

  return (
    <div
      ref={rowRef}
      className="flex w-max gap-3 will-change-transform"
      style={{ transform: 'translateX(-200px)' }}
    >
      {tripled.map((src, i) => {
        const story = findStory(src)
        return (
          <button
            key={`${i}-${src}`}
            onClick={() => story && onSelectStory(story)}
            title={story ? `第 ${story.number} 章 · ${story.title}` : undefined}
            className="group relative h-[270px] w-[420px] shrink-0 cursor-pointer overflow-hidden rounded-2xl outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60"
          >
            <img
              src={src}
              alt={story?.title ?? ''}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {story && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="block text-[10px] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60">
                  Chapter {story.number}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-[#D7E2EA]">
                  {story.title}
                </span>
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

interface MarqueeSectionProps {
  onSelectStory: (story: Story) => void
}

export default function MarqueeSection({ onSelectStory }: MarqueeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      // 滚动偏移公式：(scrollY - sectionTop + innerHeight) * 0.3
      const offset = (window.scrollY - section.offsetTop + window.innerHeight) * 0.3
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(-${offset - 200}px)`
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden bg-[#0C0C0C] py-16 sm:py-24">
      <div className="flex flex-col gap-3">
        {/* 第 1 行：前 13 张，向右 */}
        <MarqueeRow images={marqueeRow1} rowIndex={0} rowRef={row1Ref} onSelectStory={onSelectStory} />
        {/* 第 2 行：后 13 张，向左 */}
        <MarqueeRow images={marqueeRow2} rowIndex={1} rowRef={row2Ref} onSelectStory={onSelectStory} />
      </div>
    </section>
  )
}
