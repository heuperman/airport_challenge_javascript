describe("airport", function() {
  describe(".land", function() {
    it('instructs a plane to land', function() {
      plane = jasmine.createSpy('plane');
      var airport = new Airport();
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});
