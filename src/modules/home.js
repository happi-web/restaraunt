import nshimaImg from "../nshima.webp";

export function homePage() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear existing content

    const heading = document.createElement("h1");
    const nshimaImage = document.createElement("img");
    const description = document.createElement("h3");
    const paragraph = document.createElement("p");

    nshimaImage.src = nshimaImg;
    nshimaImage.style.cssText = `position: absolute;
                                top: 45%; 
                                left: 50%; 
                                transform: translate(-50%, -50%); 
                                width: 40%; 
                                height: auto;`

    heading.textContent = "Welcome to Our Restaurant";
    heading.style.cssText = "position: absolute; top:10%; left:20%; right:20%; font-size:3.5rem; color: white; text-align:center;";

    description.textContent = "Enjoy the finest traditional cuisine made with love and care!";
    description.style.cssText = "position: absolute; top:75%; left:20%; right:20%; font-size:1.5rem; color: white; text-align:center;";

    paragraph.textContent = `Nshima is a traditional staple food commonly enjoyed in Zambia and several other 
    countries in Southern Africa. It is made by cooking finely ground maize meal (corn flour) 
    with water to create a thick, dough-like consistency. Nshima is typically served in small,
     hand-formed portions and is accompanied by a variety of side dishes, such as vegetables, 
     beans, or protein-rich options like grilled fish, chicken, or beef stews. This versatile 
     dish plays a central role in meals and is often eaten with hands, 
    symbolizing communal dining and cultural connection.`;
    paragraph.style.cssText = "position: absolute; top:80%; left:20%; right:20%; font-size:1rem; color: white; text-align:center;";

    content.appendChild(nshimaImage);
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(paragraph);
}
