var pushIt=document.getElementById("button"),showBlock=document.getElementById("order");console.log(pushIt),console.log(showBlock),pushIt.onclick=function(){"none"==showBlock.style.display?showBlock.style.display="block":"none"!=showBlock.style.display&&(showBlock.style.display="none")};