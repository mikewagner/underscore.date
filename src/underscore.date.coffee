
root = this
common_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
months = ['January', 'February', 'March', 'April', 'May',
           'June', 'July', 'August', 'September', 'October', 'November', 'December']


slice = Array.prototype.slice

_date =
  
  now: ->
    new Date()

  month: (date) ->
    date.getMonth() + 1
  
  day: (date) ->
    date.getDate()

  year: (date) ->
    date.getFullYear()

  hour: (date) ->
    date.getHours()

  minutes: (date) ->
    date.getMinutes()

  seconds: (date) ->
    date.getSeconds()


  advance: (options) ->
    now = @now()
    milliseconds_to_advance = 0

    if options.years?
      now.setYear( @year(now) + options.years )

    if options.weeks?
      milliseconds_to_advance += @_days_in_milliseconds(options.weeks * 7)

    if options.days?
      milliseconds_to_advance += @_days_in_milliseconds(options.days)

    if options.seconds?
      milliseconds_to_advance += options.seconds * 1000

    new Date(now.valueOf() + milliseconds_to_advance)

  ago: (seconds) ->
    @advance( seconds: -seconds )

  since: (seconds) ->
    @advance( seconds: seconds )

  # alias for since
  in: (seconds) ->
    @since(seconds)

  # returns new Date representing the date a number of days ago
  days_ago: (days) ->
    @advance( days: -days )
  
  # returns new Date representing the date a number of days in the future
  days_since: (days) ->
    @advance( days: days )

  # returns new Date representing the date a number of weeks ago
  weeks_ago: (weeks) ->
    @advance( weeks: -weeks )
  
  # returns new Date representing the date a number of weeks in the future
  weeks_since: (weeks) ->
    @advance( weeks: weeks )

  # returns new Date representing the date a number of years ago
  years_ago: (years) ->
    @advance( years: -years )

  # returns new Date representing the date a number of years in the future
  years_since: (years)
    @advance( years: years )

  _days_in_milliseconds: (days) ->
    days * 86400000


if exports?
  if module? and module.exports
    module.exports = _date
  exports._date = _date

root._ = root._ ? {}
root._.date = _date

