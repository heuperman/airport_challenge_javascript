describe("Feature Test", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport();
    spyOn(Math,'random').and.returnValue(1);
  });

describe("when weather is clear", function() {
  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport
    it('instructs a plane to land', function() {
      airport.land(plane);
      expect(airport._planes).toContain(plane);
    });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it('instructs a plane to take off', function() {
      airport.land(plane);
      airport.takeOff();
      expect(airport._planes).not.toContain(plane);
    });
  });
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
  describe("when it is stormy", function(){
    it('throws an error when user instructs a plane to take off', function() {
      airport.land(plane);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect( function(){ airport.takeOff(); }).toThrowError("Cannot take off: weather is stormy");
    });

    it('throws an error when user instructs a plane to land', function() {
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect( function(){ airport.land(); }).toThrowError("Cannot land: weather is stormy");
    });
  });
});
