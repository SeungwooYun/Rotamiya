import { useEffect, useRef, useState } from "react"
import { scroller } from "react-scroll";

const MainContents = () => {


    useEffect(() => {
        scroller.scrollTo('header', {
            duration: 1000,
            delay: 0.2,
            smooth: true,
            offset: -300,
        });
    }, []);
    // 가장 위로 올려놔야 밑의 세 광고문구가 lazy loading 으로 렌더링됨 


    const contentRef1 = useRef();
    const contentRef2 = useRef();
    const contentRef3 = useRef();

    const [isFirstContentVisible, setIsFirstContentVisible] = useState();
    const [isSecondContentVisible, setIsSecondContentVisible] = useState();
    const [isThirdContentVisible, setIsThirdContentVisible] = useState();

    console.log('1번', isFirstContentVisible)
    console.log('2번', isSecondContentVisible)
    console.log('3번', isThirdContentVisible)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            const entryContent = entry.target.innerHTML
            // 각 observe가 무슨 글자로 시작하는지로 구분해야함
            if (entryContent.startsWith('<p>Rotamiya')) {
                setIsFirstContentVisible(entries[0].isIntersecting);
            } else if (entryContent.startsWith('<p>Bridging')) {
                setIsSecondContentVisible(entries[0].isIntersecting);
            } else if (entryContent.startsWith('<p>Empowering')) {
                setIsThirdContentVisible(entries[0].isIntersecting);
            }
        })
        observer.observe(contentRef1.current);
        observer.observe(contentRef2.current);
        observer.observe(contentRef3.current);
        // 이렇게 세개 때려넣었을때 첫렌더링에서 전부 다 출력되고 
        // 두번째 렌더링부터는 entries에 하나씩만 담겨서 그때그때 나오는구나.
        // 가장 처음만 3개 담겨있고, 그 이후부터는 하나씩 담겨있음.
        // 가장 처음 렌더링된 것마저도 유의미한건 인덱스0임. 나머진 어차피 false임
        // 해결했다.. 결국 [0] 으로 가면 되는거였어...눈무리 난다..

    }, []);

    // IntersectionObserver를 여기에 쓰고, child components 안에서 ref value를
    // 받아올 수 있다면 베스트이겠지만, 컴포넌트 자체가 많지 않으니 여기서 해결하자

    return <>
        <h1 className="title">Welcome to Rotamiya!</h1>
        <div ref={contentRef1} className={`main-contents-text right-side ${isFirstContentVisible ? "appear" : ""}`}>
            <p>Rotamiya is a space where the possibilities are endless.
            </p>
        </div>

        <div ref={contentRef2} className={`main-contents-text left-side ${isSecondContentVisible ? "appear" : ""}`}>
            <p>Bridging the gaps between nations in trade.</p>
        </div>

        <div ref={contentRef3} className={`main-contents-text right-side ${isThirdContentVisible ? "appear" : ""}`}>
            <p>Empowering positive change in the world through commitment to charity.</p>
        </div>
    </>
}

export default MainContents

