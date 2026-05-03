import { Link, useNavigate } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ResourceSection from '../components/ResourceSection'
import { models3D, cadDrawings, softwareTools, tutorials } from '../mock/data'
import { FiBox, FiFileText, FiTool, FiBookOpen, FiStar, FiTrendingUp } from 'react-icons/fi'

// 快捷分类入口
function QuickCategories() {
  const navigate = useNavigate()
  const categories = [
    { icon: <FiBox size={28} />, label: '三维模型', desc: 'SolidWorks/UG/Catia', color: '#1a6bc4', path: '/category/3D' },
    { icon: <FiFileText size={28} />, label: '机械图纸', desc: 'CAD二维图纸', color: '#27ae60', path: '/category/cad' },
    { icon: <FiTool size={28} />, label: '软件插件', desc: '工具/插件下载', color: '#e67e22', path: '/category/soft' },
    { icon: <FiBookOpen size={28} />, label: '教程论坛', desc: '视频/图文教程', color: '#8e44ad', path: '/category/jiaocheng' },
    { icon: <FiStar size={28} />, label: '课程设计', desc: '毕业设计参考', color: '#e74c3c', path: '/category/keshe' },
    { icon: <FiTrendingUp size={28} />, label: '排行榜', desc: '热门资源TOP', color: '#2c3e50', path: '/category/rank' },
  ]

  return (
    <section className="py-8 bg-gray-bg">
      <div className="w-container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate(cat.path)}
              className="bg-white rounded-xl p-5 text-center cursor-pointer
                hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center
                  group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${cat.color}12`, color: cat.color }}
              >
                {cat.icon}
              </div>
              <div className="font-medium text-text-main text-sm">{cat.label}</div>
              <div className="text-xs text-text-light mt-1">{cat.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// 软件推荐
function SoftwareSection() {
  const colors = ['#1a6bc4', '#27ae60', '#e67e22', '#8e44ad', '#e74c3c', '#2c3e50']

  return (
    <section className="py-10 bg-white">
      <div className="w-container mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2.5">
            <span className="w-[3px] h-5 bg-accent rounded-full inline-block" />
            热门软件推荐
          </h2>
          <Link to="/category/soft" className="text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-0.5">
            查看更多
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {softwareTools.map((tool, i) => (
            <Link
              key={tool.id}
              to={`/resource/${tool.id}`}
              className="bg-gray-bg rounded-xl p-4 text-center
                hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-2.5 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: colors[i % colors.length] }}
              >
                {tool.icon.charAt(0).toUpperCase()}
              </div>
              <div className="text-sm text-text-main group-hover:text-primary transition-colors line-clamp-1">
                {tool.title}
              </div>
              <div className="text-xs text-text-light mt-1.5">
                {tool.downloads.toLocaleString()} 次下载
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// 教程推荐
function TutorialSection() {
  return (
    <section className="py-10 bg-gray-bg">
      <div className="w-container mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2.5">
            <span className="w-[3px] h-5 bg-[#8e44ad] rounded-full inline-block" />
            推荐教程
          </h2>
          <Link to="/category/jiaocheng" className="text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-0.5">
            查看更多
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tutorials.map((tut) => (
            <Link
              key={tut.id}
              to={`/resource/${tut.id}`}
              className="bg-white rounded-xl p-5 flex items-center gap-4
                hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <FiBookOpen size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors line-clamp-1">
                  {tut.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-text-light mt-2">
                  <span>{tut.chapters} 章节</span>
                  <span className="w-px h-3 bg-border-color" />
                  <span>{tut.views.toLocaleString()} 次学习</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <QuickCategories />

      {/* 精品机械模型 - 轮播 */}
      <ResourceSection
        title="精品机械模型"
        subtitle="精选推荐 · 高质量三维模型"
        items={models3D}
        link="/category/3D"
        variant="carousel"
        columns={5}
        pageSize={10}
      />

      {/* CAD图纸 - 网格 */}
      <ResourceSection
        title="机械CAD图纸应用案例"
        subtitle="汇集各类机械工程图纸，涵盖全部工业领域"
        items={cadDrawings}
        link="/category/cad"
        variant="grid"
        columns={4}
        bgClass="bg-gray-bg"
      />

      <SoftwareSection />
      <TutorialSection />
    </div>
  )
}
