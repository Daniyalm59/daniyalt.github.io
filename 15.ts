let members_invited1: string[] = ["Ali\n","Babar\n","Farhan"];
let invitation1: string = ("You are invited for Dinner Mr.")
members_invited1.forEach((invite1 : string) => {
    console.log(invitation1,invite1);
});
console.log(`\nHey ${members_invited1[2]} there, really appologize I,m not available for Dinner\n`);
let newMember: string = "Asim\n";
let indexToRemove: number = 2;
if(indexToRemove >= 0 && indexToRemove < members_invited1.length){
    members_invited1[indexToRemove] = newMember;
}
else{
    console.log("Invalid Index");
}
members_invited1.forEach((invite1 : string) => {
    console.log(invitation1,invite1);
});