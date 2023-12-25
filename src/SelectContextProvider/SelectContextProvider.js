import SelectContext from "./SelectContext";
import { useState } from "react";

const SelectContextProvider = ({ children }) => {
	const [selectedNodeType, setSelectedNodeType] = useState();

	return (
		<SelectContext.Provider
			value={{
				selectedNodeType,
				setSelectedNodeType,
			}}
		>
			{children}
		</SelectContext.Provider>
	);
};

export default SelectContextProvider;
