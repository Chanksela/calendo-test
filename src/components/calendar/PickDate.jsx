import { useState } from "react";

import CalendarIcon from "../../assets/icons/calendar.svg";
import CalendarModal from "./CalendarModal";

export default function PickDate() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-8 d-flex flex-column">
					<h1 className="mb-4 display-6 fw-bold">აირჩიე დრო</h1>
					<p className="flex flex-column">აირჩიე სასურველი თარიღი</p>
				</div>
				<div className="col-4 d-flex align-items-end justify-content-end">
					<button
						className="btn btn-light d-flex mb-4 align-items-center justify-content-center"
						style={{ width: "40px", height: "40px" }}
						onClick={toggleModal}
					>
						<img src={CalendarIcon} alt="Calendar button" />
					</button>
				</div>
			</div>
			<CalendarModal showModal={showModal} toggleModal={toggleModal} />
		</div>
	);
}
