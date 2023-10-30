/* START CODE UNDER THIS LINE */
/* START CODE UNDER THIS LINE */
console.log("29/10");


"1.Practice"

const convertToString = function(array) {
     
    return array.reduce(function(result, letter) {
    
        return result + letter
    }, '');
  };
  
  console.log(convertToString(["c", "a", "t"])); 
  console.log(convertToString(["h", "e", "l", "l", "o"])); 
  

  "2.Practice"



  const averageGrade = function(grades) {
    if (grades.length === 0) {
      return "Please enter at least one grade";
    }
  
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
    return average;
  }
  console.log(averageGrade([100, 80, 95, 67, 74]));
  console.log(averageGrade([100, 90, 80, 70]));
  console.log(averageGrade([]));


  "3.Practice"

  const evenLengthOddIndex =function(string) {
    return string.filter(function(string, index) {
     
      return string.length % 2 === 0 && index % 2 !== 0;
    });
  }
  
 console.log(evenLengthOddIndex(["word", "care", "car", "food", "cast", "cat"]))
 console.log(evenLengthOddIndex(["word", "care", "food", "car", "cast", "cat"]));
 console.log(evenLengthOddIndex(["word", "cat", "food"]));


 "4.Practice"


 const incrementByIndex = function (arrays) {

    return arrays.map(function(nestedArray, index){ 
     
      return nestedArray.map(function(number) {
        return number + index;
      });
 });
  }
  console.log(incrementByIndex([
    [6, 1, 5],
    [1, 5, 49],
  ]));

  console.log(incrementByIndex([
    [1, 2, 3],
    [2, 7, 9],
    [10, 3, 44],
  ]));

  
 "5.Practice"


 
 const countWords = function (string) {
    
    const words = string.toLowerCase().match(/\w+/g) || [];
  
    
    const wordCount = {};
  
 
    words.forEach(function(word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    return wordCount;
  }

  console.log(countWords("hello hello world"));

