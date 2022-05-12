import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { styles } from "../../../library/flex/FlexControls";

import "./style.scss";

export default function save(props) {
	const blockProps = useBlockProps.save({
		style: { ...styles(props.attributes) },
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
