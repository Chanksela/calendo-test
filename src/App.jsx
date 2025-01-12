import Header from "./components/calendar/Header";
import PickDate from "./components/calendar/PickDate";
import PickDay from "./components/calendar/PickDay";
export default function App() {
	return (
		<div className="mx-3 mt-2">
			<Header />
			<PickDate />
			<PickDay />
		</div>
	);
}
