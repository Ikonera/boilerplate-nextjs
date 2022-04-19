import { FunctionComponent } from "react";
import Head from "next/head";
import {
	Typography,
	AppBar,
	Grid
} from "@mui/material";

const useStyles = {
	appBar: {
		padding: "10px 2%"
	},
	link: {
		color: "white",
		textDecoration: "none"
	}
}

const Header: FunctionComponent = () => {

	const classes = useStyles

	return (
		<>
			<Head>
				<title>Nextjs boilerplate</title>
			</Head>
			<AppBar position="static" sx={classes.appBar}>
				<Grid container>
					<Typography sx={classes.link} variant="h4" component='a' href="https://github.com/Ikonera/boilerplate-nextjs" target="_blank">
						Nextjs boilerplate
					</Typography>
				</Grid>
			</AppBar>
		</>
    )
}

export default Header
