import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavSupport() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>쇼핑몰</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.MALL} className={({ isActive }) => (isActive ? "cur" : "")}>쇼핑몰 안내</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavSupport;