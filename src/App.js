const Pet = ({ name, animal, breed }) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed)
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