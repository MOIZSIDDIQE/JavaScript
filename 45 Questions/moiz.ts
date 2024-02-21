//TASK 1:COMPLETED
//TASK 2:
let  Name= "Mubeen Chohan";
console.log("hello" , Name+"," ,`"Do you know.you should learn any Computer course."`);

//TASK 3:
let personName="Moiz siddiq";
console.log( "lowercase:", personName.toLowerCase ());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase", personName.replace(/\b\w/g, c=> c.toUpperCase()));

//TASK 4:
let famous_person:string = "Quaid-e-Azam";
let Quote:string="Think 100 times before you take a decision, but once that decision is taken, stand by it as one man";
console.log(`${famous_person} once said, "${Quote}"`);

//TASK 5 :
let Author = "Allama Iqbal";
let quote=" Do not beg for light from the moon, obtain it from the spark within you.";
let message= `${Author} once said , "${quote}"`;
console.log(message);

//TASK 6:
let person="\t\n moiz \t\n"
console.log("original:" , person );
console.log("stripped:" , person.trim());


//TASK 7 and 8 :
console.log(5+3)
console.log(12-4)
console.log(4*2)
console.log(16/2)

//TASK 9 and 10:
//Author : [ Moiz siddiq ]
//Date : [Sunday , february 18 , 2024]
//printing my favourite number.
let favouriteNumber=7;
//Revealing my favourite number in this message.
console.log(`This is my favourite number "${favouriteNumber}"`)

//TASK 11:
let names =["Arif","Asif","Kashif"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

//TASK 12:
let Names =["Arif","Asif","Kashif"]
let Message="have you completed your work."
console.log(names[0] + " "+ Message)
console.log(names[1] + " "+ Message)
console.log(names[2] + " "+ Message)

//TASK 13:

let transport=["Audi","Ferrari", "Bugatti"];
transport.map((items) => console.log(`I have a ${items}`));

//TASK 14:
let guest = ["Raza", "Mohsin", "Sufyan"]
guest.map((items) => console.log(`Dear ${items}, you are invited in school program.`));

//TASK 15:
let Guest=["Raza", "Mohsin", "Sufyan"];
let absent="Sufyan";

// console.log(absent + " "+  "can not attend the school program.")

let newGuest="Hussain";
Guest [Guest.indexOf(absent)]=newGuest;

// console.log(Guest);

Guest.map((items) => console.log(`Dear ${items}, you are invited in school program.`));

//TASK 16:PART 1:
console.log( "                                                            TASK 16                                                  "                                                      );

let _Guest=["Muneeb","Haider","Moiz","Wajid"];
let Absent="Moiz"
let New_guest="Muheeb";
_Guest[_Guest.indexOf(Absent)]=New_guest;
console.log(_Guest);
// _Guest.map((items) => console.log(`Dear ${_Guest},I have arranged a big dinner table.`))

//PART 2:
let guest2="Hamza";
_Guest.unshift(guest2)
console.log(_Guest);

//PART 3:
let MiddleGuest="Mubeen";
let MiddleIndex=MiddleGuest.length/3;
_Guest.splice( MiddleIndex ,0 ,MiddleGuest);
console.log(_Guest);



//PART 4:
_Guest.push("Ali")
console.log(_Guest);

//PART 5:
_Guest.map ((items) => console.log(`Dear ${items}, you are invited on my birthday.`));




