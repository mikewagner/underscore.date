(function() {
  var common_days_in_month, root, slice, _date, _ref;

  root = this;

  common_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  slice = Array.prototype.slice;

  _date = {
    now: function() {
      return new Date();
    },
    advance: function(options) {
      var milliseconds_to_advance, now;
      now = this.now();
      milliseconds_to_advance = 0;
      if (options.days != null) {
        milliseconds_to_advance += this._days_in_milliseconds(options.days);
      }
      if (options.weeks != null) {
        milliseconds_to_advance += this._days_in_milliseconds(options.weeks * 7);
      }
      return new Date(now.valueOf() + milliseconds_to_advance);
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
