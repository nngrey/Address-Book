describe('Contact', function() {
  describe('fullName', function () {
    it('combines first and last name, seperated by a space', function () {
      var testContact = Object.create(Contact);
      testContact.firstName = "Bob";
    });
  });
});
