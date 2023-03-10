import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/global.css";
import { useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
