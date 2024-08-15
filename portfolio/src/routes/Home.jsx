import FrontEnd from "./FrontEnd";
import FullStack from "./FullStack";
import BackEnd from "./BackEnd";


export default function Home() {
    return(
    <main id="main">
    <h1>Welcome to my Portfolio!</h1>
    <p>Checkout some of my projects below!</p>
    <FullStack />
    <FrontEnd />
    <BackEnd />
    </main>
    );
    }