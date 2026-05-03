import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiLogIn } from 'react-icons/fi'
import SearchBox from './SearchBox'
import { categories } from '../mock/data'

const menuItems = [
  { key: 'drawings', label: '图纸库', path: '/category/cad' },
  { key: 'software', label: '软件/教程', path: '/category/soft' },
  { key: 'more', label: '更多', path: '/category/keshe' }
]

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const timeoutRef = useRef(null)
  const navigate = useNavigate()

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <header className="bg-white border-b border-border-color sticky top-0 z-50 shadow-sm">
      <div className="w-container mx-auto flex items-center h-[60px]">
        {/* Logo */}
        <Link to="/" className="flex items-center mr-8 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">机</span>
            </div>
            <div className="leading-tight">
              <div className="text-primary font-bold text-lg">机械5</div>
              <div className="text-text-light text-xs">专注机械行业设计</div>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center h-full mr-auto">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className="relative h-full"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigate(item.path)}
                className={`
                  h-full px-5 text-sm font-medium flex items-center gap-1
                  transition-colors relative
                  ${activeMenu === item.key
                    ? 'text-primary bg-primary-light'
                    : 'text-text-main hover:text-primary'
                  }
                `}
              >
                {item.label}
                <svg
                  className={`w-3 h-3 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {activeMenu === item.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t" />
                )}
              </button>

              {/* Dropdown */}
              {activeMenu === item.key && (
                <div
                  className="absolute top-full left-0 bg-white border border-border-color shadow-lg rounded-b-lg pt-2 pb-4 px-5 z-50"
                  style={{ minWidth: '600px' }}
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  {categories[item.key]?.groups ? (
                    <div className="flex gap-8">
                      {categories[item.key].groups.map((group, i) => (
                        <div key={i} className="min-w-[140px]">
                          <Link to={group.link === '/cad/' ? '/category/cad' : group.link === '/3D/' ? '/category/3D' : group.link === '/keshe/' ? '/category/keshe' : group.link} className="block text-primary font-bold text-sm mb-2 hover:underline">
                            {group.title}
                          </Link>
                          <ul className="space-y-1">
                            {group.items.slice(0, 12).map((subItem, j) => (
                              <li key={j}>
                                <Link
                                  to={`/search?keyword=${subItem.name}`}
                                  className="block text-text-sub text-xs hover:text-primary hover:underline py-0.5"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                            {group.items.length > 12 && (
                              <li>
                                <Link to="/category/cad" className="block text-primary text-xs hover:underline py-0.5">
                                  查看全部 &gt;
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="flex flex-wrap gap-x-6 gap-y-1">
                      {categories[item.key]?.items?.map((subItem, j) => (
                        <li key={j}>
                          <Link
                            to={`/search?keyword=${subItem.name}`}
                            className="block text-text-sub text-sm hover:text-primary hover:underline py-1"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search */}
        <div className="mr-6">
          <SearchBox onSearch={(kw) => navigate(`/search?keyword=${kw}`)} />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-text-sub hover:text-primary text-sm transition-colors">
            <FiLogIn size={16} />
            <span>登录</span>
          </button>
          <span className="text-border-color">|</span>
          <button className="flex items-center gap-1.5 text-text-sub hover:text-primary text-sm transition-colors">
            <FiUser size={16} />
            <span>注册</span>
          </button>
        </div>
      </div>
    </header>
  )
}
