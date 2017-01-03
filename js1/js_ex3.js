var score=82;

if(score >= 90){console.log('A');}
else if(score>=80){console.log('B');}
else if(score>=70){console.log('C');}
else {console.log('D');}

//1. score 출력부터 
//2. if 문 작성 
//3. if 오류 풀기
//4. A 출력해보기
//5. 90~100점 A
//6. 80~89점  B
//7. 70~79점  C
//8. 60~69점  D

// and = && , or = ||, not = !

var a = 10;
var b = 90;
var c = 40;

if(a>=b&&a>=c){console.log('a',a)}
else if(b>=a&&b>=c){console.log('b',b)}
else if(c>=a&&c>=b){console.log('c',c)}


//switch 문제
var score=85;

switch(Math.floor(score/10)){
    case 10:
        console.log('A');
        break;
    case 9:
        console.log('A');
        break;    
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;    
   
    default:
        console.log('D');
        break; 
}