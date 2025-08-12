import React, { useState } from 'react'
import { Database, Calculator, Download, Eye, Target, Atom, Layers, TrendingUp, Zap, FlaskConical } from 'lucide-react'

const Descriptors: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [smiles, setSmiles] = useState('')
  const [selectedDescriptorType, setSelectedDescriptorType] = useState('2d')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Database, description: 'Molecular descriptors overview' },
    { id: '2d_3d_descriptors', name: '2D & 3D Descriptors', icon: Calculator, description: 'Calculate 2D and 3D molecular descriptors' },
    { id: 'fingerprints', name: 'Fingerprints', icon: Target, description: 'Molecular fingerprints and keys' },
    { id: 'fragment_descriptors', name: 'Fragment Descriptors', icon: Atom, description: 'Fragment-based descriptors' },
    { id: 'estate_descriptors', name: 'E-State Descriptors', icon: TrendingUp, description: 'E-state and VSA descriptors' },
    { id: 'custom_descriptors', name: 'Custom Descriptors', icon: Zap, description: 'Custom descriptor calculation' },
    { id: 'batch_analysis', name: 'Batch Analysis', icon: FlaskConical, description: 'Batch descriptor calculation' },
    { id: 'visualization', name: 'Visualization', icon: Eye, description: 'Descriptor visualization and analysis' },
    { id: 'export', name: 'Export & Results', icon: Download, description: 'Export results and reports' },
  ]

  const descriptorCategories = {
    '2d': [
      { name: 'Molecular Weight', value: 'MolWt', description: 'Molecular mass in atomic mass units' },
      { name: 'Log P', value: 'LogP', description: 'Octanol-water partition coefficient' },
      { name: 'TPSA', value: 'TPSA', description: 'Topological polar surface area' },
      { name: 'H-Bond Donors', value: 'NumHDonors', description: 'Number of hydrogen bond donors' },
      { name: 'H-Bond Acceptors', value: 'NumHAcceptors', description: 'Number of hydrogen bond acceptors' },
      { name: 'Rotatable Bonds', value: 'NumRotatableBonds', description: 'Number of rotatable bonds' },
      { name: 'Aromatic Rings', value: 'NumAromaticRings', description: 'Number of aromatic rings' },
      { name: 'Fraction Csp3', value: 'FractionCsp3', description: 'Fraction of sp3 hybridized carbons' },
      { name: 'QED', value: 'qed', description: 'Quantitative estimate of drug-likeness' },
      { name: 'MolMR', value: 'MolMR', description: 'Molar refractivity' },
      { name: 'Labute ASA', value: 'LabuteASA', description: 'Labute approximation to surface area' },
      { name: 'Ring Count', value: 'RingCount', description: 'Total number of rings' },
      { name: 'Heavy Atom Count', value: 'HeavyAtomCount', description: 'Number of non-hydrogen atoms' },
    ],
    '3d': [
      { name: 'Principal Moments of Inertia', value: 'PMI', description: '3D shape descriptors' },
      { name: 'WHIM Descriptors', value: 'WHIM', description: 'Weighted Holistic Invariant Molecular' },
      { name: 'GETAWAY Descriptors', value: 'GETAWAY', description: 'Geometry, Topology, and Atom-Weights Assembly' },
      { name: '3D-MoRSE', value: '3DMoRSE', description: '3D Molecule Representation of Structures' },
      { name: 'Plane of Best Fit', value: 'PBF', description: 'Molecular planarity descriptor' },
      { name: 'Molecular Volume', value: 'Volume', description: '3D molecular volume' },
      { name: 'Surface Area', value: 'SurfaceArea', description: '3D molecular surface area' },
      { name: 'Radius of Gyration', value: 'RadiusGyration', description: 'Molecular size descriptor' },
      { name: 'Asphericity', value: 'Asphericity', description: 'Molecular shape descriptor' },
      { name: 'Eccentricity', value: 'Eccentricity', description: 'Molecular elongation descriptor' },
    ],
    'fingerprints': [
      { name: 'Morgan (ECFP)', value: 'Morgan', description: 'Extended connectivity fingerprints' },
      { name: 'Atom Pairs', value: 'AtomPairs', description: 'Atom pair fingerprints' },
      { name: 'Torsion', value: 'Torsion', description: 'Topological torsion fingerprints' },
      { name: 'MACCS Keys', value: 'MACCS', description: '166 structural keys' },
      { name: 'RDKit', value: 'RDKit', description: 'RDKit fingerprints' },
      { name: 'Pattern', value: 'Pattern', description: 'Pattern-based fingerprints' },
      { name: 'Hashed Atom Pairs', value: 'HashedAtomPairs', description: 'Hashed atom pair fingerprints' },
      { name: 'Hashed Torsion', value: 'HashedTorsion', description: 'Hashed torsion fingerprints' },
    ],
    'fragment': [
      { name: 'Benzene Rings', value: 'fr_benzene', description: 'Number of benzene rings' },
      { name: 'Halogen Atoms', value: 'fr_halogen', description: 'Number of halogen atoms' },
      { name: 'Ketone Groups', value: 'fr_ketone', description: 'Number of ketone groups' },
      { name: 'Ether Groups', value: 'fr_ether', description: 'Number of ether groups' },
      { name: 'Ester Groups', value: 'fr_ester', description: 'Number of ester groups' },
      { name: 'Amide Groups', value: 'fr_amide', description: 'Number of amide groups' },
      { name: 'Alcohol Groups', value: 'fr_Al_OH', description: 'Number of aliphatic alcohols' },
      { name: 'Phenol Groups', value: 'fr_Ar_OH', description: 'Number of phenolic groups' },
      { name: 'Carboxylic Acids', value: 'fr_COO', description: 'Number of carboxylic acids' },
      { name: 'Nitro Groups', value: 'fr_nitro', description: 'Number of nitro groups' },
      { name: 'Sulfone Groups', value: 'fr_sulfone', description: 'Number of sulfone groups' },
      { name: 'Thiophene Rings', value: 'fr_thiophene', description: 'Number of thiophene rings' },
    ]
  }

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Database className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">Molecular Descriptors Overview</h3>
            <p className="text-sm text-blue-800">
              Calculate comprehensive molecular descriptors for QSAR/QSPR/QSTR modeling. 
              This platform provides access to over 200+ molecular descriptors including 2D, 3D, 
              fingerprints, and fragment-based descriptors.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Descriptor Categories</h4>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <h5 className="font-medium text-gray-900">2D & 3D Descriptors</h5>
              </div>
              <p className="text-sm text-gray-600">Topological, constitutional, and 3D geometric descriptors</p>
              <div className="text-xs text-gray-500 mt-1">22 descriptors available</div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <h5 className="font-medium text-gray-900">Fingerprints</h5>
              </div>
              <p className="text-sm text-gray-600">Molecular fingerprints and keys</p>
              <div className="text-xs text-gray-500 mt-1">8 fingerprint types available</div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Atom className="w-5 h-5 text-orange-600" />
                <h5 className="font-medium text-gray-900">Fragment Descriptors</h5>
              </div>
              <p className="text-sm text-gray-600">Structural fragment counts</p>
              <div className="text-xs text-gray-500 mt-1">12 fragment types available</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Calculation</h4>
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
                Descriptor Type
              </label>
              <select 
                value={selectedDescriptorType}
                onChange={(e) => setSelectedDescriptorType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="2d_3d">2D & 3D Descriptors</option>
                <option value="fingerprints">Fingerprints</option>
                <option value="fragment">Fragment Descriptors</option>
                <option value="all">All Descriptors</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Calculate Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const render2D3DDescriptors = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Calculator className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">2D & 3D Molecular Descriptors</h3>
            <p className="text-sm text-blue-800">
              Calculate both 2D topological and 3D geometric molecular descriptors for comprehensive molecular analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2D Descriptors Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Calculator className="w-5 h-5 text-green-600 mr-2" />
            2D Descriptors
          </h4>
          <div className="space-y-3 mb-4">
            {descriptorCategories['2d'].map((descriptor) => (
              <div key={descriptor.value} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{descriptor.name}</div>
                    <div className="text-sm text-gray-600">{descriptor.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {descriptor.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Descriptors Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Layers className="w-5 h-5 text-purple-600 mr-2" />
            3D Descriptors
          </h4>
          <div className="space-y-3 mb-4">
            {descriptorCategories['3d'].map((descriptor) => (
              <div key={descriptor.value} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{descriptor.name}</div>
                    <div className="text-sm text-gray-600">{descriptor.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {descriptor.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Combined Calculation Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Descriptor Calculation</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descriptor Types
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">2D Descriptors</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">3D Descriptors</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Include drug-likeness (QED)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3D Conformer Generation
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>ETKDG (Default)</option>
                <option>MMFF94s</option>
                <option>UFF</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Calculate 2D & 3D Descriptors
          </button>
        </div>
      </div>
    </div>
  )

  const renderFingerprints = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Target className="w-6 h-6 text-orange-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-orange-900 mb-2">Molecular Fingerprints</h3>
            <p className="text-sm text-orange-800">
              Generate various types of molecular fingerprints for similarity searching and machine learning.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Available Fingerprint Types</h4>
          <div className="space-y-3">
            {descriptorCategories['fingerprints'].map((fingerprint) => (
              <div key={fingerprint.value} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{fingerprint.name}</div>
                    <div className="text-sm text-gray-600">{fingerprint.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {fingerprint.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Fingerprint Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SMILES Input
              </label>
              <textarea
                value={smiles}
                onChange={(e) => setSmiles(e.target.value)}
                placeholder="Enter SMILES string"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fingerprint Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Morgan (ECFP)</option>
                <option>Atom Pairs</option>
                <option>Torsion</option>
                <option>MACCS Keys</option>
                <option>All Types</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Morgan Radius
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>2 (ECFP4)</option>
                <option>3 (ECFP6)</option>
                <option>4 (ECFP8)</option>
              </select>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Generate Fingerprints
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderFragmentDescriptors = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Atom className="w-6 h-6 text-indigo-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Fragment Descriptors</h3>
            <p className="text-sm text-indigo-800">
              Calculate fragment-based descriptors for structural analysis and drug design.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Available Fragment Descriptors</h4>
          <div className="space-y-3">
            {descriptorCategories['fragment'].map((fragment) => (
              <div key={fragment.value} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{fragment.name}</div>
                    <div className="text-sm text-gray-600">{fragment.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {fragment.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Fragment Analysis</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SMILES Input
              </label>
              <textarea
                value={smiles}
                onChange={(e) => setSmiles(e.target.value)}
                placeholder="Enter SMILES string"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include all fragment types</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Calculate fragment ratios</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include fragment complexity</span>
              </label>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Calculate Fragment Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderEStateDescriptors = () => (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-6 h-6 text-teal-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-teal-900 mb-2">E-State Descriptors</h3>
            <p className="text-sm text-teal-800">
              Calculate E-state and VSA (van der Waals surface area) descriptors for electronic properties.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">E-State Descriptor Calculation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMILES Input
            </label>
            <textarea
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              placeholder="Enter SMILES string"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={3}
            />
          </div>
          <div className="flex flex-col justify-end">
            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
              Calculate E-State Descriptors
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCustomDescriptors = () => (
    <div className="space-y-6">
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Zap className="w-6 h-6 text-pink-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-pink-900 mb-2">Custom Descriptor Calculation</h3>
            <p className="text-sm text-pink-800">
              Define and calculate custom molecular descriptors for specific applications.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Custom Descriptor Definition</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMILES Input
            </label>
            <textarea
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              placeholder="Enter SMILES string"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={3}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Descriptor Formula
            </label>
            <textarea
              placeholder="Enter custom descriptor formula (e.g., MolWt * LogP / TPSA)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={3}
            />
          </div>

          <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors">
            Calculate Custom Descriptor
          </button>
        </div>
      </div>
    </div>
  )

  const renderBatchAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FlaskConical className="w-6 h-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-900 mb-2">Batch Descriptor Calculation</h3>
            <p className="text-sm text-yellow-800">
              Calculate descriptors for multiple compounds simultaneously.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Batch Input</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMILES List (one per line)
            </label>
            <textarea
              placeholder="CCO&#10;CCCO&#10;CCCCCO&#10;Enter one SMILES per line"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={6}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descriptor Types
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">2D Descriptors</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">3D Descriptors</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Fingerprints</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Fragment Descriptors</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
            Start Batch Calculation
          </button>
        </div>
      </div>
    </div>
  )

  const renderVisualization = () => (
    <div className="space-y-6">
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Eye className="w-6 h-6 text-cyan-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-cyan-900 mb-2">Descriptor Visualization</h3>
            <p className="text-sm text-cyan-800">
              Visualize and analyze molecular descriptors with interactive charts and plots.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Visualization Options</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chart Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Bar Chart</option>
                <option>Scatter Plot</option>
                <option>Heatmap</option>
                <option>Radar Chart</option>
                <option>Box Plot</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descriptor Selection
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>All Descriptors</option>
                <option>2D Descriptors Only</option>
                <option>3D Descriptors Only</option>
                <option>Custom Selection</option>
              </select>
            </div>

            <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors">
              Generate Visualization
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Visualization Output</h4>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Eye className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500">Descriptor visualization will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderExport = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Download className="w-6 h-6 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Export & Results</h3>
            <p className="text-sm text-gray-700">
              Export descriptor calculation results in various formats and generate reports.
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
                File Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
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
                <span className="text-sm">Include SMILES</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Include descriptor descriptions</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include statistical summary</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include visualization</span>
              </label>
            </div>

            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              Export Results
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Recent Calculations</h4>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Database className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>No recent calculations</p>
              <p className="text-sm">Calculate descriptors to see history here</p>
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
      case '2d_3d_descriptors':
        return render2D3DDescriptors()
      case 'fingerprints':
        return renderFingerprints()
      case 'fragment_descriptors':
        return renderFragmentDescriptors()
      case 'estate_descriptors':
        return renderEStateDescriptors()
      case 'custom_descriptors':
        return renderCustomDescriptors()
      case 'batch_analysis':
        return renderBatchAnalysis()
      case 'visualization':
        return renderVisualization()
      case 'export':
        return renderExport()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Molecular Descriptors</h1>
        <p className="text-lg text-gray-600">
          Calculate comprehensive molecular descriptors for QSAR/QSPR/QSTR modeling
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

export default Descriptors 