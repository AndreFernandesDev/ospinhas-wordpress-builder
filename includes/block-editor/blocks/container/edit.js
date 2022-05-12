const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;
import FlexControls, {
	styles as flexStyles,
} from "../../../library/flex/FlexControls";

import "./editor.scss";
import "./style.scss";

export default function edit(props) {
	const { setAttributes } = props;
	const blockProps = useBlockProps({
		style: { ...flexStyles(props.attributes) },
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps({
		...blockProps,
		templateInsertUpdatesSelection: true,
	});

	const handleAttribute = (type, newAlign) => {
		const newOptions = {};
		newOptions[type] = newAlign;
		setAttributes(newOptions);
	};

	return (
		<>
			<FlexControls
				handleAttribute={handleAttribute}
				attributes={props.attributes}
			/>
			<div {...innerBlocksProps}>{children}</div>
		</>
	);
}
