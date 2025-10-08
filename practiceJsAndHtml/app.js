const text = document.getElementById("text")
text.innerHTML = "Here is new text";

const button = document.getElementById("click-button");
button.addEventListener("click", () => {
    alert("Button clicked!");
    button.innerText = "I am clicked!";
});
