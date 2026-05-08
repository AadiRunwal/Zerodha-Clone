import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductsPage(){
    return(
        <div>
            <Hero></Hero>

            <LeftSection 
            imageSrc={"./media/kite.png"}
            title={"Kite"}
            description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
            tryDemo={""}
            learnMore={""}
            googlePlay={""}
            appStore={""}
            ></LeftSection>

            <RightSection
            title={"Console"}
            description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
            link={""}
            linkTitle={"Learn more"}
            imageSrc={"./media/console.png"}
            ></RightSection>

            <LeftSection 
            imageSrc={"./media/coin.png"}
            title={"Coin"}
            description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
            tryDemo={""}
            learnMore={""}
            googlePlay={""}
            appStore={""}
            ></LeftSection>

            <RightSection
            title={"Kite Connect API"}
            description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
            link={""}
            linkTitle={"Kite Connect"}
            imageSrc={"./media/KiteConnect.png"}
            ></RightSection>

            <LeftSection 
            imageSrc={"./media/varsity.png"}
            title={"Varsity mobile"}
            description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
            tryDemo={""}
            learnMore={""}
            googlePlay={""}
            appStore={""}
            ></LeftSection>
            <br></br>
            <h3 className="fs-5 fw-normal text-center mb-5">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h3>
            <br></br>
            <Universe></Universe>
        </div>
    )
}