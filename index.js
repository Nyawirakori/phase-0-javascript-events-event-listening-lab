// Define the function
function addingEventListener() {
    // Select the button (modify if it's another element)
    const input = document.getElementById("button");

    // Add an event listener to handle clicks
    input.addEventListener("click", function () {
        alert("I was clicked!");
    });
}
console.log(addingEventListener());