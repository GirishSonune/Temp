import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import './i18n/i18n'
import './App.css'

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
