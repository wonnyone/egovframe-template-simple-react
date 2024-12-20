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

                    <div className="top_tit">
                        <h1 className="tit_1">제품소개</h1>                            
                    </div>

                    {/* <p className="txt_1">표준프레임워크 경량환경 포털사이트를 소개합니다.</p> */}
                    
                    <h2 className="tit_2">적산열량계</h2>

                    {/* <h3 className="tit_5">개요</h3> */}

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