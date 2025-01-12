import NavWrapper from "../ui/NavWrapper";

export default function FooterNav() {
	return (
		<div className="container">
			<div className="row ">
				<NavWrapper text="მთავარი" />
				<NavWrapper text="აქტივობები" />
				<NavWrapper text="პროფილი" />
			</div>
		</div>
	);
}
