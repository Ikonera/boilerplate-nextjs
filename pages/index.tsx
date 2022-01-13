import type { NextPage } from "next";
import {
	Typography,
	Button,
	Grid
} from "@mui/material";

const Home: NextPage = () => {
	return (
		<section>
			<Grid container direction="column" alignContent="center" marginTop="15%" alignItems="center">
				<Grid item>
					<Typography>
						Welcome to this NextJS / TS virgin boilerplate !
					</Typography>
					<Typography>
						Feel free to made her what you want :D
					</Typography>
				</Grid>
				<Grid item marginTop="2%">
					<Button href="https://github.com/Ikonera/boilerplate-nestjs" target="_blank">
						Ikonera - Nextjs boilerplate repository
					</Button>
				</Grid>
			</Grid>
		</section>
	);
};

export default Home;
