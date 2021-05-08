// // // Q1. make a string out of an array
// const fruits = ['apple', 'banana', 'orange'];
// const result = fruits.join('&');
// console.log(result);

// // join함수는 배열의 데이터들을 string으로 반환한다. 괄호 안에는 마음에 드는 구분자를 넣어주자.
  
//   // Q2. make an array out of a string
//     const fruits = 'a, b, c, d';
//     const array = fruits.split(',');
//      console.log(array);
// // split은 optional로 limit값을 지정해 줄 수 있다. 반환되는 배열의 크기를 지정하는 것 (앞부터) 
  
//   // Q3. make this array look like this: [5, 4, 3, 2, 1]
//   {
//     const array = [1, 2, 3, 4, 5];
//     const reverse = array.reverse();
//     console.log(reverse);
//     console.log(array);
//   }
//   // reverse는 배열 자체를 reverse시킨다. array도 5부터 시작하는 배열로 바뀌는 것!!
  
//   // Q4. make new array without the first two elements
//   {
//     const array = [1, 2, 3, 4, 5];
//     const result = array.splice(0,2);
//     console.log(result);
//     console.log(array);
//     const slice = array.slice(2, 5);
//     console.log(slice);
//   }
//   splice는 배열을 (index1, index2) 까지 자르며 잘린 배열을 반환한다.
//   따라서 이 경우 array에는 [3, 4 ,5] 가 출력된다.
//   하지만 문제는 new array를 만들기를 원하므로 slice를 이용해야 한다. 
//   slice의 뒤에 오는 index는 exclusive 즉, 배타적이므로 출력하고자 하는 마지막 index보다 1 더 큰 값을 입력하도록 하자!!!
//   slice는 array도 그대로 유지한다.


  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  { const result = students.find((value) => value.score === 90
  );
  console.log(result);

  }
  // find는 callback 함수를 인자로 받는다. 4가지의 인자를 전달할 수 있으며 그 값은 boolean(T/F)로 return한다.
  // 전달된 callback함수가 true이면 찾자마자 찾은 아이를 return한다.
  // callback 함수는 true, false의 값이 나오게끔 하며, find함수는 첫번째로 true가 나오면 해당하는 배열의 요소를 return한다.

  // Q6. make an array of enrolled students
  { const result = students.filter((student) => student.enrolled)
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  { const result = students.map((student) => student.score)
    console.log(result);
  }
  // map은 모든 요소에 callback 함수를 가공하고 그 값을 return한다.

  // Q8. check if there is a student with the score lower than 50
  { const result = students.some((student) => student.score < 50)
    console.log(result);
    const result2 = students.every((Student) => Student.score < 50)
    console.log(result2);
  }
  // some 함수도 역시 callback함수를 요소들 하나하나마다 실행한 후,
  // 조건에 해당하는 요소가 하나라도 있으면 true를 반환한다.
  // 자매품으로 every가 존재하는데, 이는 배열의 모든 요소가 조건에 해당해야 true를 반환한다.


  // Q9. compute students' average score
  {const result = students.reduce((pre, curr) => pre + curr.score ,0); 
    console.log(result / students.length); 
  } 
  // reduce는 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 사용한다.
  // pre에는 이전에 callback함수에서 return된 값이 전달되고 curr에는 배열의 아이템을 순차적으로 전달받는다.
  // 
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(',');
    console.log(result);   
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {const result = students
    .map((student)=> student.score)
    .sort((a,b) => a-b)
    .join(',')
    console.log(result);
  }

  // sort함수는 함수의 정렬 방식을 정의할 수 있다.
  // a-b를 통해 a와 b의 대소를 비교하여 negative, 0 , positive등을 계산한 후 ascending order을 생성한다.