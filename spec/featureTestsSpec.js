describe("airport", function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport
  it('instructs a plane to land', function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  it('instructs a plane to take off', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
  });

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
  describe("when it is stormy", function(){
    beforeEach(function(){
      spyOn(weather, 'isStormy').andReturn(true);
    });

    it('instructs a plane to take off', function() {
      airport.land(plane);
      expect( function(){ airport.takeOff(plane); }).toThrow(new Error("Cannot take off: weather is stormy"));
    });
  });
});
