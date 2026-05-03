import { useSearchParams, Link } from 'react-router-dom'
import { models3D, cadDrawings } from '../mock/data'
import ResourceCard from '../components/ResourceCard'
import { FiHome, FiChevronRight, FiSearch } from 'react-icons/fi'

const allResources = [...models3D, ...cadDrawings]

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  const results = keyword
    ? allResources.filter(r =>
        r.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : allResources

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
          <span className="text-text-main">搜索结果</span>
        </div>
      </div>

      <div className="w-container mx-auto py-6">
        {/* Search info */}
        <div className="bg-white rounded-lg border border-border-color p-5 mb-6">
          <div className="flex items-center gap-3">
            <FiSearch size={20} className="text-text-light" />
            <div>
              <span className="text-text-sub">搜索关键词：</span>
              <span className="text-text-main font-medium">{keyword || '全部'}</span>
              <span className="text-text-light ml-3">共找到 {results.length} 个结果</span>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {results.map((item) => (
              <ResourceCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-border-color py-20 text-center">
            <FiSearch size={48} className="text-border-color mx-auto mb-4" />
            <p className="text-text-light text-lg mb-2">未找到相关资源</p>
            <p className="text-text-light text-sm">
              换个关键词试试，或者 <Link to="/" className="text-primary hover:underline">返回首页</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
