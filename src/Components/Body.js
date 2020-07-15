import React, { useState, useEffect } from "react";
import "./Body.css";
import Recipe from "./Recipe";

function Body() {
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState();
	const [query, setQuery] = useState();

	useEffect(() => {
		// getRecepie();
		fetchAPI();
	}, [query]);
	const getRecepie = async () => {
		const testRecipe = await require("./Test.json");
		await setRecipes(testRecipe.hits);
	};
	const fetchAPI = async () => {
		const apiResult = await fetch(
			`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
					"x-rapidapi-key":
						"2446f6e999msh87b27456c75e4f5p196058jsnf74efa6a255c",
				},
			}
		);
		const data = await apiResult.json();
		await setRecipes(data.hits);
	};
	function updateQuery(e) {
		e.preventDefault();
		setQuery(search);
	}
	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	return (
		<div className="body">
			<form onSubmit={updateQuery} className="search-form">
				<input
					type="text"
					className="text-input"
					placeholder="Search Recipe"
					value={search || ""}
					onChange={updateSearch}
				/>
				<button type="submit" className="btn">
					<i className="fas fa-search"></i>
				</button>
			</form>
			<div className="result">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						label={recipe.recipe.label}
						image={recipe.recipe.image}
						source={recipe.recipe.source}
						url={recipe.recipe.url}
						yields={recipe.recipe.yields}
						calories={recipe.recipe.calories
							.toString()
							.slice(0, recipe.recipe.calories.toString().indexOf("."))}
						dietLabels={recipe.recipe.dietLabels}
						healthLabels={recipe.recipe.healthLabels}
						ingredientLines={recipe.recipe.ingredientLines}
					/>
				))}
			</div>
		</div>
	);
}

export default Body;
