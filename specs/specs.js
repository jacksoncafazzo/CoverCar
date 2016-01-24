describe('Contact', function() {
  it("Creates new contact for cab involved info", function () {
    var testDriver = new Contact("71","Jack","Smith",['State Farm', '34445', '5556667777']);
    expect(testDriver.cabNumber).to.equal("71");
    expect(testDriver.firstName).to.equal("Jack");
    expect(testDriver.lastName).to.equal("Smith");
    expect(testDriver.insuranceInfo).to.eql(['State Farm', '34445', '5556667777'])
  });


  it("Combines first and last names", function() {
    var testDriver = new Contact("44","Mr","Magoo");
    expect(testDriver.fullName()).to.equal("Mr Magoo");
  });
});

describe('insuranceInfo', function() {
  it("creates a new array of insurance info", function() {
    var testInsuranceInfo = new insuranceInfo('State Farm', '34445', '5556667777');
    expect(testInsuranceInfo.companyName).to.equal("State Farm");
    expect(testInsuranceInfo.policyNumber).to.equal("34445");
    expect(testInsuranceInfo.companyNumber).to.equal("5556667777");
  });

  it("creates new insuranceInfo with given specs", function() {
    var testInsuranceInfo = new insuranceInfo("State Farm", "3593986","5556667777");
    expect(testInsuranceInfo.fullInsuranceInfo()).to.equal("Insurer: State Farm, Policy Number: 3593986, Phone Number: 5556667777");
  });
});
