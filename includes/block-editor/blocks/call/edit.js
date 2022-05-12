const { InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { Panel, PanelBody, SelectControl } = wp.components;
const { useDispatch } = wp.data;
const { createBlock } = wp.blocks;
import FlexControls, { styles } from "../../../library/flex/FlexControls";
import "./editor.scss";
import "./style.scss";

const templates = {
	one: [
		[
			"core/heading",
			{
				className: "ospinhas-heading-medium",
				placeholder: "Your Heading Goes Here",
			},
		],
		[
			"core/paragraph",
			{
				className: "ospinhas-heading-small",
				placeholder: "Why I should click the Button",
			},
		],
		[
			"core/button",
			{ className: "ospinhas-button", placeholder: "Let's talk" },
		],
	],
	two: [
		["core/heading", { placeholder: "Your Heading Goes Here" }],
		["core/paragraph", { placeholder: "Why I should click the Button" }],
		[
			"core/columns",
			{},
			[
				["core/column", {}, [["core/button", { placeholder: "Let's talk" }]]],
				["core/column", {}, [["core/button", { placeholder: "Let's talk" }]]],
				["core/column", {}, [["create-block/flex", {}]]],
			],
		],
	],
};

const createTemplate = (templateBlueprint) => {
	const template = templateBlueprint.map((block) => {
		return createBlock(
			block[0],
			block[1],
			block[2] ? createTemplate(block[2]) : []
		);
	});
	return template;
};

export default function edit(props) {
	const { clientId, setAttributes } = props;
	const { template } = props.attributes;
	const { replaceInnerBlocks } = useDispatch("core/block-editor");

	const blockProps = useBlockProps({
		style: { ...styles(props.attributes), "flex-direction": "row" },
	});

	const handleTemplate = (type) => {
		setAttributes({ template: type });
		replaceInnerBlocks(clientId, createTemplate(templates[type]), false);
	};

	const handleAttribute = (type, newAlign) => {
		const newOptions = {};
		newOptions[type] = newAlign;
		setAttributes(newOptions);
	};

	return (
		<>
			<InspectorControls key="costumSettings">
				<Panel>
					<PanelBody title="Fundo">
						<SelectControl
							label="Size"
							value={template}
							options={[
								{ label: "Tipo 1", value: "one" },
								{ label: "Tipo 2", value: "two" },
							]}
							onChange={(type) => handleTemplate(type)}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<FlexControls handleAttribute={handleAttribute} />
			<div {...blockProps}>
				<InnerBlocks template={templates[template]} />
			</div>
		</>
	);
}
