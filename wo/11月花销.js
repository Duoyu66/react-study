/**
 * @author: 百米八秒的Rapper
 * @date: 2022-10-28 20:03:03
 * @fileName : 11月花销  description: 【  】
 **/
let xingqi=4;//5
let shanban=26;//35
let n=1;
let sum=0;
for (let i = 1; i <=26 ; i++) {
    if (sum<100){
        sum+=12;
    }else if(sum>=100&&sum<150){
        sum+=12*0.8;
    }else{
        sum+=12*0.5;
    }
    console.log("第"+i+"天的总花费为"+sum)
}
let a=228;
let k=a+120;
console.log(k)
