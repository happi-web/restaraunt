const menu = document.querySelector("#menu");

export function menuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear any existing content

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Pasta Menu";
    heading.style.color = "white";
    heading.style.textAlign = "center";
    content.appendChild(heading);

    // Menu Sections
    const sections = [
        {
            title: "Starters",
            items: [
                { name: "Garlic Bread", description: "Crispy baguette slices brushed with garlic butter and herbs.", price: "$5.99" },
                { name: "Bruschetta", description: "Fresh tomatoes, basil, garlic, and olive oil on toasted bread.", price: "$6.99" },
            ],
        },
        {
            title: "Main Courses",
            items: [
                { name: "Classic Spaghetti Bolognese", description: "A rich tomato and beef ragù served over al dente spaghetti.", price: "$12.99" },
                { name: "Fettuccine Alfredo", description: "Creamy parmesan sauce tossed with buttery fettuccine noodles.", price: "$13.99" },
                { name: "Penne Arrabbiata (Spicy)", description: "Spicy tomato sauce with garlic and chili flakes on penne pasta.", price: "$11.99" },
                { name: "Seafood Linguine", description: "Linguine pasta with shrimp, mussels, and calamari in a light white wine sauce.", price: "$16.99" },
                { name: "Vegetarian Lasagna", description: "Layered lasagna with spinach, ricotta, and marinara sauce.", price: "$14.99" },
            ],
        },
        {
            title: "Desserts",
            items: [
                { name: "Tiramisu", description: "Layers of espresso-soaked ladyfingers with mascarpone cream.", price: "$7.99" },
                { name: "Panna Cotta", description: "Creamy Italian dessert served with berry coulis.", price: "$6.99" },
            ],
        },
        {
            title: "Drinks",
            items: [
                { name: "Red Wine (Glass)", description: "Pair your pasta with a Merlot or Chianti.", price: "$8.99" },
                { name: "Soft Drinks", description: "Coke, Sprite, or Iced Tea.", price: "$2.99" },
            ],
        },
    ];

    // Generate sections
    sections.forEach((section) => {
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = section.title;
        sectionTitle.style.color = "black";
        sectionTitle.style.marginTop = "20px";
        sectionTitle.style.backgroundColor = "#f4d03f"; // Highlighted section header
        sectionTitle.style.padding = "10px";
        sectionTitle.style.borderRadius = "5px";
        sectionTitle.style.width = "50%";
        sectionTitle.style.margin = "0 auto";

        const menuItemsList = document.createElement("ul");
        menuItemsList.style.listStyleType = "none";
        menuItemsList.style.padding = "0";

        section.items.forEach((item) => {
            const menuItem = document.createElement("li");
            menuItem.style.marginBottom = "20px";
            menuItem.style.backgroundColor = "#f8f8f8";
            menuItem.style.padding = "10px";
            menuItem.style.borderRadius = "8px";
            menuItem.style.width = "50%";
            menuItem.style.margin = "10px auto";
            menuItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

            const itemName = document.createElement("h3");
            itemName.textContent = item.name;
            itemName.style.color = "#2c3e50";

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;
            itemDescription.style.color = "#34495e";

            const itemPrice = document.createElement("p");
            itemPrice.textContent = item.price;
            itemPrice.style.color = "#e74c3c";
            itemPrice.style.fontWeight = "bold";

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDescription);
            menuItem.appendChild(itemPrice);
            menuItemsList.appendChild(menuItem);
        });

        content.appendChild(sectionTitle);
        content.appendChild(menuItemsList);
    });
}
