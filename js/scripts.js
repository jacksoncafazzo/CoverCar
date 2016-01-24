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

insuranceInfo.prototype.fullInsuranceInfo = function() {
  return "Insurer: " + this.companyName + ", " + "Policy Number: " + this.policyNumber + ", " + "Phone Number: " + this.companyNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  debugger;
  $("#add-insurance").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
      '<div class="form-group">' +
        '<label for="new-company-name">Street</label>' +
        '<input type="text" class="form-control new-company-name">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-policy-number">City</label>' +
        '<input type="text" class="form-control new-policy-number">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-phone-number">State</label>' +
        '<input type="text" class="form-control new-phone-number">' +
      '</div>' +
    '</div>');
  });


  var inputtedCompanyName = $("input#new-company-name").val();
  var inputtedPolicyNumber = $("input#new-policy-number").val();
  var inputtedAgentPhone = $("input#new-phone-number").val();

  $("form#new-contact").submit(function(event) {

    var inputtedCabNumber = $("input#new-cab-number").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedCabNumber, inputtedFirstName, inputtedLastName);

    $(".new-insurance-info").each(function() {
      var inputtedCompanyName = $(this).find("input#new-company-name").val();
      var inputtedPolicyNumber = $(this).find("input#new-policy-number").val();
      var inputtedAgentPhone = $(this).find("input#new-agent-phone").val();
      var newInsuranceInfo = new insuranceInfo(inputtedCompanyName, inputtedPolicyNumber, inputtedAgentPhone)
      newContact.insuranceInfo.push(newInsuranceInfo)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-cab-number").val("");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    event.preventDefault();

  });
});
