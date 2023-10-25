/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return n;
  }

  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (n1 === n2) {
    return n2;
  }

  return n1 + getSumBetweenNumbers(n1 + 1, n2);
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  } else {
    return true;
  }
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // Координаты точек первого прямоугольника
  let dot1_1 = {x: rect1.left, y: rect1.top};
  let dot1_2 = {x: rect1.left + rect1.width, y: rect1.top};
  let dot1_3 = {x: rect1.left + rect1.width, y: rect1.top + rect1.height};
  let dot1_4 = {x: rect1.left, y: rect1.top + rect1.height};

// Координаты точек второго прямоугольника
  let dot2_1 = {x: rect2.left, y: rect2.top};
  let dot2_2 = {x: rect2.left + rect2.width, y: rect2.top};
  let dot2_3 = {x: rect2.left + rect2.width, y: rect2.top + rect2.height};
  let dot2_4 = {x: rect2.left, y: rect2.top + rect2.height};

  if (dot1_1.x >= dot2_1.x && dot1_1.x <= dot2_2.x && dot1_1.y >= dot2_1.y && dot1_1.y <= dot2_4.y) {
    return true; // Если первая точка первого прямоугольника внутри второго прямоугольника
  } else if (dot1_2.x >= dot2_1.x && dot1_2.x <= dot2_2.x && dot1_2.y >= dot2_1.y && dot1_2.y <= dot2_4.y) {
    return true; // Если вторая точка первого прямоугольника внутри второго прямоугольника
  } else if (dot1_3.x >= dot2_1.x && dot1_3.x <= dot2_2.x && dot1_3.y >= dot2_1.y && dot1_3.y <= dot2_4.y) {
    return true; // Если третья точка первого прямоугольника внутри второго прямоугольника
  } else if (dot1_4.x >= dot2_1.x && dot1_4.x <= dot2_2.x && dot1_4.y >= dot2_1.y && dot1_4.y <= dot2_4.y) {
    return true; // Если четвёртая точка первого прямоугольника внутри второго прямоугольника
  } else if (dot2_1.x >= dot1_1.x && dot2_1.x <= dot1_2.x && dot2_1.y >= dot1_1.y && dot2_1.y <= dot1_4.y) {
    return true; // Если первая точка первого прямоугольника внутри второго прямоугольника
  } else if (dot2_2.x >= dot1_1.x && dot2_2.x <= dot1_2.x && dot2_2.y >= dot1_1.y && dot2_2.y <= dot1_4.y) {
    return true; // Если вторая точка первого прямоугольника внутри второго прямоугольника
  } else if (dot2_3.x >= dot1_1.x && dot2_3.x <= dot1_2.x && dot2_3.y >= dot1_1.y && dot2_3.y <= dot1_4.y) {
    return true; // Если третья точка первого прямоугольника внутри второго прямоугольника
  } else if (dot2_4.x >= dot1_1.x && dot2_4.x <= dot1_2.x && dot2_4.y >= dot1_1.y && dot2_4.y <= dot1_4.y) {
    return true; // Если четвёртая точка первого прямоугольника внутри второго прямоугольника
  } else {
    return false;
  }
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  if ((circle.center.x - point.x)** 2 + (circle.center.y - point.y) ** 2 < circle.radius ** 2) {
    return true;
  } else {
    return false;
  }
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.indexOf(str[i], i + 1) < 0) {
      if (str.slice(0, i).indexOf(str[i]) < 0) {
        return str[i];
      }
    }
  }

  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let result = [];

  if (isStartIncluded === true) {
    result.push('[');
  } else {
    result.push('(');
  }

  if (a <= b) {
    result.push(`${a}, `);
    result.push(`${b}`);
  } else {
    result.push(`${b}, `);
    result.push(`${a}`);
  }

  if (isEndIncluded === true) {
    result.push(']');
  } else {
    result.push(')');
  }

  return result.join('');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  ccn = String(ccn);

  let sum = 0;

  for (let i = 0, symbol; i < ccn.length; i++) {
    symbol = +ccn[i];

    if (i % 2 === ccn.length % 2) {
      symbol = symbol * 2;

      if (symbol >= 10) {
        symbol = symbol - 9;
      }
    }

    sum = sum + symbol;
  }

  if (sum % 10 !== 0) {
    return false;
  } else {
    return true;
  }
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  num = String(num);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }

  if (sum > 9) {
    num = String(sum);
    sum = 0;

    for (let i = 0; i < num.length; i++) {
      sum += +num[i];
    }

    return sum;
  } else {
    return sum;
  }
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];

  if (str.length === 0) {
    return true;
  } else if (str.length === 1) {
    return false;
  } else {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][1] && stack.length !== 0 && stack[stack.length - 1] === bracketsConfig[j][0]) { // Если закрывающая скобка, стек не пустой и top - нужная пара
          stack.pop();
        } else if (str[i] == bracketsConfig[j][0]) { // Если открывающая скобка
          stack.push(str[i]);
        } else if (str[i] == bracketsConfig[j][1] && stack.length === 0) { // Если закрывающая скобка и стек пустой
          return false;
        }
      }
    }

    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let result;

  for (let i = 0; i < pathes.length; i++) {
    for (let j = 0; j < pathes[i].length; j++) {
      if (i === 0) {
        result = pathes[i];
      } else {
        if (pathes[i][j] !== result[j]) {
          result = result.slice(0, j);
          break;
        }
      }
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === '/') {
      break;
    }

    result = result.slice(0, i);
  }

  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  let result = new Array(m1.length);

  for (let i = 0; i < m1.length; i++) {
    result[i] = new Array(m2[0].length); // Создаём строку с результами перемножения i строки первой матрица на j столбец второй матрицы

    for (let j = 0; j < m2[0].length; j++) { // Заполняем её суммой произведений
      result[i][j] = 0; // Стартовое значение суммы

      for (let k = 0; k < m1[0].length; k++) { // Перемножаем элементы и суммируем
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  if (typeof(position[0][0]) !== 'undefined' && position[0][0] === position[0][1] && position[0][0] === position[0][2]) { // Если есть выигрыш по горизонтали
    return position[0][0];
  }
  if (typeof(position[1][0]) !== 'undefined' && position[1][0] === position[1][1] && position[1][0] === position[1][2]) {
    return position[1][0];
  }
  if (typeof(position[2][0]) !== 'undefined' && position[2][0] === position[2][1] && position[2][0] === position[2][2]) {
    return position[2][0];
  }

  if (typeof(position[0][0]) !== 'undefined' && position[0][0] === position[1][0] && position[0][0] === position[2][0]) { // Если есть выигрыш по вертикали
    return position[0][0];
  }
  if (typeof(position[0][1]) !== 'undefined' && position[0][1] === position[1][1] && position[0][1] === position[2][1]) {
    return position[0][1];
  }
  if (typeof(position[0][2]) !== 'undefined' && position[0][2] === position[1][2] && position[0][2] === position[2][2]) {
    return position[0][2];
  }

  if (typeof(position[0][0]) !== 'undefined' && position[0][0] === position[1][1] && position[0][0] === position[2][2]) { // Если есть выигрыш по диагонали
    return position[0][0];
  }
  if (typeof(position[0][2]) !== 'undefined' && position[0][2] === position[1][1] && position[0][2] === position[2][0]) {
    return position[0][2];
  }

  return undefined; // Если нет выигрыша
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
