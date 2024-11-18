import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material"

export default function Header() {
    return (
    // <div style={{padding: 10, textAlign: "center", background: "teal"}}>
    //     <h1 style={{color: "white"}}>App</h1>
    // </div>
    <AppBar position="static">
        <Toolbar>
            <Typography>App</Typography>
        </Toolbar>
    </AppBar>
    );
}