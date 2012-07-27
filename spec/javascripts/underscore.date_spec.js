(function() {

  describe('underscore.date', function() {
    beforeEach(function() {
      return spyOn(_.date, 'now').andReturn(new Date('2012', '0', '1', '12', '00', '00'));
    });
    describe('parse', function() {
      it('should return the current date time if blank/null string', function() {
        expect(_.date.parse()).toEqual(new Date('2012', '0', '1', '12', '00', '00'));
        return expect(_.date.parse('')).toEqual(new Date('2012', '0', '1', '12', '00', '00'));
      });
      it('should parse date/time string and return date object', function() {
        expect(_.date.parse('1/1/2012 12:00:00').toUTCString()).toEqual('Sun, 01 Jan 2012 18:00:00 GMT');
        expect(_.date.parse('1/1/2012').toUTCString()).toEqual('Sun, 01 Jan 2012 06:00:00 GMT');
        expect(_.date.parse('1-1-2012').toUTCString()).toEqual('Sun, 01 Jan 2012 06:00:00 GMT');
        expect(_.date.parse('2012/1/1').toUTCString()).toEqual('Sun, 01 Jan 2012 06:00:00 GMT');
        return expect(_.date.parse('2012-1-1').toUTCString()).toEqual('Sun, 01 Jan 2012 06:00:00 GMT');
      });
      return it('should return Invalid Date', function() {
        expect(_.date.parse('12:00:00').toUTCString()).toEqual('Invalid Date');
        return expect(_.date.parse('12/32/2012').toUTCString()).toEqual('Invalid Date');
      });
    });
    describe('yesterday', function() {
      return it('should return date that is 1 day ago', function() {
        var today, yesterday;
        today = _.date.now().valueOf();
        yesterday = _.date.yesterday().valueOf();
        return expect(today - yesterday).toEqual(86400000);
      });
    });
    describe('tomorrow', function() {
      return it('should return date that is 1 day after today', function() {
        var today, tomorrow;
        today = _.date.now().valueOf();
        tomorrow = _.date.tomorrow().valueOf();
        return expect(today - tomorrow).toEqual(-86400000);
      });
    });
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
      describe('seconds', function() {
        return it('should return a new date in the future', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            seconds: 3600 * 3
          });
          expect(_.date.hour(date)).toEqual(15);
          expect(_.date.minutes(date)).toEqual(0);
          return expect(_.date.seconds(date)).toEqual(0);
        });
      });
      describe('days', function() {
        it('should return a new date in the future', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            days: 10
          });
          expect(_.date.month(date)).toEqual(1);
          expect(_.date.day(date)).toEqual(11);
          return expect(_.date.year(date)).toEqual(2012);
        });
        return it('should return a date in the past', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            days: -22
          });
          expect(_.date.month(date)).toEqual(12);
          expect(_.date.day(date)).toEqual(10);
          return expect(_.date.year(date)).toEqual(2011);
        });
      });
      describe('weeks', function() {
        it('should return a date in the future for specified number of weeks', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            weeks: 6
          });
          expect(_.date.month(date)).toEqual(2);
          expect(_.date.day(date)).toEqual(12);
          return expect(_.date.year(date)).toEqual(2012);
        });
        return it('should return a date in the past for specified number of weeks', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            weeks: -32
          });
          expect(_.date.month(date)).toEqual(5);
          expect(_.date.day(date)).toEqual(22);
          return expect(_.date.year(date)).toEqual(2011);
        });
      });
      describe('years', function() {
        it('should return a date in the future for specified number of years', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            years: 2
          });
          expect(_.date.month(date)).toEqual(1);
          expect(_.date.day(date)).toEqual(1);
          return expect(_.date.year(date)).toEqual(2014);
        });
        return it('should return a date in the past for specified number of years', function() {
          var date;
          date = _.date.advance(_.date.now(), {
            years: -4
          });
          expect(_.date.month(date)).toEqual(1);
          expect(_.date.day(date)).toEqual(1);
          return expect(_.date.year(date)).toEqual(2008);
        });
      });
      describe('ago', function() {
        return it('should return a date in past for the given number of seconds', function() {
          expect(_.date.ago(3600).toUTCString()).toEqual('Sun, 01 Jan 2012 17:00:00 GMT');
          expect(_.date.ago(86400).toUTCString()).toEqual('Sat, 31 Dec 2011 18:00:00 GMT');
          return expect(_.date.ago(60 * 60 * 24 * 365).toUTCString()).toEqual('Sat, 01 Jan 2011 18:00:00 GMT');
        });
      });
      describe('since', function() {
        return it('should return a date in future for the given number of seconds', function() {
          expect(_.date.since(3600).toUTCString()).toEqual('Sun, 01 Jan 2012 19:00:00 GMT');
          expect(_.date.since(86400).toUTCString()).toEqual('Mon, 02 Jan 2012 18:00:00 GMT');
          return expect(_.date.since(60 * 60 * 24 * 365).toUTCString()).toEqual('Mon, 31 Dec 2012 18:00:00 GMT');
        });
      });
      return describe('day_of_week', function() {
        return it('should return the name for the day of week for a date', function() {
          var date;
          date = _.date.parse('January 1, 2012');
          expect(_.date.day_of_week(date)).toEqual('Sunday');
          date = _.date.advance(date, {
            days: 1
          });
          expect(_.date.day_of_week(date)).toEqual('Monday');
          date = _.date.advance(date, {
            days: 1
          });
          expect(_.date.day_of_week(date)).toEqual('Tuesday');
          date = _.date.advance(date, {
            days: 1
          });
          expect(_.date.day_of_week(date)).toEqual('Wednesday');
          date = _.date.advance(date, {
            days: 1
          });
          expect(_.date.day_of_week(date)).toEqual('Thursday');
          date = _.date.advance(date, {
            days: 1
          });
          expect(_.date.day_of_week(date)).toEqual('Friday');
          date = _.date.advance(date, {
            days: 1
          });
          return expect(_.date.day_of_week(date)).toEqual('Saturday');
        });
      });
    });
  });

}).call(this);
