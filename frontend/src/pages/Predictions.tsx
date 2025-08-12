import React, { useState } from 'react'
import { FileText, Database, BarChart3, Eye, Download, Search, TrendingUp, Target, Settings } from 'lucide-react'

const Predictions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModelType, setSelectedModelType] = useState('all')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FileText, description: 'Prediction overview' },
    { id: 'recent_predictions', name: 'Recent Predictions', icon: Database, description: 'View recent predictions' },
    { id: 'prediction_analysis', name: 'Analysis', icon: BarChart3, description: 'Analyze prediction results' },
    { id: 'performance_tracking', name: 'Performance Tracking', icon: TrendingUp, description: 'Track model performance' },
    { id: 'comparison', name: 'Model Comparison', icon: Target, description: 'Compare model predictions' },
    { id: 'export_management', name: 'Export Management', icon: Download, description: 'Manage exported results' },
    { id: 'settings', name: 'Settings', icon: Settings, description: 'Prediction settings' },
  ]

  const predictionTypes = [
    { id: 'qsar', name: 'QSAR', color: 'bg-green-500', count: 156 },
    { id: 'qspr', name: 'QSPR', color: 'bg-blue-500', count: 89 },
    { id: 'qstr', name: 'QSTR', color: 'bg-red-500', count: 203 },
    { id: 'ensemble', name: 'Ensemble', color: 'bg-purple-500', count: 67 },
  ]

  const samplePredictions = [
    {
      id: 1,
      compound: 'CCO',
      name: 'Ethanol',
      model: 'LogP QSPR Model',
      type: 'QSPR',
      prediction: 0.32,
      actual: 0.35,
      uncertainty: 0.08,
      confidence: 0.92,
      timestamp: '2024-01-15 14:30',
      status: 'completed'
    },
    {
      id: 2,
      compound: 'CCCO',
      name: '1-Propanol',
      model: 'Toxicity QSTR Model',
      type: 'QSTR',
      prediction: 0.15,
      actual: 0.18,
      uncertainty: 0.12,
      confidence: 0.88,
      timestamp: '2024-01-15 14:25',
      status: 'completed'
    },
    {
      id: 3,
      compound: 'CCCCCO',
      name: '1-Pentanol',
      model: 'Binding Affinity QSAR',
      type: 'QSAR',
      prediction: 0.67,
      actual: null,
      uncertainty: 0.15,
      confidence: 0.85,
      timestamp: '2024-01-15 14:20',
      status: 'pending'
    },
    {
      id: 4,
      compound: 'c1ccccc1',
      name: 'Benzene',
      model: 'Solubility Ensemble',
      type: 'Ensemble',
      prediction: 0.89,
      actual: 0.91,
      uncertainty: 0.06,
      confidence: 0.94,
      timestamp: '2024-01-15 14:15',
      status: 'completed'
    }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Prediction Overview</h3>
            <p className="text-sm text-blue-800">
              View and analyze your prediction history, track model performance, and manage 
              prediction results with comprehensive analytics and export capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Prediction Statistics</h4>
          <div className="space-y-4">
            {predictionTypes.map((type) => (
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
                <span className="font-medium text-gray-900">Total Predictions</span>
                <div className="text-2xl font-bold text-blue-600">515</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>View All Predictions</span>
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Performance Analysis</span>
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export Results</span>
            </button>
            <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Compare Models</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">LogP prediction completed for ethanol</span>
            <span className="text-xs text-gray-500 ml-auto">2 minutes ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Toxicity prediction completed for 1-propanol</span>
            <span className="text-xs text-gray-500 ml-auto">5 minutes ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Binding affinity prediction started for 1-pentanol</span>
            <span className="text-xs text-gray-500 ml-auto">10 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderRecentPredictions = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">Recent Predictions</h3>
            <p className="text-sm text-green-800">
              View and manage your recent prediction results and history.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold text-gray-900">Prediction List</h4>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search predictions..."
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
          {samplePredictions.map((prediction) => (
            <div key={prediction.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="font-medium text-gray-900">{prediction.name}</h5>
                    <span className="text-sm text-gray-500">({prediction.compound})</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      prediction.type === 'QSAR' ? 'bg-green-100 text-green-800' :
                      prediction.type === 'QSPR' ? 'bg-blue-100 text-blue-800' :
                      prediction.type === 'QSTR' ? 'bg-red-100 text-red-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {prediction.type}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      prediction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {prediction.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Model: {prediction.model}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Prediction: {prediction.prediction}</span>
                    {prediction.actual && <span>Actual: {prediction.actual}</span>}
                    <span>Uncertainty: ±{prediction.uncertainty}</span>
                    <span>Confidence: {(prediction.confidence * 100).toFixed(1)}%</span>
                    <span>Time: {prediction.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <BarChart3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderPredictionAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Prediction Analysis</h3>
            <p className="text-sm text-purple-800">
              Analyze prediction results with comprehensive statistical tools and visualizations.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Analysis Options</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Prediction accuracy analysis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Error distribution analysis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Feature importance analysis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Outlier detection</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
                <option>Custom range</option>
              </select>
            </div>

            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Generate Analysis
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Analysis Results</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Analysis results will appear here</p>
              <p className="text-sm">Generate analysis to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPerformanceTracking = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Performance Tracking</h3>
            <p className="text-sm text-orange-800">
              Track model performance over time and identify trends and improvements.
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
              <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Performance trends will appear here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Performance Comparison</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Performance comparison will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderComparison = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Model Comparison</h3>
            <p className="text-sm text-indigo-800">
              Compare predictions across different models and identify the best performing ones.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Comparison Configuration</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Models
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">LogP QSPR Model</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Toxicity QSTR Model</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Binding Affinity QSAR</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Solubility Ensemble</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comparison Metric
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Prediction Accuracy</option>
                <option>Uncertainty</option>
                <option>Confidence</option>
                <option>Processing Time</option>
              </select>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Compare Models
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Target className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Comparison results will appear here</p>
              <p className="text-sm">Compare models to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderExportManagement = () => (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Download className="w-6 h-6 text-teal-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-teal-900 mb-2">Export Management</h3>
            <p className="text-sm text-teal-800">
              Manage and organize your exported prediction results and reports.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Export Options</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Export Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>CSV</option>
                <option>Excel (.xlsx)</option>
                <option>JSON</option>
                <option>PDF Report</option>
                <option>All Formats</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include prediction metadata</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include uncertainty data</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include performance metrics</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include visualizations</span>
              </label>
            </div>

            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
              Export Results
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Export History</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Download className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Export history will appear here</p>
              <p className="text-sm">Track your exported results</p>
            </div>
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
            <h3 className="font-medium text-gray-900 mb-2">Prediction Settings</h3>
            <p className="text-sm text-gray-700">
              Configure prediction management preferences and automation settings.
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
              <span className="text-sm">Auto-save prediction results</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Include uncertainty by default</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Auto-export completed predictions</span>
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
      case 'recent_predictions':
        return renderRecentPredictions()
      case 'prediction_analysis':
        return renderPredictionAnalysis()
      case 'performance_tracking':
        return renderPerformanceTracking()
      case 'comparison':
        return renderComparison()
      case 'export_management':
        return renderExportManagement()
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Prediction History</h1>
        <p className="text-lg text-gray-600">
          View and analyze your prediction history and results
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
                      ? 'border-blue-500 text-blue-600'
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

export default Predictions 