const Pet = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Balu"),
		React.createElement("h2", {}, "Dog"),
		React.createElement("h3", {}, "Bern Mountain")
	]);
};


const App = () => {
	return React.createElement(
		"div",
		{},
		React.createElement("h1", {}, "Adopt me!")
	);
};

ReactDOM.render(
	React.createElement(App), 
	document.getElementById("root")
);