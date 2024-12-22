import { 
    Box,
    Typography,
    OutlinedInput,
    Button
 } from "@mui/material";

import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
    const {setAuth} = useApp();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const submitRegister = () => {
        navigate("/login");
    }

    return (
        <Box>
            <Typography variant="h3">
                Register
            </Typography>

            <form onSubmit={handleSubmit(submitRegister)}>
                <OutlinedInput
                    {...register("username", {required: true})}
                    fullWidth sx={{ mt: 2}} placeholder="Username"
                />
                {errors.username && (<Typography color="error">Username is required!</Typography>)}
                <OutlinedInput
                    {...register("name", {required: true})}
                    fullWidth sx={{ mt: 2}} placeholder="Name" type="text"
                />
                {errors.name && (<Typography color="error">Name is required!</Typography>)}
                <OutlinedInput
                    {...register("bio")}
                    fullWidth sx={{ mt: 2}} placeholder="Bio"
                />
                <OutlinedInput
                    {...register("password", {required: true})}
                    fullWidth sx={{ mt: 2}} placeholder="Password" type="password"
                />
                {errors.password && (<Typography color="error">Password is required!</Typography>)}
                <Button sx={{mt: 2}} fullWidth type="submit" variant="contained">
                    Register
                </Button>
            </form>
        </Box>
    );
}