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
            {/* <h1 className="title">Products</h1> */}
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
                        Distributor of IVAN-TEA
                    </h2>
                    <img className="productsImage" src="images/products/ivanteaLogo.png" alt="ivan tea logo"></img>

                    <h3>IVAN-TEA products</h3>
                    <img className="productsImage" src="images/products/chaga-tea.png" alt="chaga-tea picture"></img>
                    <h4>Immune system support and energy boost</h4>
                    <h4>Promotes healthy digestion</h4>
                    <h4> Antioxidant and adaptogen properties</h4>
                    <h4>Ready to use and can be brewed like tea</h4>
                    <h4>Pure, fresh, and non-GMO</h4>
                    <h3>ivan-tea</h3>

                    <img className="productsImage" src="images/products/ivanTea_1.png" alt="ivan tea logo"></img>
                    <img className="productsImage" src="images/products/ivanTea_2.png" alt="ivan tea logo"></img>
                    <h4>Balances digestive health.</h4>
                    <h4>Boosts immune system.</h4>
                    <h4>Improves mental concentration.</h4>
                    <h4>Increases energy level.</h4>
                    <h4>Detoxifies the body.</h4>
                    <h4>Reduces inflammation.</h4>
                    <h4>Supports the urinary system's health.</h4>
                    <h4>Encourages new blood cell production.</h4>
                </Element>
            </PageWrapper>
            <PageWrapper>
                <Element id="Garments" name="Garments">
                    <h2 className="submenu-title">Garments</h2>
                    <h1>COMING SOON!</h1>
                </Element>
            </PageWrapper>
        </AnimatedPage>
    );
};

export default Products;