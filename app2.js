const axios=require("axios");
//const tress=require("tress");
const url="https://www.zdorovieinfo.ru/";
let count=100;
let resultLinks=[];

function setTree(url){

  if(count==0) return;
  axios.get(url).then(response => {
    let res = response.data;
    var pt = /<a(.*?)href=\"(.*?)"(.*?)>(.*?)<\/a>/g;
    pt = new RegExp(pt);
    let found = [...res.matchAll(pt)];

    resultLinks[url]=[];
    for (let i = 0; i < found.length; i++) {
      if (!resultLinks[url].includes(found[i][2])) {
        resultLinks[url].push(found[i][2]);
        count--;
        if(count==0) {console.log(resultLinks);return;}
        //setTree(found[i][2]);
      }

    }

  }).catch(error => {
    console.log(error);
  });
}
setTree(url);







