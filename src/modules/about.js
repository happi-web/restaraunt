export function aboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear any existing content

    // Page Title
    const title = document.createElement("h1");
    title.textContent = "About Us";
    title.style.color = "white";
    title.style.textAlign = "center";
    title.style.marginTop = "20px";
    content.appendChild(title);

    // Restaurant Description Section
    const description = document.createElement("p");
    description.textContent =
        "Welcome to Pasta Palace, your go-to destination for authentic Italian cuisine! Our restaurant is a celebration of traditional recipes, fresh ingredients, and warm hospitality. From hearty pastas to decadent desserts, we aim to bring a slice of Italy to your plate.";
    description.style.color = "#f0f0f0";
    description.style.textAlign = "center";
    description.style.margin = "20px auto";
    description.style.maxWidth = "600px";
    content.appendChild(description);

    // Story Section
    const storyTitle = document.createElement("h2");
    storyTitle.textContent = "Our Story";
    storyTitle.style.color = "white";
    storyTitle.style.textAlign = "center";
    storyTitle.style.marginTop = "30px";
    content.appendChild(storyTitle);

    const storyText = document.createElement("p");
    storyText.textContent =
        "Founded in 1995, Pasta Palace started as a small family-owned restaurant with a passion for sharing traditional Italian recipes passed down through generations. Over the years, we’ve grown into a beloved dining destination, but our commitment to quality and authenticity remains unchanged.";
    storyText.style.color = "#f0f0f0";
    storyText.style.textAlign = "center";
    storyText.style.margin = "20px auto";
    storyText.style.maxWidth = "600px";
    content.appendChild(storyText);

    // Team Section
    const teamSectionTitle = document.createElement("h2");
    teamSectionTitle.textContent = "Meet Our Team";
    teamSectionTitle.style.color = "white";
    teamSectionTitle.style.textAlign = "center";
    teamSectionTitle.style.marginTop = "30px";
    content.appendChild(teamSectionTitle);

    const teamSection = document.createElement("div");
    teamSection.style.display = "grid";
    teamSection.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    teamSection.style.gap = "20px";
    teamSection.style.padding = "20px";

    // Team Members Data
    const teamMembers = [
        {
            name: "Mario Rossi",
            role: "Executive Chef",
            bio: "Mario crafts our signature dishes with a perfect balance of tradition and innovation, ensuring every bite is unforgettable.",
        },
        {
            name: "Sophia Bianchi",
            role: "Pastry Chef",
            bio: "Sophia's passion for desserts brings sweet delights to our menu, from classic tiramisu to indulgent panna cotta.",
        },
        {
            name: "Luigi Verdi",
            role: "Sommelier",
            bio: "Luigi curates our wine selection to perfectly complement every meal, enhancing your dining experience.",
        },
        {
            name: "Anna Moretti",
            role: "General Manager",
            bio: "Anna ensures our guests feel at home with her dedication to exceptional service and warm hospitality.",
        },
    ];

    // Generate Team Cards
    teamMembers.forEach((member) => {
        const card = document.createElement("div");
        card.style.backgroundColor = "#ffffff";
        card.style.borderRadius = "10px";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.padding = "15px";
        card.style.textAlign = "center";

        const name = document.createElement("h3");
        name.textContent = member.name;
        name.style.color = "#2c3e50";

        const role = document.createElement("p");
        role.textContent = member.role;
        role.style.color = "#2980b9";
        role.style.fontWeight = "bold";

        const bio = document.createElement("p");
        bio.textContent = member.bio;
        bio.style.color = "#7f8c8d";
        bio.style.fontSize = "0.9em";

        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(bio);
        teamSection.appendChild(card);
    });

    content.appendChild(teamSection);
}
