import { useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";

import { Container } from "@mui/material";
import Form from "./components/Form";
import { useApp } from "./AppProvider";
import AppDrawer from "./components/AppDrawer";
import { Outlet } from "react-router";

export default function App() {
	// const {showForm} = useApp();

	// const [posts, setPosts] = useState([
	// 	{ id: 3, content: "Some Content", user: "Alice" },
	// 	{ id: 2, content: "MOre Content", user: "Alice" },
	// 	{ id: 1, content: "Another Content", user: "Bob" },
	// ]);

	// const remove = (id) => {
	// 	setPosts(posts.filter((post) => post.id != id));
	// };

	// const add = (content) => {
	// 	const id = posts[0].id + 1;
	// 	setPosts([{ id, content, user: "Alice" }, ...posts]);
	// };
	return (
		<div>
			<Header />
			<AppDrawer />
			{/* <p>Using Vite</p> */}

			<Container sx={{ mt: 4 }} maxWidth="md">
				<Outlet />
				{/* {showForm && <Form add={add} />}
				{posts.map((post) => (
					<Item key={post.id} post={post} remove={remove} />
				))} */}
			</Container>
		</div>
	);
}
