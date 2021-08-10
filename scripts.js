
let myLibrary = [];
let editBoolean = false;
let guideBoolean = false;

const ref_ListDiv = document.querySelector('div#listDiv');
const ref_mainButtonsArr = Array.from( document.querySelectorAll('button.BTN'));
const ref_addButton = ref_mainButtonsArr[0];
const ref_formDiv = document.querySelector('div#form');
const ref_formCancelBtn = document.querySelector('input[value="Cancel"]')
const ref_textAreasArr = Array.from( document.querySelectorAll('input[type="text"],input[type="number"]') );
const ref_formButtons = document.querySelectorAll('input[type="button"]')
const ref_deleteBTN = ref_mainButtonsArr[1];
const ref_guideBTN = ref_mainButtonsArr[2];
const ref_guideDiv = document.querySelector('div#guidelines');



function currentBooks(){
    let books = Array.from(document.querySelectorAll(`div.book-holder`))
    return books.map(element => {return element.getAttribute('data-key')})
};

function genRandom() {
    return (Math.floor( Math.random() * 100 ) + 1).toString()
}

function Book(title = 'Unknown name',author = 'Unknown writer',pages = '?',read) {
    let creationDate = new Date().toLocaleDateString();

    let genNumID = genRandom();
    let takenIDs = currentBooks(); // Returns Array of data-keys for querySelector div.book-holder
    
    const look4Equals = () => { 
        if (takenIDs.includes(genNumID) ===  true) {
            genNumID = genRandom();
            console.log(`Due to repetition ${genNumID} was just generated.`);
            look4Equals();
        } else { console.log(`Unique ID ${genNumID} generated!`) }
    } 

    look4Equals()

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.date = creationDate,
    this.numID = genNumID,
    this.report = () => {
        const readBoolean = () => {
            return this.read = true? 'has been read already' : 'has not been read';
        }
        return `The book is known as ${title} and was written by ${author}, this version has ${pages} pages. So far this book ${readBoolean()}.`
    }

}

function userInput4Book() {
    let bkTitle = ref_textAreasArr[0].value;
    if (bkTitle == '') bkTitle = undefined;
    let bkAuthor = ref_textAreasArr[1].value;
    if (bkAuthor == '') bkAuthor = undefined;
    let bkPages = ref_textAreasArr[2].value;
    if (bkPages == '') bkPages = undefined;
    if (bkTitle == undefined && bkAuthor == undefined) {
        alert("There's too little information. Try again by writing either the book's title or the author's name.")
        return
    }
    let bkRead = () => {
        let checkBoxStatus = document.querySelector('input[name="read"]').checked;
        return (checkBoxStatus === true)? true : false; 
    }
    
    let generatedBk = addNewBook(bkTitle,bkAuthor,bkPages,bkRead());
    generateHolder(generatedBk);
    bringForm();
    resetForm();

}

function addNewBook(title = 'Unknown name',author = 'Unknown writer',pages = '?',read) {
    let createBook = new Book(title,author,pages,read);
    myLibrary.push(createBook);
    return createBook;
}

function generateList() {
    const totalBooks = myLibrary.length;
    for (let i = 0; i < totalBooks; i++) {
        let currentIndex = myLibrary[i];
        generateHolder(currentIndex);
    }
}

function globalListenerSetter() {
    ref_addButton.addEventListener('click',bringForm);
    ref_formButtons[0].addEventListener('click',userInput4Book)
    ref_formCancelBtn.addEventListener('click',cancelInput)
    ref_deleteBTN.addEventListener('click',editButton)
    ref_guideBTN.addEventListener('click',showGuideLines);
}

function classtoTextAreas() {
    ref_textAreasArr.forEach(element => {
        element.classList.add('better-area')
    })
}

function generateHolder(book) {
    let newHolder = document.createElement('div');
    let newTitleDiv = document.createElement('div');
    let newStatsDiv = document.createElement('div');
    let pDate = document.createElement('p');
    let pTitle = document.createElement('p');
    let pAuthor = document.createElement('p');
    let pRead = document.createElement('p');
    newTitleDiv.appendChild(pDate);
    newTitleDiv.appendChild(pTitle);
    newStatsDiv.appendChild(pAuthor);
    newStatsDiv.appendChild(pRead);
    newHolder.appendChild(newTitleDiv);
    newHolder.appendChild(newStatsDiv);
    newHolder.classList.add('book-holder');
    newTitleDiv.classList.add('titleDiv');
    newStatsDiv.classList.add('statsDiv');
    pDate.classList.add('date');
    pTitle.classList.add('title');
    pAuthor.classList.add('author');
    pRead.classList.add('read');

    let currentObj = book;
    newHolder.setAttribute('data-key',`${book.numID}`)
    pRead.addEventListener('click',changeColorOfRead);
    pDate.textContent = currentObj.date;
    pTitle.textContent = currentObj.title;
    pAuthor.textContent = `By: ${currentObj.author}, ${currentObj.pages} pages`;
    pRead.textContent = currentObj.read;
    
        (pRead.textContent == 'true')? 
        pRead.classList.add('yesread'): 
        pRead.classList.add('notread');

    ref_ListDiv.appendChild(newHolder);
}

function cancelInput() {
    resetForm();
    bringForm();
}

function resetForm() {
    ref_textAreasArr.forEach(element => {
        element.value = ''
    });
    document.querySelector('input[name="read"]').checked = false;
}

function bringForm() {
    
    if (ref_formDiv.style.visibility == 'visible') {
        ref_formDiv.style.visibility = 'hidden'
        console.log('Form Hidden')
    } else if (ref_formDiv.style.visibility == 'hidden') {
        ref_formDiv.style.visibility = 'visible'
        console.log('Form Visible')
    }
}

function localizeBook(dataKey) {
    return myLibrary.filter((book) => book.numID == dataKey ) }


function changeColorOfRead() {
    const dataKey = this.parentElement.parentElement.getAttribute('data-key');
    const pElement = document.querySelector(`div[data-key="${dataKey}"] > div.statsDiv  > p.read`);
    
    let bookClicked = localizeBook(dataKey);

    changeReadStatus(bookClicked[0],pElement)
    const currentStatus = this.textContent;

    if (currentStatus == 'false') {
        this.classList.remove('yesread')
        this.classList.add('notread')
    } else {
        this.classList.remove('notread')
        this.classList.add('yesread')
    }

}

function changeReadStatus(book,pRef) {
    let theBook = book;
    console.log(theBook.read)
    let status = book.read;
    let paraText = pRef;

    if(status == true) {
        book.read = false, paraText.textContent = 'false'
    } else if (status == false) {
        book.read = true, paraText.textContent = 'true'
    }
    
}

function deleteBook() {
    const dataKey = this.parentElement.parentElement.getAttribute('data-key');
    const pElement = document.querySelector(`div[data-key="${dataKey}"] > div.titleDiv  > p.date`);

    let bookClicked = localizeBook(dataKey);
    let bookID = bookClicked[0].numID; 
    let indexPosition = myLibrary.indexOf(bookClicked[0])
    let newArray = myLibrary.filter( (book) => { return book.numID != bookID});
    const annihilateHolder = () => {
        pElement.parentElement.parentElement.parentElement.removeChild(document.querySelector(`div[data-key="${dataKey}"]`))
    }
    annihilateHolder();
    myLibrary = newArray;
    
    return myLibrary    
}

function editButton() {
    const dateBtns = Array.from( document.querySelectorAll('p.date') );

    if(editBoolean === false) {
        dateBtns.forEach(element => {
            element.classList.add('deletion')
            element.addEventListener('click',deleteBook)
        })
        editBoolean = true;
    } else {
        dateBtns.forEach(element => {
            element.classList.remove('deletion')
            element.removeEventListener('click',deleteBook)
        })
        editBoolean = false;
    }
}

function showGuideLines() {
    const x = ref_guideDiv;
    
    if (guideBoolean === false) {
        x.classList.remove('hidden')
        x.classList.add('guidelines')
        guideBoolean = true;
    } else {
        x.classList.remove('guidelines');
        x.classList.add('hidden')
        guideBoolean = false;
    }
    
}

function checkLength(object) {
    if(object.value.length > 3) {
        object.value = 999;
    }
}

// Script initialization Zone

globalListenerSetter()
classtoTextAreas()
addNewBook('Dune','Frank Herbert',444,false)
generateHolder(myLibrary[0]);
addNewBook('The Three Body Problem','Cixin Liu',302,true);
generateHolder(myLibrary[1]);
addNewBook('Beyond Order','Jordan Peterson',432,true);
generateHolder(myLibrary[2]);
ref_formDiv.style.visibility = 'hidden';