describe('airport.js', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = new Weather();
    spyOn(Math,'random').and.returnValue(1);
  });
  describe(".planes", function() {
    describe("after a plane is landed", function() {
      it('returns an array of planes', function() {
        airport.land(plane);
        expect(airport._planes).toEqual([plane]);
      });
    });
    describe("after a plane has taken off", function() {
      it('returns an empty array', function() {
        airport.land(plane);
        airport.takeOff(weather);
        expect(airport._planes.length).toEqual(0);
      });
    });
  });
});
