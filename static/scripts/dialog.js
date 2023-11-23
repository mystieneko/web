const dialogs = Array.from(document.querySelectorAll("dialog"));
const showButtons = Array.from(document.querySelectorAll("dialog + button"));
dialogs.forEach((dialog, index) => {
	const showButton = showButtons[index];
	const closeButton = dialog.querySelector("button");

	showButton.addEventListener("click", () => {
		dialog.showModal();
	});

	closeButton.addEventListener("click", () => {
		dialog.close();
	});
});