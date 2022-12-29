import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";
import ServicesExhibition from './ServicesExhibition'

/* 이미지 크기 400px x 400px 고정 */
const Services = () => {
    return <AnimatedPage>
        <h1 className="title">Services</h1>
        <PageWrapper>
            <ServicesExhibition />
        </PageWrapper>
        <PageWrapper>
            <div id="Medical-Tourism">
                <h2 className="submenu-title">Medical Tourism</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,
                    and publishing industries for previewing layouts and visual mockups.</h2>
            </div>
        </PageWrapper>
        <PageWrapper>
            <div id="Translation">
                <h2 className="submenu-title">Translation</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>
        <PageWrapper>
            <div id="Hosting-Event">
                <h2 className="submenu-title">Hosting Event</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.</h2>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic, print,</h2>
            </div>
        </PageWrapper>

    </AnimatedPage>
}

export default Services;