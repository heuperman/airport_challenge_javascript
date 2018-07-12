describe('weather.js', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe(".isStormy", function() {
    it('returns true', function() {
      spyOn(Math,'random').and.returnValue(0);
      expect(weather.isStormy()).toEqual(true);
    });
  });
});
