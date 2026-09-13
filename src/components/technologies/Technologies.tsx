import { use, useState } from 'react';
import type { Itechnology } from '../../types/type';
import AllTechonologies from './AllTechonologies';


interface TechnologiesProps{
    technologyPromise: Promise<Itechnology[]>
}

const Technologies = ({technologyPromise}: TechnologiesProps) => {

    const technologies = use(technologyPromise);

    const [SelectedTechnologies , setSelectedTechnologies] = useState<Itechnology[]>([]);


    console.log(technologies, "technologies");
       
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='text-5xl font-extrabold'>Explore the <span className='bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent'>Technologies</span></h2>
                <p className='text-[#64748B] text-[18px] mt-5 mb-7'>Pick one technology per category to build your ideal stack.</p>
            </div>
            <AllTechonologies technologies={technologies} selectedTechnologies={SelectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></AllTechonologies>
            
        </div>
    );
};

export default Technologies;