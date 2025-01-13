import React from 'react';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavMall';

function EgovSupportApply() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">쇼핑몰</a></li>
                        <li>쇼핑몰 안내</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">쇼핑몰</h1>                            
                        </div>

                        {/* <p className="txt_1">표준프레임워크 경량환경 포털사이트를 소개합니다.</p> */}
                        
                        <h2 className="tit_2">쇼핑몰 안내</h2>

                        {/* <h3 className="tit_5">주요 서비스 안내</h3> */}

                        <p className="msg_1">
                            1. MX 쇼핑몰     바로가기<br/><br/>
                            2. 네이버 쇼핑몰 바로가기<br/><br/>
                            3. 쿠팡 쇼핑몰   바로가기<br/><br/>
                        </p>
                    
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovSupportApply;