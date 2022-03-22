const choice = (items) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
};

const remove = (items, item) => {
	const index = items.indexOf(item);
	if (index > -1) {
		items.splice(index, 1);
		return items;
	} else {
		return undefined;
	}
};

export { choice, remove };
