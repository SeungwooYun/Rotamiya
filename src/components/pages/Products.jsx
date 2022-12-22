import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";


const Products = () => {
    return <AnimatedPage>
        <h1 className="title">Products and Services</h1>
        <PageWrapper>
            <h2> Hi We are Roman and Tamy</h2>
            <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.</h2>
            <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
        </PageWrapper>
        <PageWrapper>
            <h2>and publishing industries for previewing layouts and visual mockups.</h2>
            <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.</h2>
            <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups.</h2>
        </PageWrapper>

    </AnimatedPage>
}

export default Products;