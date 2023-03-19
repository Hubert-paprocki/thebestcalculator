import React from "react";
import CalculatorFace from "./Components/CalculatorFace";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-sky-50 flex flex-col justify-center items-center">
			<h1>Uzyskaj jak najwyższą liczbę:</h1>
			<CalculatorFace />
		</div>
	);
};

export default App;
