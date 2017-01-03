//100부터 1까지 거꾸로 찍기

for(i=100;i>0;i--){
    console.log(i);
}

/*
*
**
***
****
*****
별모양 만들기

for(var i=0;i<5;i++){
   if(i=1){console.log('*'+'/br');}
}

*/
  var result ='';
  for(var i=0;i<5;i++){ 
   result +='*'      
   console.log(result); 
}

// 반대는 어떻게?
 var result ='*';
  for(var i=0;i<5;i++){ 
   result =>'*'      
   console.log(result); 
}
   
