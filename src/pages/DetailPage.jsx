import { useParams, Link } from 'react-router-dom'
import { models3D, cadDrawings } from '../mock/data'
import {
  FiHome, FiChevronRight, FiCalendar, FiUser, FiHardDrive,
  FiDownload, FiEye, FiStar, FiShare2, FiPrinter
} from 'react-icons/fi'

const allResources = [...models3D, ...cadDrawings]

export default function DetailPage() {
  const { id } = useParams()
  const resource = allResources.find(r => r.id === Number(id))

  if (!resource) {
    return (
      <div className="w-container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-text-main mb-4">资源不存在</h2>
        <Link to="/" className="text-primary hover:underline">返回首页</Link>
      </div>
    )
  }

  const isModel = resource.id < 100
  const relatedItems = (isModel ? models3D : cadDrawings).filter(r => r.id !== resource.id).slice(0, 4)

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
          <Link to={isModel ? '/category/3D' : '/category/cad'} className="hover:text-primary transition-colors">
            {isModel ? '三维模型' : 'CAD图纸'}
          </Link>
          <FiChevronRight size={12} />
          <span className="text-text-main truncate max-w-[300px]">{resource.title}</span>
        </div>
      </div>

      <div className="w-container mx-auto py-6">
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1">
            {/* Preview image */}
            <div className="bg-white rounded-lg border border-border-color overflow-hidden mb-6">
              <div className="aspect-video bg-gray-bg flex items-center justify-center">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title & info */}
            <div className="bg-white rounded-lg border border-border-color p-6 mb-6">
              <h1 className="text-xl font-bold text-text-main mb-4">{resource.title}</h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-text-light mb-6 pb-6 border-b border-border-color">
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={14} />
                  {resource.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiUser size={14} />
                  {resource.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiHardDrive size={14} />
                  {resource.size}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiDownload size={14} />
                  {resource.downloads} 次下载
                </span>
                <span className="flex items-center gap-1.5">
                  <FiEye size={14} />
                  {resource.views} 次浏览
                </span>
              </div>

              {/* Description placeholder */}
              <div className="text-sm text-text-sub leading-relaxed space-y-3">
                <p>本资源为 {resource.title}，文件大小 {resource.size}，适用于机械设计、课程设计、毕业设计等参考用途。</p>
                <p>文件格式：{isModel ? 'SolidWorks / STEP / IGES' : 'AutoCAD DWG / DXF'}</p>
                <p>更新日期：{resource.date}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[300px] shrink-0 space-y-4">
            {/* Download button */}
            <div className="bg-white rounded-lg border border-border-color p-5">
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-base">
                <FiDownload size={18} />
                立即下载
              </button>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 border border-border-color text-text-sub py-2 rounded text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1">
                  <FiStar size={14} />
                  收藏
                </button>
                <button className="flex-1 border border-border-color text-text-sub py-2 rounded text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1">
                  <FiShare2 size={14} />
                  分享
                </button>
                <button className="flex-1 border border-border-color text-text-sub py-2 rounded text-sm hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1">
                  <FiPrinter size={14} />
                  打印
                </button>
              </div>
            </div>

            {/* Author info */}
            <div className="bg-white rounded-lg border border-border-color p-5">
              <h3 className="text-sm font-medium text-text-main mb-3">上传者信息</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold">
                  {resource.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-medium text-text-main">{resource.author}</div>
                  <div className="text-xs text-text-light">共上传 23 个资源</div>
                </div>
              </div>
            </div>

            {/* Related resources */}
            <div className="bg-white rounded-lg border border-border-color p-5">
              <h3 className="text-sm font-medium text-text-main mb-3">相关资源</h3>
              <div className="space-y-3">
                {relatedItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/resource/${item.id}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-12 bg-gray-bg rounded overflow-hidden shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-text-main group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </div>
                      <div className="text-xs text-text-light mt-1">{item.size}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
