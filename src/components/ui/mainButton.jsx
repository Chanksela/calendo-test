export default function mainButton({ text, onClick }) {
	return (
		<button className="w-100 btn-main mt-auto mb-3" onClick={onClick}>
			{text}
		</button>
	);
}
