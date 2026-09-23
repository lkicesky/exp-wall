import { useState } from 'react'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import ProjectsSection from './components/ProjectsSection'
import StarfieldBackground from './components/StarfieldBackground'
import StoryModal from './components/StoryModal'
import type { Story } from './data/stories'

export default function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <StarfieldBackground />
      <HeroSection onSelectStory={setSelectedStory} />
      <MarqueeSection onSelectStory={setSelectedStory} />
      <AboutSection />
      <ProjectsSection onSelectStory={setSelectedStory} />
      <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
    </main>
  )
}
