import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
function App() {

  return (
    <>
      <Suspense><Nav></Nav></Suspense>
    </>
  )
}

export default App
