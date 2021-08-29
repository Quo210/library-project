Changelog # 1
- Fixed bringForm() called twice on cancel button click event, which resulted in it not showing up.
- Created the currentBooks() so it's possible to check for the current numeric IDs taken by each book.
- Modified Book prototype creator so it assigns a numID
- Modified generate_Holder() so the classList for the p.read element is added upon creation, so appears colored the first time.
- Added changeColorOfRead() and changeReadStatus() that will alternate color and text content for the p.read element on each div.book-holder, thus the 'Button to change read status' is created.
- Added 3 Books to the pre-created table so the web page has a sample to show on start up.

Changelog # 2

- Modified Book constructor to generate a random number between 1 and 100, so chances of repeated IDs are reduced. Plan on creating a checker script to handle repetition.
- Fixed issues with the HTML. No longer has book-holder with information, all is generated from the DOM now.

Changelog # 3
- Fixed look4Equals() issue in Book constructor by using recursion.
- Added deleteBook() function, that deletes an element based on the data-key from where it originated.
- Added editButton() function that toggles the aspect for the delete button on each book, using the date slot in the 'card'
- Added Project's guidelines and configured Guidelines button.

Changelog # 4
- Added script oninput at the form > input > page numbers to only accept up to '999' as value.
- Configured CSS to make it look better. Added some extra classes to handle hidden items.
- Debugged one logic error when summoning Project Guidelines that made it remain in the overflow-y after being summoned the first time.

Changelog # 5
- Changed read status from true-false to Done-Pending
- Added conditional to page number text area so it doesn't allow floating point numbers.
- Improved looks on desktop
- Added link to personal repository in the footer
- Added other graphical modifications to polish aspect
- Added custom scrollbar for central list of books

LOG_6 28AUG2021
- Project requested to come back to this project and change the constructors to 'class' ones. Branched the original to start working.