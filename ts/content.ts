import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
    for(var i =0 ; i<5 ; i++){
       console.log(i) 
    }
    console.log(i) // i=5

    for(let i = 0; i<5;i++){
       console.log(i)
    }
    console.log(i)
        
        res.write("<a href='https://github.com/szikonyaattila/letvsvar/' target='_blank'>" +
            "https://github.com/szikonyaattila/letvsvar/</a><br>");
        res.end();
    }
}
