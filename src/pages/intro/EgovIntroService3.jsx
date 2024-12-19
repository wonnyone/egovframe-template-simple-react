import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

function EgovIntroService3() {
    return (
        <div className="container">
        <div className="c_wrap">
            {/* <!-- Location --> */}
            <div className="location">
                <ul>
                    <li><a className="home" href="#!">Home</a></li>
                    <li><a href="#!">제품소개</a></li>
                    <li>적산열량계</li>
                </ul>
            </div>
            {/* <!--// Location --> */}

            <div className="layout">
                {/* <!-- Navigation --> */}
                <EgovLeftNav></EgovLeftNav>
                {/* <!--// Navigation --> */}
                
                <div className="contents SERVICE_INTRO" id="contents">
                    {/* <!-- 본문 --> */}

                    <h1 className="tit_3">적산열량계</h1>

                    <p className="txt_1">대표제품의 소개와 대표서비스의 소개를 보실 수 있는 페이지입니다.</p>
                    
                    <h2 className="tit_4">대표서비스 소개</h2>

                    <p className="txt_1">
                        전자정부 표준 프레임워크 실행환경은 5개 서비스 그룹으로 구성되며 34개 서비스를 제공한다.<br/>
                        실행환경 서비스 구조는 아래 그림과 같다.
                    </p>

                    {/* <h3 className="tit_5">화면처리</h3> */}

                    <div className="servicelist">
                        <ul>
                            <li>
                                <Link to={URL.SUPPORT_DOWNLOAD_DETAIL}>
                                    <img src="/assets/images/img_main1.png" alt=""/>
                                    <span>
                                        <strong>egovframe installer v1.03</strong>
                                        <span>egovframe의 템플릿 설치를 도와주는 
                                            인스톨러.....egovframe의 템플릿 
                                            설치를 도와주는 인스톨러</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={URL.SUPPORT_DOWNLOAD_DETAIL}>
                                    <img src="/assets/images/img_main2.png" alt=""/>
                                    <span>
                                        <strong>egovframe installer v1.03</strong>
                                        <span>egovframe의 템플릿 설치를 도와주는 
                                            인스톨러.....egovframe의 템플릿 
                                            설치를 도와주는 인스톨러</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={URL.SUPPORT_DOWNLOAD_DETAIL}>
                                    <img src="/assets/images/img_main3.png" alt=""/>
                                    <span>
                                        <strong>egovframe installer v1.03</strong>
                                        <span>egovframe의 템플릿 설치를 도와주는 
                                            인스톨러.....egovframe의 템플릿 
                                            설치를 도와주는 인스톨러</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={URL.SUPPORT_DOWNLOAD_DETAIL}>
                                    <img src="/assets/images/img_main4.png" alt=""/>
                                    <span>
                                        <strong>egovframe installer v1.03</strong>
                                        <span>egovframe의 템플릿 설치를 도와주는 
                                            인스톨러.....egovframe의 템플릿 
                                            설치를 도와주는 인스톨러</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService3;