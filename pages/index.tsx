import type { NextPage } from "next";
import {
	Typography,
	Button,
	Grid
} from "@mui/material";

const Home: NextPage = () => {
	return (
		<section>
			<Grid container justifyContent="center">
				<Button href="https://github.com/Ikonera/boilerplate-nestjs" target="_blank">
					Ikonera - Nextjs boilerplate repository
				</Button>
			</Grid>
		</section>
	);
};

export default Home;
