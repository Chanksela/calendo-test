export default function stepCircle({ isActive }) {
	let color;

	switch (isActive) {
		case true:
			color = "#7C1FD1";
			break;
		case false:
			color = "#EBEEF2";
			break;
		default:
			break;
	}

	return (
		<div
			className="rounded-circle"
			style={{ height: "14px", width: "14px", backgroundColor: color }}
		></div>
	);
}
