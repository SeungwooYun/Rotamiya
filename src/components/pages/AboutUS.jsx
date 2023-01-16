import AnimatedPage from "../tools/AnimatedPage";
import PageWrapper from "../tools/PageWrapper";


const AboutUS = () => {
    return <AnimatedPage>
        {/* <h1 className="title">About Us</h1> */}
        <PageWrapper>
            <h1>Who are we?</h1>
            <h3>Rotamiya is a sales company that specializes in bringing innovative and high-quality products to the market. Our dedicated team is committed to providing excellent customer service and building long-term relationships with our clients. We strive to
                be at the forefront of industry trends and are constantly seeking new ways to improve and grow our business.</h3>
        </PageWrapper>
        <PageWrapper>
            <h1>What is our mission?</h1>
            <h3>At Rotamiya, we are committed to connecting the world through trade,
                while also making a positive impact on the communities we serve through charitable efforts. </h3>
            <h3>Our mission is to provide innovative and high-quality products and services that not only exceed the expectations of our customers,
                but also contribute to their overall well-being and satisfaction. </h3>
            <h3> We strive to be a trusted and valued partner for our clients and to build long-term relationships through our exceptional services. We are dedicated to delivering the highest quality products and services through continuous innovation and improvement, and to creating a positive and supportive environment for our team members. We are proud to be a responsible and sustainable business that gives back to the community,
                making a difference in the world, one sale at a time.</h3>
        </PageWrapper>

    </AnimatedPage>
}

export default AboutUS;