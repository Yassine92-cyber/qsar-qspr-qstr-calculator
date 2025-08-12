import React, { useState } from 'react'
import { FlaskConical, Brain, Database, BarChart3, Settings, Play, Download, Eye, Target, Zap, TrendingUp, Shield, Activity } from 'lucide-react'

const Train: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedModelType, setSelectedModelType] = useState('qsar')
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('random_forest')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Brain, description: 'Model training overview' },
    { id: 'data_preparation', name: 'Data Preparation', icon: Database, description: 'Prepare training data' },
    { id: 'algorithm_selection', name: 'Algorithm Selection', icon: Target, description: 'Choose ML algorithms' },
    { id: 'hyperparameter_tuning', name: 'Hyperparameter Tuning', icon: Settings, description: 'Optimize model parameters' },
    { id: 'training_configuration', name: 'Training Configuration', icon: FlaskConical, description: 'Configure training process' },
    { id: 'cross_validation', name: 'Cross-Validation', icon: BarChart3, description: 'Validate model performance' },
    { id: 'ensemble_methods', name: 'Ensemble Methods', icon: Zap, description: 'Combine multiple models' },
    { id: 'training_monitoring', name: 'Training Monitoring', icon: Eye, description: 'Monitor training progress' },
    { id: 'model_evaluation', name: 'Model Evaluation', icon: BarChart3, description: 'Evaluate trained models' },
    { id: 'export_models', name: 'Export Models', icon: Download, description: 'Export trained models' },
  ]

  const modelTypes = [
    { id: 'qsar', name: 'QSAR', icon: Activity, color: 'bg-green-500', description: 'Structure-Activity Relationships' },
    { id: 'qspr', name: 'QSPR', icon: TrendingUp, color: 'bg-blue-500', description: 'Structure-Property Relationships' },
    { id: 'qstr', name: 'QSTR', icon: Shield, color: 'bg-red-500', description: 'Structure-Toxicity Relationships' },
  ]

  const algorithms = {
    regression: [
      { id: 'random_forest', name: 'Random Forest', description: 'Ensemble of decision trees' },
      { id: 'gradient_boosting', name: 'Gradient Boosting', description: 'Sequential boosting algorithm' },
      { id: 'support_vector', name: 'Support Vector Regression', description: 'Kernel-based regression' },
      { id: 'neural_network', name: 'Neural Network', description: 'Deep learning approach' },
      { id: 'linear_regression', name: 'Linear Regression', description: 'Linear relationship modeling' },
      { id: 'ridge_regression', name: 'Ridge Regression', description: 'Regularized linear regression' },
      { id: 'lasso_regression', name: 'Lasso Regression', description: 'Sparse linear regression' },
      { id: 'elastic_net', name: 'Elastic Net', description: 'Combined L1 and L2 regularization' },
    ],
    classification: [
      { id: 'random_forest_clf', name: 'Random Forest', description: 'Ensemble classification' },
      { id: 'gradient_boosting_clf', name: 'Gradient Boosting', description: 'Sequential classification' },
      { id: 'support_vector_clf', name: 'Support Vector Machine', description: 'Kernel-based classification' },
      { id: 'neural_network_clf', name: 'Neural Network', description: 'Deep learning classification' },
      { id: 'logistic_regression', name: 'Logistic Regression', description: 'Linear classification' },
      { id: 'knn', name: 'K-Nearest Neighbors', description: 'Distance-based classification' },
      { id: 'naive_bayes', name: 'Naive Bayes', description: 'Probabilistic classification' },
      { id: 'decision_tree', name: 'Decision Tree', description: 'Tree-based classification' },
    ]
  }

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Model Training Overview</h3>
            <p className="text-sm text-blue-800">
              Train QSAR/QSPR/QSTR models using advanced machine learning algorithms with comprehensive 
              hyperparameter tuning, cross-validation, and ensemble methods.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modelTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-lg ${type.color} text-white`}>
                <type.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{type.name}</h4>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedModelType(type.id)}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedModelType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {selectedModelType === type.id ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Quick Start Training</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model Type
            </label>
            <select 
              value={selectedModelType}
              onChange={(e) => setSelectedModelType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="qsar">QSAR (Structure-Activity)</option>
              <option value="qspr">QSPR (Structure-Property)</option>
              <option value="qstr">QSTR (Structure-Toxicity)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Algorithm
            </label>
            <select 
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="random_forest">Random Forest</option>
              <option value="gradient_boosting">Gradient Boosting</option>
              <option value="neural_network">Neural Network</option>
              <option value="support_vector">Support Vector Machine</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Start Training
          </button>
        </div>
      </div>
    </div>
  )

  const renderDataPreparation = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">Data Preparation</h3>
            <p className="text-sm text-green-800">
              Prepare and preprocess your training data for optimal model performance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Data Upload</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Training Data File
              </label>
              <input
                type="file"
                accept=".csv,.xlsx,.xls,.txt"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Supported formats: CSV, Excel, TXT</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Auto-detect</option>
                <option>SMILES + Target Column</option>
                <option>Descriptors + Target Column</option>
                <option>Custom Format</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Column
              </label>
              <input
                type="text"
                placeholder="e.g., activity, property, toxicity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Upload and Preview
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Data Preprocessing</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Remove duplicates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Handle missing values</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Feature scaling</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Feature selection</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Outlier detection</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Train/Test Split
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>80% / 20%</option>
                <option>70% / 30%</option>
                <option>75% / 25%</option>
                <option>90% / 10%</option>
              </select>
            </div>

            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Preprocess Data
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAlgorithmSelection = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-purple-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-purple-900 mb-2">Algorithm Selection</h3>
            <p className="text-sm text-purple-800">
              Choose from a wide range of machine learning algorithms optimized for QSAR/QSPR/QSTR modeling.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Regression Algorithms</h4>
          <div className="space-y-3">
            {algorithms.regression.map((algo) => (
              <div key={algo.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{algo.name}</div>
                    <div className="text-sm text-gray-600">{algo.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Regression
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Classification Algorithms</h4>
          <div className="space-y-3">
            {algorithms.classification.map((algo) => (
              <div key={algo.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{algo.name}</div>
                    <div className="text-sm text-gray-600">{algo.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Classification
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderHyperparameterTuning = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Settings className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Hyperparameter Tuning</h3>
            <p className="text-sm text-orange-800">
              Optimize model parameters using advanced tuning strategies for best performance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Tuning Strategy</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tuning Method
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Grid Search</option>
                <option>Random Search</option>
                <option>Bayesian Optimization</option>
                <option>Genetic Algorithm</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cross-Validation Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>5-fold</option>
                <option>10-fold</option>
                <option>Leave-One-Out</option>
                <option>Stratified K-fold</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scoring Metric
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>R² Score</option>
                <option>Mean Squared Error</option>
                <option>Mean Absolute Error</option>
                <option>Root Mean Squared Error</option>
              </select>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Start Tuning
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Parameter Ranges</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Settings className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Parameter ranges will appear here</p>
              <p className="text-sm">Select an algorithm to see tunable parameters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTrainingConfiguration = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FlaskConical className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Training Configuration</h3>
            <p className="text-sm text-indigo-800">
              Configure the training process with advanced options and monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Training Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Iterations
              </label>
              <input
                type="number"
                defaultValue={1000}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Rate
              </label>
              <input
                type="number"
                step="0.01"
                defaultValue={0.01}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Batch Size
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>32</option>
                <option>64</option>
                <option>128</option>
                <option>256</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Early Stopping
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patience
              </label>
              <input
                type="number"
                defaultValue={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Random Seed
              </label>
              <input
                type="number"
                defaultValue={42}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">
            Start Training
          </button>
        </div>
      </div>
    </div>
  )

  const renderCrossValidation = () => (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-teal-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-teal-900 mb-2">Cross-Validation</h3>
            <p className="text-sm text-teal-800">
              Validate model performance using robust cross-validation strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Validation Configuration</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CV Strategy
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>K-Fold Cross-Validation</option>
                <option>Stratified K-Fold</option>
                <option>Leave-One-Out (LOO)</option>
                <option>Leave-One-Group-Out</option>
                <option>Time Series Split</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Folds
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shuffle Data
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scoring Metrics
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">R² Score</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Mean Squared Error</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Mean Absolute Error</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Explained Variance</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
              Run Cross-Validation
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderEnsembleMethods = () => (
    <div className="space-y-6">
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-6 h-6 text-pink-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-pink-900 mb-2">Ensemble Methods</h3>
            <p className="text-sm text-pink-800">
              Combine multiple models for improved performance and robustness.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Ensemble Types</h4>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">Voting Classifier</h5>
              <p className="text-sm text-gray-600 mb-3">Combine predictions using majority voting</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="ensemble" className="mr-2" />
                  <span className="text-sm">Hard Voting</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="ensemble" className="mr-2" />
                  <span className="text-sm">Soft Voting</span>
                </label>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">Stacking</h5>
              <p className="text-sm text-gray-600 mb-3">Use meta-learner to combine base models</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="ensemble" className="mr-2" />
                  <span className="text-sm">Linear Meta-learner</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="ensemble" className="mr-2" />
                  <span className="text-sm">Non-linear Meta-learner</span>
                </label>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">Bagging</h5>
              <p className="text-sm text-gray-600 mb-3">Train models on bootstrap samples</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="ensemble" className="mr-2" />
                  <span className="text-sm">Bootstrap Aggregating</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Base Models</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Zap className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Base model selection will appear here</p>
              <p className="text-sm">Choose ensemble type to configure base models</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTrainingMonitoring = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Eye className="w-6 h-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-900 mb-2">Training Monitoring</h3>
            <p className="text-sm text-yellow-800">
              Monitor training progress in real-time with detailed metrics and visualizations.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Training Progress</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Play className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Training progress will appear here</p>
              <p className="text-sm">Start training to see real-time monitoring</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Live Metrics</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Live metrics will appear here</p>
              <p className="text-sm">Training metrics update in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderModelEvaluation = () => (
    <div className="space-y-6">
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="w-6 h-6 text-cyan-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-cyan-900 mb-2">Model Evaluation</h3>
            <p className="text-sm text-cyan-800">
              Evaluate trained models using comprehensive metrics and validation techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Evaluation Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Evaluation results will appear here</p>
              <p className="text-sm">Train a model to see evaluation metrics</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Performance plots will appear here</p>
              <p className="text-sm">Visualize model performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderExportModels = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Download className="w-6 h-6 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Export Models</h3>
            <p className="text-sm text-gray-700">
              Export your trained models in various formats for deployment and sharing.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Export Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model Selection
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option>Select a trained model</option>
                <option>LogP QSPR Model</option>
                <option>Toxicity QSTR Model</option>
                <option>Binding Affinity QSAR</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Export Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option>Pickle (.pkl)</option>
                <option>Joblib (.joblib)</option>
                <option>ONNX (.onnx)</option>
                <option>TensorFlow SavedModel</option>
                <option>PyTorch (.pt)</option>
              </select>
            </div>

            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              Export Model
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Download className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Export history will appear here</p>
              <p className="text-sm">Track your exported models</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'data_preparation':
        return renderDataPreparation()
      case 'algorithm_selection':
        return renderAlgorithmSelection()
      case 'hyperparameter_tuning':
        return renderHyperparameterTuning()
      case 'training_configuration':
        return renderTrainingConfiguration()
      case 'cross_validation':
        return renderCrossValidation()
      case 'ensemble_methods':
        return renderEnsembleMethods()
      case 'training_monitoring':
        return renderTrainingMonitoring()
      case 'model_evaluation':
        return renderModelEvaluation()
      case 'export_models':
        return renderExportModels()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Model Training</h1>
        <p className="text-lg text-gray-600">
          Train QSAR/QSPR/QSTR models with advanced machine learning algorithms
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

export default Train 