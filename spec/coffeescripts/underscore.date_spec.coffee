describe 'underscore.date', ->

  describe 'advance', ->

    it 'should return a date in the future for specified number of days', ->
      spyOn( _.date, 'now' ).andReturn( new Date( 2012, 0, 1 ) )
      expect( _.date.advance( days: 10 ) ).toEqual( new Date( 2012, 0, 11 ) )
  
    it 'should return a date in the future for specified number of weeks', ->
      spyOn( _.date, 'now' ).andReturn( new Date( 2012, 1, 1 ) )
      date = _.date.advance( weeks: 6 )
      expect( _.date.advance( weeks: 6 ) ).toEqual( new Date( 2012, 2, 14 ) )
      
    

