import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../../types/type';
import { toast } from 'react-toastify';

interface ITechnologiesCardProps {
    technologies: Itechnology;
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechnologiesCard = ({ technologies, selectedTechnologies, setSelectedTechnologies }: ITechnologiesCardProps) => {

    const [isSelected, setIsSelected] = useState(false);
    console.log(isSelected, setIsSelected, "isSelected, setIsSelected");

    const handleAddToStack = () => {
        setIsSelected(true);

        // setIsSelected(true);

        setSelectedTechnologies((prev) => [
            ...prev,
            technologies
        ]);


        toast.success(`${technologies.name} added to stack`);
    };



    return (
        <div>
            <div
                key={technologies.id}
                className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center">
                            <img
                                src={technologies.icon}
                                alt={technologies.name}
                                className="h-8 w-8 object-contain"
                            />
                        </div>
                        {technologies.badge && (
                            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-500">
                                {technologies.badge}
                            </span>
                        )}
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                        {technologies.name}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                        {technologies.description}
                    </p>
                </div>

                <div>
                    <div className="mb-5 flex items-center justify-between text-xs font-medium text-slate-600">
                        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                            {technologies.category}
                        </span>
                        <span>{technologies.difficulty}</span>
                        <div className="flex items-center gap-1">
                            <span className="text-amber-400">★</span>
                            <span className="font-semibold text-slate-800">{technologies.rating}</span>
                        </div>
                    </div>

                    <button onClick={handleAddToStack}

                        className="w-full rounded-xl bg-[#0b0f19] py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:scale-[0.99] disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer disabled:cursor-not-allowed"
                        disabled={isSelected === true ? true : false}
                    >  {isSelected === true ? "Added to Stack" : "Add to Stack"} 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesCard;