import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBox({ large = false, onSearch }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      onSearch?.(keyword.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex items-center ${large ? 'w-[700px]' : 'w-[320px]'}`}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="请输入搜索关键词"
        className={`
          flex-1 border border-primary rounded-l-lg outline-none
          text-text-main placeholder:text-text-light
          transition-all duration-200
          focus:shadow-[0_0_0_2px_rgba(26,107,196,0.2)]
          ${large
            ? 'h-[52px] px-5 text-base'
            : 'h-[36px] px-3 text-sm'
          }
        `}
      />
      <button
        type="submit"
        className={`
          bg-primary text-white rounded-r-lg
          hover:bg-primary-dark transition-colors
          flex items-center justify-center
          ${large ? 'h-[52px] w-[80px] text-base' : 'h-[36px] w-[60px] text-sm'}
        `}
      >
        {large ? '搜索' : <FiSearch size={18} />}
      </button>
    </form>
  )
}
