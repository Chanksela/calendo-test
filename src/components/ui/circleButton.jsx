import closeIcon from "../../assets/icons/close.svg";
import forwardIcon from "../../assets/icons/right-arrow.svg";

import backIcon from "../../assets/icons/left-arrow.svg";

export default function CircleButton({ type, onClick }) {
	let icon;

	switch (type) {
		case "close":
			icon = closeIcon;
			break;
		case "forward":
			icon = forwardIcon;
			break;
		case "back":
			icon = backIcon;
			break;
		default:
			icon = null;
			break;
	}

	return (
		<div
			onClick={onClick}
			className="rounded-circle d-flex justify-content-center align-items-center icon-container"
		>
			<img src={icon} alt={`${type} icon`} />
		</div>
	);
}
