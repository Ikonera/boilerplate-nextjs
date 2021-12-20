import { FunctionComponent } from "react";
import Header from "../Header/Header.component";
import { CssBaseline } from "@mui/material";

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <CssBaseline/>
            <Header />
                <main>
                    { children }
                </main>
        </>
    )
}

export default Layout
