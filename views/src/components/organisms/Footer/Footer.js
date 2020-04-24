import React from "react";

import "./Footer.scss";

export default () => {
    return (
        <footer role="content-info" id="footer">
            <span id="copyright">Copyright © {year} Vynls.com | Design by <a href="https://richardantao.com">richardantao.com</a></span>
        </footer>   
    );
};

const year = new Date.getFullYear();