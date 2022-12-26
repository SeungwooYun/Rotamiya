import PageWrapper from "../tools/PageWrapper";
import AnimatedPage from "../tools/AnimatedPage";


const Contact = () => {

    const onSubmitHandler = () => {
        alert("Thank you so much for contacting us. We will get back to you ASAP")
    };
    // 여기는 form submit 에서 자동으로 thank you page를 보여주기 때문인지 event.preventDefault 를 쓰면 오류가 난다.. 

    return <AnimatedPage>
        <h1 className="title">Contact Us</h1>

        <PageWrapper>
            <h2>회사정보</h2>
        </PageWrapper>
        <PageWrapper>
            <h2>주소/구글맵스</h2>
        </PageWrapper>

        <PageWrapper>
            <form action="https://formsubmit.co/yoooonseungwoo@naver.com" method="POST" onSubmit={onSubmitHandler}>
                <div>
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