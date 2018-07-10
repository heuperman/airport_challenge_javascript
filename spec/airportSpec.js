describe('airport.js', function() {

  var airport;
  var plane;

  describe(".land", function() {

    it('instructs a plane to land', function() {
      airport = new Airport('name');
      plane = jasmine.createSpy('plane');
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});
