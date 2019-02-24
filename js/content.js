import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

      
        function varTest() {
            var x = 31;
            if (true) {
                var x = 71;  // ugyanaz a változó!
                alert(x);  // 71
                res.write("<p>"+ x +"</p>");
            }
            alert(x);  // 71
            res.write("<p>"+ x +"</p>");
        }
        function letTest() {   
            let x = 31;   
            if (true) {   
                let x = 71;  // másik változó   
                alert(x); // 71 
                res.write("<p>"+ x +"</p>");   
            }   
                alert(x);  // 31
                res.write("<p>"+ x +"</p>");   
        }

        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar/</a><br>");
        res.end();
    }
}
