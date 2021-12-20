import { FunctionComponent } from "react";
import Head from "next/head";
import {
    Typography,
    AppBar,
    Grid
} from "@mui/material";

const Header: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Nextjs boilerplate</title>
            </Head>
            <AppBar position="static">
                <Grid>
                    <Typography>
                        Nextjs boilerplate
                    </Typography>
                </Grid>
            </AppBar>
        </>
    )
}

export default Header
