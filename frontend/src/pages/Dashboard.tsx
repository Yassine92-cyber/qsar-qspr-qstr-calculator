import React from 'react'
import { TrendingUp, Shield, Database, Brain, BarChart3, FlaskConical } from 'lucide-react'

const Dashboard: React.FC = () => {
  const features = [
    {
      name: 'QSPR Modeling',
      description: 'Quantitative Structure-Property Relationships for predicting molecular properties',
      icon: TrendingUp,
      href: '/qspr',
      color: 'bg-blue-500'
    },
    {
      name: 'QSTR Modeling',
      description: 'Quantitative Structure-Toxicity Relationships for toxicity prediction',
      icon: Shield,
      href: '/qstr',
      color: 'bg-red-500'
    },
    {
      name: 'Molecular Descriptors',
      description: 'Calculate 2D and 3D molecular descriptors',
      icon: Database,
      href: '/descriptors',
      color: 'bg-green-500'
    },
    {
      name: 'Model Training',
      description: 'Train machine learning models with your data',
      icon: Brain,
      href: '/train',
      color: 'bg-purple-500'
    },
    {
      name: 'Predictions',
      description: 'Make predictions using trained models',
      icon: BarChart3,
      href: '/predict',
      color: 'bg-yellow-500'
    },
    {
      name: 'Model Management',
      description: 'Manage and evaluate your trained models',
      icon: FlaskConical,
      href: '/models',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          QSAR/QSPR/QSTR Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Advanced molecular modeling and toxicity prediction platform
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.name}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => window.location.href = feature.href}
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} text-white mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2.0</div>
            <div className="text-sm text-gray-600">Version</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-600">Features</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">Ready</div>
            <div className="text-sm text-gray-600">Status</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 