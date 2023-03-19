import React from "react";

interface CalculatorScreenProps {
	displayValue: string;
}

const CalculatorScreen: React.FC<CalculatorScreenProps> = ({
	displayValue,
}) => {
	return (
		<div className="p-2 bg-black text-orange-500 rounded-xl text-right tracking-wider">
			{displayValue}
		</div>
	);
};

export default CalculatorScreen;
