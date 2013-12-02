function selectLesson(lessonName)
{
	var code = prompt("Please enter Lesson Code","");
	if (code != null)
	{
		if (matchcode(code,lessonName))
		{
			// window.open("file://lesson1.html");	
			window.open(lessonName);	
		}
	}
}


function matchcode(code,lesson)
{
	if (code == "12345")
		return 1;
	else
		return 0;	
}


function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}