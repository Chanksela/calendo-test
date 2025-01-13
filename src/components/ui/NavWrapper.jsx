import HomeIcon from "../../assets/icons/HomeIcon";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { useState } from "react";

export default function NavWrapper({ text }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	let IconComponent;

	switch (text) {
		case "მთავარი":
			IconComponent = HomeIcon;
			break;
		case "აქტივობები":
			IconComponent = ActivityIcon;
			break;
		case "პროფილი":
			IconComponent = ProfileIcon;
			break;
		default:
			IconComponent = null;
			break;
	}

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="col-4 d-flex flex-column justify-content-center align-items-center nav-wrapper"
		>
			<div>{IconComponent && <IconComponent isHovered={isHovered} />}</div>
			<p>{text}</p>
		</div>
	);
}
