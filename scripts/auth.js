function selectLesson(lessonName)
{
	console.log(lessonName);
	var code = prompt("Please enter Lesson Code","");
	console.log(code);
	if (code != null)
	{
		if (matchcode(code,lessonName))
		{
			window.location.href = getLinkForLesson(lessonName);
		}
		else
		{
			window.location.href = "html/wrongPassword.html";
			alert("Wrong Password");
		}
	}
}

function matchcode(code,lesson)
{
	console.log(code,lesson);
	var hash = CryptoJS.SHA1(code);
	console.log(hash);
	if (hash == getHashForLesson(lesson))
	{
		console.log("Code Passed");
		return 1;
	}
	else
	{
		console.log("Code Failed");
		return 0;	
	}
}


var LookUpTable = 
{
	lessonName: 
	["lesson1",
	"lesson2",
	"lesson3",
	"lesson4",
	"lesson5",
	"lessonAsal"],
	hash : 
	["222df7d8062fe3f0c2c2301cf093c33a9b37171b",
	"2d0918528f99c17a7e2c8f7b2bb8f7a60464b110",
	"de4209a9630ebdcea593579738da3ad65c1a2dd8",
	"9951d48020a46ff38de2d34b1136845f23a5d76c",
	"6b65d663a8c7b38cb59d1cf2ddfb8c9e3139f008",
	"de4209a9630ebdcea593579738da3ad65c1a2dd8"],
	
	link: 
	["html/lesson1/lesson1.html",
	"html/lesson2/lesson2.html",
	"html/lesson3/lesson3.html",
	"html/lesson1/lesson1.html",
	"html/lesson1/lesson1.html",
	"./asal/mushtaq/mubalga.html"]
}

function getHashForLesson(lesson)
{
	var index = LookUpTable.lessonName.indexOf(lesson);
	console.log(index);
	return LookUpTable.hash[index]
}

function getLinkForLesson(lesson)
{
	var index = LookUpTable.lessonName.indexOf(lesson);
	return LookUpTable.link[index]
}

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

function resolveSrcMouseover(e) {
				var node = e.srcElement == undefined ? e.target : e.srcElement;
				if (node.nodeName != "UL") {
					node.style.fontWeight= "bold";
					showRollover(e, node.innerHTML);
				}
			}
			
function resolveSrcMouseout(e) {
	var node = e.srcElement == undefined ? e.target : e.srcElement;
	node.style.fontWeight = "normal";
	clearRollover(e);
}

function takeAction(e) {
	var node = e.srcElement == undefined ? e.target : e.srcElement;
	document.getElementById("DisplayInfo").innerHTML = "Clicked " + node.innerHTML;
	var id = node.getAttribute("id"); 
	if (id != null && id.indexOf("Folder") > -1) {
		if (node.innerHTML == "-") {
			node.innerHTML = "+";
			document.getElementById("ExpandCollapse" + id).style.display = "none";
		} else if (node.innerHTML == "+") {
			node.innerHTML = "-";
			document.getElementById("ExpandCollapse" + id).style.display = "block";
		}
	}
}
