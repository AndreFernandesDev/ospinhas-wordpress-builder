import { registerBlockType } from "@wordpress/blocks";
import { addAttributes } from "../../../library/flex/FlexControls";

import edit from "./edit";
import save from "./save";

import "./style.scss";
import "./editor.scss";
import json from "./block.json";

const { name, ...settings } = json;
settings.attributes = addAttributes(settings.attributes); // Add Flex settings

export default registerBlockType(name, {
	...settings,
	edit,
	save,
});
