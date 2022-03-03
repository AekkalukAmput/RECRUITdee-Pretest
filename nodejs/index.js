import fetch from "node-fetch";
import HtmlTableToJson from 'html-table-to-json';

// console.log("start");
const url = 'https://codequiz.azurewebsites.net';
const options = {
    headers: {
        cookie: 'hasCookie=true'
    },
    method: 'GET'
}
try {
    var arg = process.argv.slice(2);
    await fetch(url, options)
        .then((res) => {
            return res.text()
        })
        .then((text) => {
            const cvT2JS = HtmlTableToJson.parse(text);
            const jsonArr = cvT2JS.results[0];
            const objFil = jsonArr.find(x => x['Fund Name'] == arg)
            if (objFil != undefined || objFil != null) {
                console.log(objFil['Nav']);
            } else {
                console.log("No Data");
            }
        });
} catch (error) {
    // console.log(error);
}