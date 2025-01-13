import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import { SERVICE1_BBS_ID } from 'config';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

import { itemIdxByPage } from 'utils/calc';
import { getSessionItem } from 'utils/storage';

import { SERVER_URL } from 'config';

function EgovIntroService1() {
    console.log("[Start] EgovIntroService1 ------------------------------");
    
    const location = useLocation();

    const cndRef = useRef();
    const wrdRef = useRef();
    //관리자 권한 체크때문에 추가(아래)
    const sessionUser = getSessionItem('loginUser');
    const sessionUserSe = sessionUser?.userSe;

    const bbsId = location.state?.bbsId || SERVICE1_BBS_ID; 

    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition || { bbsId: bbsId, pageIndex: 1, searchCnd: '4', searchWrd: '(수도미터이미지)' });// 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [searchCondition2, setSearchCondition2] = useState(location.state?.searchCondition2 || { bbsId: bbsId, pageIndex: 1, searchCnd: '4', searchWrd: '(수도미터카달로그)' });
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});

    const [listTag, setListTag] = useState([]);
    const [listDownTag, setListDownTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovIntroService1.retrieveList()");

        const retrieveListURL = '/boardService'+EgovNet.getQueryString(searchCondition);
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {
                setMasterBoard(resp.result.brdMstrVO);
                setPaginationInfo(resp.result.paginationInfo);
                setUser(resp.result.user);

                let mutListTag = [];
                mutListTag.push(<p className="no_data" key="0">(이미지)검색된 결과가 없습니다.</p>); // 게시판 목록 초기값
                
                //const resultCnt = parseInt(resp.result.resultCnt);
                //const currentPageNo = resp.result.paginationInfo.currentPageNo;
                //const pageSize = resp.result.paginationInfo.pageSize;

                // 리스트 항목 구성
                resp.result.resultList.forEach(function (item, index) {
                    if (index === 0) mutListTag = []; // 목록 초기화
                    //const listIdx = itemIdxByPage(resultCnt , currentPageNo, pageSize, index);

                    mutListTag.push(
                            
                        <li>
                            <div class="img-box">
                                <img src={`${SERVER_URL}/${item.atchFileImgUrl}`} className="serviceimg" alt="wameter" />                
                            </div>
                            <div class="txt-box">
                                {item.nttSj}                
                            </div>
                        </li>

                    );
                });
                setListTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovIntroService1.retrieveList()");
    },[]);

    const retrieveList2 = useCallback((searchCondition2) => {
        console.groupCollapsed("EgovIntroService1.retrieveList2()");

        const retrieveListURL = '/boardService'+EgovNet.getQueryString(searchCondition2);
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {
                setMasterBoard(resp.result.brdMstrVO);
                setPaginationInfo(resp.result.paginationInfo);
                setUser(resp.result.user);

                let mutListTag = [];
                mutListTag.push(<p className="no_data" key="0">(카다로그)검색된 결과가 없습니다.</p>); // 게시판 목록 초기값
                
                // 리스트 항목 구성
                resp.result.resultList.forEach(function (item, index) {
                    if (index === 0) mutListTag = []; // 목록 초기화
                    //const listIdx = itemIdxByPage(resultCnt , currentPageNo, pageSize, index);

                    mutListTag.push(

                        <div class="pro-section section03">
                            <a href={`${SERVER_URL}/${item.atchFileDownUrl}`} className="detali-view">상세사양은[카달로드 다운]</a>
                        </div>

                    );
                });
                setListDownTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovIntroService1.retrieveList2()");
    },[]);

    useEffect(() => {
        retrieveList(searchCondition);
        retrieveList2(searchCondition2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovIntroService1 [End]");
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

                    {/*sessionUserSe ==='ADM' &&
                        <li>
                            {<Link to={URL.INTRO_SERVICE1_LIST} className="btn btn_blue_h46 pd35">관리</Link>}                            
                        </li>
                    */}

                    {/* 이미지 */}
                    <div class="pro-section section01">
                        <ul class="pro-img">
                            {listTag}
                        </ul>
                    </div>

                    <div class="pro-section section01">
                        <ul class="pro-img">
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_oWfg3zjl_ea85b1498fe6cd6af4942b5a6cb8802449226976.jpg" className="serviceimg" alt="wameter" />                
                                    {/* <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_oWfg3zjl_ea85b1498fe6cd6af4942b5a6cb8802449226976.jpg" style="max-width:100%;max-height:100%" width="269"/>                </div> */}
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 일반                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_U1dwnlq0_d7598ff4301f8872aa39b50b7d1fc09ab72e3c78.jpg" className="serviceimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 역류                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_yJnTfd0e_81fac5cce18468819a72fd7568fb632d4e664d75.jpg" className="serviceimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 일반, 니켈상부                
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_PQZLq1BN_a52ffc7b333c1b45106b4aa0637e66e0aa70682b.jpg" className="serviceimg" alt="wameter" />                
                                </div>
                                <div class="txt-box">
                                    수도미터, 복갑습식, 역류, 니켈상부                
                                </div>
                            </li>
                            < li>
                                <div class="img-box">
                                    <img src="http://www.spic.co.kr/home/data/file/pro01/3667170956_8UQp3muH_95ce54874c20eb9b85d35477649a29ce64fc9225.jpg" className="serviceimg" alt="wameter" />                
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
                                        <th>모델명</th>
                                        <th>과부하 유량<br/>Q4 [m3/h]</th>
                                        <th>최대유량<br/>Q3 [m3/h]</th>
                                        <th>전이유량<br/>Q2 [m3/h]</th>
                                        <th>최소유량<br/>Q1 [m3/h]</th>
                                        <th>전체길이<br/>L [mm]</th>
                                        <th>접속부나사<br/>D [inch]</th>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>WM-15</td>
                                        <td>2</td>
                                        <td>1.6</td>
                                        <td>0.064</td>
                                        <td>0.04</td>
                                        <td>110</td>
                                        <td>G 3/4</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>WM-20</td>
                                        <td>3.125</td>
                                        <td>2.5</td>
                                        <td>0.1</td>
                                        <td>0.0625</td>
                                        <td>130</td>
                                        <td>G 1</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>WM-25</td>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>0.16</td>
                                        <td>0.1</td>
                                        <td>130</td>
                                        <td>G1 1/4</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>WM-32</td>
                                        <td>7.875</td>
                                        <td>6.3</td>
                                        <td>0.101</td>
                                        <td>0.063</td>
                                        <td>180</td>
                                        <td>G1 1/2</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>WM-40</td>
                                        <td>12.5</td>
                                        <td>10</td>
                                        <td>0.16</td>
                                        <td>0.1</td>
                                        <td>200</td>
                                        <td>G 2</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>WM-50</td>
                                        <td>20</td>
                                        <td>16</td>
                                        <td>0.256</td>
                                        <td>0.16</td>
                                        <td>200</td>
                                        <td>70-11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 카달로그다운 --> */}   
                    {listDownTag}

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService1;