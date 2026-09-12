import React from 'react';
import type { Itechnology } from '../../types/type';
import TechnologiesCard from './TechnologiesCard';

const AllTechonologies = ({ technologies }) => {

    console.log(technologies, "All technologies from technology")
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  mx-auto ">
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((technologies:Itechnology) => (
                    
                    <TechnologiesCard key={technologies.id} technologies={technologies} />

                ))}
            </div>

            <div className="lg:col-span-3 border border-gray-100 bg-white p-6 rounded-2xl shadow-sm h-fit">
                <h2 className="text-xl font-bold text-slate-900">Your stack</h2>
            </div>
        </div>
    );
};

export default AllTechonologies;