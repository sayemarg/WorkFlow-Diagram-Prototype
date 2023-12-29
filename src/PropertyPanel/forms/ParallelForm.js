import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const ParallelForm = () => {
	return (
		<div className="input-group">
			<span className="label">کیس:</span>
			<FontAwesomeIcon className="add-case-button" icon={faAdd} />
		</div>
	);
};

export default ParallelForm;
