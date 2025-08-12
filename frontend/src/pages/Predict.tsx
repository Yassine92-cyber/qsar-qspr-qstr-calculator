import React, { useState } from 'react'
import { BarChart3, Brain, Database, Eye, Download, Target, Zap, FlaskConical } from 'lucide-react'

const Predict: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedModel, setSelectedModel] = useState('')
  const [predictionType, setPredictionType] = useState('single')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Brain, description: 'Prediction overview' },
    { id: 'model_selection', name: 'Model Selection', icon: Target, description: 'Choose prediction models' },
    { id: 'single_prediction', name: 'Single Prediction', icon: FlaskConical, description: 'Make single predictions' },
    { id: 'batch_prediction', name: 'Batch Prediction', icon: Database, description: 'Batch predictions' },
    { id: 'uncertainty_quantification', name: 'Uncertainty', icon: Zap, description: 'Prediction uncertainty' },
    { id: 'domain_applicability', name: 'Domain of Applicability', icon: Eye, description: 'Model applicability' },
    { id: 'prediction_analysis', name: 'Analysis', icon: BarChart3, description: 'Analyze predictions' },
    { id: 'export_results', name: 'Export Results', icon: Download, description: 'Export predictions' },
    { id: 'prediction_history', name: 'History', icon: Database, description: 'Prediction history' },
  ]

  const availableModels = [
    {
      id: 'logp_qspr',
      name: 'LogP QSPR Model',
      type: 'QSPR',
      algorithm: 'Random Forest',
      accuracy: 0.89,
      description: 'Predicts octanol-water partition coefficient',
      status: 'active'
    },
    {
      id: 'toxicity_qstr',
      name: 'Toxicity QSTR Model',
      type: 'QSTR',
      algorithm: 'Gradient Boosting',
      accuracy: 0.92,
      description: 'Predicts acute toxicity endpoints',
      status: 'active'
    },
    {
      id: 'binding_qsar',
      name: 'Binding Affinity QSAR',
      type: 'QSAR',
      algorithm: 'Neural Network',
      accuracy: 0.87,
      description: 'Predicts protein-ligand binding affinity',
      status: 'active'
    },
    {
      id: 'solubility_ensemble',
      name: 'Solubility Ensemble',
      type: 'Ensemble',
      algorithm: 'Voting Classifier',
      accuracy: 0.91,
      description: 'Ensemble model for aqueous solubility',
      status: 'active'
    }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Prediction Overview</h3>
            <p className="text-sm text-blue-800">
              Make predictions using your trained QSAR/QSPR/QSTR models with comprehensive 
              uncertainty quantification and domain of applicability analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Available Models</h4>
          <div className="space-y-3">
            {availableModels.slice(0, 3).map((model) => (
              <div key={model.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{model.name}</div>
                    <div className="text-sm text-gray-600">{model.description}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {model.type} • {model.algorithm} • {(model.accuracy * 100).toFixed(1)}% accuracy
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {model.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Prediction</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Model
              </label>
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a model...</option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prediction Type
              </label>
              <select 
                value={predictionType}
                onChange={(e) => setPredictionType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="single">Single Compound</option>
                <option value="batch">Batch Compounds</option>
              </select>
            </div>

            <button 
              disabled={!selectedModel}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Start Prediction
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderModelSelection = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">Model Selection</h3>
            <p className="text-sm text-green-800">
              Choose from your trained models for making predictions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold text-gray-900">Available Models</h4>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Types</option>
              <option>QSAR</option>
              <option>QSPR</option>
              <option>QSTR</option>
              <option>Ensemble</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {availableModels.map((model) => (
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
                      model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {model.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{model.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Algorithm: {model.algorithm}</span>
                    <span>Accuracy: {(model.accuracy * 100).toFixed(1)}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Target className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSinglePrediction = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FlaskConical className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Single Prediction</h3>
            <p className="text-sm text-purple-800">
              Make predictions for individual compounds using your trained models.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Input Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Model
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Choose a model...</option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>SMILES String</option>
                <option>Molecular Descriptors</option>
                <option>File Upload</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SMILES Input
              </label>
              <textarea
                placeholder="Enter SMILES string (e.g., CCO for ethanol)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include uncertainty quantification</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Check domain of applicability</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Generate confidence intervals</span>
              </label>
            </div>

            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Make Prediction
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Prediction Results</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Target className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Prediction results will appear here</p>
              <p className="text-sm">Make a prediction to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBatchPrediction = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Batch Prediction</h3>
            <p className="text-sm text-orange-800">
              Make predictions for multiple compounds simultaneously.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Batch Input</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Model
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Choose a model...</option>
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input Method
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>File Upload (CSV/Excel)</option>
                <option>SMILES List (one per line)</option>
                <option>Descriptor Matrix</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload File
              </label>
              <input
                type="file"
                accept=".csv,.xlsx,.xls,.txt"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-500 mt-1">Supported formats: CSV, Excel, TXT</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SMILES List (Alternative)
              </label>
              <textarea
                placeholder="CCO&#10;CCCO&#10;CCCCCO&#10;Enter one SMILES per line"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={4}
              />
            </div>

            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Start Batch Prediction
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Batch Results</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Database className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Batch prediction results will appear here</p>
              <p className="text-sm">Start batch prediction to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderUncertaintyQuantification = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Uncertainty Quantification</h3>
            <p className="text-sm text-indigo-800">
              Quantify prediction uncertainty using advanced statistical methods.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Uncertainty Methods</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Conformal Prediction</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Bootstrap Uncertainty</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Ensemble Uncertainty</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Monte Carlo Dropout</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confidence Level
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>90%</option>
                <option>95%</option>
                <option>99%</option>
                <option>Custom</option>
              </select>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Calculate Uncertainty
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Uncertainty Results</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Zap className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Uncertainty results will appear here</p>
              <p className="text-sm">Calculate uncertainty to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDomainApplicability = () => (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Eye className="w-6 h-6 text-teal-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-teal-900 mb-2">Domain of Applicability</h3>
            <p className="text-sm text-teal-800">
              Assess whether your compounds fall within the model's reliable prediction domain.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">DoA Analysis</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Distance-based methods</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Density-based methods</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Isolation Forest</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">PCA-based methods</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Threshold Method
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Percentile-based</option>
                <option>Standard deviation</option>
                <option>Custom threshold</option>
              </select>
            </div>

            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
              Analyze Domain
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">DoA Results</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Eye className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Domain analysis results will appear here</p>
              <p className="text-sm">Analyze domain to see results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPredictionAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-pink-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-pink-900 mb-2">Prediction Analysis</h3>
            <p className="text-sm text-pink-800">
              Analyze and visualize your prediction results with comprehensive tools.
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
                <span className="text-sm">Prediction vs. Actual plots</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Residual analysis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Feature importance</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Statistical summary</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chart Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>Scatter Plot</option>
                <option>Histogram</option>
                <option>Box Plot</option>
                <option>Heatmap</option>
              </select>
            </div>

            <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors">
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

  const renderExportResults = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Download className="w-6 h-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-900 mb-2">Export Results</h3>
            <p className="text-sm text-yellow-800">
              Export your prediction results in various formats for further analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Export Configuration</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>CSV</option>
                <option>Excel (.xlsx)</option>
                <option>JSON</option>
                <option>TSV</option>
                <option>PDF Report</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include input data</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include predictions</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include uncertainty</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include analysis plots</span>
              </label>
            </div>

            <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
              Export Results
            </button>
          </div>

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

  const renderPredictionHistory = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Prediction History</h3>
            <p className="text-sm text-gray-700">
              View and manage your prediction history and results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Recent Predictions</h4>
        <div className="space-y-4">
          <div className="text-center py-8 text-gray-500">
            <Database className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p>No recent predictions</p>
            <p className="text-sm">Make predictions to see history here</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'model_selection':
        return renderModelSelection()
      case 'single_prediction':
        return renderSinglePrediction()
      case 'batch_prediction':
        return renderBatchPrediction()
      case 'uncertainty_quantification':
        return renderUncertaintyQuantification()
      case 'domain_applicability':
        return renderDomainApplicability()
      case 'prediction_analysis':
        return renderPredictionAnalysis()
      case 'export_results':
        return renderExportResults()
      case 'prediction_history':
        return renderPredictionHistory()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Make Predictions</h1>
        <p className="text-lg text-gray-600">
          Use your trained QSAR/QSPR/QSTR models to make predictions
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

export default Predict 