import HomeIcon from "../../assets/icons/home.svg";
import ActivityIcon from "../../assets/icons/activity.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
export default function NavWrapper({ text }) {
	let logo;
	switch (text) {
		case "მთავარი":
			logo = HomeIcon;

			break;
		case "აქტივობები":
			logo = ActivityIcon;

			break;
		case "პროფილი":
			logo = ProfileIcon;

			break;
		default:
			break;
	}
	return (
		<div className="col-4 d-flex flex-column justify-content-center align-items-center nav-wrapper">
			<div>
				<img src={logo} alt={text} />
			</div>
			<p>{text}</p>
		</div>
	);
}
