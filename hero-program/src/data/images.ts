import { stories, portraitImage } from './stories'

export { portraitImage as portrait, stories }

/** 横向滚动条：全部 26 张故事图，分两行各 13 张 */
export const marqueeImages = stories.map((s) => s.image)
export const marqueeRow1 = marqueeImages.slice(0, 13)
export const marqueeRow2 = marqueeImages.slice(13)
