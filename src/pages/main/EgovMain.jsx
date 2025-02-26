import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import "./slide.scss";

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';

function EgovMain(props) {
    console.group("EgovMain");
    console.log("[Start] EgovMain ------------------------------");
    console.log("EgovMain [props] : ", props);

    const location = useLocation();
    console.log("EgovMain [location] : ", location);

	// eslint-disable-next-line no-unused-vars
    const [noticeBoard, setNoticeBoard] = useState();
	// eslint-disable-next-line no-unused-vars
    const [gallaryBoard, setGallaryBoard] = useState();
    const [noticeListTag, setNoticeListTag] = useState();
    const [gallaryListTag, setGallaryListTag] = useState();

    //메인 이미지 슬라이드 시작
    const slides = [{ 
        image : "/assets/images/img_main1.png"
    }, 
    {
        image : "/assets/images/img_main2.png"
    },
    {
        image : "/assets/images/img_main3.png"
    }, 
    {
        image : "/assets/images/img_main4.png"
    },
    {
        image : "/assets/images/img_main5.png"
    },
    {
        image : "/assets/images/img_main6.png"
    },
    {
        image : "/assets/images/img_main7.png"
    },
    {
        image : "/assets/images/img_main8.png"
    }
    ];

    const [current, setCurrent] = useState(0);
    const length = slides.length;
        
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000); 
    
        return () => clearInterval(interval); // 
    }, [current, length]);
    
    // if (!Array.isArray(slides) || slides.length <= 0) {
    //      return null;
    // }
    //메인 이미지 슬라이드 종료

    const retrieveList = useCallback(() => {
        console.groupCollapsed("EgovMain.retrieveList()");

        const retrieveListURL = '/mainPage';
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {

                setNoticeBoard(resp.result.notiList);
                setGallaryBoard(resp.result.galList);

                let mutNotiListTag = [];
                mutNotiListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.notiList.forEach(function (item, index) {
                    if (index === 0) mutNotiListTag = []; // 목록 초기화
                    mutNotiListTag.push(
                        <li key={item.nttId}>
                            <Link
                                to={{pathname: URL.INFORM_NOTICE_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setNoticeListTag(mutNotiListTag);

                let mutGallaryListTag = [];
                mutGallaryListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.galList.forEach(function (item, index) {
                    if (index === 0) mutGallaryListTag = []; // 목록 초기화
                    mutGallaryListTag.push(
                        <li key={item.nttId}>
                            <Link
                                to={{pathname: URL.INFORM_GALLERY_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setGallaryListTag(mutGallaryListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovMain.retrieveList()");
    },[]);

    useEffect(() => {
        retrieveList();
    }, [retrieveList]);

    console.log("------------------------------EgovMain [End]");
    console.groupEnd("EgovMain");

    return (
        <div className="container P_MAIN">
            <div className="c_wrap">
                <div className="colbox">
                    <div className="left_col">
                        {/* <img src="/assets/images/img_simple_main.png" alt="단순 홈페이지 전자정부 표준프레임워크의 경량환경 내부업무에 대한 최신 정보와 기술을 제공하고 있습니다." /> */}
                        <div className='imageSlider'>
                        <IoIosArrowBack className='imageSlider-arrow left' size='30' onClick={prevSlide} />
                        <IoIosArrowForward className='imageSlider-arrow right' size='30' onClick={nextSlide} />
                        {slides.map((slide, index) => {
                            return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && <img src={slide.image} className='image' />}
                            </div>
                            );
                        })}
                        </div>

                    </div>

                    <div className="right_col">
                        <div className="mini_board">
                            <ul className="tab">
                                <li><a href="#공지사항" className="on">공지사항</a></li>
                                <li><a href="#갤러리">갤러리</a></li>
                            </ul>
                            <div className="list">
                                <div className="notice">
                                    <h2 className="blind">공지사항</h2>
                                    <ul>
                                        {noticeListTag}
                                    </ul>
                                    <Link to={URL.INFORM_NOTICE} className="more">더보기</Link>
                                </div>

                                <div className="gallary">
                                    <h2 className="blind">갤러리</h2>
                                    <ul>
                                        {gallaryListTag}
                                    </ul>
                                    <Link to={URL.INFORM_GALLERY} className="more">더보기</Link>
                                </div>
                            </div>
                        </div>

                        <div className="banner">
                            <Link to={URL.INFORM_CATALOG} className="bn1">
                                <strong>자료실</strong>
                                <span>다양한 자료를<br />다운로드 받으실 수 있습니다.</span>
                            </Link>
                            <Link to={URL.ABOUT_LOCATION} className="bn2">
                                <strong>회사위치</strong>
                                <span>MX의<br />약도 등의 정보를 제공합니다.</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="banner_bot">
                    <div className="b1">
                        <div>
                            <h2>회사 소개</h2>
                            <p>MX가 제공하는<br />
                                주요 사업을 소개합니다.</p>
                        </div>
                        <Link to={URL.ABOUT_SITE}>자세히 보기</Link>
                    </div>
                    <div className="b2">
                        <div>
                            <h2>제품 소개</h2>
                            <p>MX의<br />
                                서비스 그룹에서 제공하는<br />
                                대표서비스입니다.</p>
                        </div>
                        <Link to={URL.INTRO_SERVICE1}>자세히 보기</Link>
                    </div>
                    <div className="b3">
                        <div>
                            <h2>서비스 신청</h2>
                            <p>MX홈페이지의 다양한 서비스를<br />
                                신청 하실 수 있습니다.</p>
                        </div>
                        <Link to={URL.SUPPORT_CENTER1}>자세히 보기</Link>
                    </div>
                    <div className="b4">
                        <div>
                            <h2>쇼핑몰</h2>
                            <p>MX홈페이지의 연계된<br />
                                온라인 쇼핑몰을 조회하실 수 있습니다.</p>
                        </div>
                        <Link to={URL.MALL}>자세히 보기</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EgovMain;