import { useState } from "react";

export default function PickDay() {
	const daysData = [
		{ day: "ორშ", date: 12 },
		{ day: "სამ", date: 13 },
		{ day: "ოთხ", date: 14 },
		{ day: "ხუთ", date: 15 },
		{ day: "პარ", date: 16 },
		{ day: "შაბ", date: 17 },
	];

	const [isActive, setIsActive] = useState(null);
	const setIsActiveDay = (index) => {
		setIsActive(index === isActive ? null : index);
	};
	return (
		<div className="container">
			<div className="row">
				{daysData.map((date, index) => {
					return (
						<div
							className="col-2"
							key={index}
							onClick={() => setIsActiveDay(index)}
						>
							<button
								className={`${
									isActive === index ? "btn-day-active" : ""
								} fw-bold btn btn-light btn-day d-flex flex-column justify-content-around align-items-center`}
							>
								<span>{date.day}</span>
								<span className="day-date">{date.date}</span>
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
