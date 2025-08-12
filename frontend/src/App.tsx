import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import QSAR from './pages/QSAR'
import QSPR from './pages/QSPR'
import QSTR from './pages/QSTR'
import Descriptors from './pages/Descriptors'
import Models from './pages/Models'
import Predict from './pages/Predict'
import Train from './pages/Train'
import Predictions from './pages/Predictions'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/qsar" element={<QSAR />} />
          <Route path="/qspr" element={<QSPR />} />
          <Route path="/qstr" element={<QSTR />} />
          <Route path="/descriptors" element={<Descriptors />} />
          <Route path="/models" element={<Models />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/train" element={<Train />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 