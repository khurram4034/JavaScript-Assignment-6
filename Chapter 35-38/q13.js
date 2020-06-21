function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("Sample arguments " + ' "JSResourceS.com": ')
document.write(char_count('JSResourceS.com', 'o'));
