import React, { useState } from 'react'
import { Activity, Database, Brain, BarChart3, Eye, Zap, FlaskConical, Target, TestTube, Beaker, Atom, TrendingUp } from 'lucide-react'

const QSAR: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [smiles, setSmiles] = useState('')
  const [selectedActivity, setSelectedActivity] = useState('binding_affinity')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity, description: 'QSAR modeling overview' },
    { id: 'training', name: 'Model Training', icon: Brain, description: 'Train QSAR models' },
    { id: 'descriptors', name: 'Molecular Descriptors', icon: Database, description: 'Calculate descriptors' },
    { id: 'structure_activity', name: 'Structure-Activity', icon: TestTube, description: 'SAR analysis' },
    { id: 'pharmacophore', name: 'Pharmacophore', icon: Target, description: 'Pharmacophore modeling' },
    { id: 'analysis', name: 'Analysis & Plots', icon: BarChart3, description: 'Model analysis' },
    { id: 'visualization', name: 'Molecular Visualization', icon: Eye, description: 'Visualize structures' },
    { id: 'advanced', name: 'Advanced Modeling', icon: Zap, description: 'Advanced options' },
  ]

  const activityTypes = [
    { id: 'binding_affinity', name: 'Binding Affinity', icon: Target, description: 'Receptor-ligand binding' },
    { id: 'enzyme_inhibition', name: 'Enzyme Inhibition', icon: Beaker, description: 'Enzyme inhibitory activity' },
    { id: 'cell_viability', name: 'Cell Viability', icon: TestTube, description: 'Cell survival' },
    { id: 'antimicrobial', name: 'Antimicrobial Activity', icon: Atom, description: 'Bacterial inhibition' },
    { id: 'bioavailability', name: 'Bioavailability', icon: TrendingUp, description: 'Drug absorption' },
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Activity className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">QSAR Modeling Overview</h3>
            <p className="text-sm text-green-800">
              Quantitative Structure-Activity Relationships (QSAR) modeling predicts biological activities 
              based on molecular structural characteristics for drug discovery and chemical biology.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Activity Type Selection</h4>
          <div className="space-y-3">
            {activityTypes.map((activity) => (
              <div
                key={activity.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedActivity === activity.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedActivity(activity.id)}
              >
                <div className="flex items-center space-x-3">
                  <activity.icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">{activity.name}</div>
                    <div className="text-sm text-gray-600">{activity.description}</div>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Activity
              </label>
              <div className="text-sm text-gray-600">
                {activityTypes.find(a => a.id === selectedActivity)?.name}
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Calculate Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTraining = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">QSAR Model Training</h3>
            <p className="text-sm text-blue-800">
              Train QSAR models using various machine learning algorithms and activity-specific techniques.
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
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Random Forest</option>
                <option>Gradient Boosting</option>
                <option>Support Vector Machine</option>
                <option>Neural Network</option>
                <option>Partial Least Squares</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cross-Validation Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>5</option>
                <option>10</option>
                <option>Leave-One-Out</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
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
            <h3 className="font-medium text-purple-900 mb-2">Molecular Descriptors</h3>
            <p className="text-sm text-purple-800">
              Calculate comprehensive 2D and 3D molecular descriptors optimized for QSAR modeling.
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
              <span>Lipinski Rule of 5</span>
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
              <span>3D-MoRSE</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Molecular Volume</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Surface Area</span>
              <span className="text-gray-600">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">QSAR-Specific</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Electrostatic Potential</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Pharmacophore Features</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>ADMET Properties</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Drug-Likeness</span>
              <span className="text-gray-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Bioavailability</span>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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

  const renderStructureActivity = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <TestTube className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Structure-Activity Relationships</h3>
            <p className="text-sm text-indigo-800">
              Analyze and visualize structure-activity relationships for drug discovery and optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">SAR Analysis</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Data
            </label>
            <textarea
              placeholder="Enter activity values (IC50, Ki, EC50, etc.)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Analysis Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Activity Cliffs</option>
              <option>Matched Molecular Pairs</option>
              <option>Scaffold Hopping</option>
              <option>Activity Landscape</option>
            </select>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Analyze SAR
          </button>
        </div>
      </div>
    </div>
  )

  const renderPharmacophore = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Pharmacophore Modeling</h3>
            <p className="text-sm text-orange-800">
              Generate and analyze pharmacophore models for drug design and optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Pharmacophore Generation</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Active Compounds
            </label>
            <textarea
              placeholder="Enter SMILES of active compounds"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Method
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>LigandScout</option>
              <option>Phase</option>
              <option>MOE</option>
              <option>Custom</option>
            </select>
          </div>
          <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
            Generate Pharmacophore
          </button>
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
              Analyze QSAR model performance and visualize structure-activity relationships.
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
                <div className="text-2xl font-bold text-blue-600">0.91</div>
                <div className="text-sm text-gray-600">R² Score</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">0.28</div>
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
              Visualize molecular structures and their activities using the molecular visualizer.
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
                  <option>Activity Hotspots</option>
                  <option>Binding Site</option>
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
            <h3 className="font-medium text-purple-900 mb-2">Advanced QSAR Modeling</h3>
            <p className="text-sm text-purple-800">
              Advanced QSAR modeling with hyperparameter tuning, ensemble methods, and activity-specific features.
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
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Grid Search</option>
                <option>Random Search</option>
                <option>Bayesian Optimization</option>
                <option>Genetic Algorithm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CV Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
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
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Boosting</span>
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
      case 'structure_activity':
        return renderStructureActivity()
      case 'pharmacophore':
        return renderPharmacophore()
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">QSAR Modeling</h1>
        <p className="text-lg text-gray-600">
          Quantitative Structure-Activity Relationships for drug discovery and chemical biology
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
                      ? 'border-green-500 text-green-600'
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

export default QSAR 