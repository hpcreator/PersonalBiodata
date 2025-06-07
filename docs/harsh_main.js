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

    var myDetailHTML = ''; //variable that hold my details html

    //variable that contains my details
    var myData = [
        {
            key : "Name",
            value : "Harsh Joginbhai Patel",
        },
        {
            key : "Date of birth",
            value : "31/May/1998",
        },
        {  
            key : "Time of birth",
            value : "11:30 AM",
        },
        {  
            key : "Place of birth",
            value : "Khambhat, Gujarat",
        },
        {  
            key : "Complexion",
            value : "Fair",
        },
        {  
            key : "Weight",
            value : "70 kg",
        },
        {  
            key : "Height",
            value : `5' 5"`,
        },
        {  
            key : "Cast",
            value : "Kadva Patel",
        },
        {  
            key : "Sub Cast",
            value : "42 Gam  Kadva Patel",
        },
        {
            key : "Education",
            value : "IT Engineer",
        },
        {  
            key : "Profession",
            value : "Software Engineer",
        },
        {  
            key : "Father's Name",
            value : "Joginbhai Vadilal Patel",
        },
        {  
            key : "Fathers's Profession",
            value : "Farmer",
        },
        {  
            key : "Mother's Name",
            value : "Urmilaben Joginbhai Patel",
        },
        {  
            key : "Mother's Profession",
            value : "House Wife",
        },
        {  
            key : "Brother",
            value : "Meet Patel",
        },
        {  
            key : "Brother's Profession",
            value : "Mechanical Engineer",
        },
        {                  
            key : "Native",
            value : "Kapadwanj",
        },
        {  
            key : "Mosal",
            value : "Finav, Khambhat",
        },
        {  
            key : "Address",
            value : "1328, Mota Patelwada, beside Swaminarayan Temple, Kapadwanj, Kheda-387620",
        },
        {  
            key : "Food Habbit",
            value : "Veg",
        }
    ]

    for (var i = 0; i < myData.length; i++) { //generating my details html by using loop
        myDetailHTML += `<dt class="font-weight-bold">${myData[i].key} </dt> <dd class="m-0">${myData[i].value}</dd>`;
    }

    detailsWrapper.innerHTML = myDetailHTML //adding the dynamic html as inner HTML of my details div
        


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
