//  .-------.        ,-----.    ,---.    ,---.   ____    ,---.   .--.
//  |  _ _   \     .'  .-,  '.  |    \  /    | .'  __ `. |    \  |  |
//  | ( ' )  |    / ,-.|  \ _ \ |  ,  \/  ,  |/   '  \  \|  ,  \ |  |
//  |(_ o _) /   ;  \  '_ /  | :|  |\_   /|  ||___|  /  ||  |\_ \|  |
//  | (_,_).' __ |  _`,/ \ _/  ||  _( )_/ |  |   _.-`   ||  _( )_\  |
//  |  |\ \  |  |: (  '\_/ \   ;| (_ o _) |  |.'   _    || (_ o _)  |
//  |  | \ `'   / \ `"/  \  ) / |  (_,_)  |  ||  _( )_  ||  (_,_)\  |
//  |  |  \    /   '. \_/``".'  |  |      |  |\ (_ o _) /|  |    |  |
//  ''-'   `'-'      '-----'    '--'      '--' '.(_,_).' '--'    '--'



# Convert Roman Numbers to Arabic Numbers

Basic useful feature list:

 * valid roman number returns the equivalent arabic number
 * invalid roman number returns 0


I'm no good at writing sample / filler text, so go write something yourself.

Look, a roman number!

 - XX

The result is look like below:

- 20

And here's some code! :+1:

```javascript
for (var i = 0; i < arabicNums.length; i++) {
    while (str.indexOf(romanNums[i]) === 0) {
      result += arabicNums[i];
      str = str.replace(romanNums[i], '');
    }
  }
```

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.



### Stuff used to make this:

 * [roman-numeral-rules](https://www.mathsisfun.com/roman-numerals.html) for rules of roman numbers
 * [plunkr](http://plnkr.co) to get going immediately

