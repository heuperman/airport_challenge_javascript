// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport
describe("airport", function() {
  it('instructs a plane to land', function() {
    var plane = new Plane();
    var airport = new Airport();
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
});
