const about = document.querySelector("#about");

export function aboutPage() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant About";
    heading.setAttribute("style", "color: white;")
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear previous content
    content.appendChild(heading);
}