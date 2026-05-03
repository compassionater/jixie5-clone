import { useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'

export default function HeroBanner() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden" style={{ height: '280px' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d4f8b] via-primary to-[#2980b9]" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full bg-white opacity-[0.05]" />
      <div className="absolute -left-10 -bottom-10 w-[200px] h-[200px] rounded-full bg-white opacity-[0.05]" />
      <div className="absolute right-[20%] top-[15%] w-[120px] h-[120px] rounded-full bg-white opacity-[0.03]" />

      {/* Content */}
      <div className="relative w-container mx-auto flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-[32px] font-bold mb-3 tracking-wider drop-shadow-sm">
          专注机械，所以专业
        </h1>
        <p className="text-[15px] text-white/80 mb-8 tracking-wide">
          海量机械图纸、三维模型、CAD资源免费下载
        </p>

        {/* Search */}
        <div className="w-[700px]">
          <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-2">
            <SearchBox
              large
              onSearch={(keyword) => navigate(`/search?keyword=${keyword}`)}
            />
          </div>
        </div>

        {/* Hot keywords */}
        <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
          <span className="text-white/50">热门搜索：</span>
          {['减速器', '液压缸', '机械手', '齿轮泵', '凸轮机构', '3D打印'].map((word) => (
            <button
              key={word}
              onClick={() => navigate(`/search?keyword=${word}`)}
              className="hover:text-white transition-colors hover:underline"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
