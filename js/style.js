//start index.html
function buttonClick() {
  document.getElementById("demo").innerHTML = "Hello World!";
}

function buttonRemove() {
  document.getElementById("demo").style.display = "none";
}
//end index.html

// start komentar.html
function comment1Function() {
  document.getElementById("comment1").innerHTML = "// ini adalah komentar 1 baris";
}
function removeComment1() {
  document.getElementById("comment1").style.display = "none";
}
function comment2Function() {
  document.getElementById("comment2").innerHTML = "/**/ ini adalah komentar lebih dari 1 baris";
}
function removeComment2() {
  document.getElementById("comment2").style.display = "none";
}
// end komentar.html

// start variabel.html
function buttonVar() {
  document.getElementById("var").innerHTML = "Varibel var adalah variabel yang nilai nya bisa diubah-ubah";
}

function buttonLet() {
  document.getElementById("let").innerHTML = "sama seperti var tetapi lebih terbaru semenjak 2015";
}

function buttonConst() {
  document.getElementById("const").innerHTML = "<i>! ups maaf variabel const tidak bisa diubah nilai nya karne bersifat tetap</i>";
}
// end variabel.html

// start operatorPerbandingan.html
function SamaDengan() {
  let result = 5 == "5";
  document.getElementById("samadengan").innerHTML = result;
}

function RemoveSamaDengan() {
  document.getElementById("samadengan").style.display = "none";
}

function SamaDengan2() {
  let result = 5 === "5";
  document.getElementById("samadengan2").innerHTML = result;
}

function RemoveSamaDengan2() {
  document.getElementById("samadengan2").style.display = "none";
}

function LebihBesar() {
  let result = 5 > 10;
  document.getElementById("lebihbesar").innerHTML = result;
}

function RemoveLebihBesar() {
  document.getElementById("lebihbesar").style.display = "none";
}

function LebihKecil() {
  let result = 5 < 10;
  document.getElementById("lebihkecil").innerHTML = result;
}

function RemoveLebihKecil() {
  document.getElementById("lebihkecil").style.display = "none";
}

// end operatorPerbandingan.html
