
root = this
common_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

slice = Array.prototype.slice

_date =
  
  now: ->
    new Date()

  advance: (options) ->
    now = @now()
    milliseconds_to_advance = 0

    if options.days?
      milliseconds_to_advance += @_days_in_milliseconds(options.days)
    
    if options.weeks?
      milliseconds_to_advance += @_days_in_milliseconds(options.weeks * 7)


    return new Date(now.valueOf() + milliseconds_to_advance)
    








  _days_in_milliseconds: (days) ->
    days * 86400000


if exports?
  if module? and module.exports
    module.exports = _time
  exports._time = _time

root._ = root._ ? {}
root._.time = _time

