import TopNav from "components/TopNav";
import PaddedContainer from "components/Containers/PaddedContainer";
import Accordion from "components/Accordion";

const Lines = (): JSX.Element => {
	return (
		<>
			<TopNav />
			<h1 className="text-center prose-2xl p-10 lg:p-20 font-bold">Lines</h1>
			<PaddedContainer>
				<Accordion />
			</PaddedContainer>
		</>
	);
};

export default Lines;
