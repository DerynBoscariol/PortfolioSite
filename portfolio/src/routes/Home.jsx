import FrontEnd from "./FrontEnd";
import FullStack from "./FullStack";
import BackEnd from "./BackEnd";


export default function Home() {
    return(
    <main id="main">
    <h1>Welcome to my Portfolio!</h1>
    <FullStack />
    <FrontEnd />
    <BackEnd />
    </main>
    );
    }