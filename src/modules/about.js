const home = document.querySelector("#home");

export function aboutPage() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant About Us";
    heading.setAttribute("style", "color: white;")

    if (about) {
        about.addEventListener("click", () => {
            const content = document.querySelector("#content");
            content.innerHTML = ""; // Clear previous content
            content.appendChild(heading);
        });
    }
}
