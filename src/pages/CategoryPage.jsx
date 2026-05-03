import { useParams, Link } from 'react-router-dom'
import { models3D, cadDrawings, softwareTools, tutorials } from '../mock/data'
import ResourceCard from '../components/ResourceCard'
import { FiChevronRight, FiHome } from 'react-icons/fi'

const categoryMap = {
  '3D': {
    title: '三维模型',
    subtitle: 'SolidWorks / UG / Catia / Creo 等格式三维模型下载',
    items: models3D,
    columns: 4,
    tabs: ['全部', 'SolidWorks', 'ProE/Creo', 'UG/NX', 'CATIA', 'AutoCAD', '其他']
  },
  'cad': {
    title: '机械CAD图纸',
    subtitle: '汇集各类机械工程图纸，涵盖全部工业领域',
    items: cadDrawings,
    columns: 4,
    tabs: ['全部', '标准件', '减速器', '起重设备', '模具', '液压', '电气']
  },
  'soft': {
    title: '软件 / 插件',
    subtitle: '常用机械设计软件及实用插件下载',
    items: softwareTools.map(t => ({
      ...t,
      image: `https://picsum.photos/seed/${t.icon}/400/300`,
      date: '2026-01-15',
      author: '官方',
      size: '2.5GB',
    })),
    columns: 4,
    tabs: ['全部', 'AutoCAD', 'SolidWorks', 'UG/NX', 'ProE/Creo', 'CATIA']
  },
  'jiaocheng': {
    title: '教程论坛',
    subtitle: '视频/图文教程，从入门到精通',
    items: tutorials.map(t => ({
      ...t,
      image: `https://picsum.photos/seed/tut${t.id}/400/300`,
      date: '2026-02-20',
      author: '官方',
      size: '-',
      downloads: t.views,
    })),
    columns: 3,
    tabs: ['全部', 'AutoCAD', 'SolidWorks', 'UG/NX', 'ProE/Creo', 'CATIA']
  },
  'keshe': {
    title: '课程设计',
    subtitle: '毕业设计 / 课程设计参考资源',
    items: [...models3D.slice(0, 8), ...cadDrawings.slice(0, 4)],
    columns: 4,
    tabs: ['全部', '机械设计', '模具设计', '电气控制', '液压传动', '夹具设计']
  },
  'rank': {
    title: '排行榜',
    subtitle: '热门资源 TOP 榜',
    items: [...models3D].sort((a, b) => b.downloads - a.downloads),
    columns: 4,
    tabs: ['下载排行', '浏览排行', '最新上传']
  }
}

export default function CategoryPage() {
  const { type } = useParams()
  const cat = categoryMap[type]

  if (!cat) {
    return (
      <div className="w-container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-text-main mb-4">分类不存在</h2>
        <Link to="/" className="text-primary hover:underline">返回首页</Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-bg min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-color">
        <div className="w-container mx-auto py-3 flex items-center gap-2 text-sm text-text-light">
          <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <FiHome size={14} />
            首页
          </Link>
          <FiChevronRight size={12} />
          <span className="text-text-main">{cat.title}</span>
        </div>
      </div>

      <div className="w-container mx-auto py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text-main">{cat.title}</h1>
          <p className="text-sm text-text-light mt-1">{cat.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg mb-6 flex items-center gap-0 border border-border-color overflow-hidden">
          {cat.tabs.map((tab, i) => (
            <button
              key={tab}
              className={`
                px-6 py-3 text-sm font-medium transition-colors
                ${i === 0
                  ? 'bg-primary text-white'
                  : 'text-text-sub hover:text-primary hover:bg-primary-light'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${cat.columns}, 1fr)` }}>
          {cat.items.map((item) => (
            <ResourceCard key={item.id} item={item} variant="grid" />
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-8 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`
                w-9 h-9 rounded border text-sm font-medium transition-colors
                ${p === 1
                  ? 'bg-primary text-white border-primary'
                  : 'border-border-color text-text-sub hover:border-primary hover:text-primary'
                }
              `}
            >
              {p}
            </button>
          ))}
          <button className="w-9 h-9 rounded border border-border-color text-text-sub text-sm hover:border-primary hover:text-primary transition-colors">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
