import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Database, Brain, BarChart3, Home, FlaskConical, Shield, TrendingUp, FileText, Activity } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'QSAR', href: '/qsar', icon: Activity },
    { name: 'QSPR', href: '/qspr', icon: TrendingUp },
    { name: 'QSTR', href: '/qstr', icon: Shield },
    { name: 'Descriptors', href: '/descriptors', icon: Database },
    { name: 'Models', href: '/models', icon: Brain },
    { name: 'Train', href: '/train', icon: FlaskConical },
    { name: 'Predict', href: '/predict', icon: BarChart3 },
    { name: 'Predictions', href: '/predictions', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex">
              <div className="hidden sm:flex sm:space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        isActive
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}

export default Layout 