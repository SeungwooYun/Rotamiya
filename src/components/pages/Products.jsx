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
                        Distributor of Luminiel
                    </h2>
                    <img className="productsImage" src="images/products/Luminiel_logo.png" alt="Luminiel_logo"></img>
                    <h2>Luminiel products</h2>
                    <img className="productsImage" src="images/products/Luminiel_1.jpg" alt="Luminiel eye patch"></img>
                    <h3>Luminiel I {"( Eye Patch )"}</h3>
                    <p>Luminiel-I is designed for your beauty. The wireless device is a top-of-the-line Korean technology that’s approved by the FDA, TUV SUD, European Union CE, SASO, and ESMA.</p>
                    <p>The LED patch and the serum combine to provide your under-eye area, cheeks, forehead, and face with intensive care to regenerate the skin, heal it, and remove the dark spots, blemishes, eye bags, dark circles, fine lines and wrinkles to fight ageing.</p>
                    <p>It also boosts the absorption of cosmetics and grants your skin a healthier feel and looks. Its compact design is convenient to carry with you anywhere anytime and can be used privately at your convenience, without the need for any outside help or clinical procedures. </p>

                    <h3>Luminiel Y {"( Patch for Y-zone )"}</h3>
                    <img className="productsImage" src="images/products/Luminiel_2.jpg" alt="Luminiel Y-zone patch"></img>
                    <h4>A Korean health technology developed for women.</h4>
                    <p>Luminiel-Y is a Y-zone (bikini area – intimate area – sensitive area) self-care home-use, wearable device that helps your skin heal and repair itself of any damage that might occur during daily routine or waxing jobs. It’s made out of flexible silicone and other skin-safe materials that are suitable to use on all types of skin.</p>
                    <p>The device is wireless and convenient to use.</p>
                    <p>Use of skin-safe flexible silicone material that complies with FDA and TUV standards. </p>
                    <p>The device is approved by FDA, CE, TUV SUD, ESMA and SASO and conforms to international and national standards.</p>
                    <p>Brightens the Y-Zone, and evens out the skin tone.</p>
                    <p>Proven effect for enhancing elasticity, strength, and skin regeneration through generating collagen and elastin.</p>
                    <p>Accelerates the healing process of inflammation and wounds that occur within the Y-Zone.</p>
                    <p>Moisturises the dryness inside and outside of the vagina. </p>
                    <p>Odour and discharge reduction. Thanks to LED light technology; the blue light helps to disinfect the area and kill germs.</p>

                    <h3>My Formula Neck Masks</h3>
                    <div>
                        <img className="productsImage" src="images/products/Luminiel_3.png" alt="My Formula neck masks"></img>
                        <img className="productsImage" src="images/products/Luminiel_4.png" alt="My Formula neck masks"></img>
                        <img className="productsImage" src="images/products/Luminiel_5.png" alt="My Formula neck masks"></img>
                    </div>




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
                    <img className="productsImage" src="images/products/chaga-tea.png" alt="chaga-tea"></img>
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