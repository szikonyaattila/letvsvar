"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        let a = 31;
        let b = true;
        if (a>1) 
        {
               let x = 71;   
               res.write("<p>a érték:"+ x +"</p>");
        }
        res.write("<p>a érték:"+ x +"</p>");
        let a = 31;
        if (a>1) 
        {
               let x = 71;   
               res.write("<p>a érték:"+ x +"</p>");
        }
        res.write("<p>a érték:"+ x +"</p>");
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar//</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
