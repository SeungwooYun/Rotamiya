
import MainContent1 from "./MainContent1"
import MainContent2 from './MainContent2'
import MainContent3 from './MainContent3'

const MainContents = () => {

    // 인터섹션파트를 여기서 만들고
    // 메인컨텐츠 각 컴포넌트 안에서 useRef 를 써주고 
    // 이벤트핸들러function 으로 여기로 올려준다음에
    // 어차피 똑같은 CSS적용이라면 그 안에다가 넣어줄 수 있을까?
    // 할게 많네;

    return <>
        <MainContent1 />
        <MainContent2 />
        <MainContent3 />
    </>
}

export default MainContents

