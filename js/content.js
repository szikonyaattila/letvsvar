"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        function varTest() {
            var x = 31;
            if (true) {
                var x = 71; 
                alert(x);  
                res.write("<p>"+ x +"</p>");
            }
            alert(x);
            res.write("<p>"+ x +"</p>");
        }
        function letTest() {   
            let x = 31;   
            if (true) {   
                let x = 71; 
                alert(x);  
                res.write("<p>"+ x +"</p>");   
            }   
                alert(x);
                res.write("<p>"+ x +"</p>");   
        }    
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar/</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map

