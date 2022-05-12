/*
 * Functions that can be reused on different parts of the code.
 */

// Add JSON object elements to another object if it doesnt already exist.
export const addPropertiesToJSON = (newProps, obj = {}) => {
	if (!newProps || !obj) {
		console.log("Missing parameters.");
		return 404;
	}

	for (let i = 0; i < Object.keys(newProps).length; i++) {
		const key = Object.keys(newProps)[i];
		console.log(key);
		console.log(obj[key]);
		if (obj[key]) {
			continue;
		}
		obj[key] = newProps[key];
	}

	return obj;
};
