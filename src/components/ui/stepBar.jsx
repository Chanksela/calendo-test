export default function stepBar({ isActive }) {
	let color;

	switch (isActive) {
		case true:
			color = "#7C1FD1";
			break;
		case false:
			color = "#F4F6F9";
			break;
		default:
			break;
	}

	return (
		<div
			className="rounded w-25"
			style={{ height: "4px", backgroundColor: color }}
		></div>
	);
}
