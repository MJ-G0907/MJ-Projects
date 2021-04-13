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
    courseCode = prompt("Enter code: ");
} while(isNaN(courseCode) === true || courseCode.length != 4)

