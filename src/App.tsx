import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Technologies from './components/technologies/Technologies'
import type { Itechnology } from './types/type'


const technologyPromise = async():Promise<Itechnology[]> =>{

  const res = await fetch('/data.json');
  const data = await res.json();

  return data;

}


function App() {

  console.log(technologyPromise);
  


  return (
    <>
        <Nav></Nav>
        <Banner></Banner>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologyPromise={technologyPromise()}></Technologies>
      </Suspense>

    </>
  )
}

export default App
