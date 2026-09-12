import React, { use, useState } from 'react';
import type { Itechnology } from '../../types/type';
import AllTechonologies from './AllTechonologies';


interface TechnologiesProps{
    technologyPromise: Promise<Itechnology[]>
}

const Technologies = ({technologyPromise}: TechnologiesProps) => {

    const technologies = use(technologyPromise);

    const [SelectedTechnologies , setSelectedTechnologies] = useState([]);


    console.log(technologies, "technologies");
       
    return (
        <div className='container mx-auto'>
            <div>
                <h2>Explore the Technologies</h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <AllTechonologies technologies={technologies} selectedTechnologies={SelectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></AllTechonologies>
            
        </div>
    );
};

export default Technologies;