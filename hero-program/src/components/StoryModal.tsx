import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Story } from '../data/stories'

interface StoryModalProps {
  story: Story | null
  onClose: () => void
}

export default function StoryModal({ story, onClose }: StoryModalProps) {
  // ESC 关闭 + 锁定滚动
  useEffect(() => {
    if (!story) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [story, onClose])

  return (
    <AnimatePresence>
      {story && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#D7E2EA]/20 bg-[#161616] shadow-2xl"
          >
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              aria-label="关闭"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-[#D7E2EA] backdrop-blur transition-colors hover:bg-black/60 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
              </svg>
            </button>

            {/* 顶部图片 */}
            <div className="relative w-full overflow-hidden rounded-t-3xl">
              <img
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover sm:h-72 md:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
            </div>

            {/* 正文内容 */}
            <div className="px-6 pb-8 pt-4 sm:px-10 sm:pb-10">
              <span className="text-xs font-light uppercase tracking-[0.25em] text-[#D7E2EA]/50">
                Chapter {story.number}
              </span>
              <h3 className="hero-heading mt-2 text-3xl font-black uppercase leading-tight sm:text-4xl">
                {story.title}
              </h3>
              <p className="mt-5 text-base font-light leading-relaxed text-[#D7E2EA]/90 sm:text-lg">
                {story.content}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
