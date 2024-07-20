var members_invited1 = ["Ali\n", "Babar\n", "Farhan"];
var invitation1 = ("You are invited for Dinner Mr.");
members_invited1.forEach(function (invite1) {
    console.log(invitation1, invite1);
});
console.log("\nHey ".concat(members_invited1[2], " there, really appologize I,m not available for Dinner\n"));
var newMember = "Asim\n";
var indexToRemove = 2;
if (indexToRemove >= 0 && indexToRemove < members_invited1.length) {
    members_invited1[indexToRemove] = newMember;
}
else {
    console.log("Invalid Index");
}
members_invited1.forEach(function (invite1) {
    console.log(invitation1, invite1);
});
