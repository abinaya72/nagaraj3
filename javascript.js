function makePhoneCall() {
    
    var phoneNumber = '9843083621';
    window.location.href = 'tel:' + phoneNumber;
}
 
function openWhatsApp() {
    var phoneNumber = '9843083621'; 
    var message = 'Hello!'; 
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
}


function sendEmail() {
    var email = 'nagarajmaha1976@gmail.com'; 
    var subject = 'Work request'; 
    var body = 'Hello, I would like to in request your services.'; 
    var mailtoURL = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoURL;
}
function showMap() {
  
    var latitude = 11.044591;
    var longitude = 76.940365;
    

    window.open("https://www.google.com/maps?q=" + latitude + "," + longitude, "_blank");
}
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }

    
    window.scrollTo(0, 0);
}
