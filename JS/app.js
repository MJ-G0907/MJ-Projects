const courseArray = [
    {
        code: "ACIT 1620", 
        name: "Fundamental Web Technologies", 
        term: "Winter 2021",
    },

    {
        code: "ACIT 1420",
        name: "Intro to Sys. Admin",
        term: "Fall 2020",
    },

    {
        code: "ORGB 1100",
        name: "Organizational Behaviour",
        term: "Winter 2021",
    },
];

let courseCode;
do{
    courseCode = prompt("Enter a numerical four-digit code: ");
} while(isNaN(courseCode) === true || courseCode.length != 4);

for (let item of courseArray) {
    
    if (item.code === "ACIT 1620" && item.name === "Fundamental Web Technologies") {
        console.log(`Yes I am taking this course: ${item.code} - ${item.name}.`);
    }

    else {

    }

}

