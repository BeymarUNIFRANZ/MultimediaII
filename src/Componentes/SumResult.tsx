import React from "react";

interface SumResultProps {
    result: number;
}

const SumResult: React.FC<SumResultProps> = ({ result }) => {
    return <h2>Resultadu:{result}</h2>;
};

export default SumResult;