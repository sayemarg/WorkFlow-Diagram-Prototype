import {
	faCheckDouble,
	faHand,
	faLandMineOn,
	faRotate,
	faSignsPost,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import "./Diagram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useSelectContext } from "../SelectContextProvider/SelectContext";

const Diagram = () => {
	const { setSelectedNodeType } = useSelectContext();

	const onDiagramClick = useCallback(
		(event) => {
			if (event.target?.closest(".node")) return;

			setSelectedNodeType(undefined);
		},
		[setSelectedNodeType]
	);

	return (
		<div className="diagram" onClick={onDiagramClick}>
			<div
				onClick={() => setSelectedNodeType("hand")}
				className="node card hand"
				style={{ top: "100px", right: "100px" }}
			>
				<div className="card-title">عملیات دستی</div>
				<div className="card-body">
					<div className="card-body-separator">
						شرکت فناوری اطلاعات فن آگین
					</div>
					<div className="card-body-separator">
						دسترسی به فرم درخواست خرید
					</div>
					<div>امکان ویرایش ندارد</div>
				</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faHand} />
				</div>
			</div>

			<div
				onClick={() => setSelectedNodeType("auto-delete")}
				className="node card auto-delete"
				style={{ top: "100px", right: "400px" }}
			>
				<div className="card-title">عملیات اتوماتیک حذف</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faX} />
				</div>
			</div>

			<div
				onClick={() => setSelectedNodeType("auto-convert")}
				className="node card auto-convert"
				style={{ top: "100px", right: "700px" }}
			>
				<div className="card-title">عملیات اتوماتیک تبدیل</div>
				<div className="card-body">تبدیل به فاکتور</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faRotate} />
				</div>
			</div>

			<div
				onClick={() => setSelectedNodeType("event-base")}
				className="node card event-base"
				style={{ top: "500px", right: "100px" }}
			>
				<div className="card-title">شروع عملیات با رخداد</div>
				<div className="card-body">در هنگام ویرایش</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faLandMineOn} />
				</div>
			</div>

			<div
				onClick={() => setSelectedNodeType("choice")}
				className="node card choice"
				style={{ top: "500px", right: "400px" }}
			>
				<div className="card-title">تصمیم گیری</div>
				<div className="card-body">
					<div className="card-body-separator">انتخاب چند مسیر</div>
					<div>ارزیابی اتوماتیک بر اساس کیس ها</div>
				</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faSignsPost} />
				</div>
			</div>

			<div
				onClick={() => setSelectedNodeType("parallel")}
				className="node card parallel"
				style={{ top: "500px", right: "700px" }}
			>
				<div className="card-title">عملیات موازی</div>
				<div className="node-icon">
					<FontAwesomeIcon icon={faCheckDouble} />
				</div>
			</div>
		</div>
	);
};

export default Diagram;
