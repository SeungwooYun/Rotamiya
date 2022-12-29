import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";
import { useLocation } from "react-router-dom";
import { scroller, Element } from "react-scroll";
import { useEffect } from "react";

const Products = (props) => {
    // RECEIVING SUBMENU ITEM
    const location = useLocation();
    const { state } = location;


    useEffect(() => {
        if (state?.sub !== undefined) {
            console.log("animating to", state.sub);
            scroller.scrollTo(state.sub, {
                duration: 1000,
                delay: 0.2,
                smooth: true,
                offset: -350, // Scrolls to element + 50 pixels down the page
            });
        }
    });

    return (
        <AnimatedPage>
            <h1 className="title">Products</h1>
            <PageWrapper>
                <Element id="Attire" name="Attire">
                    <h2 className="submenu-title">Attire</h2>
                    <h2>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
                </Element>
            </PageWrapper>
            <PageWrapper>
                <Element id="Beauty Products" name="Beauty Products">
                    <h2 className="submenu-title">Beauty Products</h2>
                    <h2>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
                </Element>
            </PageWrapper>
            <PageWrapper>
                <Element id="Health Products" name="Health Products">
                    <h2 className="submenu-title">Health Products</h2>
                    <h2>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </h2>
                    <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
                </Element>
            </PageWrapper>
        </AnimatedPage>
    );
};

export default Products;