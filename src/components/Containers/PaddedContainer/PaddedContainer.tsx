interface PaddedContainerProps {
	children: React.ReactNode;
}

const PaddedContainer = ({ children }: PaddedContainerProps): JSX.Element => {
	return <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>;
};

export default PaddedContainer;
