"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        res.write("<h1>Egy változó létre hozása var-al és változtatása varral</h1>");
        var a = 31;
        res.write("<p>A változó értéke: " + a + "</p>");
        if(true)
        {
            var a = 33;
            res.write("<p>A változó értéke amit egy if-ben módosítunk: " + a + "</p>");
        }
        res.write("<p>A változó értéke az if után: " + a + "</p>");
        
        res.write("<h1>Egy változó létre hozása let-tel és változtatása lettel</h1>");
        let b =32;
        res.write("<p>A változó értéke: " + b + "</p>");
        if(true)
        {
            let b = 33;
            res.write("<p>A változó értéke amit egy if-ben módosítunk: " + b + "</p>");
        }
        res.write("<p>A változó értéke if után: " + b + "</p>");
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar/</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
