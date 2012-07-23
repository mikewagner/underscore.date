describe 'underscore.time', ->

  describe 'advance', ->

    it 'should return a date in the future for specified number of days', ->
      spyOn( _.time, 'now' ).andReturn( new Date( 2012, 0, 1 ) )
      expect( _.time.advance( days: 10 ) ).toEqual( new Date( 2012, 0, 11 ) )
  
    it 'should return a date in the future for specified number of weeks', ->
      spyOn( _.time, 'now' ).andReturn( new Date( 2012, 1, 1 ) )
      date = _.time.advance( weeks: 6 )
      expect( _.time.advance( weeks: 6 ) ).toEqual( new Date( 2012, 2, 14 ) )
      
    

