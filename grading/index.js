function markinexams() {
let marks= document.getElementById("makinput").value;
let mark = parseInt(marks);
let text;
if(mark > 79) {
text = "You got an A"
}
else if(mark > 60 && mark < 79) {
text = "You got a B"
}
else if(mark > 49 && mark < 59) {
text = "You got a C"
}
else if(mark > 40 && mark < 49) {
text = "You got a D"
}
else if(mark < 40 ) {
text = "You got an E"
}
let graded = document.getElementById("result");
graded.textContent = "grading;" +text;
}
