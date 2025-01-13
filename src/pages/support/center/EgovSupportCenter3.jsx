import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CENTER1_BBS_ID } from 'config';

import * as EgovNet from 'api/egovFetch';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';

import { SERVER_URL } from 'config';

function EgovSupportCenter3() {
    console.log("[Start] EgovSupportCenter3 ------------------------------");
    
    const location = useLocation();
    const bbsId = location.state?.bbsId || CENTER1_BBS_ID; 

    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition2 || { bbsId: bbsId, pageIndex: 1, searchCnd: '0', searchWrd: 'FAQ' });
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});
    const [listTag, setListTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovSupportCenter3.retrieveList()");

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
                mutListTag.push(<p className="no_data" key="0">검색된 결과가 없습니다.</p>); // 게시판 목록 초기값
                
                //const resultCnt = parseInt(resp.result.resultCnt);
                //const currentPageNo = resp.result.paginationInfo.currentPageNo;
                //const pageSize = resp.result.paginationInfo.pageSize;

                // 리스트 항목 구성
                resp.result.resultList.forEach(function (item, index) {
                    if (index === 0) mutListTag = []; // 목록 초기화
                    //const listIdx = itemIdxByPage(resultCnt , currentPageNo, pageSize, index);

                    mutListTag.push(

                        <p className="msg_1 f_txtar w_full h_200">
                            <div className="board_article">
                                <textarea name="" cols="30" rows="10" readOnly="readonly" defaultValue={item.nttCn}></textarea>
                            </div>
                        </p>

                    );
                });
                setListTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovSupportCenter3.retrieveList()");
    },[]);

    useEffect(() => {
        retrieveList(searchCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovSupportCenter3 [End]");
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">고객센터</a></li>
                        <li>FAQ</li>
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
                            <h1 className="tit_1">고객센터</h1>                            
                        </div>

                        {/* <p className="txt_1">표준프레임워크 경량환경 포털사이트를 소개합니다.</p> */}
                        
                        <h2 className="tit_2">FAQ</h2>

                        {/* <h3 className="tit_5">주요 서비스 안내</h3> */}

                        {listTag}
                    
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovSupportCenter3;