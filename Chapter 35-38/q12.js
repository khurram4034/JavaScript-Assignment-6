
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("EXAMPLE STRING : " + 'Web Development Tutorial' + '<br />'+ '<br />');
document.write("EXPECTED OUTPUT : ");
document.write(find_longest_word('Web Development Tutorial'));
