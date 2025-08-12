import React, { useState } from 'react'
import { Brain, Database, Settings, Download, Eye, BarChart3, Trash2, Edit, Play, Plus, Search } from 'lucide-react'

const Models: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModelType, setSelectedModelType] = useState('all')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Brain, description: 'Model management overview' },
    { id: 'my_models', name: 'My Models', icon: Database, description: 'View and manage your models' },
    { id: 'model_library', name: 'Model Library', icon: Eye, description: 'Browse available models' },
    { id: 'performance', name: 'Performance', icon: BarChart3, description: 'Model performance analysis' },
    { id: 'version_control', name: 'Version Control', icon: Settings, description: 'Model versioning and history' },
    { id: 'import_export', name: 'Import/Export', icon: Download, description: 'Import and export models' },
    { id: 'settings', name: 'Settings', icon: Settings, description: 'Model management settings' },
  ]

  const modelTypes = [
    { id: 'qsar', name: 'QSAR', color: 'bg-green-500', count: 12 },
    { id: 'qspr', name: 'QSPR', color: 'bg-blue-500', count: 8 },
    { id: 'qstr', name: 'QSTR', color: 'bg-red-500', count: 15 },
    { id: 'ensemble', name: 'Ensemble', color: 'bg-purple-500', count: 5 },
    { id: 'custom', name: 'Custom', color: 'bg-orange-500', count: 3 },
  ]

  const sampleModels = [
    {
      id: 1,
      name: 'LogP QSPR Model',
      type: 'QSPR',
      algorithm: 'Random Forest',
      accuracy: 0.89,
      status: 'active',
      lastUsed: '2024-01-15',
      version: '1.2.0',
      description: 'Predicts octanol-water partition coefficient'
    },
    {
      id: 2,
      name: 'Toxicity QSTR Model',
      type: 'QSTR',
      algorithm: 'Gradient Boosting',
      accuracy: 0.92,
      status: 'active',
      lastUsed: '2024-01-14',
      version: '2.1.0',
      description: 'Predicts acute toxicity endpoints'
    },
    {
      id: 3,
      name: 'Binding Affinity QSAR',
      type: 'QSAR',
      algorithm: 'Neural Network',
      accuracy: 0.87,
      status: 'training',
      lastUsed: '2024-01-13',
      version: '1.0.0',
      description: 'Predicts protein-ligand binding affinity'
    },
    {
      id: 4,
      name: 'Solubility Ensemble',
      type: 'Ensemble',
      algorithm: 'Voting Classifier',
      accuracy: 0.91,
      status: 'active',
      lastUsed: '2024-01-12',
      version: '1.5.0',
      description: 'Ensemble model for aqueous solubility'
    }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Model Management Overview</h3>
            <p className="text-sm text-indigo-800">
              Manage and organize your QSAR/QSPR/QSTR models with comprehensive tools for version control, 
              performance tracking, and model comparison.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Model Statistics</h4>
          <div className="space-y-4">
            {modelTypes.map((type) => (
              <div key={type.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                  <span className="font-medium text-gray-900">{type.name}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{type.count}</div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Total Models</span>
                <div className="text-2xl font-bold text-indigo-600">43</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create New Model</span>
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Train Model</span>
            </button>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Import Model</span>
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Performance Analysis</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">LogP QSPR Model training completed</span>
            <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Toxicity QSTR Model updated to v2.1.0</span>
            <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Binding Affinity QSAR Model started training</span>
            <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMyModels = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">My Models</h3>
            <p className="text-sm text-green-800">
              View, manage, and organize your trained QSAR/QSPR/QSTR models.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold text-gray-900">Model List</h4>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <select
              value={selectedModelType}
              onChange={(e) => setSelectedModelType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Types</option>
              <option value="qsar">QSAR</option>
              <option value="qspr">QSPR</option>
              <option value="qstr">QSTR</option>
              <option value="ensemble">Ensemble</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {sampleModels.map((model) => (
            <div key={model.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="font-medium text-gray-900">{model.name}</h5>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      model.type === 'QSAR' ? 'bg-green-100 text-green-800' :
                      model.type === 'QSPR' ? 'bg-blue-100 text-blue-800' :
                      model.type === 'QSTR' ? 'bg-red-100 text-red-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {model.type}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {model.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{model.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Algorithm: {model.algorithm}</span>
                    <span>Accuracy: {(model.accuracy * 100).toFixed(1)}%</span>
                    <span>Version: {model.version}</span>
                    <span>Last used: {model.lastUsed}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderModelLibrary = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Eye className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Model Library</h3>
            <p className="text-sm text-blue-800">
              Browse and discover pre-trained models and model templates for various applications.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modelTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-8 h-8 rounded-lg ${type.color} flex items-center justify-center`}>
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{type.name} Models</h4>
                <p className="text-sm text-gray-600">{type.count} available</p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                Browse Models
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm">
                View Templates
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-900 mb-2">Model Performance Analysis</h3>
            <p className="text-sm text-yellow-800">
              Analyze and compare model performance metrics across different datasets and time periods.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">0.89</div>
                <div className="text-sm text-gray-600">Average R²</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">0.92</div>
                <div className="text-sm text-gray-600">Average Accuracy</div>
              </div>
            </div>
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Performance charts will appear here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Model Comparison</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Model comparison charts will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVersionControl = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Settings className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Version Control</h3>
            <p className="text-sm text-purple-800">
              Track model versions, changes, and maintain a complete history of model development.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Version History</h4>
        <div className="space-y-4">
          <div className="text-center py-8 text-gray-500">
            <Settings className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p>Version history will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderImportExport = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Download className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Import/Export Models</h3>
            <p className="text-sm text-orange-800">
              Import models from external sources and export your models for sharing or deployment.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Import Models</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model File
              </label>
              <input
                type="file"
                accept=".pkl,.joblib,.h5,.onnx"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Auto-detect</option>
                <option>QSAR</option>
                <option>QSPR</option>
                <option>QSTR</option>
                <option>Ensemble</option>
              </select>
            </div>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Import Model
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Export Models</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Selection
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Select a model to export</option>
                <option>LogP QSPR Model</option>
                <option>Toxicity QSTR Model</option>
                <option>Binding Affinity QSAR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Export Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Pickle (.pkl)</option>
                <option>Joblib (.joblib)</option>
                <option>ONNX (.onnx)</option>
                <option>TensorFlow SavedModel</option>
              </select>
            </div>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Export Model
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Settings className="w-6 h-6 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Model Management Settings</h3>
            <p className="text-sm text-gray-700">
              Configure model management preferences and automation settings.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Settings</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Auto-save model checkpoints</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Enable model versioning</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Auto-archive old models</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Performance monitoring</span>
            </label>
          </div>
          <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'my_models':
        return renderMyModels()
      case 'model_library':
        return renderModelLibrary()
      case 'performance':
        return renderPerformance()
      case 'version_control':
        return renderVersionControl()
      case 'import_export':
        return renderImportExport()
      case 'settings':
        return renderSettings()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Model Management</h1>
        <p className="text-lg text-gray-600">
          Manage and organize your QSAR/QSPR/QSTR models
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6 justify-center" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </div>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default Models 