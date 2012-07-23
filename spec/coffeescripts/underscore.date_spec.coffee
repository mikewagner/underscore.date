describe 'underscore.date', ->

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

    it 'should return a date in the future for specified number of days', ->
      spyOn( _.date, 'now' ).andReturn( new Date( 2012, 0, 1 ) )

      date = _.date.advance( days: 10 )
      expect( _.date.month(date) ).toEqual( 1 )
      expect( _.date.day(date) ).toEqual( 11 )
      expect( _.date.year(date) ).toEqual( 2012 )

    it 'should return a date in the future for specified number of weeks', ->
      spyOn( _.date, 'now' ).andReturn( new Date( 2012, 1, 1 ) )
      date = _.date.advance( weeks: 6 )
      expect( _.date.month(date) ).toEqual( 3 )
      expect( _.date.day(date) ).toEqual( 14 )
      expect( _.date.year(date) ).toEqual( 2012 )

    it 'should return a date in the future for specified number of years', ->
      spyOn( _.date, 'now' ).andReturn( new Date( 2012, 0, 1 ) )
      date = _.date.advance( years: 2 )
      expect( _.date.month(date) ).toEqual( 1 )
      expect( _.date.day(date) ).toEqual( 1 )
      expect( _.date.year(date) ).toEqual( 2014 )

      


    

