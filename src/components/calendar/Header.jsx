import CircleButton from "../ui/circleButton";
import logo from "../../assets/logo.svg";
export default function Header() {
	return (
		<section className="d-flex justify-content-between align-items-center">
			<CircleButton buttonType="back" />
			<div>
				<img src={logo} alt="" />
			</div>
			<CircleButton buttonType="close" />
		</section>
	);
}
