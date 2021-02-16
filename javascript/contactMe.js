function Submitting() {
	var empt = document.cform.name.value;
	var empt2 = document.cform.surname.value;
	var empt3 = document.cform.email.value;
	var empt4 = document.cform.subject.value;
	
	if (empt == "")
	{
	alert("Please fill in your name!");
}
	if (empt2 == "")
	{
	alert("Please fill in your surname!");
}
	if (empt3 == "")
	{
	alert("Please fill in your email!");
}
	if (empt4 == "")
	{
	alert("Please fill out the subject!");
}
	


	if (empt != "" && empt2 != "" && empt3 != "" && empt4 != "") {
	alert("Your data has been submitted!")
	
}
}

