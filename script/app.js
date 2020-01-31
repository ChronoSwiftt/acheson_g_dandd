(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img");
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img')
		dropZones = document.querySelectorAll('.drop-zone')
		puzzleBoard = document.querySelector('.puzzle-board')

// store the images names here
const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

// functions go here => what we want tot have happen when our triggers fire
	function changeImageSet() {
		//change the thumbnail images on the left to match the button images
		pieces.forEach((piece, index) => {
			puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[index].id =`${piece + this.dataset.puzzleindex}`;
		});
		// and set a background image on the drop zone container
		//debugger;
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}

	function dragStart(event) {
		console.log('started a drag')

		// capture the id of the element we're dragging
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('you dragged something onto me')
	}

	function allowDrop(event) {
		console.log('you dropped something on me')

		let currentPiece = event.dataTransfer.getData("text/plain");

		event.target.appendChild(document.querySelector(`#${currentPiece}`));
	}

// add some event handling for the nav buttons
	navButtons.forEach(button => button.addEventListener("click",changeImageSet));

	// set up the drag event on our puzzle pieces

puzzlePiece.forEach(piece=>piece.addEventListener('dragstart', dragStart));

// set up a drag over event
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('dragover', allowDrop));

//call,apply and bind are different ways to invoke functions
// you should know what call does
changeImageSet.call(navButtons[0]);

})();
