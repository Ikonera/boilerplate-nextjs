import type { NextPage } from "next";
import {
	Typography,
	Grid
} from "@mui/material";

const useStyles = {
	section: {
		marginTop: "20%"
	}
}

const Home: NextPage = () => {

	const classes = useStyles

	return (
		<Grid container sx={classes.section} justifyContent="center" component="section">
			<Grid item>
				<Typography>
					Start editing <code>/pages/index.tsx</code>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Home;
