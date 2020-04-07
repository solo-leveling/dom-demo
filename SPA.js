var studentForm = document.getElementById("createStudent");
var studentTable = document.getElementById('studentTable');

var addbtn = document.getElementById("addbtn");
var listbtn = document.getElementById('listbtn');

addbtn.addEventListener("click", function() {
    studentForm.style.display = "block";
    studentTable.style.display = "none";
    addbtn.classList.add('selected');
    listbtn.classList.remove('selected');
});

listbtn.addEventListener("click", function() {
    studentForm.style.display = "none";
    studentTable.style.display = "block";
    listbtn.classList.add('selected');
    addbtn.classList.remove('selected');
});