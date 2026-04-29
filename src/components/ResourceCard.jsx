import { FiCalendar, FiUser, FiHardDrive, FiDownload, FiEye } from 'react-icons/fi'

export default function ResourceCard({ item, variant = 'grid' }) {
  const isGrid = variant === 'grid'

  return (
    <a
      href={`/resource/${item.id}`}
      className={`
        block bg-white rounded-lg overflow-hidden
        border border-transparent
        hover:border-primary hover:shadow-lg
        transition-all duration-200 group
        ${isGrid ? 'flex' : ''}
      `}
    >
      {/* Image */}
      <div className={`
        overflow-hidden bg-gray-bg
        ${isGrid ? 'w-[200px] h-[150px] shrink-0' : 'w-full h-[180px]'}
      `}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className={`flex flex-col justify-between ${isGrid ? 'flex-1 p-3.5' : 'p-3'}`}>
        <div>
          <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors line-clamp-2 leading-relaxed">
            {item.title}
          </h3>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-light">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} />
            {item.date}
          </span>
          <span className="flex items-center gap-1">
            <FiUser size={12} />
            {item.author}
          </span>
          <span className="flex items-center gap-1">
            <FiHardDrive size={12} />
            {item.size}
          </span>
        </div>

        {(item.downloads || item.views) && (
          <div className="mt-2 flex items-center gap-3 text-xs text-text-light">
            {item.downloads && (
              <span className="flex items-center gap-1">
                <FiDownload size={11} />
                {item.downloads}
              </span>
            )}
            {item.views && (
              <span className="flex items-center gap-1">
                <FiEye size={11} />
                {item.views}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  )
}
