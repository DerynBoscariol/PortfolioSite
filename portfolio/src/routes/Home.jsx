import FrontEnd from "./FrontEnd";
import FullStack from "./FullStack";
import BackEnd from "./BackEnd";


export default function Home() {
    return(
    <main id="main">
    <h1>My Work</h1>
    <p id="intro">Check out some of my projects below!</p>
    <FullStack />
    <FrontEnd />
    <BackEnd />
    </main>
    );
    }