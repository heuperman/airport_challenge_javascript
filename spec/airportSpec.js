describe('airport.js', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe(".land", function() {
    it('instructs a plane to land', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });
  describe(".planes", function() {
    it('returns an array of planes', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });
});
