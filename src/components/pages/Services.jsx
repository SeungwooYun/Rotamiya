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
        <h1 className="title">Services</h1>

        <Element id="Exhibition Management" name="Exhibition Management">
            <PageWrapper>
                <ServicesExhibition />
            </PageWrapper>
        </Element>

        <Element id="Medical Tourism" name="Medical Tourism">
            <PageWrapper>
                <div id="Medical-Tourism">
                    <h2 className="submenu-title">Medical Tourism</h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts and visual mockups.</h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,
                        and publishing industries for previewing layouts and visual mockups.</h2>
                </div>
            </PageWrapper>
        </Element>


        <Element id="Translation" name="Translation">
            <PageWrapper>
                <div id="Translation">
                    <h2 className="submenu-title">Translation</h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts and visual mockups.</h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
                </div>
            </PageWrapper>
        </Element>



        <PageWrapper>
            <div id="Hosting-Event" name="Hosting Event">
                <h2 className="submenu-title">Hosting Event</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>

    </AnimatedPage>
}

export default Services;