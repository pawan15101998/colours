var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')
var pannel = document.querySelector('.pannel')
var sidepannel = document.querySelector('.sidepannel')
var button = document.querySelector('button')
var input = document.querySelectorAll('input')

var colorVal ;
temp =``
var arr= []




button.addEventListener('click', function(){
          colorVal = `rgba(${red.value}, ${green.value}, ${blue.value})`
          pannel.style.backgroundColor = colorVal
          // console.log(colorVal)
          input.textContent = '';
          })




pannel.addEventListener('click' ,function(){
     if(colorVal == undefined){}
     else{
          // arr.push(colorVal)
          if(arr.indexOf(colorVal) == -1){
               arr.push(colorVal)
               temp += `<div class="ball" style="background-color:${colorVal} ;"></div>`
               sidepannel.innerHTML = temp
               console.log(temp)
          }
          else{}
          }
})