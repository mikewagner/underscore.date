
root = this
common_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
months = ['January', 'February', 'March', 'April', 'May',
           'June', 'July', 'August', 'September', 'October', 'November', 'December']

parse = Date.parse


_date =
  
  now: ->
    new Date()

  parse: (string = null) ->
    return @now() unless string? and string != ''
    new Date( parse(string) )

  yesterday: ->
    @advance( days: -1 )

  tomorrow: ->
    @advance( days: 1 )

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


  advance: (date, options) ->
    new_date = new Date( date.valueOf() )
    milliseconds_to_advance = 0

    if options.years?
      new_date.setYear( @year(date) + options.years )

    if options.weeks?
      milliseconds_to_advance += @_days_in_milliseconds(options.weeks * 7)

    if options.days?
      milliseconds_to_advance += @_days_in_milliseconds(options.days)

    if options.seconds?
      milliseconds_to_advance += options.seconds * 1000

    new Date(new_date.valueOf() + milliseconds_to_advance)

  ago: (seconds) ->
    @advance( @now(), seconds: -seconds )

  since: (seconds) ->
    @advance( @now(), seconds: seconds )

  # alias for since
  in: (seconds) ->
    @since(seconds)

  # returns new Date representing the date a number of days ago
  days_ago: (days) ->
    @advance( @now(), days: -days )
  
  # returns new Date representing the date a number of days in the future
  days_since: (days) ->
    @advance( @now(), days: days )

  # returns new Date representing the date a number of weeks ago
  weeks_ago: (weeks) ->
    @advance( @now(), weeks: -weeks )
  
  # returns new Date representing the date a number of weeks in the future
  weeks_since: (weeks) ->
    @advance( @now(), weeks: weeks )

  # returns new Date representing the date a number of years ago
  years_ago: (years) ->
    @advance( @now(), years: -years )

  # returns new Date representing the date a number of years in the future
  years_since: (years) ->
    @advance( @now(), years: years )

  # return true if the Date is the current date
  isToday: (date) ->
    today = @now()
    @year(date)  == @year(today)  and
    @month(date) == @month(today) and
    @day(date)   == @day(today)

  # returns true if the Date is in the past
  isPast: (date) ->
    today = @now()
    return true if @year(date)  < @year(today)
    return true if @month(date) < @month(today)
    return true if @day(date)   < @day(today)
    false

  # returns true if the Date is in the future
  isFuture: (date) ->
    today = @now()
    return true if @year(date)  > @year(today)
    return true if @month(date) > @month(today)
    return true if @day(date)   > @day(today)
    false


  _days_in_milliseconds: (days) ->
    days * 86400000


if exports?
  if module? and module.exports
    module.exports = _date
  exports._date = _date

root._ = root._ ? {}
root._.date = _date

