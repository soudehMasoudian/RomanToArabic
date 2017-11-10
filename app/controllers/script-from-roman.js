/*
here we need to define app and controller and config it so that
we can call it from outside, but because of the lack of time I decided
not to implement according to what angular says
 */

        function convertFromRoman(str) {
                var result = 0;
                var arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
                var romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
                for (var i = 0; i < arabicNums.length; i++) {
                    while (str.indexOf(romanNums[i]) === 0) {
                        result += arabicNums[i];
                        str = str.replace(romanNums[i], '');
                    }
                }
                return result;
            };

