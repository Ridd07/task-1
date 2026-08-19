let task1 ={
     name: "riddhi",
     age: 22
};

let task2 ={
    name:"priyanshi",
    age:21
};

let task3 ={
    name:"kavya",
    age:23
};
let task4={
    name:"sikha",
    age:21
}
let task5={
    name:"archi",
    age:22
}
let tasks = [task1, task2, task3, task4, task5];

function summary(taskList) {
    let result = taskList.reduce(function (total, task) {
        return total + task.name + " is " + task.age + " years old, ";
    }, "Tasks summary: ");

    return result;
}
console.log(tasks);
console.log(summary(tasks));