//const http = require("http");
const axios=require("axios");
//const tress=require("tress");
const url="https://www.zdorovieinfo.ru/";
//const url="https://www.zdorovieinfo.ru/digestion/stati-digestion/takie-raznye-blokatory-kakie-preparaty-propisyvayut-pri-izzhoge/";
let count=200;
let resultLinks=[];
let rootLink='https://www.zdorovieinfo.ru';

function getLinks(url) {
  if(count==0) return resultLinks;
  axios.get(url).then(response => {
    let res = response.data;
    var pt = /<a(.*?)href=\"(.*?)"(.*?)>(.*?)<\/a>/g;
    pt = new RegExp(pt);
    let found = [...res.matchAll(pt)];
    for (let i = 0; i < found.length; i++) {
      if (!resultLinks.includes(found[i][2])) {
        //if(true){
        if(found[i][2][0]=='/'){
          found[i][2]=rootLink+found[i][2];
        }
        count--;
        resultLinks.push(found[i][2]);
        console.log(count);
        console.log(found[i][2]);

        getLinks(found[i][2]);
      }
      if(count==0) return resultLinks;
    }

  }).catch(error => {
    console.log(error);
  });
  //return resultLinks
}

console.log(getLinks(url))

