//TASK 1:COMPLETED
//TASK 2:
var Name = "Mubeen Chohan,";
console.log("hello", Name, "".concat("Do you know.you should learn any Computer course."));
//TASK 3:
var personName = "Moiz siddiq";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//TASK 4:
var famous_person = "Quaid-e-Azam";
var Quote = "Think 100 times before you take a decision, but once that decision is taken, stand by it as one man";
console.log("".concat(famous_person, " once said, \"").concat(Quote, "\""));
//TASK 5 :
var Author = "Allama Iqbal";
var quote = " Do not beg for light from the moon, obtain it from the spark within you.";
var message = "".concat(Author, " once said , \"").concat(quote, "\"");
console.log(message);
//TASK 6:
var person = "\t\n moiz \t\n";
console.log("original:", person);
console.log("stripped:", person.trim());
//TASK 7 and 8 :
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
//TASK 9 and 10:
//Author : [ Moiz siddiq ]
//Date : [Sunday , february 18 , 2024]
//printing my favourite number.
var favouriteNumber = 7;
//Revealing my favourite number in this message.
console.log("This is my favourite number \"".concat(favouriteNumber, "\""));
//TASK 11:
var names = ["Arif", "Asif", "Kashif"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//TASK 12:
var Names = ["Arif", "Asif", "Kashif"];
var Message = "have you completed your work.";
console.log(names[0] + " " + Message);
console.log(names[1] + " " + Message);
console.log(names[2] + " " + Message);
//TASK 13:
var transport = ["Audi", "Ferrari", "Bugatti"];
transport.map(function (items) { return console.log("I have a ".concat(items)); });
//TASK 14:
var guest = ["Raza", "Mohsin", "Sufyan"];
guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited in school program.")); });
//TASK 15:
var Guest = ["Raza", "Mohsin", "Sufyan"];
var absent = "Sufyan";
// console.log(absent + " "+  "can not attend the school program.")
var newGuest = "Hussain";
Guest[Guest.indexOf(absent)] = newGuest;
// console.log(Guest);
Guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited in school program.")); });
//TASK 16:PART 1:
console.log("                                                            TASK 16                                                  ");
var _Guest = ["Muneeb", "Haider", "Moiz", "Wajid"];
var Absent = "Moiz";
var New_guest = "Muheeb";
_Guest[_Guest.indexOf(Absent)] = New_guest;
console.log(_Guest);
// _Guest.map((items) => console.log(`Dear ${_Guest},I have arranged a big dinner table.`))
//PART 2:
var guest2 = "Hamza";
_Guest.unshift(guest2);
console.log(_Guest);
var MiddleGuest = "Mubeen";
var MiddleIndex = MiddleGuest.length / 3;
_Guest.splice(MiddleIndex, 0, MiddleGuest);
console.log(_Guest);
_Guest.push("Ali");
console.log(_Guest);
_Guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited on my birthday.")); });
