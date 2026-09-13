import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../../types/type';
import Technologies from './Technologies';
import { IoClose } from 'react-icons/io5';

interface ISelectedTechnologiesProps {
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectedTechnologies = ({ selectedTechnologies, setSelectedTechnologies }: ISelectedTechnologiesProps) => {


    console.log(selectedTechnologies, "from selectetechnologies componentes");

    const handleRemoveItems = (technology: Itechnology) => {
        const restItems = selectedTechnologies.filter(
            selectedTechnologi => selectedTechnologi.name !== technology.name
        );

        setSelectedTechnologies(restItems);
    };


    return (
        <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
                Your Stack
            </h2>

            {selectedTechnologies.length === 0 && (
                <div className='px-5 py-7 border border-dashed border-[#bebebe] rounded-lg'><h3 className='text-center'>Your stack is empty.</h3></div>
            )}

            {selectedTechnologies.map((technology: Itechnology) => {
                return (
                    <div key={technology.id} className='flex justify-between mb-2.5 p-3 border border-[#E2E8F0] rounded-lg'>
                        <div className='flex gap-5'>
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-10 h-10 object-contain"
                            />
                            <div>
                                <h3 className='font-bold text-[#0F172A]'>{technology.name}</h3>
                                <p className='text-[12px] text-[#94A3B8] font-semibold'>{technology.category}</p>

                            </div>
                        </div>

                        <span className='flex items-center cursor-pointer' onClick={() => handleRemoveItems(technology)}>
                            <IoClose size={20} />
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default SelectedTechnologies;