const { registerBlockType } = wp.blocks;
import { addAttributes } from "../../../library/flex/FlexControls";

import edit from "./edit";
import save from "./save";
import json from "./block.json";

const { name, ...settings } = json;
settings.attributes = addAttributes(settings.attributes); // Add Flex settings

export default registerBlockType(name, {
	...settings,
	edit,
	save,
});
