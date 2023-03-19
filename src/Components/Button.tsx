import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	nr?: boolean;
	es?: boolean;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, nr, es, onClick }) => {
	let classes = "";
	if (nr) {
		classes =
			"p-2 border-2 border-slate-500 border-black m-1 duration-200 rounded hover:bg-slate-400/50 hover:shadow-lg";
	}
	if (es) {
		classes =
			"py-1 px-8 border-2 border-slate-500 border-black m-1 duration-200 rounded hover:bg-slate-400/50 hover:shadow-lg";
	}
	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
