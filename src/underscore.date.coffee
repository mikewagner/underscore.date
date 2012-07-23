
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

  advance: (options) ->
    now = @now()
    milliseconds_to_advance = 0

    if options.years?
      now.setYear( @year(now) + options.years )

    if options.weeks?
      milliseconds_to_advance += @_days_in_milliseconds(options.weeks * 7)

    if options.days?
      milliseconds_to_advance += @_days_in_milliseconds(options.days)

    new Date(now.valueOf() + milliseconds_to_advance)


  _days_in_milliseconds: (days) ->
    days * 86400000


if exports?
  if module? and module.exports
    module.exports = _date
  exports._date = _date

root._ = root._ ? {}
root._.date = _date

