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

                    <div class="pro-section section02">
                        <div class="pro-sub-tit">
                            <p>Specification</p>
                            <h5>제품사양</h5>
                        </div>
                        <div class="table-container">
                            <table class="spec-table">
                                <tbody>
                                    <tr>
                                        <th>규격<br/>(mm)</th>
                                        <th>모델명</th>
                                        <th>과부하 유량<br/>Qs [m3/h]</th>
                                        <th>최대유량<br/>Qp [m3/h]</th>
                                        <th>최소유량<br/>Qi [m3/h]</th>
                                        <th>전체길이<br/>L [mm]</th>
                                        <th>접속부나사<br/>D [inch]</th>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>CM-15</td>
                                        <td>3</td>
                                        <td>1.5</td>
                                        <td>0.06</td>
                                        <td>110</td>
                                        <td>G 3/4</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>CM-20</td>
                                        <td>4</td>
                                        <td>2</td>
                                        <td>0.08</td>
                                        <td>130</td>
                                        <td>G 1</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>CM-25</td>
                                        <td>5</td>
                                        <td>2.5</td>
                                        <td>0.1</td>
                                        <td>130</td>
                                        <td>G1 1/4</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>CM-32</td>
                                        <td>6</td>
                                        <td>3</td>
                                        <td>0.12</td>
                                        <td>180</td>
                                        <td>G1 1/2</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>CM-40</td>
                                        <td>14</td>
                                        <td>7</td>
                                        <td>0.28</td>
                                        <td>200</td>
                                        <td>G 2</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>CM-50</td>
                                        <td>16</td>
                                        <td>8</td>
                                        <td>0.32</td>
                                        <td>200</td>
                                        <td>70-11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 카달로그다운 --> */}   
                    {/*listDownTag */}

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService3;