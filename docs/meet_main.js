/**
 * Meet Patel's biodata card interactions and content rendering.
 */

document.addEventListener("DOMContentLoaded", () => {
    const flipCard = document.getElementById("flipCard");
    const backCard = document.getElementById("back-card");
    const viewDetailsButton = document.getElementById("viewDetailsButton");
    const backToProfileButton = document.getElementById("backToProfileButton");
    const detailsWrapper = document.getElementById("detail-list");
    const imagesWrapper = document.getElementById("all-images");

    let flipTimer;

    /**
     * Switches between the profile and details sides of the card.
     * @param {boolean} showDetails Whether to show the back side.
     */
    function setCardSide(showDetails) {
        window.clearTimeout(flipTimer);

        flipCard.classList.toggle("flip", showDetails);
        backToProfileButton.hidden = !showDetails;

        flipTimer = window.setTimeout(() => {
            backCard.classList.toggle("d-block", showDetails);
            backCard.classList.toggle("d-none", !showDetails);
        }, 200);
    }

    // Front to back.
    viewDetailsButton.addEventListener("click", () => {
        setCardSide(true);
    });

    // Back to front.
    backToProfileButton.addEventListener("click", () => {
        setCardSide(false);
    });

    // Meet's details, retained from the supplied biodata.
    const biodata = [
        { label: "Name", value: "Meet Joginbhai Patel", group: "Personal Information" },
        { label: "Date of birth", value: "09/Feb/2001", group: "Personal Information" },
        { label: "Time of birth", value: "01:55 PM", group: "Personal Information" },
        { label: "Place of birth", value: "Kapadwanj, Gujarat", group: "Personal Information" },
        { label: "Complexion", value: "Fair", group: "Personal Information" },
        { label: "Weight", value: "60 kg", group: "Personal Information" },
        { label: "Height", value: `5' 8"`, group: "Personal Information" },

        { label: "Education", value: "Mechanical Engineer", group: "Education & Profession" },
        { label: "Profession", value: "Production Engineer", group: "Education & Profession" },

        { label: "Father's Name", value: "Joginbhai Vadilal Patel", group: "Family Information" },
        { label: "Father's Profession", value: "Farmer", group: "Family Information" },
        { label: "Mother's Name", value: "Urmilaben Joginbhai Patel", group: "Family Information" },
        { label: "Mother's Profession", value: "House Wife", group: "Family Information" },
        { label: "Brother", value: "Harsh Patel", group: "Family Information" },
        { label: "Brother's Profession", value: "Software Engineer", group: "Family Information" },

        { label: "Cast", value: "Kadva Patel", group: "Community & Background" },
        { label: "Sub Cast", value: "42 Gam Kadva Patel", group: "Community & Background" },
        { label: "Native", value: "Kapadwanj", group: "Community & Background" },
        { label: "Mosal", value: "Finav, Khambhat", group: "Community & Background" },

        { label: "Food Habit", value: "Veg", group: "Lifestyle & Address" },
        { label: "Address", value: "1328, Mota Patelwada, beside Swaminarayan Temple, Kapadwanj, Kheda-387620", group: "Lifestyle & Address" }
    ];

    const sections = [
        { title: "Personal Information", subtitle: "A little about me", number: "01", icon: "✦" },
        { title: "Education & Profession", subtitle: "Education and career", number: "02", icon: "▤" },
        { title: "Family Information", subtitle: "The people closest to me", number: "03", icon: "♡" },
        { title: "Community & Background", subtitle: "Roots and community", number: "04", icon: "⌂" },
        { title: "Lifestyle & Address", subtitle: "Everyday preferences", number: "05", icon: "⌖" }
    ];

    /**
     * Creates an element and optionally assigns its class and text.
     */
    function createElement(tagName, className, text) {
        const element = document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        if (text !== undefined) {
            element.textContent = text;
        }

        return element;
    }

    /**
     * Renders the grouped biodata sections.
     */
    function renderBiodata() {
        detailsWrapper.classList.add("detail-sections");
        detailsWrapper.replaceChildren();

        sections.forEach((section) => {
            const items = biodata.filter((item) => item.group === section.title);

            if (items.length === 0) {
                return;
            }

            const sectionCard = createElement("section", "detail-section");
            const heading = createElement("div", "detail-section-heading");

            const number = createElement("span", "detail-section-number", section.number);
            const headingText = createElement("div", "detail-section-heading-text");
            const title = createElement("h6", "", section.title);
            const subtitle = createElement("p", "", section.subtitle);
            const icon = createElement("span", "detail-section-icon", section.icon);

            icon.setAttribute("aria-hidden", "true");

            headingText.append(title, subtitle);
            heading.append(number, headingText, icon);

            const itemsGrid = createElement("div", "detail-items-grid");

            items.forEach((item) => {
                const itemCard = createElement("div", "detail-item-card");
                const label = createElement("span", "detail-item-label", item.label);
                const value = createElement("span", "detail-item-value", item.value);

                itemCard.append(label, value);
                itemsGrid.appendChild(itemCard);
            });

            sectionCard.append(heading, itemsGrid);
            detailsWrapper.appendChild(sectionCard);
        });
    }

    /**
     * Renders Meet's image gallery.
     * Add or remove exact filenames from this array as needed.
     */
    function renderGallery() {
        const imageNames = ["meet2.jpg", "meet3.jpg", "meet4.JPG"];
        imagesWrapper.replaceChildren();

        imageNames.forEach((imageName) => {
            const imageContainer = createElement("div", "card-back-img");
            const image = createElement("img");

            image.className = "pop-img";
            image.src = `./assets/meet/${imageName}`;
            image.alt = "Meet Patel - Gallery Photo";

            imageContainer.appendChild(image);
            imagesWrapper.appendChild(imageContainer);
        });
    }

    /**
     * Opens the Bootstrap image preview modal.
     */
    function bindImagePreview() {
        document.querySelectorAll(".pop-img").forEach((image) => {
            image.addEventListener("click", () => {
                document.querySelector(".imagepreview").src = image.src;
                $("#imagemodal").modal("show");
            });
        });
    }

    renderBiodata();
    renderGallery();
    bindImagePreview();
});
