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