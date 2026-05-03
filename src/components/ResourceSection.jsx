import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ResourceCard from './ResourceCard'

export default function ResourceSection({
  title,
  subtitle,
  items = [],
  link = '/',
  variant = 'grid',
  columns = 4,
  pageSize = 10,
  bgClass = '',
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
    <section className={`py-10 ${bgClass}`}>
      <div className="w-container mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-text-main flex items-center gap-2.5">
              <span className="w-[3px] h-5 bg-primary rounded-full inline-block" />
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-text-light mt-1.5 ml-[15px]">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {variant === 'carousel' && totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  className="w-8 h-8 rounded-full border border-border-color flex items-center justify-center
                    hover:border-primary hover:text-primary hover:bg-primary-light transition-all"
                >
                  <FiChevronLeft size={16} />
                </button>
                <span className="text-xs text-text-light px-2 min-w-[40px] text-center">
                  {currentPage + 1}/{totalPages}
                </span>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="w-8 h-8 rounded-full border border-border-color flex items-center justify-center
                    hover:border-primary hover:text-primary hover:bg-primary-light transition-all"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            )}
            <Link
              to={link}
              className="text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-0.5"
            >
              查看更多
              <FiChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`
          }}
        >
          {pagedItems.map((item) => (
            <ResourceCard key={item.id} item={item} variant={variant === 'carousel' ? 'card' : 'grid'} />
          ))}
        </div>

        {/* Pagination dots for carousel */}
        {variant === 'carousel' && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${i === currentPage
                    ? 'w-7 bg-primary'
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
