"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        var decimal = 6;
         if (true) {
                var decimal = 71;   
                res.write("<p>decimal érték: " + decimal + "</p>");
            }
        let hex = 0xf00d;
        var binary = 0b1010;
        let octal = 0o744;
        res.write("<p>decimal érték: " + decimal + "</p>");
        res.write("<p>hex érték: " + hex + "</p>");
        res.write("<p>binary érték: " + binary + "</p>");
        res.write("<p>octal érték: " + octal + "</p>");
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar//</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
