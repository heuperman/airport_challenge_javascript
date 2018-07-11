describe('weather.js', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe(".isStormy", function() {
    it('returns true', function() {
      expect(weather.isStormy).toEqual(true);
    });
  });
});
