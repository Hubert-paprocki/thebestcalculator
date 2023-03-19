import React, { useState } from "react";
import Button from "./Button";
import CalculatorScreen from "./CalculatorScreen";

const CalculatorFace = () => {
	const [operator, setOperator] = useState(null);
	const [displayValue, setDisplayValue] = useState("0");
	const handleInputValue = () => {
		if (displayValue === "0") setDisplayValue("1");
		else setDisplayValue(displayValue + "1");
	};
	return (
		<div className="bg-slate-300 p-2 rounded-2xl w-1/3 ">
			<CalculatorScreen displayValue={displayValue} />
			<Button onClick={handleInputValue} nr>
				1
			</Button>
			<Button nr>2</Button>
			<Button nr>3</Button>
			<Button nr>4</Button>
			<Button nr>5</Button>
			<Button nr>6</Button>
			<Button nr>7</Button>
			<Button nr>8</Button>
			<Button nr>9</Button>
			<Button>+</Button>
			<Button>-</Button>
			<Button>*</Button>
			<Button>/</Button>
			<Button es>=</Button>
		</div>
	);
};

export default CalculatorFace;
