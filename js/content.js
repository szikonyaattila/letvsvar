"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        var valtozo1 = 31;
        res.write("<p>decimal érték: " + valtozo1 + "</p>");
         if (true) {
                var valtozo1 = 71;   
                res.write("<p>decimal érték: " + valtozo1 + "</p>");
            }
        
        let valtozo2 =32;
        res.write("<p>decimal érték: " + valtozo2 + "</p>");
        if (true) {
                var valtozo2 = 72;   
                res.write("<p>decimal érték: " + valtozo2 + "</p>");
            }
        res.write("<p>decimal érték: " + valtozo1 + "</p>");
        res.write("<p>hex érték: " + valtozo2 + "</p>");
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar//</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
