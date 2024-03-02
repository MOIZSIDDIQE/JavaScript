var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//TASK 1:COMPLETED
//TASK 2:
var Name = "Mubeen Chohan";
console.log("hello", Name + ",", "\"Do you know.you should learn any Computer course.\"");
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
//PART 3:
var MiddleGuest = "Mubeen";
var MiddleIndex = MiddleGuest.length / 3;
_Guest.splice(MiddleIndex, 0, MiddleGuest);
console.log(_Guest);
//PART 4:
_Guest.push("Ali");
console.log(_Guest);
//PART 5:
_Guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited on my birthday.")); });
//ASK 17:
var G_list1 = ["Muneeb", "Haider", "Moiz", "Wajid", "Sameer"];
console.log("sorry guests i cant arrange big tabe , thats why only two people invited for the dinner.\n ");
while (G_list1.length > 2) {
    var removeGuest = G_list1.pop();
    console.log("Sorry ".concat(removeGuest, ", now you are not invited for the dinner."));
}
G_list1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to the dinner."));
});
console.log("Final guest List ".concat(G_list1));
//                                                 TASK 18:
var countries = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("Original order:", countries);
console.log("Alphabetical order:", __spreadArray([], countries, true).sort());
console.log("Original order after sorting:", countries);
console.log("Reverse Alphabetical order:", __spreadArray([], countries, true).sort().reverse());
console.log("Original order after reverse sorting", countries);
countries.reverse();
console.log("Reverse order :", countries);
countries.sort();
console.log("sorted in alphabetical order:", countries);
countries.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", countries);
//                                                TASK 19:
var G_list2 = ["Muneeb", "Haider"];
var count_G_list2 = G_list2.length;
console.log("".concat(count_G_list2, " people invited for the dinner."));
//                                                  TASK 20:
var Cities = ["Karachi", "Islamabad", "Peshawar", "Quetta"];
console.log("List of cities:");
console.log(Cities);
//                                                  TASK 21:
var Person = { name: "Moiz", Fname: "Siddiq", Age: 17 };
console.log(Person);
//                                                    TASK 22:
var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(Days{6});  //Error
console.log(Days[5]);
//                                                    TASK 23:
var bike = "honda";
console.log("is bike ==`honda`? predict true.");
console.log(bike == "honda");
console.log("is bike !=`super star`? predict true.");
console.log(bike != "super star");
console.log("is bike == `honda` && bike.length = 5? predict false");
console.log(bike == "honda" && bike.length == 5);
console.log("is bike.length ==5? predict true.");
console.log(bike.length == 5);
console.log("is bike.length != 9 ? predict true");
console.log(bike.length != 9);
console.log("is 4>5 ? predict false");
console.log(4 > 5);
console.log("is 6 < 2? predict false");
console.log(6 < 2);
console.log("is 56<= 55? predict false");
console.log(56 <= 55);
console.log("is 27 >= 30 ? predict false");
console.log(27 >= 30);
console.log("is 67 != 67? predict false");
console.log(67 != 67);
//                                                        TASK 24:
var Name_1 = "Moiz";
var Name_2 = "Moiz siddiq";
var Name_3 = "Moiz muhammad siddiq";
if (Name_1 == Name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (Name_1 != Name_2) {
    console.log("names are equal ");
}
if (Name_2 == Name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 25;
if (age_1 == 18) {
    console.log("can give vote");
}
if (age_1 != 24) {
    console.log("can get job");
}
if (age_1 != age_2) {
    console.log("this is equal ");
}
else {
    console.log("this is not equal ");
}
if (age_2 >= age_1) {
    console.log("younger");
}
if (age_1 <= age_2) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 25) {
    console.log("peson is eligible for vote");
}
if (age_1 == 18 || age_2 != 25) {
    console.log("person is not eligible for vote");
}
var country = ["Pakistan", "Afghanistan", "Indonesia", "Palestine"];
if (country.includes("Indonesia")) {
    console.log("Indonesia is a good country");
}
if (!country.includes("India")) {
    console.log("India is not include in array");
}
//                                                   TASK 25:
var alien = "green";
if (alien == "green")
    console.log("you earn 5 points");
if (alien == "yellow")
    console.log("no output");
//                                                   TASK 26:
var alien_color = "green";
if (alien_color == "green") {
    console.log("player just  earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 point");
}
if (alien_color == "white") {
    console.log("player just  earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 point");
}
//                                                      TASK 27:
var alien_1_C = "red";
if (alien_1_C == "brown") {
    console.log("5 points");
}
else if (alien_1_C == "pink") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
//                                                        TASK 28:
var age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("ou are a adult");
}
else {
    console.log("you are older");
}
//                                                 TASK 29:
var favourite_fruit = ["orange", "strawberry", "banana"];
if (favourite_fruit.includes("orange")) {
    console.log("are you like orange");
}
if (favourite_fruit.includes("strawberry")) {
    console.log("are you like strawberry");
}
if (favourite_fruit.includes("apple")) {
    console.log("are you like apple");
}
if (favourite_fruit.includes("banana")) {
    console.log("are you like banana");
}
if (favourite_fruit.includes("berry")) {
    console.log("are you like berry");
}
//                                                   TASK 30:
var users = ["farooq", "shahzain", "anus", "hassan", "noman"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "farooq") {
        console.log("hello farooq, Thanks to visit our website");
    }
    else {
        console.log("hello ".concat(user, ", will you complete your work."));
    }
}
