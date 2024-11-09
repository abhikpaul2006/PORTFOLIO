// Example script to add a simple interaction (like a greeting based on time of day)
document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.createElement("p");
    const currentHour = new Date().getHours();
    let greetingMessage = "";

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.textContent = greetingMessage;
    document.querySelector("header").appendChild(greetingElement);
});
