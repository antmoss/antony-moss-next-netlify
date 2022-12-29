import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/global.css";
import { useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const refScrollUp = useRef();

    return (
        <>
            <div ref={refScrollUp}> </div>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
