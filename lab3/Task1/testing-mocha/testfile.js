describe("pow",function(){
    it("Raises x to the power n", function() {
        let x = 5;
      
        let result = x;
        assert.equal(pow(x, 1), result);
      
        result *= x;
        assert.equal(pow(x, 2), result);
      
        result *= x;
        assert.equal(pow(x, 3), result);
      });
});
//it is not isolated