(function() {

  describe('underscore.time', function() {
    return describe('advance', function() {
      it('should return a date in the future for specified number of days', function() {
        spyOn(_.time, 'now').andReturn(new Date(2012, 0, 1));
        return expect(_.time.advance({
          days: 10
        })).toEqual(new Date(2012, 0, 11));
      });
      return it('should return a date in the future for specified number of weeks', function() {
        var date;
        spyOn(_.time, 'now').andReturn(new Date(2012, 1, 1));
        date = _.time.advance({
          weeks: 6
        });
        return expect(_.time.advance({
          weeks: 6
        })).toEqual(new Date(2012, 2, 14));
      });
    });
  });

}).call(this);
