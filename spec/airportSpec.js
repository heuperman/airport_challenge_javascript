describe('airport.js', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  describe(".planes", function() {
    describe("after a plane is landed", function() {
      it('returns an array of planes', function() {
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
      });
    });
    describe("after a plane has taken off", function() {
      it('returns an empty array', function() {
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });
    });
  });
});
