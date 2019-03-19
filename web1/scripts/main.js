let myHead = document.querySelector('h1')
myHead.textContent='hello world'
let imgSrc = document.querySelector('img');
imgSrc.onclick=function(){
    let mySrc = imgSrc.getAttribute('src')
    if(mySrc === './images/firefox1.png'){
        imgSrc.setAttribute('src','./images/firefox2.png')
    }else{
        imgSrc.setAttribute('src','./images/firefox1.png')
    }
}


function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = ()=>setUserName;;