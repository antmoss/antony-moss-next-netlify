import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Antony Moss | Front-End Developer</title>
                <meta
                    name="description"
                    content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
                />
                <link rel="icon" href="/fav.png" />
            </Head>

            <Header />
            <Banner />
            <Main />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
