import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import {
	ArrowBack as BackIcon,
	Menu as MenuIcon,
	Add as AddIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useApp } from "../AppProvider";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
	const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		// <div style={{padding: 10, textAlign: "center", background: "teal"}}>
		//     <h1 style={{color: "white"}}>App</h1>
		// </div>
		<AppBar position='static'>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
					{pathname == "/" ? (
						<IconButton
							color='inherit'
							onClick={() => setShowDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
					) : (
						<IconButton
							color='inherit'
							onClick={() => navigate("/")}
						>
							<BackIcon />
						</IconButton>
					)}
					<Typography>App</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: 2 }}>
					<IconButton
						color='inherit'
						onClick={() => setShowForm(!showForm)}
					>
						<AddIcon />
					</IconButton>
					{mode == "dark" ? (
						<IconButton
							color='inherit'
							onClick={() => setMode("light")}
						>
							<LightModeIcon />
						</IconButton>
					) : (
						<IconButton
							color='inherit'
							onClick={() => setMode("dark")}
						>
							<DarkModeIcon />
						</IconButton>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
