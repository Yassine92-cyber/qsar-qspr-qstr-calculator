import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Shield, Activity, Database, Brain, BarChart3, FlaskConical, FileText } from 'lucide-react'

const Dashboard: React.FC = () => {
  const features = [
    {
      name: 'QSAR Modeling',
      description: 'Quantitative Structure-Activity Relationships for drug discovery',
      icon: Activity,
      href: '/qsar',
      color: 'bg-green-500',
      features: ['Binding Affinity', 'Enzyme Inhibition', 'Cell Viability', 'Pharmacophore Modeling']
    },
    {
      name: 'QSPR Modeling',
      description: 'Quantitative Structure-Property Relationships for molecular properties',
      icon: TrendingUp,
      href: '/qspr',
      color: 'bg-blue-500',
      features: ['Log P', 'Solubility', 'Melting Point', 'Vapor Pressure']
    },
    {
      name: 'QSTR Modeling',
      description: 'Quantitative Structure-Toxicity Relationships for safety assessment',
      icon: Shield,
      href: '/qstr',
      color: 'bg-red-500',
      features: ['Acute Toxicity', 'Carcinogenicity', 'Mutagenicity', 'Toxicity Alerts']
    },
    {
      name: 'Molecular Descriptors',
      description: 'Calculate comprehensive 2D and 3D molecular descriptors',
      icon: Database,
      href: '/descriptors',
      color: 'bg-purple-500',
      features: ['2D Descriptors', '3D Descriptors', 'Fingerprints', 'Fragment Descriptors']
    },
    {
      name: 'Model Management',
      description: 'Manage and organize your trained QSAR/QSPR/QSTR models',
      icon: Brain,
      href: '/models',
      color: 'bg-indigo-500',
      features: ['Model Storage', 'Version Control', 'Performance Tracking', 'Model Comparison']
    },
    {
      name: 'Model Training',
      description: 'Train new models with advanced algorithms and techniques',
      icon: FlaskConical,
      href: '/train',
      color: 'bg-yellow-500',
      features: ['Multiple Algorithms', 'Cross-Validation', 'Hyperparameter Tuning', 'Ensemble Methods']
    },
    {
      name: 'Predictions',
      description: 'Make predictions using your trained models',
      icon: BarChart3,
      href: '/predict',
      color: 'bg-pink-500',
      features: ['Single Predictions', 'Batch Predictions', 'Uncertainty Quantification', 'Domain of Applicability']
    },
    {
      name: 'Prediction History',
      description: 'View and analyze your prediction history and results',
      icon: FileText,
      href: '/predictions',
      color: 'bg-gray-500',
      features: ['Result Storage', 'Performance Analysis', 'Export Results', 'Historical Trends']
    },
  ]

  const quickStats = [
    { name: 'QSAR Models', value: '12', change: '+2', changeType: 'increase' },
    { name: 'QSPR Models', value: '8', change: '+1', changeType: 'increase' },
    { name: 'QSTR Models', value: '15', change: '+3', changeType: 'increase' },
    { name: 'Total Predictions', value: '1,247', change: '+89', changeType: 'increase' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">QSAR/QSPR/QSTR Calculator</h1>
        <p className="text-xl text-gray-600 mb-6">
          Comprehensive platform for molecular modeling, property prediction, and toxicity assessment
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/qsar"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Start QSAR Modeling
          </Link>
          <Link
            to="/qspr"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start QSPR Modeling
          </Link>
          <Link
            to="/qstr"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Start QSTR Modeling
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Link
              key={feature.name}
              to={feature.href}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${feature.color} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.features.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose Your Model Type</h3>
            <p className="text-gray-600 text-sm">
              Select between QSAR (activity), QSPR (properties), or QSTR (toxicity) modeling
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Input Your Data</h3>
            <p className="text-gray-600 text-sm">
              Provide SMILES strings and activity/property/toxicity data for training
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Train & Predict</h3>
            <p className="text-gray-600 text-sm">
              Train your model and make predictions on new compounds
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 