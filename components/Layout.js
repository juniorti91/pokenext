import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <Link rel="shortcut icon" href='/images/favicon.ico' />
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}