const axios=require("axios");
//const tress=require("tress");
const url="https://www.zdorovieinfo.ru/";
let count=100;
//let resultLinks=[];

  axios.get(url).then(response => {
    let res = response.data;
    var pt = /<a(.*?)href=\"(.*?)"(.*?)>(.*?)<\/a>/g;
    pt = new RegExp(pt);
    let found = [...res.matchAll(pt)];
    let resultLinks=[];
    resultLinks[url]=[];
    for (let i = 0; i < found.length; i++) {
      if (!resultLinks[url].includes(found[i][2])) {
        count--;
        resultLinks[url].push(found[i][2]);

      }
      //if(count==0) break;
    }
    console.log(resultLinks[url]);

  }).catch(error => {
    console.log(error);
  });






