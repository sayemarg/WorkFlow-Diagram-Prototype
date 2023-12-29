import {
	AutoConvertForm,
	ChoiceForm,
	EventBaseForm,
	HandForm,
	ParallelForm,
} from "./forms";
import "./PropertyPanel.css";
import { useMemo } from "react";
import { useSelectContext } from "../SelectContextProvider/SelectContext";

const PropertyPanel = () => {
	const { selectedNodeType } = useSelectContext();

	const selectedNodeForm = useMemo(() => {
		switch (selectedNodeType) {
			case "hand":
				return <HandForm />;
			case "auto-delete":
				return null;
			case "auto-convert":
				return <AutoConvertForm />;
			case "event-base":
				return <EventBaseForm />;
			case "choice":
				return <ChoiceForm />;
			case "parallel":
				return <ParallelForm />;
			default:
				return null;
		}
	}, [selectedNodeType]);

	return (
		<div className={`properties ${!selectedNodeForm ? "is-collapsed" : ""}`}>
			{selectedNodeForm && (
				<div className="property-form">
					<input
						className="node-title"
						type="text"
						placeholder="عنوان فرآیند"
					/>

					<div>{selectedNodeForm}</div>
				</div>
			)}
		</div>
	);
};

export default PropertyPanel;
