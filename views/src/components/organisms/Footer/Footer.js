import React from "react";

import "./Footer.scss";

export default () => {
    return (
        <footer role="contentinfo" id="footer">
            <span id="copyright">Copyright © {year} Vnyls.com | Design by <a href="https://richardantao.com" target="_blank" rel="noopener noreferrer">richardantao.com</a></span>
        </footer>
    );
};

const year = new Date().getFullYear();