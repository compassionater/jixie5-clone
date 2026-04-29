import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ResourceCard from './ResourceCard'

export default function ResourceSection({
  title,
  subtitle,
  items = [],
  link = '#',
  variant = 'grid',       // 'grid' | 'carousel' | 'list'
  columns = 4,            // grid 模式的列数
  pageSize = 8,           // carousel 每页显示数量
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(items.length / pageSize)

  const pagedItems = variant === 'carousel'
    ? items.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    : items

  const goToPage = (page) => {
    setCurrentPage((page + totalPages) % totalPages)
  }

  return (
    <section className="py-8">
      <div className="w-container mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-text-light mt-1 ml-3">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {variant === 'carousel' && totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  className="w-7 h-7 rounded-full border border-border-color flex items-center justify-center
                    hover:border-primary hover:text-primary transition-colors"
                >
                  <FiChevronLeft size={16} />
                </button>
                <span className="text-xs text-text-light px-2">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="w-7 h-7 rounded-full border border-border-color flex items-center justify-center
                    hover:border-primary hover:text-primary transition-colors"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            )}
            <a
              href={link}
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              查看更多 &gt;
            </a>
          </div>
        </div>

        {/* Content */}
        {variant === 'list' ? (
          <div className="grid grid-cols-4 gap-4">
            {pagedItems.map((item) => (
              <ResourceCard key={item.id} item={item} variant="card" />
            ))}
          </div>
        ) : (
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: variant === 'carousel'
                ? `repeat(${Math.min(columns, pageSize / 2)}, 1fr)`
                : `repeat(${columns}, 1fr)`
            }}
          >
            {pagedItems.map((item) => (
              <ResourceCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        )}

        {/* Pagination dots for carousel */}
        {variant === 'carousel' && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${i === currentPage
                    ? 'w-6 bg-primary'
                    : 'w-1.5 bg-border-color hover:bg-text-light'
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
