let members_invited3: string[] = ["Ali","Babar","Farhan"];
let invitation3: string = ("\nYou are invited for Dinner Mr.")
members_invited3.forEach((invite3 : string) => {
    console.log(invitation3,invite3);
});
console.log(`\nHey ${members_invited3[2]} there, really appologize I,m not available for Dinner`);
let newMember3: string = "Asim";
let indexToRemove3: number = 2;
if(indexToRemove3 >= 0 && indexToRemove3 < members_invited3.length){
    members_invited3[indexToRemove3] = newMember3;
}
else{
    console.log("Invalid Index");
}
members_invited3.forEach((invite3 : string) => {
    console.log(invitation3,invite3);
});
console.log("\nHey guys, I found a bigger Dinner table for tonight.");

members_invited3.unshift("Azhar");
members_invited3.splice(2,0,"Najam");
members_invited3.push("Basit");

members_invited3.forEach((invite3 : string) => {
    console.log(invitation3,invite3);
});
console.log("\nSorry Guys we only have space for 2 people only now due to some reasons.\n");
while (members_invited3.length > 2) {
    const removedGuest: string | undefined = members_invited3.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.\n`);
    }
}
for (const member of members_invited3) {
    console.log(`Dear ${member}, you're still invited to dinner.\n`);
}
members_invited3.pop();
members_invited3.pop();
console.log("These are remaining members after removal: ",members_invited3);