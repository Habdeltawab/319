$(document).ready(function() {
    initBooks();
    var user = localStorage.getItem('ID');
    var numBor = 0;
    if (user == "admin") {
        document.getElementById("toAdd").innerHTML =
            "<form style=\"margin-top:20px\">" +
            "    <input type=\"text\" placeholder=\"Book Name\" id=\"bookName\" name=\"bookName\" />" +
            "    <input type=\"text\" placeholder=\"Shelf\" id=\"bookShelf\" name=\"bookShelf\" />" +
            "    <input type=\"submit\" value=\"Add Book\" id=\"addButton\" />" +
            "</form>";
    } else if (user == "undergrad") {

        $(".toBorrow").click(function() {
            var items = document.querySelectorAll('.toBorrow');

            [].forEach.call(items, function(item) {

                var text = item.textContent.trim().toLowerCase();

                item.addEventListener('click', function() {
                    for (i = 0; i < books.length; i++) {
                      if(numBor < 2){
                        if (text == books[i].bookName) {
                          if(books[i].borrowedBy != ""){
                            numBor--;
                            $('#' + books[i].bookID).css({"background-color": "white"});
                            books[i].borrowedBy = "";
                          } else {
                            books[i].borrowedBy = localStorage.getItem('username');
                            $('#' + books[i].bookID).css({"background-color": "red"});
                            numBor++;
                        }
                      }
                      }else {
                        if (text == books[i].bookName){
                            if(books[i].borrowedBy != ""){
                              numBor--;
                              $('#' + books[i].bookID).css({"background-color": "white"});
                              books[i].borrowedBy = "";
                            }
                        }
                      }
                    }
                });
            });
        })


    }
    $("#addButton").click(function(e) {
        e.preventDefault();
        var b = new Book($("#bookName").val(), $("#bookShelf").val());
        console.log(b.bookName + " " + b.shelf);
        books.push(b);
        addBook(b);
    });

});

var books = [];

function Book(bookName, shelf) {
    this.bookName = bookName;
    this.shelf = shelf.toLowerCase();
    this.bookID = idGen(shelf);
    this.borrowedBy = "";
    this.availability = 1;
};

function Shelf() {};

function idGen(shelf) {
    id = Math.floor((Math.random() * 896) + 100);
    if (shelf.toLowerCase() == "art") {
        while (id % 4 != 0) {
            id++;
        }
    } else if (shelf.toLowerCase() == "science") {
        while (id % 4 != 1) {
            id++;
        }
    } else if (shelf.toLowerCase() == "sport") {
        while (id % 4 != 2) {
            id++;
        }
    } else if (shelf.toLowerCase() == "literature") {
        while (id % 4 != 3) {
            id++;
        }
    }
    for (i = 0; i < books.length; i++) {
        if (books[i].bookID == id) {
            id += 4;
            i = -1;
        }
    }
    console.log("Book ID is: " + id);
    return id;
};

function addBook(book) {

    if (book.shelf.toLowerCase() == "art") {
        console.log(book.shelf);
        $("#art").append('<td class="toBorrow" id = "' + book.bookID + '">' + book.bookName + '</td>');
    } else if (book.shelf.toLowerCase() == "science") {
        console.log(book.shelf);
        $("#science").append('<td class="toBorrow"   id = "' + book.bookID + '">' + book.bookName + '</td>');
    } else if (book.shelf.toLowerCase() == "sport") {
        console.log(book.shelf);
        $("#sport").append('<td class="toBorrow"  id = "' + book.bookID + '">' + book.bookName + '</td>');
    } else if (book.shelf.toLowerCase() == "literature") {
        console.log(book.shelf);
        $("#literature").append('<td class="toBorrow" id = "' + book.bookID + '">' + book.bookName + '</td>');
    }
};

function initBooks() {
    books.push(new Book('b1', 'art'));
    books.push(new Book('b2', 'science'));
    books.push(new Book('b3', 'sport'));
    books.push(new Book('b4', 'literature'));
    books.push(new Book('b5', 'art'));
    books.push(new Book('b6', 'science'));
    books.push(new Book('b7', 'sport'));
    books.push(new Book('b8', 'literature'));
    books.push(new Book('b9', 'art'));
    books.push(new Book('b10', 'science'));
    books.push(new Book('b11', 'sport'));
    books.push(new Book('b12', 'literature'));
    books.push(new Book('b13', 'art'));
    books.push(new Book('b14', 'science'));
    books.push(new Book('b15', 'sport'));
    books.push(new Book('b16', 'literature'));
    books.push(new Book('b17', 'art'));
    books.push(new Book('b18', 'science'));
    books.push(new Book('b19', 'sport'));
    books.push(new Book('b20', 'literature'));
    books.push(new Book('b21', 'art'));
    books.push(new Book('b22', 'science'));
    books.push(new Book('b23', 'sport'));
    books.push(new Book('b24', 'literature'));
    books.push(new Book('b25', 'art'));
    for (i = 0; i < books.length; i++) {
        addBook(books[i]);
    }
};
