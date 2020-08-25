function openProject ( evt, projectName){
	var i, tabcontent, tablinks;

	//Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for ( i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	//Get all the elements with class="tablinks" and remove class="active"
	tablinks = document.getElementsByClassName("tablinks");
	for ( i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}

	//Show the current tab and add class="active" to it's button tab
	document.getElementById(projectName).style.display = "block";
	evt.currentTarget.classList.add("active");
}

document.getElementById("openDefault").click();