import nshimaImg from "../nshima.webp";

export function homePage() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear existing content

    const heading = document.createElement("h1");
    const nshimaImage = document.createElement("img");
    const description = document.createElement("p");

    nshimaImage.src = nshimaImg;
    nshimaImage.style.cssText = "position: absolute; width:40%; height:auto; object-fit: contain; top:20%; left:25%; right:25%;";

    heading.textContent = "Welcome to Our Restaurant";
    heading.style.cssText = "position: absolute; top:10%; left:20%; right:20%; font-size:3.5rem; color: white;";

    description.textContent = "Enjoy the finest traditional cuisine made with love and care!";
    description.style.cssText = "position: absolute; top:60%; left:20%; right:20%; font-size:1.5rem; color: white;";

    content.appendChild(nshimaImage);
    content.appendChild(heading);
    content.appendChild(description);
}
