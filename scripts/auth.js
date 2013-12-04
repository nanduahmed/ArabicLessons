function selectLesson(lessonName)
{
	var code = prompt("Please enter Lesson Code","");
	if (code != null)
	{
		if (matchcode(code,lessonName))
		{
			window.location.href = getLinkForLesson(lessonName);
		}
		else
		{
			window.location.href = "html/wrongPassword.html";
		}
	}
}

function matchcode(code,lesson)
{
	var hash = CryptoJS.SHA1(code);
	if (hash == getHashForLesson(lesson))
		return 1;
	else
		return 0;	
}


var LookUpTable = 
{
	lessonName: 
	["lesson1",
	"lesson2",
	"lesson3",
	"lesson4",
	"lesson5"],
	hash : 
	["222df7d8062fe3f0c2c2301cf093c33a9b37171b",
	"2d0918528f99c17a7e2c8f7b2bb8f7a60464b110",
	"de4209a9630ebdcea593579738da3ad65c1a2dd8",
	"9951d48020a46ff38de2d34b1136845f23a5d76c",
	"6b65d663a8c7b38cb59d1cf2ddfb8c9e3139f008"],
	
	link: 
	["html/lesson1/lesson1.html",
	"html/lesson2/lesson2.html",
	"html/lesson1/lesson1.html",
	"html/lesson1/lesson1.html",
	"html/lesson1/lesson1.html",]
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