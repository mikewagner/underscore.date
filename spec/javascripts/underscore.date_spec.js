(function() {

  describe('underscore.date', function() {
    describe('month', function() {
      return it('should return the month for the date', function() {
        var date;
        date = new Date(2012, 11, 31);
        return expect(_.date.month(date)).toEqual(12);
      });
    });
    describe('day', function() {
      return it('should return the day of the month for date', function() {
        var date;
        date = new Date(2012, 11, 31);
        return expect(_.date.day(date)).toEqual(31);
      });
    });
    describe('year', function() {
      return it('should return the year for date', function() {
        var date;
        date = new Date(2012, 11, 31);
        return expect(_.date.year(date)).toEqual(2012);
      });
    });
    return describe('advance', function() {
      it('should return a date in the future for specified number of days', function() {
        var date;
        spyOn(_.date, 'now').andReturn(new Date(2012, 0, 1));
        date = _.date.advance({
          days: 10
        });
        expect(_.date.month(date)).toEqual(1);
        expect(_.date.day(date)).toEqual(11);
        return expect(_.date.year(date)).toEqual(2012);
      });
      it('should return a date in the future for specified number of weeks', function() {
        var date;
        spyOn(_.date, 'now').andReturn(new Date(2012, 1, 1));
        date = _.date.advance({
          weeks: 6
        });
        expect(_.date.month(date)).toEqual(3);
        expect(_.date.day(date)).toEqual(14);
        return expect(_.date.year(date)).toEqual(2012);
      });
      return it('should return a date in the future for specified number of years', function() {
        var date;
        spyOn(_.date, 'now').andReturn(new Date(2012, 0, 1));
        date = _.date.advance({
          years: 2
        });
        expect(_.date.month(date)).toEqual(1);
        expect(_.date.day(date)).toEqual(1);
        return expect(_.date.year(date)).toEqual(2014);
      });
    });
  });

}).call(this);
