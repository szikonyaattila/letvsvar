import * as http from "http";

export default class Content {

    function varTest() {
        var x = 31;
        if (true) {
            var x = 71;  // ugyanaz a változó!
            alert(x);  // 71
        }
        alert(x);  // 71
    }
    function letTest() {   
        let x = 31;   
        if (true) {   
            let x = 71;  // másik változó   
            alert(x);  // 71   
        }   
            alert(x);  // 31   
    }

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/szikonyaattila/letvsvar' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar</a><br>");
        res.end();
    }
}
