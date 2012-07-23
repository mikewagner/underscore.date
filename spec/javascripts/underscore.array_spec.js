(function() {

  describe('underscore.array', function() {
    describe('count', function() {
      return it('should return count of elements in array', function() {
        var a;
        a = [1, 2, 3, 4, 5, 6, 7];
        return expect(_.array.count(a)).toEqual(7);
      });
    });
    describe('join', function() {
      return it('should concatenate each value separated by supplied separator', function() {
        var a;
        a = ['How', 'now', 'brown', 'cow'];
        expect(_.array.join(a)).toEqual('How,now,brown,cow');
        expect(_.array.join(a, ' ')).toEqual('How now brown cow');
        return expect(_.array.join(a, ' and ')).toEqual('How and now and brown and cow');
      });
    });
    describe('from', function() {
      return it('should return the tail of the array starting from position', function() {
        var a;
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(_.array.from(a)).toEqual(a);
        expect(_.array.from(a, 5)).toEqual([6, 7, 8, 9, 10]);
        expect(_.array.from(a, 11)).toEqual([]);
        expect(_.array.from([], 0)).toEqual([]);
        return expect(_.array.from([], 5)).toEqual([]);
      });
    });
    return describe('to', function() {
      return it('should return the beginning of the array up to position', function() {
        var a;
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(_.array.to(a, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(_.array.to(a, 11)).toEqual(a);
        expect(_.array.to(a)).toEqual([]);
        return expect(_.array.to(a, 0)).toEqual([]);
      });
    });
  });

}).call(this);
