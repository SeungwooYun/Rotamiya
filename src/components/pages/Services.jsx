import { useLocation } from "react-router-dom";
import { scroller, Element } from "react-scroll";
import { useEffect } from "react";
import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";
import ServicesExhibition from './ServicesExhibition'

/* 이미지 크기 400px x 400px 고정 */
const Services = () => {
    const location = useLocation();
    const { state } = location;

    useEffect(() => {

        if (state?.sub !== undefined) {
            console.log("animating to", state.sub);
            scroller.scrollTo(state.sub, {
                duration: 1000,
                delay: 0.2,
                smooth: true,
                offset: -300, // Scrolls to element + 50 pixels down the page
            });
        }
    });

    return <AnimatedPage>
        {/* <h1 className="title">Services</h1> */}

        <Element id="Exhibition Management" name="Exhibition Management">
            <PageWrapper>
                <ServicesExhibition />
            </PageWrapper>
        </Element>

        <Element id="Medical Tourism" name="Medical Tourism">
            <PageWrapper>
                <div id="Medical-Tourism">
                    <h2 className="submenu-title">Medical Tourism</h2>
                    <p>Our <strong>medical tourism services</strong> helps you travel easily to another country to receive the medical treatment you need. It involves a wide range of medical services, including surgical procedures, dentistry, and alternative therapies. We help you find the lowest cost for the quality, flexible access to specialized treatments, and you get to combine a vacation with medical care. </p>
                </div>
            </PageWrapper>
        </Element>

    </AnimatedPage>
}

export default Services;