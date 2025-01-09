import CircleButton from "../ui/circleButton";
import logo from "../../assets/logo.svg";
import Steps from "./Steps";
export default function Header() {
	return (
		<section>
			<div className="d-flex justify-content-between align-items-center">
				<CircleButton type="back" />
				<div>
					<img src={logo} alt="" />
				</div>
				<CircleButton type="close" />
			</div>
			<Steps />
		</section>
	);
}
