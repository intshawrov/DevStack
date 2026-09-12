import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../../types/type';

interface ISelectedTechnologiesProps {
        selectedTechnologies: Itechnology[];
        setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectedTechnologies = ({selectedTechnologies , setSelectedTechnologies}: ISelectedTechnologiesProps) => {


    console.log(selectedTechnologies , "from selectetechnologies componentes");



    return (
        <div>

        </div>
    );
};

export default SelectedTechnologies;