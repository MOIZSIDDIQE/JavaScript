// //TASK 1:COMPLETED
// //TASK 2:
// let Name = "Mubeen Chohan";
// console.log("hello", Name + ",", `"Do you know.you should learn any Computer course."`);

import { log } from "console";

// //TASK 3:
// let personName = "Moiz siddiq";
// console.log("lowercase:", personName.toLowerCase());
// console.log("uppercase:", personName.toUpperCase());
// console.log("titlecase", personName.replace(/\b\w/g, c => c.toUpperCase()));

// //TASK 4:
// let famous_person: string = "Quaid-e-Azam";
// let Quote: string = "Think 100 times before you take a decision, but once that decision is taken, stand by it as one man";
// console.log(`${famous_person} once said, "${Quote}"`);

// //TASK 5 :
// let Author = "Allama Iqbal";
// let quote = " Do not beg for light from the moon, obtain it from the spark within you.";
// let message = `${Author} once said , "${quote}"`;
// console.log(message);

// //TASK 6:
// let person = "\t\n moiz \t\n"
// console.log("original:", person);
// console.log("stripped:", person.trim());


// //TASK 7 and 8 :
// console.log(5 + 3)
// console.log(12 - 4)
// console.log(4 * 2)
// console.log(16 / 2)

// //TASK 9 and 10:
// //Author : [ Moiz siddiq ]
// //Date : [Sunday , february 18 , 2024]
// //printing my favourite number.
// let favouriteNumber = 7;
// //Revealing my favourite number in this message.
// console.log(`This is my favourite number "${favouriteNumber}"`)

// //TASK 11:
// let names = ["Arif", "Asif", "Kashif"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// //TASK 12:
// let Names = ["Arif", "Asif", "Kashif"]
// let Message = "have you completed your work."
// console.log(names[0] + " " + Message)
// console.log(names[1] + " " + Message)
// console.log(names[2] + " " + Message)

// //TASK 13:

// let transport = ["Audi", "Ferrari", "Bugatti"];
// transport.map((items) => console.log(`I have a ${items}`));

// //TASK 14:
// let guest = ["Raza", "Mohsin", "Sufyan"]
// guest.map((items) => console.log(`Dear ${items}, you are invited in school program.`));

// //TASK 15:
// let Guest = ["Raza", "Mohsin", "Sufyan"];
// let absent = "Sufyan";

// // console.log(absent + " "+  "can not attend the school program.")

// let newGuest = "Hussain";
// Guest[Guest.indexOf(absent)] = newGuest;

// // console.log(Guest);

// Guest.map((items) => console.log(`Dear ${items}, you are invited in school program.`));

// //TASK 16:PART 1:
// console.log("                                                            TASK 16                                                  ");

// let _Guest = ["Muneeb", "Haider", "Moiz", "Wajid"];
// let Absent = "Moiz"
// let New_guest = "Muheeb";
// _Guest[_Guest.indexOf(Absent)] = New_guest;
// console.log(_Guest);
// // _Guest.map((items) => console.log(`Dear ${_Guest},I have arranged a big dinner table.`))

// //PART 2:
// let guest2 = "Hamza";
// _Guest.unshift(guest2)
// console.log(_Guest);

// //PART 3:
// let MiddleGuest = "Mubeen";
// let MiddleIndex = MiddleGuest.length / 3;
// _Guest.splice(MiddleIndex, 0, MiddleGuest);
// console.log(_Guest);



// //PART 4:
// _Guest.push("Ali")
// console.log(_Guest);

// //PART 5:
// _Guest.map((items) => console.log(`Dear ${items}, you are invited on my birthday.`));


// //ASK 17:
// let G_list1 = ["Muneeb", "Haider", "Moiz", "Wajid", "Sameer"];
// console.log(`sorry guests i cant arrange big tabe , thats why only two people invited for the dinner.\n `);

// while (G_list1.length > 2) {
//     const removeGuest = G_list1.pop()
//     console.log(`Sorry ${removeGuest}, now you are not invited for the dinner.`);
// }
// G_list1.forEach((guest) => {
//     console.log(`Dear ${guest}, you are invited to the dinner.`);
// })
// console.log(`Final guest List ${G_list1}`);



// //                                                 TASK 18:
// let countries = ["Tokyo", "Pakistan", "America", "China", "Japan"]

// console.log("Original order:", countries);

// console.log("Alphabetical order:", [...countries].sort());

// console.log("Original order after sorting:", countries);

// console.log("Reverse Alphabetical order:", [...countries].sort().reverse());

// console.log("Original order after reverse sorting", countries);

// countries.reverse();
// console.log("Reverse order :", countries);

// countries.sort();
// console.log("sorted in alphabetical order:", countries);

// countries.sort((a, b) => b.localeCompare(a));
// console.log("sorted in reverse alphabetical order:", countries);

// //                                                TASK 19:

// let G_list2: string[] = ["Muneeb", "Haider"]
// let count_G_list2: number = G_list2.length;
// console.log(`${count_G_list2} people invited for the dinner.`);

// //                                                  TASK 20:
// let Cities: string[] = ["Karachi", "Islamabad", "Peshawar", "Quetta"];
// console.log("List of cities:");
// console.log(Cities);

// //                                                  TASK 21:
// let Person: { name: string, Fname: string, Age: number } = { name: "Moiz", Fname: "Siddiq", Age: 17 };
// console.log(Person);

// //                                                    TASK 22:
// const Days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// // console.log(Days{6});  //Error
// console.log(Days[5]);

// //                                                    TASK 23:
// let bike = "honda";
// console.log("is bike ==`honda`? predict true.");
// console.log(bike == `honda`);

// console.log("is bike !=`super star`? predict true.");
// console.log(bike != `super star`);

// console.log("is bike == `honda` && bike.length = 5? predict false");
// console.log(bike == `honda` && bike.length == 5);


// console.log("is bike.length ==5? predict true.");
// console.log(bike.length == 5);

// console.log("is bike.length != 9 ? predict true");
// console.log(bike.length != 9);

// console.log("is 4>5 ? predict false");
// console.log(4 > 5);

// console.log("is 6 < 2? predict false");
// console.log(6 < 2);

// console.log("is 56<= 55? predict false");
// console.log(56 <= 55);

// console.log("is 27 >= 30 ? predict false");
// console.log(27 >= 30);

// console.log("is 67 != 67? predict false");
// console.log(67 != 67);

// //                                                        TASK 24:
// let Name_1 = "Moiz"
// let Name_2 = "Moiz siddiq"
// let Name_3 = "Moiz muhammad siddiq"

// if (Name_1 == Name_2) {
//     console.log("names are equal");
// } else {
//     console.log("names are not equal");
// }

// if (Name_1 != Name_2) {
//     console.log("names are equal ");
// }

// if (Name_2 == Name_3) {
//     console.log("names are equal")
// }

// let age_1: number = 18;
// let age_2: number = 25;

// if (age_1 == 18) {
//     console.log("can give vote");
// }

// if (age_1 != 24) {
//     console.log("can get job");
// }
// if (age_1 != age_2) {
//     console.log("this is equal ");
// } else {
//     console.log("this is not equal ")
// }

// if (age_2 >= age_1) {
//     console.log("younger");
// }
// if (age_1 <= age_2) {
//     console.log("older");
// }

// if (age_1 == 18 && age_2 == 25) {
//     console.log("peson is eligible for vote");
// }
// if (age_1 == 18 || age_2 != 25) {
//     console.log("person is not eligible for vote");

// }
// let country: string[] = ["Pakistan", "Afghanistan", "Indonesia", "Palestine"]

// if (country.includes("Indonesia")) {
//     console.log("Indonesia is a good country");
// }
// if (!country.includes("India")) {
//     console.log("India is not include in array");

// }


// //                                                   TASK 25:
// let alien = "green";

// if (alien == "green")
//     console.log("you earn 5 points");

// if (alien == "yellow")
//     console.log("no output");

// //                                                   TASK 26:

// let alien_color = "green";

// if (alien_color == "green") {
//     console.log("player just  earned 5 points for shooting the alien");
// } else {
//     console.log("player just earned 10 point");
// }

// if (alien_color == "white") {
//     console.log("player just  earned 5 points for shooting the alien");
// } else {
//     console.log("player just earned 10 point");
// }

// //                                                      TASK 27:
// let alien_1_C = "red";

// if (alien_1_C == "brown") {
//     console.log("5 points")
// } else if (alien_1_C == "pink") {
//     console.log("10 points");
// } else {
//     console.log("15 points");

// }

// //                                                        TASK 28:
// let age = 100;

// if (age < 2) {
//     console.log("you are a baby")
// } else if (age < 4) {
//     console.log("you are a toddler");
// } else if (age < 13) {
//     console.log("you are a kid");
// } else if (age < 20) {
//     console.log("you are a teenager")
// } else if (age < 65) {
//     console.log("ou are a adult");
// } else {
//     console.log("you are older");
// }

// //                                                 TASK 29:
// let favourite_fruit: string[] = ["orange", "strawberry", "banana"];

// if (favourite_fruit.includes("orange")) {
//     console.log("are you like orange");
// }
// if (favourite_fruit.includes("strawberry")) {
//     console.log("are you like strawberry");
// }
// if (favourite_fruit.includes("apple")) {
//     console.log("are you like apple");
// }
// if (favourite_fruit.includes("banana")) {
//     console.log("are you like banana");
// }
// if (favourite_fruit.includes("berry")) {
//     console.log("are you like berry")
// }

// //                                                   TASK 30:
// let users: string[] = ["farooq", "shahzain", "anus", "hassan", "noman"]

// for (let user of users) {
//     if (user === "farooq") {
//         console.log(`hello farooq, Thanks to visit our website`);
//     }else{
//         console.log(`hello ${user}, will you complete your work.`);
//     }
// }

// //                                                    TASK 31:

// let Users=["farooq", "shahzain", "anus", "hassan", "noman"];

// if (Users.length===5){
//     console.log("we need to find some users ");
// }else{
//     for(let User of Users){
//        if(User ==="farooq"){
//           console.log("hello farooq ,thanks to visit our website. ");
//        }else{
//         console.log(`hello ${User}, will you complete your work.`);

//        }     
//     }
// }

// //                                                   TASK 32:
// let current_users: string[] = ["Farooq", "shahzain", "Anus", "hassan", "Noman"];
// let new_users = ["Farooq", "Shahzain", "Muneeb", "Kamran", "Salman"];

// let current_users_lower = current_users.map(user => user.toLowerCase());

// for (let new_user of new_users) {
//   if (current_users_lower.includes(new_user.toLowerCase())) {
//     console.log(`sorry ${new_user}, this name is not available`);
//   } else {
//     console.log(`yes ${new_user}, this name is available`);

//   }
// }

// //                                                        TASK 33:
// let numbers=[1,2,3,4,5,6,7,8,9];

// for(let number of numbers){
//   if(number===1){
//     console.log(`${number}st`);
//   }else if(number===2){
//     console.log(`${number}nd`);
//   }else if(number===3){
//     console.log(`${number}rd`);
//   }else{
//     console.log(`${number}th`);

//   }
// }

// //                                                       TASK:34

// let F_pizza:string [] = ["Chicken","Mailai","Tandori"];

// for(let pizza of F_pizza){
//   console.log(pizza);
// }

// for(let pizza of F_pizza){
//   console.log(`Do you like to eat ${pizza}pizza ?`);
// }
// console.log("I love every kind of pizza.");

//                                                     TASK :35
let animals: string[] = ["lion", "tiger", "panther"];
for (let animal of animals) {
  console.log(animal);
}
console.log(" \n ");

for(let animal of animals){
  console.log(`A ${animal} eat meat.`);
}
console.log("\n These all are brave animals but the lion is the bravest animal in these");













