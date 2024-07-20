var members_invited2 = ["Ali\n", "Babar\n", "Farhan"];
var invitation2 = ("You are invited for Dinner Mr.");
members_invited2.forEach(function (invite2) {
    console.log(invitation2, invite2);
});
console.log("\nHey ".concat(members_invited2[2], " there, really appologize I,m not available for Dinner\n"));
var newMember2 = "Asim\n";
var indexToRemove2 = 2;
if (indexToRemove2 >= 0 && indexToRemove2 < members_invited2.length) {
    members_invited2[indexToRemove2] = newMember2;
}
else {
    console.log("Invalid Index");
}
members_invited2.forEach(function (invite2) {
    console.log(invitation2, invite2);
});
console.log(members_invited2);
console.log("\nHey guys, I found a bigger Dinner table for tonight.\n");
members_invited2.unshift("Azhar\n");
members_invited2.splice(2, 0, "Najam\n");
members_invited2.push("Basit\n");
members_invited2.forEach(function (invite2) {
    console.log(invitation2, invite2);
});
