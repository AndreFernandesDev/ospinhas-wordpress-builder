const { BlockControls } = wp.blockEditor;
const { Toolbar, ToolbarDropdownMenu } = wp.components;

import {
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
	title,
} from "@wordpress/icons";

const Dropdown = ({ options }) => {
	return (
		<BlockControls>
			<Toolbar label="Options">
				<ToolbarDropdownMenu
					icon={more}
					label="Alinhamento"
					controls={options.map((opt) => ({
						title: opt.title,
						icon: opt.icon,
						onClick: opt.onClick,
					}))}
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default Dropdown;
