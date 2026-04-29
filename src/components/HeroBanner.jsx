import SearchBox from './SearchBox'

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden" style={{ height: '260px' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d4f8b] via-primary to-[#2980b9]" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Content */}
      <div className="relative w-container mx-auto flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl font-bold mb-3 tracking-wider">
          专注机械，所以专业
        </h1>
        <p className="text-base text-white/80 mb-8">
          海量机械图纸、三维模型、CAD资源免费下载
        </p>

        {/* Search */}
        <div className="w-[700px]">
          <div className="bg-white rounded-lg shadow-xl p-1.5">
            <SearchBox
              large
              onSearch={(keyword) => console.log('搜索:', keyword)}
            />
          </div>
        </div>

        {/* Hot keywords */}
        <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
          <span>热门搜索：</span>
          {['减速器', '液压缸', '机械手', '齿轮泵', '凸轮机构', '3D打印'].map((word) => (
            <a
              key={word}
              href={`/search?keyword=${word}`}
              className="hover:text-white transition-colors"
            >
              {word}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
