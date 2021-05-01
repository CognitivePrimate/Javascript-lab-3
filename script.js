function addSubmission(array, newName, newScore, newDate){
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate
    };
    const newPassed = (newScore > 60);
    newSubmission.passed = newPassed;

    array.push(newSubmission);
}

function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}


function deleteSubmissionByName(array, name){
    const index = array.findIndex(object => object.name === name);      
    array.splice(index, 1);
}

// failing...oops, now succeeding to deconstruct the deleteSubmissionByName arrow function above vvvv

// function deleteSubmissionByName(array, name){
//         for (let i=0; i < array.length; i++){
//             let searchedName = array[i].name;
//             if (searchedName === name) {
//                 array.splice(i, 1);
//             }
//         }    
// }

function editSubmission(array, index, score){
    array[index].score = score;
    score >= 60 ? array[index].passed = true : array[index].passed = false;
}


function findSubmissionByName(array, name){
    let index = array.find(object => object.name === name);
    return index;
}

// to find the actual lowest score but not the object -- because i can't read directions
// function findLowestScore(array){
//     let lowestScore = array[0].score;
//     array.forEach(function(object){
//         if (object.score < lowestScore){
//             lowestScore = object.score;
//         }; 
//     });  return lowestScore;
// }

// to find what the instructions actually say -- the object with the lowest score
function findLowestScore(array){
    let lowestScore = array[0];
    array.forEach(function(object){
        if (object.score < lowestScore.score){
            lowestScore = object;
        }; 
    });  return lowestScore;
}

// done with a for loop 
// function findAverageScore(array){
//     let sum = 0;
//     for (i = 0; i < array.length; i++){
//         sum += array[i].score;
//         avg = sum / array.length;
//     }; return avg;
// }

// done with a for of, as specified
function findAverageScore(array){
    let sum = 0;
    for (object of array){
        sum += object.score;
        avg = sum / array.length;
    };
    return avg;
}

function filterPassing(array){
    return array.filter(object => object.passed == true);
}

function filter90AndAbove(array){
    return array.filter(object => object.score >= 90);
}

let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
];

// ***TESTING EACH FUNCTION INDIVIDUALLY***
// addSubmission(submissions, "Cletus", 50, "2020-01-09");
// deleteSubmissionByIndex(submissions, 3);
// deleteSubmissionByName(submissions, "Joe");
// editSubmission(submissions, 0, 10);
// console.log(findSubmissionByName(submissions, "Jack"))
// console.log(findLowestScore(submissions));
// console.log(findAverageScore(submissions));
// console.log(filterPassing(submissions));
// console.log(filter90AndAbove(submissions));
// console.log(submissions);



