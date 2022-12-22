import { useEffect, useRef, useState } from "react"

const MainContents = () => {

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
            if (entryContent.startsWith('<p>1')) {
                setIsFirstContentVisible(entries[0].isIntersecting);
            } else if (entryContent.startsWith('<p>2')) {
                setIsSecondContentVisible(entries[0].isIntersecting);
            } else if (entryContent.startsWith('<p>3')) {
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
        <div ref={contentRef1} className={`main-contents-text right-side ${isFirstContentVisible ? "appear" : ""}`}>
            <p>1Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore</p>
        </div>

        <div ref={contentRef2} className={`main-contents-text left-side ${isSecondContentVisible ? "appear" : ""}`}>
            <p>2Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore</p>
        </div>

        <div ref={contentRef3} className={`main-contents-text right-side ${isThirdContentVisible ? "appear" : ""}`}>
            <p>3Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore</p>
        </div>
    </>
}

export default MainContents

