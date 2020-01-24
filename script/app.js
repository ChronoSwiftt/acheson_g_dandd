(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	let navButtons = document.querySelectorAll("buttonHolder img");

// functions go here => what we want tot have happen when our triggers fire
	function changeImageSet() {
		//change the thumbnail images on the left to match the button images
		// and set a background image on the drop zone container
		debugger;
	}

// add some event handling for the nav buttons
	navButtons.forEach(button => button.addEventListener("click",changeImageSet))

})();
