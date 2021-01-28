const Pet = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Balu"),
		React.createElement("h2", {}, "Dog"),
		React.createElement("h2", {}, "Bern Mountain")
	]);
};


const App = () => {
	return React.createElement(
		"div",
		{ id: "something-important" },
		[
			React.createElement("h1", {}, "Adopt me!"),
			React.createElement(Pet),
			React.createElement(Pet),
			React.createElement(Pet)
		]
	);
};

ReactDOM.render(
	React.createElement(App), 
	document.getElementById("root")
);