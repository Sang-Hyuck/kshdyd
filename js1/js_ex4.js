//for(시작변수;조건식;증감식){}

var t=3;
    console.log(t++); // 다음줄로 넘어간후 값이증가됨  3
    console.log(++t); // 다음 줄로 넘어가기전에 더해짐 4+1 = 5 
    console.log(t++); // 5
    console.log(++t); // 7

for(var i=0; i<10; i++) {
    console.log(i);
    console.log(++i+'0');
}

// 문제
for(var i=0;i<30;i++){console.log("김동주란 사람은 정말 멋지다.");}

var result =0;
for(var i=1; i<=100; i++){
    result += i;
}
    console.log(result);

var result =0;
for(var i=100; i>0; i--){
    result += i;
}
    console.log(result);

// 발상 전환필요 







for(var i=2;i<10;i++) {
    for(var a=1;a<10;a++) {
        console.log(i+'*'+a+'='+(a*i));
    }
}

for(var i=1;i<10;i++) {
    for(var a=1;a<10;a++) {
        for(var x=1;x<10;x++) {
            console.log(i+'X'+a+'X'+x+'='+(i*a*x));

        }
    }
}
// for 문은 안쪽부터 계산됨  i+a+x x부터 1씩증가 , 그다음 a  그다음 i 순서로 계산됨


//짝수합?
var result =0;
for(var i=1;i<=100;++i){
    result+=++i
}
console.log(result);

//2배수 짝수합
var result = 0;
for(var j=0;j<=100;j+=2){
    result+=j;
}
console.log(result);

//홀수 합
var result = 0;
for(var j=1;j<=100;j+=2){
    result+=j;
}
console.log(result);

