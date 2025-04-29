import React from "react";

interface SumInputProps {
    num1: number;
    num2: number;
    onChange: (name: string, value: number) => void;
}

const SumInput: React.FC<SumInputProps> = ({ num1, num2, onChange }) => {
    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange('num1', parseFloat(e.target.value))}
                placeholder="numero 1"
            />

            <input
                type="number"
                value={num2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange('num2', parseFloat(e.target.value))}
                placeholder="numero 2"
            />
        </div>
    );
};

export default SumInput;