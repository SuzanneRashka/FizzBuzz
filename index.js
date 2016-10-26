module.exports = {

  fizz:function fizzbuzz(i){
    var count = '';
      if ( i % 3 === 0 ){
        count += 'Fizz';
      } if ( i % 5 === 0 ){
        count += 'Buzz';
      } if ( i % 5 !== 0 && i % 3 !== 0 ) {
        count = i + '';
      }
      return count;
    }

}
