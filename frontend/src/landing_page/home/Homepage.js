import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

export default function Homepage(){
    return(
        <div>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
        </div>
    )
}