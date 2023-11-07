const shareButton = document.getElementById("share-button");
const hiddenSharePanel = document.querySelector(".share-panel-container");
const shareButtonClose = document.getElementById("share-button-close");

const OpenOrCloseSharePanel = () => {
    hiddenSharePanel.classList.toggle("hidden");
}

[shareButton, shareButtonClose].forEach((item => {
    item.addEventListener('click', (e) => {
        OpenOrCloseSharePanel();
    });
}))
