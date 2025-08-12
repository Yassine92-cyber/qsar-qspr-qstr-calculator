import React, { useState } from 'react'
import { TrendingUp, Database, Brain, BarChart3, Eye, Zap, FlaskConical, Target, Activity, Thermometer, Droplets, Gauge, Wrench } from 'lucide-react'

const QSPR: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [smiles, setSmiles] = useState('')
  const [selectedProperty, setSelectedProperty] = useState('logp')

  const tabs = [
    {
      id: 'overview',
      name: 'Overview',
      icon: TrendingUp,
      description: 'QSPR modeling overview and configuration',
    },
    {
      id: 'training',
      name: 'Model Training',
      icon: Brain,
      description: 'Train QSPR models with your data',
    },
    {
      id: 'descriptors',
      name: 'Enhanced Descriptors',
      icon: Database,
      description: 'Calculate 2D and 3D molecular descriptors',
    },
    {
      id: 'analysis',
      name: 'Analysis & Plots',
      icon: BarChart3,
      description: 'Model analysis and visualization',
    },
    {
      id: 'visualization',
      name: 'Molecular Visualization',
      icon: Eye,
      description: 'Visualize molecular structures and predictions',
    },
    {
      id: 'advanced',
      name: 'Advanced Modeling',
      icon: Zap,
      description: 'Hyperparameter tuning, ensemble methods, and calibration',
    },
  ]

  const qsprProperties = [
    { id: 'logp', name: 'Log P (Octanol-Water)', icon: Droplets, description: 'Lipophilicity' },
    { id: 'solubility', name: 'Aqueous Solubility', icon: Droplets, description: 'Water solubility' },
    { id: 'melting_point', name: 'Melting Point', icon: Thermometer, description: 'Phase transition temperature' },
    { id: 'boiling_point', name: 'Boiling Point', icon: Thermometer, description: 'Vaporization temperature' },
    { id: 'vapor_pressure', name: 'Vapor Pressure', icon: Gauge, description: 'Volatility' },
    { id: 'surface_tension', name: 'Surface Tension', icon: Target, description: 'Interfacial properties' },
    { id: 'viscosity', name: 'Viscosity', icon: Wrench, description: 'Flow resistance' },
    { id: 'thermal_conductivity', name: 'Thermal Conductivity', icon: Activity, description: 'Heat transfer' },
    { id: 'tensile_strength', name: 'Tensile Strength', icon: Wrench, description: 'Mechanical properties' },
    { id: 'elastic_modulus', name: 'Elastic Modulus', icon: Wrench, description: 'Stiffness' },
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">QSPR Modeling Overview</h3>
            <p className="text-sm text-blue-800">
              Quantitative Structure-Property Relationships (QSPR) modeling predicts molecular properties 
              based on structural characteristics. This platform provides comprehensive tools for building, 
              training, and evaluating QSPR models.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Property Selection</h4>
          <div className="space-y-3">
            {qsprProperties.map((property) => (
              <div
                key={property.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedProperty === property.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedProperty(property.id)}
              >
                <div className="flex items-center space-x-3">
                  <property.icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">{property.name}</div>
                    <div className="text-sm text-gray-600">{property.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Model Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SMILES Input
              </label>
              <textarea
                value={smiles}
                onChange={(e) => setSmiles(e.target.value)}
                placeholder="Enter SMILES string (e.g., CCO for ethanol)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Property
              </label>
              <div className="text-sm text-gray-600">
                {qsprProperties.find(p => p.id === selectedProperty)?.name}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Calculate Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTraining = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">Model Training</h3>
            <p className="text-sm text-green-800">
              Train QSPR models using various machine learning algorithms and techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Training Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Algorithm
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Random Forest</option>
                <option>Gradient Boosting</option>
                <option>Support Vector Machine</option>
                <option>Neural Network</option>
                <option>Linear Regression</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cross-Validation Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>5</option>
                <option>10</option>
                <option>Leave-One-Out</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Test Set Size
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>20%</option>
                <option>25%</option>
                <option>30%</option>
              </select>
            </div>

            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Start Training
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Training Progress</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <FlaskConical className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>No training in progress</p>
              <p className="text-sm">Start training to see progress here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDescriptors = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Enhanced Molecular Descriptors</h3>
            <p className="text-sm text-purple-800">
              Calculate comprehensive 2D and 3D molecular descriptors for QSPR modeling.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">2D Descriptors</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Molecular Weight</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Log P</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>TPSA</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>H-Bond Donors</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>H-Bond Acceptors</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Rotatable Bonds</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>QED</span>
              <span className="text-gray-600">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">3D Descriptors</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Principal Moments</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>WHIM Descriptors</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>GETAWAY</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>3D-MoRSE</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Plane of Best Fit</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Conformer Generation</span>
              <span className="text-gray-600">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Fingerprints</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Morgan (ECFP)</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Atom Pairs</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Torsion</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>MACCS Keys</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>RDKit</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Pattern</span>
              <span className="text-gray-600">✓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Descriptor Calculation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMILES Input
            </label>
            <textarea
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              placeholder="Enter SMILES string"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="flex flex-col justify-end">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Calculate All Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-900 mb-2">Analysis & Plots</h3>
            <p className="text-sm text-yellow-800">
              Analyze model performance and visualize results with comprehensive plotting tools.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Model Performance</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">0.89</div>
                <div className="text-sm text-gray-600">R² Score</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">0.32</div>
                <div className="text-sm text-gray-600">RMSE</div>
              </div>
            </div>
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Performance plots will appear here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Feature Importance</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Feature importance chart will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVisualization = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Eye className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Molecular Visualization</h3>
            <p className="text-sm text-blue-800">
              Visualize molecular structures and their predictions using the molecular visualizer.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Input</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMILES String
                </label>
                <textarea
                  value={smiles}
                  onChange={(e) => setSmiles(e.target.value)}
                  placeholder="Enter SMILES string (e.g., CCO for ethanol)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visualization Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>2D Structure</option>
                  <option>3D Structure</option>
                  <option>Conformer Comparison</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Generate Visualization
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Output</h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Eye className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500">Molecular visualization will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAdvanced = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Advanced Modeling</h3>
            <p className="text-sm text-purple-800">
              Advanced QSPR modeling with hyperparameter tuning, ensemble methods, and classifier calibration.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Hyperparameter Tuning</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tuning Method
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Grid Search</option>
                <option>Random Search</option>
                <option>Bayesian Optimization</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CV Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>5</option>
                <option>10</option>
                <option>Leave-One-Out</option>
              </select>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Start Tuning
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Ensemble Methods</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Voting</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Stacking</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Bagging</span>
              </label>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Configure Ensemble
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'training':
        return renderTraining()
      case 'descriptors':
        return renderDescriptors()
      case 'analysis':
        return renderAnalysis()
      case 'visualization':
        return renderVisualization()
      case 'advanced':
        return renderAdvanced()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">QSPR Modeling</h1>
        <p className="text-lg text-gray-600">
          Quantitative Structure-Property Relationships for predicting molecular properties
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

export default QSPR 