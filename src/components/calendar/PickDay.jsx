import { useState } from "react";
import { daysData } from "../../data/data";

export default function PickDay() {
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
