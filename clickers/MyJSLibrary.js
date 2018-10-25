function ShowMessage() {
	newwin = window.open("JS6.html", "win","menubar=no,scrollbars=yes,width=400,height=500,location=no,resizable=yes")
    newwin.focus()
    setTimeout("newwin.close()",5000)
}