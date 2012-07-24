describe 'underscore.date', ->

  beforeEach ->
    spyOn( _.date, 'now' ).andReturn( new Date( '2012', '0', '1', '12', '00', '00' ) )

  describe 'parse', ->
    
    it 'should return the current date time if blank/null string', ->
      expect( _.date.parse() ).toEqual(new Date( '2012', '0', '1', '12', '00', '00' ))
      expect( _.date.parse('') ).toEqual(new Date( '2012', '0', '1', '12', '00', '00' ))

    it 'should parse date/time string and return date object', ->
      expect( _.date.parse('1/1/2012 12:00:00').toUTCString() ).toEqual('Sun, 01 Jan 2012 18:00:00 GMT')
      expect( _.date.parse('1/1/2012').toUTCString() ).toEqual('Sun, 01 Jan 2012 06:00:00 GMT')
      expect( _.date.parse('1-1-2012').toUTCString() ).toEqual('Sun, 01 Jan 2012 06:00:00 GMT')
      expect( _.date.parse('2012/1/1').toUTCString() ).toEqual('Sun, 01 Jan 2012 06:00:00 GMT')
      expect( _.date.parse('2012-1-1').toUTCString() ).toEqual('Sun, 01 Jan 2012 06:00:00 GMT')


    it 'should return Invalid Date', ->
      # missing date values
      expect( _.date.parse('12:00:00').toUTCString() ).toEqual('Invalid Date')
      # invalid date values
      expect( _.date.parse('12/32/2012').toUTCString() ).toEqual('Invalid Date')


  describe 'month', ->
    
    it 'should return the month for the date', ->
      date = new Date( 2012, 11, 31 )
      expect( _.date.month( date ) ).toEqual( 12 )
      

  describe 'day', ->

    it 'should return the day of the month for date', ->
      date = new Date( 2012, 11, 31 )
      expect( _.date.day( date ) ).toEqual( 31 )
      

  describe 'year', ->

    it 'should return the year for date', ->
      date = new Date( 2012, 11, 31 )
      expect( _.date.year( date ) ).toEqual( 2012 )


  describe 'advance', ->

    describe 'seconds', ->

      it 'should return a new date in the future', ->
        date = _.date.advance( _.date.now(), seconds: 3600 * 3 )
        expect( _.date.hour(date) ).toEqual(15)
        expect( _.date.minutes(date) ).toEqual(0)
        expect( _.date.seconds(date) ).toEqual(0)

    describe 'days', ->

      it 'should return a new date in the future', ->
        date = _.date.advance( _.date.now(), days: 10 )
        expect( _.date.month(date) ).toEqual( 1 )
        expect( _.date.day(date) ).toEqual( 11 )
        expect( _.date.year(date) ).toEqual( 2012 )

      it 'should return a date in the past', ->
        date = _.date.advance( _.date.now(), days: -22 )
        expect( _.date.month(date) ).toEqual( 12 )
        expect( _.date.day(date) ).toEqual( 10 )
        expect( _.date.year(date) ).toEqual( 2011 )

    describe 'weeks', ->

      it 'should return a date in the future for specified number of weeks', ->
        date = _.date.advance( _.date.now(), weeks: 6 )
        expect( _.date.month(date) ).toEqual( 2 )
        expect( _.date.day(date) ).toEqual( 12 )
        expect( _.date.year(date) ).toEqual( 2012 )

      it 'should return a date in the past for specified number of weeks', ->
        date = _.date.advance( _.date.now(), weeks: -32 )
        expect( _.date.month(date) ).toEqual( 5 )
        expect( _.date.day(date) ).toEqual( 22 )
        expect( _.date.year(date) ).toEqual( 2011 )

    describe 'years', ->

      it 'should return a date in the future for specified number of years', ->
        date = _.date.advance( _.date.now(), years: 2 )
        expect( _.date.month(date) ).toEqual( 1 )
        expect( _.date.day(date) ).toEqual( 1 )
        expect( _.date.year(date) ).toEqual( 2014 )

      it 'should return a date in the past for specified number of years', ->
        date = _.date.advance( _.date.now(), years: -4 )
        expect( _.date.month(date) ).toEqual( 1 )
        expect( _.date.day(date) ).toEqual( 1 )
        expect( _.date.year(date) ).toEqual( 2008 )

       


    

