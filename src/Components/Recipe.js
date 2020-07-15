import React from "react";
import "./Recipe.css";

function Recipe({
	label,
	image,
	source,
	url,
	yields,
	dietLabels,
	healthLabels,
	ingredientLines,
	calories,
}) {
	return (
		<div className="recepie">
			<img src={image} alt="" className="recepie-image" />
			<h1 className="label">{label}</h1>

			<a href={url} className="source">
				{source}
			</a>
			<span className="yield">{yields}</span>
			<h3 className="calories">Total Calories: {calories}</h3>
			<ul className="diet-labels">
				{dietLabels.map((dietLabel) => (
					<li className="diet-label" key={dietLabel}>
						{dietLabel}
					</li>
				))}
			</ul>
			<ul className="health-labels">
				{healthLabels.map((healthLabel) => (
					<li className="health-label" key={healthLabel}>
						{healthLabel}
					</li>
				))}
			</ul>
			<ul className="ingredient-lines">
				<h4>Ingredients:</h4>
				<div className="container">
					{ingredientLines.map((ingredientLine) => (
						<li className="ingredient-line" key={ingredientLine}>
							{ingredientLine}
						</li>
					))}
				</div>
			</ul>
		</div>
	);
}

export default Recipe;
