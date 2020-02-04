import * as React from "react";
import "./style.scss";
import logo from "./logo.png";
import content from "./1.jpg";

export default class Home extends React.Component {
	render() {
		return (
			<>
				<div className="top">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
				</div>
				<div className="content">
					<img src={content} alt=""/>
				</div>
			</>
		);
	}
}