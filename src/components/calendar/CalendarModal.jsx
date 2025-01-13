import useSelectedItems from "../../hooks/useSelectedItems";
import CircleButton from "../ui/circleButton";
import MainButton from "../ui/mainButton";
export default function CalendarModal({ showModal, toggleModal }) {
	let currentDate = new Date().getDate() - 1;
	const { array, handleSelectingItems } = useSelectedItems(2);

	return (
		<>
			{" "}
			{showModal && (
				<div className="custom-backdrop" onClick={toggleModal}></div>
			)}
			<div
				className={`custom-modal ${showModal ? "show" : ""}`}
				style={{ transform: showModal ? "translateY(0)" : "translateY(100%)" }}
			>
				<div className="modal-header d-flex justify-content-between align-items-center">
					<h5 className="modal-title fw-bold">აირჩიე თარიღი</h5>
					<CircleButton type="close" onClick={toggleModal} />
				</div>
				<div className="modal-body">
					<div className="calendar">
						<div className="calendar-header">
							<CircleButton type="back" />
							<p className="fw-bold">იანვარი 2025</p>
							<CircleButton type="forward" />
						</div>
						<div className="calendar-grid">
							<div>ორშ</div>
							<div>სამ</div>
							<div>ოთხ</div>
							<div>ხუთ</div>
							<div>პარ</div>
							<div>შაბ</div>
							<div>კვ</div>
							{[...Array(31)].map((_, i) => (
								<button
									key={i}
									className={` date ${array.includes(i) ? "selected" : ""} `}
									onClick={() => handleSelectingItems(i)}
								>
									{i + 1}
									<span
										className={`${currentDate === i ? "current-day" : ""}`}
									></span>
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<MainButton text="დამატება" onClick={toggleModal} />
				</div>
			</div>
		</>
	);
}
