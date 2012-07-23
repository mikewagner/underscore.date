(function() {

  describe('underscore.date', function() {
    return describe('advance', function() {
      it('should return a date in the future for specified number of days', function() {
        spyOn(_.date, 'now').andReturn(new Date(2012, 0, 1));
        return expect(_.date.advance({
          days: 10
        })).toEqual(new Date(2012, 0, 11));
      });
      return it('should return a date in the future for specified number of weeks', function() {
        var date;
        spyOn(_.date, 'now').andReturn(new Date(2012, 1, 1));
        date = _.date.advance({
          weeks: 6
        });
        return expect(_.date.advance({
          weeks: 6
        })).toEqual(new Date(2012, 2, 14));
      });
    });
  });

}).call(this);
