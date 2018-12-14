var app = angular.module("myApp");

app.value("bloodData", [
    {
        group: "A+",
        count: Math.floor(Math.random()*10),
        image: "images/a+.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["A+", "AB+"]
    },
    {
        group: "B+",
        count: Math.floor(Math.random()*10),
        image: "images/b+.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["B+", "AB+"]
    },
    {
        group: "O+",
        count: Math.floor(Math.random()*10),
        image: "images/o+.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["A+", "AB+", "B+", "O+"]
    },
    {
        group: "AB+",
        count: Math.floor(Math.random()*10),
        image: "images/ab+.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["AB+"]
    },
    {
        group: "A-",
        count: Math.floor(Math.random()*10),
        image: "images/a-.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["A+", "AB+","A-", "AB-"]
    },
    {
        group: "B-",
        count: Math.floor(Math.random()*10),
        image: "images/b-.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["B+", "AB+","B-", "AB-"]
    },
    {
        group: "O-",
        count: Math.floor(Math.random()*10),
        image: "images/o-.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["B+", "AB+","B-", "AB-", "A+","A-","O+", "O-"]
    },
    {
        group: "AB-",
        count: Math.floor(Math.random()*10),
        image: "images/ab-.png",
        canDonate: false,
        isAvailable: false,
        canDonateTo: ["AB-", "AB+"]
    }
]);
