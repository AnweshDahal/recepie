import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="branding">
				<h1 className="logo">Recepie</h1>
				<strong className="version">ver. 2020.JUL</strong>
			</div>
			<a href="#" className="project-link">
				Github
			</a>
		</div>
	);
}

export default Header;
