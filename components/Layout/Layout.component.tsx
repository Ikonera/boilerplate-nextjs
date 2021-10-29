import { FunctionComponent } from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Header />
                <main>
                    { children }
                </main>
            <Footer />
        </>
    )
}

export default Layout