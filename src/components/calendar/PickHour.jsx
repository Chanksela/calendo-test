import { useState } from "react";
import { timeSlots } from "../../data/data";

const chunkedTimeSlots = [];

// როგორც მივხვდი bootstrap 12 col-იანი გრიდი აქვს
// გადაკეთებას და ჩალიჩს, ეს ვამჯობინე.
// დროის მონაცემებს 4 რიგად ვყოფ და მერე ვლუპავ
for (let i = 0; i < timeSlots.length; i += 5) {
	chunkedTimeSlots.push(timeSlots.slice(i, i + 5));
}

export default function PickHour() {
	const [selectedHours, setSelectedHours] = useState([]);
	// სათების არჩევის ლოგიკა
	const selectHours = (id) => {
		let refreshedSelectedHours = [...selectedHours];
		// თუ დრო უკვე არჩეულია, გაფილტრე
		if (refreshedSelectedHours.includes(id)) {
			console.log("includes");
			refreshedSelectedHours = refreshedSelectedHours.filter(
				(hours) => hours !== id
			);
		} else {
			// თუ ორზე ნაკლები დროა დაამატე ახალი
			if (refreshedSelectedHours.length < 2) {
				refreshedSelectedHours.push(id);
			} else {
				// თუ უკვე ორი დროა, ყველაძე ძველი ამოიღე და ახალი დაამატე.
				refreshedSelectedHours.shift();
				refreshedSelectedHours.push(id);
			}
		}

		// განაახლე სტეიტი
		setSelectedHours(refreshedSelectedHours);
		console.log(refreshedSelectedHours);
	};

	return (
		<>
			<div className="container mt-4">
				{chunkedTimeSlots.map((row, rowIndex) => {
					return (
						<div
							key={rowIndex}
							className="row d-flex justify-content-between align-items-center"
						>
							{row.map((time, index) => {
								return (
									<button
										className={`col-2 mb-4 btn-hour d-flex flex-column justify-content-center align-items-center ${
											selectedHours.includes(time.id) ? "btn-hour-active" : ""
										}`}
										key={index}
										onClick={() => selectHours(time.id)}
									>
										<span className="fw-semibold">{time.time}</span>
										<span>{time.date}</span>
									</button>
								);
							})}
						</div>
					);
				})}
			</div>
			<button className="w-100 btn-main mt-auto mb-3">გაგრძელება</button>
		</>
	);
}
