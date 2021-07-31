//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constructor
function Display() {}

// add methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding to UI");

 let  tableBody = document.getElementById("tableBody");

  let UiString = `  <tr>
    <th scope="row">1</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>
    `;
  tableBody.innerHTML += UiString;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate=function(book){
  if(book.name.length<2|| book.author.length<2){
      return false;
  }
  else{
      return true;
  }
}
Display.prototype.show=function(type,displayMessage){
    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong>  ${displayMessage} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
       setTimeout(function(){
           message.innerHTML="";
       }, 2000);
}


// add submit event listener to libraryform
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let type;

  let database = document.getElementById("database");
  let programming = document.getElementById("programming");
  let structure = document.getElementById("structure");

  if (database.checked) {
    type = database.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (structure.checked) {
    type = structure.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success","Your Book has been submitted...");
  } else {
    display.show("danger ","Sorry you can not Add this Book...");
  }

  e.preventDefault();
}
