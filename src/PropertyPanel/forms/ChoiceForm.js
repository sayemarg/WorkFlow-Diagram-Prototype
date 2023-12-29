import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ChoiceForm = () => {
	const [selectedChoice, setSelectedChoice] = useState(2);

	const [isAutoChoice, setIsAutoChoice] = useState(true);

	return (
		<div>
			<fieldset className="radio-button-group mb-1">
				<label className="input-group">
					<span className="label">انتخاب یک مسیر</span>
					<input
						type="radio"
						checked={selectedChoice === 1}
						onChange={() => setSelectedChoice(1)}
					/>
				</label>

				<label className="input-group">
					<span className="label">انتخاب چند مسیر</span>
					<input
						type="radio"
						checked={selectedChoice === 2}
						onChange={() => setSelectedChoice(2)}
					/>
				</label>
			</fieldset>

			<label className="input-group mb-1">
				<span className="label">ارزیابی به صورت اتوماتیک</span>
				<input
					type="checkbox"
					onChange={() => setIsAutoChoice((prevIsAuto) => !prevIsAuto)}
					checked={isAutoChoice}
				/>
			</label>

			{isAutoChoice && (
				<div className="input-group">
					کیس:
					<FontAwesomeIcon className="add-case-button" icon={faAdd} />
				</div>
			)}
		</div>
	);
};

export default ChoiceForm;
