import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getSessionItem, setSessionItem } from 'utils/storage';

import URL from 'constants/url';

function EgovFooter() {
    const sessionUser = getSessionItem('loginUser');
    const sessionUserId = sessionUser?.id;

    const navigate = useNavigate();

    const logInHandler = () => { // 로그인 정보 없을 시
        navigate(URL.LOGIN);
    }

    return (
        <div className="footer">
            <div className="inner">
                <h1>
                    <Link to="">
                        <img className="w" src="/assets/images/logo_footer_w.png" alt="" />
                        <img className="m" src="/assets/images/logo_footer_m.png" alt="" />
                    </Link>
                </h1>
                <div className="info">
                    {/* 로그인 : 로그인 정보 없을 때 */}
                    {!sessionUserId &&
                        <>
                        <button onClick={logInHandler} className="btn login">로그인</button>
                        {/* <NavLink to={URL.MYPAGE_CREATE} className={({ isActive }) => (isActive ? "btn login cur" : "btn login")}>회원가입</NavLink> */}
                        </>
                    }
                    <p>
                        {/* 대표문의메일 : egovframeexample@gmail.com  <span className="m_hide">|</span><br className="m_show" />  대표전화 : 0000-0000 (000-0000-0000)<br />
                        호환성확인 : 000-0000-0000  |  교육문의 : 0000-0000-0000 */}
                        인천광역시 서구 가정로 38번길 10, 다동 1층 9호(가좌동)<br/>
                        대표전화 : 070-7678-4518  |  FAX : 070-7178-4512  |  이메일 : metersx@naver.com
                    </p>
                    <p className="copy">Copyright © 2025 Ministry Of The Interior And Safety. All Rights Reserved.</p>
                </div>
                {/* <div className="right_col">
                    <Link to="">
                        <img className="w" src="/assets/images/banner_w_01.png" alt="" />
                        <img className="m" src="/assets/images/banner_m_01.png" alt="" />
                    </Link>
                    <Link to="">
                        <img className="w" src="/assets/images/banner_w_02.png" alt="" />
                        <img className="m" src="/assets/images/banner_m_02.png" alt="" />
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default EgovFooter;