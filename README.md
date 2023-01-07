# Rotamiya
Rotamiya Webpage
리액트를 사용한 Rotamiya 웹페이지 

인원: 단독작업

헤더 컴포넌트에서 동영상 파일을 삽입하고 스타일 position을 fixed, z인덱스를 -1을 주어 동영상 자체가 웹페이지의 배경이 되도록 하였습니다.

메인페이지에서는 IntersectionObserver API를 통해 유저가 스크롤바를 내리면 특정 포인트에서 광고문구가 서서히 렌더링되는 연출을 하였습니다. 요소가 감지된 시점에 isContentVisible state를 !로 변경하고, 각 광고문구의 visibility를  해당 state에 따라 hidden 에서 absolute 로 전환시켰습니다. CSS animation 으로 각 문구는 y축으로 opacity가 선명해지며 올라옵니다. 위 과정은 첫 화면 렌더링 시에만 발생해야 하므로 useEffect를 사용하고 의존성요소를 넣지 않았습니다. 

Navbar에서는 현재 활성화되지 않은 메인 메뉴의 서브메뉴를 클릭할 시, NavLink에서 해당 메인메뉴에 to를, 해당 서브메뉴의 이름을 state에 담아 전송하였습니다. 메인메뉴가 활성화된 후 전달받은 state는 useLocation 에서 확인하고, 존재한다면 해당 컨텐츠의 id로 스크롤바가 이동하도록 react-scroll를 사용하였습니다.

Contact Us 페이지에서는 react-google-maps 패키지를 사용하여 구글맵 API를 사용하였습니다. 구글 클라우트 플랫폼에서 API key를 받아 사용하였으며 현재 본 프로젝트는 hosting 되지 않았고 API 키는 환경변수에 들어있어 포트폴로오 내에서는 비활성화된 상태입니다. 지도의 center는 사용자가 변경할 수 없도록 useMemo로 Memoization해두었습니다. 

각 컨텐츠는 Wrapper 컴포넌트로 감싸 디자인에 통일감을 주었으며, 헤더와 푸터를 제외한 각 컴포넌트들은 framer-motion을 사용하여 애니메이션 동작으로 렌더링이 전환됩니다. 

현재는 해당 회사가 홈페이지에 올릴 컨텐츠와 추가적인 디자인을 검토하고 있는 상황이기에 대부분의 내용은 lorem ipsum 으로 채워져 있습니다. 
