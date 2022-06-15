// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
} 
console.log(createUser("Lamar", "Mickel"));
// createUser








function setAge(user, age){
    user.age = age;
    return user;
}

console.log(setAge(createUser("Lamar", "Mickel"),25))
console.log(setAge({
    firstName: 'Dee',
    lastName: 'Aura'
}, 27));

let testUser = {
    firstName: "Test",
    lastName:"User"
}
console.log(setAge(testUser,25));
//setAge








function incrementAge(user){
    user.age = user.age + 1;
    return user;
}
console.log(incrementAge(testUser));
//incrementAge








function fixCar(car){
    car.needsMaintenence = false;
    return car;
}

const car = {
    make: 'BMW',
    model: 'X3M',
    year: 2022,
    needsMaintenence: true


}; 
console.log(fixCar(car));
//fixCar








function addGrades(student, newGrades){
    for(let i = 0; i <newGrades.length; i++){
        student.grades.push(newGrades[i]);
    }
    return student;
}

const student = {
    name: 'Lamar Mickel',
    email: 'lamar.mickel@codeimmersives.com',
    grades: [100, 100, 90]
};

const newGrades = [85, 90, 95];
let newGrades2 = [80, 80, 80];
let newGrades3 = [90, 95, 100];

console.log (addGrades(student, newGrades));
console.log (addGrades(student, newGrades2));
console.log (addGrades(student, newGrades3));
//addGrades








const cars2 = {
    make: 'BMW',
    model: 'M3',
    year: 2022,
    needsMaintenence: false
};

function getDataType(obj, key){
    return typeof obj[key];
}
console.log('\nGet data type\n')
console.log(getDataType(cars2, 'make'));
console.log(getDataType(cars2, 'model'));
console.log(getDataType(cars2, 'year'));
//getDatatype








const todos = [{
    title: 'Make breakfast',
    isComplete: false},
    {
        title: 'Eat Dunkin',
        isComplete: true
    }
];

const newTodo = {
    title: 'Call mom',
    isComplete: false
};
function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos
}
console.log(addTodo(todos, newTodo));
//addTodo








function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist.duration = playlist.duration + newSong.duration;
    return playlist
}

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Wockhardt',
            artist: 'Shawny Binladen',
            duration: 4
        },
        {
            title: 'What the Business is',
            artist: 'Babyface Ray',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Mercedes',
    artist: 'Big Yaya',
    duration: 3
};

console.log(addSong(playlist,newSong));
//addSong








function updateReportCard(reportCard, newGrade){
    let total = 0;
    reportCard.grades.push(newGrade);
    if(reportCard.lowestGrade > newGrade){
        reportCard.lowestGrade = newGrade;
    }
    if(reportCard.highestGrade < newGrade){
        reportCard.highestGrade = newGrade;
    }
    for(let i = 0; i < reportCard.grades.length; i++){
        total += reportCard.grades[i];
    }
    reportCard.averageGrade = (total/reportCard.grades.length);
    return reportCard
}
const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95,80]
};

console.log(updateReportCard(reportCard, 62))
//updateReportCard

















// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘






