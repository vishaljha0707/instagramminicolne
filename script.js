var btn = document.querySelector("#btn");
var str = document.querySelector("#str");
var love = document.querySelector("#love");
var image = document.querySelector("#center");


image.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)'

    setTimeout(()=>{
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000);
})



  
var check = 0;
btn.addEventListener("click",function(){
   if(check==0){
    str.innerHTML=`friend`
    str.style.color = "blue";
    btn.innerHTML=`Remove Friend`
    check += 1;
  
   }
   else{
    str.innerHTML=`Stranger`
    str.style.color = "red";
    btn.innerHTML=`Add Friend`
    check =0
   }
    
})




