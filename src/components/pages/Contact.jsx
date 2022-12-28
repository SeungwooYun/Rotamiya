import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";
import Maps from "./Maps";


const Contact = () => {

    const onSubmitHandler = () => {
        alert("Thank you so much for contacting us. We will get back to you ASAP")
    };
    // 여기는 form submit 에서 자동으로 thank you page를 보여주기 때문인지 event.preventDefault 를 쓰면 오류가 난다.. 

    return <AnimatedPage>
        <h1 className="title">Contact Us</h1>



        <PageWrapper>
            <div className="mapsAndAdressesContainer">
                <Maps></Maps>
                <div className="address">
                    <h2 className="address-title">Company Location</h2>
                    <div><p>25-26, Pungnammun 4-gil, Wansan-gu, Jeonju-si, Jeollabuk-do, Republic of Korea {'\n'}Tel. +82 10 4565 5577</p></div>
                    <div><p>JIzzakh city Q.Imamov street 49/7, Uzbekistan {'\n'}Tel. +998 91 944 03 30</p></div>
                    <div><p>602, Falconcity, Dubai, UAE {'\n'}Tel. +971509596945</p>
                    </div>
                </div>
            </div>
        </PageWrapper>



        <PageWrapper>
            <h2 className="ContactUs-title">Contact Us</h2>
            <form action="https://formsubmit.co/yoooonseungwoo@naver.com" method="POST" onSubmit={onSubmitHandler}>
                <div className="form-emailAndName">
                    <div>
                        <label htmlFor="email_name"> Name  </label>
                        <input id="email_name" name="email_name" type="text" required></input>
                    </div>
                    {/* <input type="hidden" name="_next" value="http://localhost:3000/"></input> */}
                    {/* 이부분 호스팅 이후 실제 url로 고쳐야함 */}
                    <div>
                        <label htmlFor="email"> E-mail  </label>
                        <input id="email" name="email" type="email" required></input>
                    </div>
                </div>
                <div>
                    <textarea id="email_text" name="email_text" rows="10" cols="10" required></textarea>
                </div>
                <button>Send</button>
            </form>

        </PageWrapper>

    </AnimatedPage>
}

export default Contact;