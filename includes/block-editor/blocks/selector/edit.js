const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;
import { useState } from "@wordpress/element";
import FlexControls, {
	styles as flexStyles,
} from "../../../library/flex/FlexControls";

import "./editor.scss";
import "./style.scss";

const templateOptions = {
	100: [["ospinhas/container", {}]],
	"50/50": [
		["ospinhas/container", {}],
		["ospinhas/container", {}],
	],
	"33/33/33": [
		["ospinhas/container", {}],
		["ospinhas/container", {}],
		["ospinhas/container", {}],
	],
};

export default function edit(props) {
	const handleAttribute = (type, newAlign) => {
		const newOptions = {};
		newOptions[type] = newAlign;
		setAttributes(newOptions);
	};

	const handleTemplate = (e) => {
		setAttributes({ template: templateOptions[e.target.innerHTML] });
		setTemplateUI("");
	};

	const templateOptionsUI = (
		<div id="templateOptionsUI">
			<div onClick={handleTemplate}>100</div>
			<div onClick={handleTemplate}>50/50</div>
			<div onClick={handleTemplate}>33/33/33</div>
		</div>
	);

	const [templateUI, setTemplateUI] = useState(templateOptionsUI);
	const { template } = props.attributes;
	const { setAttributes } = props;

	const blockProps = useBlockProps({
		style: { ...flexStyles(props.attributes) },
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		template: template,
		templateInsertUpdatesSelection: true,
	});

	return (
		<>
			<FlexControls
				handleAttribute={handleAttribute}
				attributes={props.attributes}
			/>
			<section {...innerBlocksProps}>
				{templateUI}
				{children}
			</section>
		</>
	);
}
