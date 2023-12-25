import { createContext, useContext } from "react";

const SelectContext = createContext();

export const useSelectContext = () => useContext(SelectContext);

export default SelectContext;
