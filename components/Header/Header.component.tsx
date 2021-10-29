import { FunctionComponent } from "react";
import Head from "next/head";

const Header: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Nextjs boilerplate</title>
            </Head>
            <header className="shadow-lg bg-secondaryDark">
                <div className="">
                    <p className="font-medium text-center text-primary text-3xl pb-2 pt-2">
                        Nextjs boilerplate
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
