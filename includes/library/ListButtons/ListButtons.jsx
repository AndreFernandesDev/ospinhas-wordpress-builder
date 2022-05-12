const { Button, ButtonGroup } = wp.components;

const ListButtons = ({ variant, attribute, options, handleAttribute }) => {
	return (
		<ButtonGroup>
			{Object.keys(options).map((description) => (
				<Button
					variant={variant}
					onClick={() => handleAttribute(attribute, description)}
				>
					{options[description]}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default ListButtons;
