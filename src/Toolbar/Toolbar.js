import {
	faCheckDouble,
	faHand,
	faLandMineOn,
	faRotate,
	faSearch,
	faSignsPost,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import "./Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = () => {
	return (
		<div className="toolbar">
			<div className="search">
				<div>
					<FontAwesomeIcon icon={faSearch} />
				</div>

				<input className="search-input" placeholder="جستجوی ابزار..." />
			</div>

			<ul className="selector-list">
				<li className="selector-list-item" draggable>
					<FontAwesomeIcon icon={faHand} /> عملیات دستی
				</li>

				<li className="card">
					<div className="card-title">عملیات اتوماتیک</div>

					<div className="card-body">
						<div className="selector-list-item" draggable>
							<FontAwesomeIcon icon={faX} /> عملیات اتوماتیک حذف
						</div>

						<div className="selector-list-item" draggable>
							<FontAwesomeIcon icon={faRotate} /> عملیات اتوماتیک تبدیل
						</div>
					</div>
				</li>

				<li className="card">
					<div className="card-title">درگاه</div>

					<div className="card-body">
						<div className="selector-list-item" draggable>
							<FontAwesomeIcon icon={faLandMineOn} /> شروع عملیات با رخداد
						</div>

						<div className="selector-list-item" draggable>
							<FontAwesomeIcon icon={faSignsPost} /> تصمیم گیری
						</div>

						<div className="selector-list-item" draggable>
							<FontAwesomeIcon icon={faCheckDouble} /> عملیات موازی
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Toolbar;
