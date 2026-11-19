/**
 * Biodata card interactions and content rendering.
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

  const biodata = [
    {
      label: "Name",
      value: "Harsh Joginbhai Patel",
      group: "Personal Information",
    },
    {
      label: "Date of birth",
      value: "31/05/1998",
      group: "Personal Information",
    },
    {
      label: "Time of birth",
      value: "11:30 AM",
      group: "Personal Information",
    },
    {
      label: "Place of birth",
      value: "Khambhat, Gujarat",
      group: "Personal Information",
    },
    { label: "Complexion", value: "Fair", group: "Personal Information" },
    { label: "Weight", value: "70 kg", group: "Personal Information" },
    { label: "Height", value: `5' 6"`, group: "Personal Information" },

    {
      label: "Education",
      value: "IT Engineer",
      group: "Education & Profession",
    },
    {
      label: "Profession",
      value: "Software Engineer",
      group: "Education & Profession",
    },
    {
      label: "Work Place",
      value: "KPIT Technologies Pvt. Ltd.",
      group: "Education & Profession",
    },
    { label: "Work Location", value: "Pune", group: "Education & Profession" },

    {
      label: "Father's Name",
      value: "Joginbhai Vadilal Patel",
      group: "Family Information",
    },
    {
      label: "Fathers's Profession",
      value: "Farmer",
      group: "Family Information",
    },
    {
      label: "Mother's Name",
      value: "Urmilaben Joginbhai Patel",
      group: "Family Information",
    },
    {
      label: "Mother's Profession",
      value: "House Wife",
      group: "Family Information",
    },
    { label: "Brother", value: "Meet Patel", group: "Family Information" },
    {
      label: "Brother's Profession",
      value: "Mechanical Engineer",
      group: "Family Information",
    },

    { label: "Cast", value: "Kadva Patel", group: "Community & Background" },
    {
      label: "Sub Cast",
      value: "42 Gam  Kadva Patel",
      group: "Community & Background",
    },
    { label: "Native", value: "Kapadwanj", group: "Community & Background" },
    {
      label: "Mosal",
      value: "Finav, Khambhat",
      group: "Community & Background",
    },

    // Section 05: Lifestyle subgroup.
    {
      label: "Food Habit",
      value: "Veg",
      group: "Lifestyle & Contact",
      subgroup: "Lifestyle",
    },
    {
      label: "Smoke/Drinking Habit",
      value: "Never",
      group: "Lifestyle & Contact",
      subgroup: "Lifestyle",
    },

    {
      label: "Hobbies",
      value: "Movie Watching, Reading, Travelling",
      group: "Lifestyle & Contact",
      subgroup: "Lifestyle",
    },

    // Section 05: Address & Contact subgroup.
    {
      label: "Mobile Number (Self)",
      value: "+91 7383186472",
      group: "Lifestyle & Contact",
      subgroup: "Address & Contact",
    },
    {
      label: "Alternate Contact Number (Mother)",
      value: "+91 9408841071",
      group: "Lifestyle & Contact",
      subgroup: "Address & Contact",
    },
    {
      label: "Address",
      value: "C 1102, Aryaman Kalpvruksh, Hathijan Circle, Ahmedabad – 382445",
      group: "Lifestyle & Contact",
      subgroup: "Address & Contact",
    },
  ];

  const sections = [
    {
      title: "Personal Information",
      subtitle: "A little about me",
      number: "01",
      icon: "👤",
    },
    {
      title: "Education & Profession",
      subtitle: "Education and career",
      number: "02",
      icon: "🎓",
    },
    {
      title: "Family Information",
      subtitle: "The people closest to me",
      number: "03",
      icon: "👨‍👩‍👦",
    },
    {
      title: "Community & Background",
      subtitle: "Roots and community",
      number: "04",
      icon: "🏡",
    },
    {
      title: "Lifestyle & Contact",
      subtitle: "Personal preferences and contact details",
      number: "05",
      icon: "📍",
    },
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
   * Renders grouped biodata sections and optional subgroups.
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

      const number = createElement(
        "span",
        "detail-section-number",
        section.number,
      );

      const headingText = createElement("div", "detail-section-heading-text");

      const title = createElement("h6", "", section.title);
      const subtitle = createElement("p", "", section.subtitle);
      const icon = createElement("span", "detail-section-icon", section.icon);

      icon.setAttribute("aria-hidden", "true");

      headingText.append(title, subtitle);
      heading.append(number, headingText, icon);
      sectionCard.appendChild(heading);

      // Group items by subgroup while preserving their order.
      const groupedItems = new Map();

      items.forEach((item) => {
        const subgroupName = item.subgroup || "";

        if (!groupedItems.has(subgroupName)) {
          groupedItems.set(subgroupName, []);
        }

        groupedItems.get(subgroupName).push(item);
      });

      groupedItems.forEach((subgroupItems, subgroupName) => {
        const subgroupContainer = createElement("div", "detail-subgroup");

        // Add subgroup heading when available.
        if (subgroupName) {
          const subgroupTitle = createElement(
            "h6",
            "detail-subgroup-title",
            subgroupName,
          );

          subgroupContainer.appendChild(subgroupTitle);
        }

        const itemsGrid = createElement("div", "detail-items-grid");

        subgroupItems.forEach((item) => {
          const itemCard = createElement("div", "detail-item-card");

          const label = createElement("span", "detail-item-label", item.label);

          const value = createElement("span", "detail-item-value", item.value);

          itemCard.append(label, value);
          itemsGrid.appendChild(itemCard);
        });

        subgroupContainer.appendChild(itemsGrid);
        sectionCard.appendChild(subgroupContainer);
      });

      detailsWrapper.appendChild(sectionCard);
    });
  }

  /**
   * Renders the image gallery.
   */
  function renderGallery() {
    const imageNames = [
      "harsh4.png",
      "harsh5.png",
      "harsh6.png",
      "harsh7.png",
      "harsh8.png",
    ];

    imagesWrapper.replaceChildren();

    imageNames.forEach((imageName) => {
      const imageContainer = createElement("div", "card-back-img");
      const image = createElement("img");

      image.className = "pop-img";
      image.src = `./assets/harsh/${imageName}`;
      image.alt = "Profile Picture";

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
