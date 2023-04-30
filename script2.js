// Создать массив объектов. В каждом объекте должна содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.

// посчитать средний возраст
// определить представителей какого пола больше вывести ответы в консоль

const array = [
    {
      name: 'Vasia',
      age: 22,
      sex: 'male'
    },
    {
      name: 'Don',
      age: 45,
      sex: 'male'
    },
  {
    name: 'Ania',
    age: 4,
    sex: 'female'
  },
  {
    name: 'kirill',
    age: 9,
    sex: 'male'
  },
  {
    name: 'nika',
    age: 4,
    sex: 'female'
  }
]

function objectMap(arr) {
  let ageSumm = 0
  let sex;
  let male = 0;
  let female = 0;

  for (let i = 0; i < array.length; i++) {
    ageSumm = ageSumm + arr[i].age;

    if(arr[i].sex === 'male') {
      male++
    } else {
      female++
    }
  }
  
  arr.forEach(function (item) {
    ageSumm = ageSumm + item.age;

    if(item.sex === 'male') {
      male++
    } else {
      female++
    }

  })

  if (male > female) {
    sex = ' больше male'
  } else if (female > male) {
    sex = 'больше female'
  } else  {
    sex = 'поровну'
  }

  console.log('ever', ageSumm / arr.length)
  console.log(sex)
}

objectMap(array);