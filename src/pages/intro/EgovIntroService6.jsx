import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import { SERVICE1_BBS_ID } from 'config';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

import { itemIdxByPage } from 'utils/calc';
import { getSessionItem } from 'utils/storage';

import { SERVER_URL } from 'config';

function EgovIntroService6() {
    console.log("[Start] EgovIntroService6 ------------------------------");
    
    const location = useLocation();

    const cndRef = useRef();
    const wrdRef = useRef();
    //관리자 권한 체크때문에 추가(아래)
    const sessionUser = getSessionItem('loginUser');
    const sessionUserSe = sessionUser?.userSe;

    const bbsId = location.state?.bbsId || SERVICE1_BBS_ID; 

    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition || { bbsId: bbsId, pageIndex: 1, searchCnd: '4', searchWrd: '(485변환기기이미지)' });// 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [searchCondition2, setSearchCondition2] = useState(location.state?.searchCondition2 || { bbsId: bbsId, pageIndex: 1, searchCnd: '4', searchWrd: '(485변환기기카달로그)' });
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});

    const [listTag, setListTag] = useState([]);
    const [listDownTag, setListDownTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovIntroService6.retrieveList()");

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
        console.groupEnd("EgovIntroService6.retrieveList()");
    },[]);

    const retrieveList2 = useCallback((searchCondition2) => {
        console.groupCollapsed("EgovIntroService6.retrieveList2()");

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
        console.groupEnd("EgovIntroService6.retrieveList2()");
    },[]);

    useEffect(() => {
        retrieveList(searchCondition);
        retrieveList2(searchCondition2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovIntroService6 [End]");
    return (
        <div className="container">
        <div className="c_wrap">
            {/* <!-- Location --> */}
            <div className="location">
                <ul>
                    <li><a className="home" href="#!">Home</a></li>
                    <li><a href="#!">제품소개</a></li>
                    <li>485변환기기</li>
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
                    
                    <h2 className="tit_2">485변환기기</h2>

                    {/* 이미지 */}
                    <div class="pro-section section01">
                        <ul class="pro-img">
                            {listTag}
                        </ul>
                    </div>

                    {/* 

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
                    */}

                    {/* 카달로그다운 --> */}   
                    {listDownTag}

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService6;