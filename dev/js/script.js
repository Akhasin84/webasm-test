var pushIt = document.getElementById("button");
var showBlock = document.getElementById("order");
console.log(pushIt);
console.log(showBlock);

pushIt.onclick = function(){
	if(showBlock.style.display == "none"){
		showBlock.style.display = "block";
	}else if(showBlock.style.display != "none"){
		showBlock.style.display = "none";
	};
};