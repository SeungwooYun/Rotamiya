import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";


const Products = () => {
    return <AnimatedPage>
        <h1 className="title">Products</h1>
        <PageWrapper>
            <div id="Attire">
                <h2>Attire</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>
        <PageWrapper>
            <div id="Beauty Products">
                <h2>Beauty Products</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>
        <PageWrapper>
            <div id="Health Products">
                <h2>Health Products</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>

    </AnimatedPage>
}

export default Products;