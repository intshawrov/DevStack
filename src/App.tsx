import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'


const technologyPromise = async() =>{

  const res = await fetch('/data.json');
  const data = await res.json();

  return data;

}


function App() {

  console.log(technologyPromise);
  


  return (
    <>
      <Suspense>
        <Nav></Nav>
        <Banner></Banner>
      </Suspense>

    </>
  )
}

export default App
