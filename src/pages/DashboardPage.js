import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
	return (
		<div>
			<section>
				<h1>Dashboard</h1>
				<p>This is the dashboard</p>

				<Link to="/posts" className="button">
					See Posts
				</Link>
			</section>
		</div>
	);
}
