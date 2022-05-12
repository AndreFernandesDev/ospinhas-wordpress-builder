const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;
import { styles } from "../../../library/flex/FlexControls";

import "./style.scss";

export default function save(props) {
	const innerBlocksProps = useInnerBlocksProps.save({
		...useBlockProps.save(),
		style: { ...styles(props.attributes) },
	});
	return <div {...innerBlocksProps}></div>;
}
