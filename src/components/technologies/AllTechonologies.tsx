import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../../types/type';
import TechnologiesCard from './TechnologiesCard';
import SelectedTechnologies from './SelectedTechnologies';

interface IAllTechProps {
    technologies: Itechnology[];
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const AllTechonologies = ({
    technologies,
    selectedTechnologies,
    setSelectedTechnologies
}: IAllTechProps) => {

    console.log(technologies, "All technologies from technology");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto pb-16">
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((technologies: Itechnology) => (

                    <TechnologiesCard
                        key={technologies.id}
                        technologies={technologies}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />

                ))}
            </div>

            <div className="lg:col-span-3 border border-gray-100 bg-white p-6 rounded-2xl shadow-sm h-fit">
                <SelectedTechnologies
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                />
            </div>
        </div>
    );
};

export default AllTechonologies;