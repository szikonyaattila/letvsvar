"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            var x = 31;
            if (true) {
                var x = 71; 
                alert(x);  
                res.write("<p>hex érték: " + x + "</p>");
            }
            alert(x); 
            res.write("<p>hex érték: " + x + "</p>");
        
            let x = 31;   
            if (true) {   
                let x = 71; 
                alert(x); 
                res.write("<p>hex érték: " + x + "</p>");   
            }   
                alert(x); 
                res.write("<p>hex érték: " + x + "</p>");   
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar//</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
