import FooterNav from "./components/calendar/FooterNav";
import Header from "./components/calendar/Header";
import PickDate from "./components/calendar/PickDate";
import PickDay from "./components/calendar/PickDay";
import PickHour from "./components/calendar/PickHour";

export default function App() {
	return (
		<div className="mx-3 d-flex flex-column vh-100">
			<Header />
			<PickDate />
			<PickDay />
			<PickHour />
			<FooterNav />
		</div>
	);
}
