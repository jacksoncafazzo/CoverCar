function Contact(cabNumber,firstName,lastName,insuranceInfo) {
  this.cabNumber = cabNumber;
  this.firstName = firstName;
  this.lastName = lastName;
  this.insuranceInfo = insuranceInfo;
}

function insuranceInfo(companyName, policyNumber, companyNumber) {
  this.companyName = companyName;
  this.policyNumber = policyNumber;
  this.companyNumber = companyNumber;
}


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedCabNumber = $("input#new-cab-number").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedCabNumber, inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-cab-number").val("");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
