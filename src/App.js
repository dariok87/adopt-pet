const Pet = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Balu"),
		React.createElement("h2", {}, "Dog"),
		React.createElement("h2", {}, "Bern")
	]);
};


const App = () => {
	return React.createElement(
		"div",
		{ id: "something-important" },
		[
			React.createElement("h1", {}, "Adopt me!"),
			React.createElement(Pet, { 
				name: "Balu", 
				animal: "Dog", 
				breed: "Bern"
			}),
			React.createElement(Pet, { 
				name: "Bella", 
				animal: "Cat", 
				breed: "British"
			}),
			React.createElement(Pet, { 
				name: "Arny", 
				animal: "Rabbit", 
				breed: "House"
			})
		]
	);
};

ReactDOM.render(
	React.createElement(App), 
	document.getElementById("root")
);