"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Boolean adattípus csak true vagy false-szal tér vissza</h1>");
        let isDone = false;
        res.write("<p>Logikai érték: " + isDone + "</p>");
        res.write("<h1 style='color: red;'>number adattípus amivel különböző számrendszer számait is el tudjuk tárolni példa: </h1>");
        let decimal = 6;
        let hex = 0xf00d;
        let binary = 0b1010;
        let octal = 0o744;
        res.write("<p>decimal érték: " + decimal + "</p>");
        res.write("<p>hex érték: " + hex + "</p>");
        res.write("<p>binary érték: " + binary + "</p>");
        res.write("<p>octal érték: " + octal + "</p>");
        res.write("<h1 style='color: red;'>string adattípus amivel képes az ember szöveget eltárolni így:</h1>");
        let color = "blue";
        res.write("<p>String érték: " + color + "</p>");
        res.write("<a href='https://github.com/Spirit92hun/beadando/' target='_blank'>" +
            "https://github.com/Spirit92hun/beadando/</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map