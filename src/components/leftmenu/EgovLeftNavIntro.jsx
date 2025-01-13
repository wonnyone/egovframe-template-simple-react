import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';
import { getSessionItem } from 'utils/storage';

function EgovLeftNavIntro() {
    
    //관리자 권한 체크때문에 추가(아래)
    const sessionUser = getSessionItem('loginUser');
    const sessionUserSe = sessionUser?.userSe;

    return (
        <div className="nav">
            <div className="inner">
                <h2>제품소개</h2>
                <ul className="menu4">
                    {/* <li><NavLink to={URL.INTRO_WORKS} className={({ isActive }) => (isActive ? "cur" : "")}>주요사업 소개</NavLink></li> */}
                    {/* <li><NavLink to={URL.INTRO_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>대표서비스 소개</NavLink></li> */}
                    {/* <li><NavLink to={URL.INTRO_WAMETER} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li> */}
                    <li><NavLink to={URL.INTRO_SERVICE1} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li>
                    <li><NavLink to={URL.INTRO_SERVICE2} className={({ isActive }) => (isActive ? "cur" : "")}>온수미터</NavLink></li>
                    <li><NavLink to={URL.INTRO_SERVICE3} className={({ isActive }) => (isActive ? "cur" : "")}>적산열량계</NavLink></li>
                    <li><NavLink to={URL.INTRO_SERVICE4} className={({ isActive }) => (isActive ? "cur" : "")}>원격 지시부</NavLink></li>
                    <li>컨버터
                        <ul>
                            <li><NavLink to={URL.INTRO_SERVICE5} className={({ isActive }) => (isActive ? "cur" : "")}>펄스변환기</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE6} className={({ isActive }) => (isActive ? "cur" : "")}>485변환기기</NavLink></li>
                        </ul>                           
                    </li>
                    {sessionUserSe ==='ADM' &&
                        <li><NavLink to={URL.INTRO_SERVICE1_LIST} className={({ isActive }) => (isActive ? "cur" : "")}>제품소개 관리</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavIntro;