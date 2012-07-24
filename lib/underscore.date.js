(function() {
  var common_days_in_month, months, parse, root, _date, _ref;

  root = this;

  common_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  parse = Date.parse;

  _date = {
    now: function() {
      return new Date();
    },
    parse: function(string) {
      if (string == null) {
        string = null;
      }
      if (!((string != null) && string !== '')) {
        return this.now();
      }
      return new Date(parse(string));
    },
    yesterday: function() {
      return this.advance({
        days: -1
      });
    },
    tomorrow: function() {
      return this.advance({
        days: 1
      });
    },
    month: function(date) {
      return date.getMonth() + 1;
    },
    day: function(date) {
      return date.getDate();
    },
    year: function(date) {
      return date.getFullYear();
    },
    hour: function(date) {
      return date.getHours();
    },
    minutes: function(date) {
      return date.getMinutes();
    },
    seconds: function(date) {
      return date.getSeconds();
    },
    advance: function(date, options) {
      var milliseconds_to_advance, new_date;
      new_date = new Date(date.valueOf());
      milliseconds_to_advance = 0;
      if (options.years != null) {
        new_date.setYear(this.year(date) + options.years);
      }
      if (options.weeks != null) {
        milliseconds_to_advance += this._days_in_milliseconds(options.weeks * 7);
      }
      if (options.days != null) {
        milliseconds_to_advance += this._days_in_milliseconds(options.days);
      }
      if (options.seconds != null) {
        milliseconds_to_advance += options.seconds * 1000;
      }
      return new Date(new_date.valueOf() + milliseconds_to_advance);
    },
    ago: function(seconds) {
      return this.advance(this.now(), {
        seconds: -seconds
      });
    },
    since: function(seconds) {
      return this.advance(this.now(), {
        seconds: seconds
      });
    },
    "in": function(seconds) {
      return this.since(seconds);
    },
    days_ago: function(days) {
      return this.advance(this.now(), {
        days: -days
      });
    },
    days_since: function(days) {
      return this.advance(this.now(), {
        days: days
      });
    },
    weeks_ago: function(weeks) {
      return this.advance(this.now(), {
        weeks: -weeks
      });
    },
    weeks_since: function(weeks) {
      return this.advance(this.now(), {
        weeks: weeks
      });
    },
    years_ago: function(years) {
      return this.advance(this.now(), {
        years: -years
      });
    },
    years_since: function(years) {
      return this.advance(this.now(), {
        years: years
      });
    },
    isToday: function(date) {
      var today;
      today = this.now();
      return this.year(date) === this.year(today) && this.month(date) === this.month(today) && this.day(date) === this.day(today);
    },
    isPast: function(date) {
      var today;
      today = this.now();
      if (this.year(date) < this.year(today)) {
        return true;
      }
      if (this.month(date) < this.month(today)) {
        return true;
      }
      if (this.day(date) < this.day(today)) {
        return true;
      }
      return false;
    },
    isFuture: function(date) {
      var today;
      today = this.now();
      if (this.year(date) > this.year(today)) {
        return true;
      }
      if (this.month(date) > this.month(today)) {
        return true;
      }
      if (this.day(date) > this.day(today)) {
        return true;
      }
      return false;
    },
    _days_in_milliseconds: function(days) {
      return days * 86400000;
    }
  };

  if (typeof exports !== "undefined" && exports !== null) {
    if ((typeof module !== "undefined" && module !== null) && module.exports) {
      module.exports = _date;
    }
    exports._date = _date;
  }

  root._ = (_ref = root._) != null ? _ref : {};

  root._.date = _date;

}).call(this);
