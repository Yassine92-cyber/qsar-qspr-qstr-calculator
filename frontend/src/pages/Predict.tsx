import React from 'react'

const Predict: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Make Predictions</h1>
        <p className="text-gray-600">
          Use trained models to make predictions on new molecular data.
        </p>
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
          <p className="text-yellow-800">
            This page is under development. The enhanced prediction features will be available soon.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Predict 