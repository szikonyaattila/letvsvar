"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        var a = 31;
        res.write("<p>decimal érték: " + a + "</p>");
        
        let b =32;
        res.write("<p>decimal érték: " + b + "</p>");
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar//</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
