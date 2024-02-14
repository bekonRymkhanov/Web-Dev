// let message;
// message = 'Hello!';

// alert(message);
// let response=prompt("hello","something");
// confirm("gdy","wefs");

describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 raised to power 4 is 81", function() {
      assert.equal(pow(3, 4), 81);
    });
    it("for negative n the result is NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
    it("for non-integer n the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });
  
  });