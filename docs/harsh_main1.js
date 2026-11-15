/**This function is used for flip the card */
document.getElementById('clickToFlap').addEventListener('click', function() {
  document.getElementById('flipCard').classList.toggle('flip');
  setTimeout(() => {
    document.getElementById('back-card').classList.toggle('d-block');
  }, 200);
});

// when document is ready this function is called
$( document ).ready(function() {
    //this function is used for making the details html
    var detailsWrapper = document.getElementById("detail-list"); // get the details html div

    // Existing biodata values, grouped only for presentation.
    var myData = [
        { key: "Name", value: "Harsh Joginbhai Patel", group: "Personal Information" },
        { key: "Date of birth", value: "31/05/1998", group: "Personal Information" },
        { key: "Time of birth", value: "11:30 AM", group: "Personal Information" },
        { key: "Place of birth", value: "Khambhat, Gujarat", group: "Personal Information" },
        { key: "Complexion", value: "Fair", group: "Personal Information" },
        { key: "Weight", value: "70 kg", group: "Personal Information" },
        { key: "Height", value: `5' 6"`, group: "Personal Information" },

        { key: "Education", value: "IT Engineer", group: "Education & Profession" },
        { key: "Profession", value: "Software Engineer", group: "Education & Profession" },
        { key: "Work Place", value: "KPIT Technologies Pvt. Ltd.", group: "Education & Profession" },
        { key: "Work Location", value: "Pune", group: "Education & Profession" },

        { key: "Father's Name", value: "Joginbhai Vadilal Patel", group: "Family Information" },
        { key: "Fathers's Profession", value: "Farmer", group: "Family Information" },
        { key: "Mother's Name", value: "Urmilaben Joginbhai Patel", group: "Family Information" },
        { key: "Mother's Profession", value: "House Wife", group: "Family Information" },
        { key: "Brother", value: "Meet Patel", group: "Family Information" },
        { key: "Brother's Profession", value: "Mechanical Engineer", group: "Family Information" },

        { key: "Cast", value: "Kadva Patel", group: "Community & Background" },
        { key: "Sub Cast", value: "42 Gam  Kadva Patel", group: "Community & Background" },
        { key: "Native", value: "Kapadwanj", group: "Community & Background" },
        { key: "Mosal", value: "Finav, Khambhat", group: "Community & Background" },

        { key: "Food Habit", value: "Veg", group: "Lifestyle & Address" },
        { key: "Address", value: "C 1102, Aryaman Kalpvruksh, Hathijan Circle, Ahmedabad – 382445", group: "Lifestyle & Address" }
    ];

    var sectionConfig = [
        { title: "Personal Information", subtitle: "A little about me", number: "01", icon: "✦" },
        { title: "Education & Profession", subtitle: "Education and career", number: "02", icon: "▤" },
        { title: "Family Information", subtitle: "The people closest to me", number: "03", icon: "♡" },
        { title: "Community & Background", subtitle: "Roots and community", number: "04", icon: "⌂" },
        { title: "Lifestyle & Address", subtitle: "Everyday preferences", number: "05", icon: "⌖" }
    ];

    // Render the grouped section cards inside the existing detail-list element.
    detailsWrapper.classList.add("detail-sections");
    detailsWrapper.innerHTML = "";

    sectionConfig.forEach(function(section) {
        var sectionItems = myData.filter(function(item) {
            return item.group === section.title;
        });

        if (sectionItems.length === 0) return;

        var sectionCard = document.createElement("section");
        sectionCard.className = "detail-section";

        var heading = document.createElement("div");
        heading.className = "detail-section-heading";

        var number = document.createElement("span");
        number.className = "detail-section-number";
        number.textContent = section.number;

        var headingText = document.createElement("div");
        headingText.className = "detail-section-heading-text";

        var title = document.createElement("h6");
        title.textContent = section.title;

        var subtitle = document.createElement("p");
        subtitle.textContent = section.subtitle;

        var icon = document.createElement("span");
        icon.className = "detail-section-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = section.icon;

        headingText.append(title, subtitle);
        heading.append(number, headingText, icon);

        var itemsGrid = document.createElement("div");
        itemsGrid.className = "detail-items-grid";

        sectionItems.forEach(function(item) {
            var itemCard = document.createElement("div");
            itemCard.className = "detail-item-card";

            var label = document.createElement("span");
            label.className = "detail-item-label";
            label.textContent = item.key;

            var value = document.createElement("span");
            value.className = "detail-item-value";
            value.textContent = item.value;

            itemCard.append(label, value);
            itemsGrid.appendChild(itemCard);
        });

        sectionCard.append(heading, itemsGrid);
        detailsWrapper.appendChild(sectionCard);
    });

    //this function is used for showing my all photos

    var imagesWrapper = document.getElementById("all-images"); //this is holding the parent container where my all photo's html will be inserted 

    //this is the variable that hold my image name and my all images exist in assets folder
    var myImageName = [
        'harsh2.jpg',
        'harsh3.JPG',
    ]

    var myImageHTML = '';  //variable that hold the html of my all photos

    for (var i = 0; i < myImageName.length; i++) {//generating html by of my all photos by using loop
        myImageHTML += `<div class="card-back-img"><img class="pop-img" src="./assets/${myImageName[i]}" alt="Profile Picture"></div>`;
    }

    imagesWrapper.innerHTML = myImageHTML  //adding the dynamic html of my all photos as inner HTML of parent div


    //this function is used for open the image into popup

    $('.pop-img').on('click', function() {
        $('.imagepreview').attr('src', $(this).attr('src'));
        $('#imagemodal').modal('show');   
    });		
});
