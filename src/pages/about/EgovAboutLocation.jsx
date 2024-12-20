import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutLocation() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>회사소개</Link></li>
                        <li>오시는길</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_CONTACT_US" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">회사소개</h1>                            
                        </div>

                        {/* <p className="txt_1">표준프레임워크 경량환경 포털사이트를 소개합니다.</p> */}
                        
                        <h2 className="tit_2">오시는 길</h2>

                        {/* <h3 className="tit_5">개요</h3> */}

                        <div className="map">
                            <a href="https://naver.me/xv3pdTVo" target="_blank" rel="noreferrer">
                                <img src="/assets/images/map.png" alt="" />
                            </a>
                        </div>

                        <div className="addr">
                            <div className="left_col">
                                <h3>엠엑스(주) 주소</h3>
                                <dl>
                                    <dt>도로명주소</dt>
                                    <dd>22839 인천광역시 서구 가정로 38번길 10, 다동 9호 엠엑스(주)</dd>
                                </dl>
                                <dl>
                                    <dt>지번주소</dt>
                                    <dd>22839 인천광역시 서구 가좌동 564-10, 다동 9호 엠엑스(주)</dd>
                                </dl>
                            </div>
                            {/* <div className="right_col">
                                <h3>QR코드로 위치알아보기</h3>
                                <p>스마트폰에서 QR코드<br />
                                    리더를 이용해 사진·<br />
                                    지도 등 다양한 정보를<br />
                                    확인하세요.</p>
                                <img className="qr" src="/assets/images/qrcode.png" alt="qr code" />
                            </div> */}
                        </div>

                        <div className="way">
                            <div className="left_col">
                                <h3>찾아오시는 길</h3>
                                <dl>
                                    <dt>지하철 인천2호선</dt>
                                    <dd>인천가좌역 2번 출구 5분거리</dd>
                                </dl>
                                {/* <dl>
                                    <dt>지하철 1호선</dt>
                                    <dd>서울역 3번 출구 5분거리</dd>
                                </dl> */}
                            </div>
                            <div className="right_col">
                                <h3>연락처</h3>
                                <dl>
                                    <dt className="call">전화</dt>
                                    <dd>070-7678-4518</dd>
                                </dl>
                                <dl>
                                    <dt className="email">이메일</dt>
                                    <dd>metersx@naver.com</dd>
                                </dl>
                            </div>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutLocation;