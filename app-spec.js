describe('function setAgeRange', function(){
  it('set range between 10 and 1000', function() {
    expect(setAgeRange(dataObject[0], 10, 1000)).toEqual(true)
  });
});
