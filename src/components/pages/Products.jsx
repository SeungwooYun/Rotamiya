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

                    <div className="centered">
                        <h2>
                            Distributor of Luminiel
                        </h2>
                        <img className="productsImage centered" src="images/products/Luminiel_logo.png" alt="Luminiel_logo"></img>
                    </div>

                    <h3 className="marin100top">Luminiel I {"( Eye Patch )"}</h3>
                    <div className="centered productDiv">
                        <img className="productsImage" src="images/products/Luminiel_1.jpg" alt="Luminiel eye patch"></img>
                        <div className="descriptionOntheRight">
                            <p className="description_p">Luminiel-I is designed for your beauty. The wireless device is a top-of-the-line Korean technology that’s approved by the FDA, TUV SUD, European Union CE, SASO, and ESMA.</p>
                            <p className="description_p">The LED patch and the serum combine to provide your under-eye area, cheeks, forehead, and face with intensive care to regenerate the skin, heal it, and remove the dark spots, blemishes, eye bags, dark circles, fine lines and wrinkles to fight ageing.</p>
                            <p className="description_p">It also boosts the absorption of cosmetics and grants your skin a healthier feel and looks. Its compact design is convenient to carry with you anywhere anytime and can be used privately at your convenience, without the need for any outside help or clinical procedures. </p>
                        </div>
                    </div>

                    <h3 className="marin100top">Luminiel Y {"( Patch for Y-zone )"}</h3>

                    <div className="centered productDiv">
                        <img className="productsImage" src="images/products/Luminiel_2.jpg" alt="Luminiel Y-zone patch"></img>
                        <div className="descriptionOntheRight">
                            <p className="description_p">A Korean health technology developed for women.</p>
                            <p className="description_p">Luminiel-Y is a Y-zone (bikini area – intimate area – sensitive area) self-care home-use, wearable device that helps your skin heal and repair itself of any damage that might occur during daily routine or waxing jobs. It’s made out of flexible silicone and other skin-safe materials that are suitable to use on all types of skin.</p>
                            <p className="description_p">The device is wireless and convenient to use.</p>
                            <p className="description_p">Use of skin-safe flexible silicone material that complies with FDA and TUV standards. </p>
                            <p className="description_p">The device is approved by FDA, CE, TUV SUD, ESMA and SASO and conforms to international and national standards.</p>
                            <p className="description_p">Brightens the Y-Zone, and evens out the skin tone.</p>
                            <p className="description_p">Proven effect for enhancing elasticity, strength, and skin regeneration through generating collagen and elastin.</p>
                            <p className="description_p">Accelerates the healing process of inflammation and wounds that occur within the Y-Zone.</p>
                            <p className="description_p">Moisturises the dryness inside and outside of the vagina. </p>
                            <p className="description_p">Odour and discharge reduction. Thanks to LED light technology; the blue light helps to disinfect the area and kill germs.</p>
                        </div>
                    </div>


                    <h3 className="marin100top">My Formula Neck Masks</h3>
                    <div>
                        <img className="productsImage" src="images/products/Luminiel_3.png" alt="My Formula neck masks"></img>
                        <img className="productsImage" src="images/products/Luminiel_4.png" alt="My Formula neck masks"></img>
                    </div>
                    <p className="fontSize description_p">
                        My Formula My Neck Mask reduces wrinkles.
                        The neck skin is one of the thinnest of human skin.
                        That’s why the neck can be very dry. The neck skin can also age very fast,
                        leading to overall aging of the facial skin.
                        Considering the hours people today use their cellphones for,
                        the neck can become all the more wrinkly.</p>



                </Element>
            </PageWrapper>
            <PageWrapper>
                <Element id="Health Products" name="Health Products">
                    <h2 className="submenu-title">Health Products</h2>

                    <div className="centered">
                        <h2>
                            Distributor of IVAN-TEA
                        </h2>
                        <img className="ivanteaImage centered" src="images/products/ivanteaLogo.png" alt="ivan tea logo"></img>
                    </div>


                    <h3 className="marin100top">Chaga Tea</h3>
                    <div className="centered productDiv">
                        <img className="productsImage" src="images/products/chaga-tea.png" alt="chaga-tea"></img>
                        <div className="descriptionOntheRight">
                            <p className="description_p">Immune system support and energy boost</p>
                            <p className="description_p">Promotes healthy digestion</p>
                            <p className="description_p"> Antioxidant and adaptogen properties</p>
                            <p className="description_p">Ready to use and can be brewed like tea</p>
                            <p className="description_p">Pure, fresh, and non-GMO</p>
                        </div>

                    </div>



                    <h3 className="marin100top">Ivan Tea</h3>

                    <div className="centered productDiv">
                        <img className="productsImage" src="images/products/ivanTea_2.png" alt="ivan tea logo"></img>
                        <div className="descriptionOntheRight">
                            <p className="description_p">Boosts immune system.</p>
                            <p className="description_p">Improves mental concentration.</p>
                            <p className="description_p">Balances digestive health.</p>
                            <p className="description_p">Increases energy level.</p>
                            <p className="description_p">Detoxifies the body.</p>
                            <p className="description_p">Reduces inflammation.</p>
                            <p className="description_p">Supports the urinary system's health.</p>
                            <p className="description_p">Encourages new blood cell production.</p>
                        </div>
                    </div>

                </Element>
            </PageWrapper>
            <PageWrapper>
                <Element id="Garments" name="Garments">
                    <h2 className="submenu-title">Garments</h2>
                    <h1 className="centered">COMING SOON!</h1>
                </Element>
            </PageWrapper>
        </AnimatedPage>
    );
};

export default Products;