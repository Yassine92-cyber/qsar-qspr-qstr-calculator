import React from 'react'

const Descriptors: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Molecular Descriptors</h1>
        <p className="text-gray-600">
          Calculate 2D and 3D molecular descriptors for your compounds.
        </p>
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-green-800">
            This page is under development. The enhanced descriptor features will be available soon.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Descriptors 