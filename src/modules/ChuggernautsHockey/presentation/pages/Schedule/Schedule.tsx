import TopNav from "@presentation/components/TopNav";
import PaddedContainer from "@presentation/components/Containers/PaddedContainer";
import Calendar from "@presentation/components/Calendar";

const Schedule = (): JSX.Element => {
	return (
		<>
			<TopNav />
			<div className="flex flex-col justify-start h-4/5">
				<h1 className="text-center prose-2xl p-10 lg:p-20">
					Chuggernauts Hockey Schedule
				</h1>
				<PaddedContainer>
					<Calendar />
				</PaddedContainer>
			</div>
		</>
	);
};

export default Schedule;
