let members_invited2: string[] = ["Ali\n","Babar\n","Farhan"];
let invitation2: string = ("You are invited for Dinner Mr.")
members_invited2.forEach((invite2 : string) => {
    console.log(invitation2,invite2);
});
console.log(`\nHey ${members_invited2[2]} there, really appologize I,m not available for Dinner\n`);
let newMember2: string = "Asim\n";
let indexToRemove2: number = 2;
if(indexToRemove2 >= 0 && indexToRemove2 < members_invited2.length){
    members_invited2[indexToRemove2] = newMember2;
}
else{
    console.log("Invalid Index");
}
members_invited2.forEach((invite2 : string) => {
    console.log(invitation2,invite2);
});
console.log(members_invited2);
console.log("\nHey guys, I found a bigger Dinner table for tonight.\n");

members_invited2.unshift("Azhar\n");
console.log(members_invited2);
members_invited2.splice(2,0,"Najam\n");
console.log(members_invited2);
members_invited2.push("Basit\n");
console.log(members_invited2);

members_invited2.forEach((invite2 : string) => {
    console.log(members_invited2);
    console.log(invitation2,invite2);
});