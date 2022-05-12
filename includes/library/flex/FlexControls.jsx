import { more } from "@wordpress/icons";
import { addPropertiesToJSON } from "../library";

const flexAttributes = {
	justifyContent: {
		type: "string",
		default: "center",
	},
	alignContent: {
		type: "string",
		default: "center",
	},
	width: {
		type: "string",
		default: "100%",
	},
};

// Components
import Dropdown from "../Dropdown/Dropdown";

const FlexControls = ({ handleAttribute }) => {
	const justify = [
		{
			title: "Left",
			value: "flex-start",
			icon: more,
		},
		{
			title: "Center",
			value: "center",
			icon: more,
		},
		{
			title: "Right",
			value: "flex-end",
			icon: more,
		},
		{
			title: "Between",
			value: "space-between",
			icon: more,
		},
		{
			title: "Around",
			value: "space-around",
			icon: more,
		},
		{
			title: "Evenly",
			value: "space-evenly",
			icon: more,
		},
	];

	const align = [
		{
			title: "Top",
			value: "flex-start",
			icon: more,
		},
		{
			title: "Center",
			value: "center",
			icon: more,
		},
		{
			title: "Bottom",
			value: "flex-end",
			icon: more,
		},
		{
			title: "Stretch",
			value: "stretch",
			icon: more,
		},
		{
			title: "Baseline",
			value: "baseline",
			icon: more,
		},
	];

	const createOptions = (options, onClick, attribute) => {
		return options.map((opt) => ({
			title: opt.title,
			icon: opt.icon,
			onClick: () => onClick(attribute, opt.value),
		}));
	};

	return (
		<>
			<Dropdown
				options={createOptions(justify, handleAttribute, "justifyContent")}
			/>
			<Dropdown
				options={createOptions(align, handleAttribute, "alignContent")}
			/>
		</>
	);
};

export const addAttributes = (attributes) => {
	return addPropertiesToJSON(flexAttributes, attributes);
};

export const styles = ({ justifyContent, alignContent, width }) => {
	return {
		display: "flex",
		"justify-content": justifyContent,
		"align-items": alignContent,
		width: width,
	};
};

export default FlexControls;
