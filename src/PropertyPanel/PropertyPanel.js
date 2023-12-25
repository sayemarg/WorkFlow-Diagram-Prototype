import { useSelectContext } from "../SelectContextProvider/SelectContext";

const PropertyPanel = () => {
	const { selectedNodeType } = useSelectContext();

	return (
		<div className={`properties ${selectedNodeType ? "" : "is-collapsed"}`}>
			{selectedNodeType}
		</div>
	);
};

export default PropertyPanel;
