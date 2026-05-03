import { Link } from 'react-router-dom'

export default function Footer() {
  const links = [
    { name: 'SolidWorks', href: '/search?keyword=SolidWorks' },
    { name: 'AutoCAD', href: '/search?keyword=AutoCAD' },
    { name: 'UG/NX', href: '/search?keyword=UG' },
    { name: 'ProE/Creo', href: '/search?keyword=Creo' },
    { name: 'CATIA', href: '/search?keyword=CATIA' },
    { name: '机械图纸', href: '/category/cad' },
    { name: '三维模型', href: '/category/3D' },
    { name: '课程设计', href: '/category/keshe' },
    { name: '减速器', href: '/search?keyword=减速器' },
    { name: '液压缸', href: '/search?keyword=液压' },
    { name: '机械手', href: '/search?keyword=机械手' },
    { name: '齿轮泵', href: '/search?keyword=齿轮' },
    { name: '夹具设计', href: '/search?keyword=夹具' },
    { name: '模具设计', href: '/search?keyword=模具' },
  ]

  return (
    <footer className="bg-[#2c3e50] text-white/70">
      {/* Links */}
      <div className="w-container mx-auto py-8">
        <div className="border-b border-white/10 pb-6">
          <h3 className="text-sm text-white/50 mb-3">友情链接 / 热门分类</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">机</span>
              </div>
              <span className="text-white text-sm font-medium">机械5</span>
            </Link>
            <div className="text-xs text-white/40 leading-relaxed">
              <p>专注机械行业设计 | 机械图纸 | 三维模型 | CAD资源</p>
              <p className="mt-1">
                本站所有资源均来自网络，仅供学习参考，请勿用于商业用途
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link to="/" className="hover:text-white transition-colors">关于我们</Link>
            <Link to="/" className="hover:text-white transition-colors">联系方式</Link>
            <Link to="/" className="hover:text-white transition-colors">隐私政策</Link>
            <Link to="/" className="hover:text-white transition-colors">服务条款</Link>
          </div>
        </div>

        <div className="text-center text-xs text-white/30 mt-4 pt-4 border-t border-white/10">
          &copy; {new Date().getFullYear()} 机械5 (jixie5.com) All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
