interface ContactButtonProps {
  className?: string
}

/** 药丸圆角多色渐变按钮：内阴影 + 白色 2px 外描边（偏移 -3px） */
export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80 sm:px-7 sm:py-3.5 sm:text-sm ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          'inset 0 2px 8px rgba(255, 255, 255, 0.35), inset 0 -6px 14px rgba(0, 0, 0, 0.35)',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      联系我
    </button>
  )
}
