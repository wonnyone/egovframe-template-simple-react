import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';
import { getSessionItem } from 'utils/storage';

function EgovLeftNavSupport() {
    
    //관리자 권한 체크때문에 추가(아래)
    const sessionUser = getSessionItem('loginUser');
    const sessionUserSe = sessionUser?.userSe;

    return (
        <div className="nav">
            <div className="inner">
                <h2>고객센터</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.SUPPORT_CENTER1} className={({ isActive }) => (isActive ? "cur" : "")}>견적문의</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_CENTER2} className={({ isActive }) => (isActive ? "cur" : "")}>AS안내</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_CENTER3} className={({ isActive }) => (isActive ? "cur" : "")}>FAQ</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_CENTER4} className={({ isActive }) => (isActive ? "cur" : "")}>제품사용시 주의사항 예시</NavLink></li>
                    {sessionUserSe ==='ADM' &&
                        <li><NavLink to={URL.SUPPORT_CENTER1_LIST} className={({ isActive }) => (isActive ? "cur" : "")}>고객센터 관리</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavSupport;