import StepBar from "../ui/stepBar";
import StepCircle from "../ui/stepCircle";
export default function Steps() {
	return (
		<div className="d-flex align-items-center justify-content-between mx-3 mt-4">
			<StepCircle isActive={true} />
			<StepBar isActive={true} />
			<StepCircle isActive={true} />
			<StepBar isActive={true} />
			<StepCircle isActive={true} />
			<StepBar isActive={false} />
			<StepCircle isActive={false} />
		</div>
	);
}
