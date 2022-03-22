import React from "react";
import fruits from "./foods";
import { choice, remove } from "./helpers";

const solution = () => {
	const randomFruit = choice(fruits);
	console.log(`I would like one ${randomFruit}, please.`);
	console.log(`Here you go: ${randomFruit}`);
	const removedFruit = remove(fruits, randomFruit);
	console.log(`Delicious! May I have another?`);
	const anotherFruit = remove(fruits, removedFruit);

	if (anotherFruit === undefined) {
		console.log(`I'm sorry we're all out. We have ${fruits.length} left.`);
	}
};

solution();
