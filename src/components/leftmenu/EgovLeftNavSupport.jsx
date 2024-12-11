import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavSupport() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>고객지원</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.SUPPORT_DOWNLOAD} className={({ isActive }) => (isActive ? "cur" : "")}>자료실</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_QNA} className={({ isActive }) => (isActive ? "cur" : "")}>묻고답하기</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>서비스신청</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_CATALOG} className={({ isActive }) => (isActive ? "cur" : "")}>카달로그</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_MSA} className={({ isActive }) => (isActive ? "cur" : "")}>자재승인원</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_CNTC} className={({ isActive }) => (isActive ? "cur" : "")}>국세완납증명서</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_MENUAL} className={({ isActive }) => (isActive ? "cur" : "")}>메뉴얼</NavLink></li>
                    <ul>
                        <li><NavLink to={URL.SUPPORT_SAM} className={({ isActive }) => (isActive ? "cur" : "")}>유지관리 지침서</NavLink></li>
                        <li><NavLink to={URL.SUPPORT_INSTALL} className={({ isActive }) => (isActive ? "cur" : "")}>설치도</NavLink></li>
                        <li><NavLink to={URL.SUPPORT_CD} className={({ isActive }) => (isActive ? "cur" : "")}>결선도</NavLink></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavSupport;