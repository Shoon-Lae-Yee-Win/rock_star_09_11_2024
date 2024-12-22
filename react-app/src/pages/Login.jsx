import { 
    Box,
    Typography,
    OutlinedInput,
    Button
 } from "@mui/material";

import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Login() {
    const {setAuth} = useApp();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const submitLogin = () => {
        setAuth(true);
        navigate("/");
    }

    return (
        <Box>
            <Typography variant="h3">
                Login
            </Typography>

            <form onSubmit={handleSubmit(submitLogin)}>
                <OutlinedInput
                    {...register("username", {required: true})}
                    fullWidth sx={{ mt: 2}} placeholder="Username"
                />
                {errors.username && (<Typography color="error">Username is required!</Typography>)}
                <OutlinedInput
                    {...register("password", {required: true})}
                    fullWidth sx={{ mt: 2}} placeholder="Password" type="password"
                />
                {errors.password && (<Typography color="error">Password is required!</Typography>)}
                <Button sx={{mt: 2}} fullWidth type="submit" variant="contained">
                    Login
                </Button>
            </form>
        </Box>
    );
}