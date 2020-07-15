import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="branding">
				<h1 className="logo">
					{" "}
					<span role="img" aria-label="burger emoji">
						&#127828;
					</span>
					Food Monger
				</h1>
				<strong className="version">ver. 2020.JUL</strong>
			</div>
			<a href="#" className="project-link">
				<i className="fab fa-github"></i>
			</a>
		</div>
	);
}

export default Header;
