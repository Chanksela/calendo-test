// import { useState } from "react";
import useSelectedItems from "../../hooks/useSelectedItems";
import MainButton from "../ui/mainButton";
import { timeSlots } from "../../data/data";

const chunkedTimeSlots = [];

// როგორც მივხვდი bootstrap 12 col-იანი გრიდი აქვს
// გადაკეთებას და ჩალიჩს, ეს ვამჯობინე.
// დროის მონაცემებს 4 რიგად ვყოფ და მერე ვლუპავ
for (let i = 0; i < timeSlots.length; i += 5) {
	chunkedTimeSlots.push(timeSlots.slice(i, i + 5));
}

export default function PickHour() {
	const { array, handleSelectingItems } = useSelectedItems(2);
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
											array.includes(time.id) ? "btn-hour-active" : ""
										}`}
										key={index}
										onClick={() => handleSelectingItems(time.id)}
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
			<MainButton text="გაგრძელება" />
		</>
	);
}
