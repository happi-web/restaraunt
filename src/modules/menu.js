const menu = document.querySelector("#menu");

export function menuPage() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant Menu";
    heading.setAttribute("style", "color: white;")
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear previous content
    content.appendChild(heading);
}
