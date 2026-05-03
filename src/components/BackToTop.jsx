import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-11 h-11 bg-white border border-border-color rounded-full shadow-lg
        flex items-center justify-center text-text-sub hover:text-primary hover:border-primary
        hover:shadow-xl transition-all z-50 group"
      title="回到顶部"
    >
      <FiArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  )
}
