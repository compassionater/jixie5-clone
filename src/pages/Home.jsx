import HeroBanner from '../components/HeroBanner'
import ResourceSection from '../components/ResourceSection'
import { models3D, cadDrawings, softwareTools, tutorials } from '../mock/data'
import { FiBox, FiFileText, FiTool, FiBookOpen, FiStar, FiTrendingUp } from 'react-icons/fi'

// 快捷分类入口
function QuickCategories() {
  const categories = [
    { icon: <FiBox size={28} />, label: '三维模型', desc: 'SolidWorks/UG/Catia', color: '#1a6bc4', href: '/3D/' },
    { icon: <FiFileText size={28} />, label: '机械图纸', desc: 'CAD二维图纸', color: '#27ae60', href: '/cad/' },
    { icon: <FiTool size={28} />, label: '软件插件', desc: '工具/插件下载', color: '#e67e22', href: '/soft/' },
    { icon: <FiBookOpen size={28} />, label: '教程论坛', desc: '视频/图文教程', color: '#8e44ad', href: '/jiaocheng/' },
    { icon: <FiStar size={28} />, label: '课程设计', desc: '毕业设计参考', color: '#e74c3c', href: '/keshe/' },
    { icon: <FiTrendingUp size={28} />, label: '排行榜', desc: '热门资源TOP', color: '#2c3e50', href: '/rank/' },
  ]

  return (
    <section className="py-8 bg-gray-bg">
      <div className="w-container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="bg-white rounded-lg p-5 text-center
                hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center
                  group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
              >
                {cat.icon}
              </div>
              <div className="font-medium text-text-main text-sm">{cat.label}</div>
              <div className="text-xs text-text-light mt-1">{cat.desc}</div>
            </a>
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
    <section className="py-8 bg-white">
      <div className="w-container mx-auto">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full inline-block" />
            热门软件推荐
          </h2>
          <a href="/soft/" className="text-sm text-primary hover:text-primary-dark transition-colors">
            查看更多 &gt;
          </a>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {softwareTools.map((tool, i) => (
            <a
              key={tool.id}
              href={`/soft/${tool.id}`}
              className="bg-gray-bg rounded-lg p-4 text-center
                hover:shadow-md hover:bg-white transition-all group"
            >
              <div
                className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: colors[i % colors.length] }}
              >
                {tool.icon.charAt(0).toUpperCase()}
              </div>
              <div className="text-sm text-text-main group-hover:text-primary transition-colors line-clamp-1">
                {tool.title}
              </div>
              <div className="text-xs text-text-light mt-1">
                {tool.downloads.toLocaleString()} 次下载
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// 教程推荐
function TutorialSection() {
  return (
    <section className="py-8 bg-gray-bg">
      <div className="w-container mx-auto">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            <span className="w-1 h-5 bg-[#8e44ad] rounded-full inline-block" />
            推荐教程
          </h2>
          <a href="/jiaocheng/" className="text-sm text-primary hover:text-primary-dark transition-colors">
            查看更多 &gt;
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tutorials.map((tut) => (
            <a
              key={tut.id}
              href={`/tutorial/${tut.id}`}
              className="bg-white rounded-lg p-4 flex items-center gap-4
                hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                <FiBookOpen size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors line-clamp-1">
                  {tut.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-text-light mt-2">
                  <span>{tut.chapters} 章节</span>
                  <span>{tut.views.toLocaleString()} 次学习</span>
                </div>
              </div>
            </a>
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
        link="/3D/"
        variant="carousel"
        columns={5}
        pageSize={10}
      />

      {/* CAD图纸 - 网格 */}
      <section className="py-8 bg-gray-bg">
        <ResourceSection
          title="机械CAD图纸应用案例"
          subtitle="汇集各类机械工程图纸，涵盖全部工业领域"
          items={cadDrawings}
          link="/cad/"
          variant="grid"
          columns={4}
        />
      </section>

      <SoftwareSection />
      <TutorialSection />
    </div>
  )
}
