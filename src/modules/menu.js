const home = document.querySelector("#home");

export function menuPage() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant Menu";
    heading.setAttribute("style", "color: white;")

    if (menu) {
        menu.addEventListener("click", () => {
            const content = document.querySelector("#content");
            content.innerHTML = ""; // Clear previous content
            content.appendChild(heading);
        });
    }
}
