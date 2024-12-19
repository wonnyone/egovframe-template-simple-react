import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

function EgovIntroService1() {
    return (
        <div className="container">
        <div className="c_wrap">
            {/* <!-- Location --> */}
            <div className="location">
                <ul>
                    <li><a className="home" href="#!">Home</a></li>
                    <li><a href="#!">제품소개</a></li>
                    <li>수도미터</li>
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
                    
                    <h2 className="tit_2">수도미터</h2>

                    {/* <h3 className="tit_5">개요</h3> */}

                    <div class="pro-section section01">
                        <ul class="pro-img">
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_oWfg3zjl_ea85b1498fe6cd6af4942b5a6cb8802449226976.jpg" className="wameterimg" alt="wameter" />                
                                    {/* <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_oWfg3zjl_ea85b1498fe6cd6af4942b5a6cb8802449226976.jpg" style="max-width:100%;max-height:100%" width="269"/>                </div> */}
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 일반                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_U1dwnlq0_d7598ff4301f8872aa39b50b7d1fc09ab72e3c78.jpg" className="wameterimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 역류                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_yJnTfd0e_81fac5cce18468819a72fd7568fb632d4e664d75.jpg" className="wameterimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 일반, 니켈상부                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_PQZLq1BN_a52ffc7b333c1b45106b4aa0637e66e0aa70682b.jpg" className="wameterimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 역류, 니켈상부                
                                </div>
                            </li>
                            < li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_8UQp3muH_95ce54874c20eb9b85d35477649a29ce64fc9225.jpg" className="wameterimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 역류, 동파예방                
                                </div>
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
                                        <th>미터전장 L<br/>(mm)</th>
                                        <th>미터높이 H<br/>(mm)</th>
                                        <th>미터폭 W<br/>(mm)</th>
                                        <th>미터접속나사 D<br/>(inch)</th>
                                        <th>설치접속나사 d<br/>(inch)</th>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>165</td>
                                        <td>110</td>
                                        <td>88</td>
                                        <td>PF 3/4</td>
                                        <td>PT 1/2</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>190</td>
                                        <td>103</td>
                                        <td>97</td>
                                        <td>PF 1</td>
                                        <td>PT 3/4</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>225</td>
                                        <td>108</td>
                                        <td>97</td>
                                        <td>PF 1 1/4</td>
                                        <td>PT 1</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>230</td>
                                        <td>112</td>
                                        <td>97</td>
                                        <td>PF 1 1/2</td>
                                        <td>PT 1 1/4</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>245</td>
                                        <td>126</td>
                                        <td>117</td>
                                        <td>PF 2</td>
                                        <td>PT 1 1/2</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>305</td>
                                        <td>156</td>
                                        <td>134</td>
                                        <td>PF 2 1/2</td>
                                        <td>PT 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="pro-section section03">
                        <a href="http://www.spic.co.kr/home/bbs/download.php?bo_table=pro01&amp;wr_id=18&amp;no=8&amp;sca=%EA%B0%80%EC%A0%95%EC%9A%A9" className="detali-view">상세사양은[카달로드 다운]</a>
                    </div>

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService1;