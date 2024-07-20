var members_invited3 = ["Ali", "Babar", "Farhan"];
var invitation3 = ("\nYou are invited for Dinner Mr.");
members_invited3.forEach(function (invite3) {
    console.log(invitation3, invite3);
});
console.log("\nHey ".concat(members_invited3[2], " there, really appologize I,m not available for Dinner"));
var newMember3 = "Asim";
var indexToRemove3 = 2;
if (indexToRemove3 >= 0 && indexToRemove3 < members_invited3.length) {
    members_invited3[indexToRemove3] = newMember3;
}
else {
    console.log("Invalid Index");
}
members_invited3.forEach(function (invite3) {
    console.log(invitation3, invite3);
});
console.log("\nHey guys, I found a bigger Dinner table for tonight.");
members_invited3.unshift("Azhar");
members_invited3.splice(2, 0, "Najam");
members_invited3.push("Basit");
members_invited3.forEach(function (invite3) {
    console.log(invitation3, invite3);
});
console.log("\nSorry Guys we only have space for 2 people only now due to some reasons.\n");
while (members_invited3.length > 2) {
    var removedGuest = members_invited3.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", you're no longer invited to dinner.\n"));
    }
}
for (var _i = 0, members_invited3_1 = members_invited3; _i < members_invited3_1.length; _i++) {
    var member = members_invited3_1[_i];
    console.log("Dear ".concat(member, ", you're still invited to dinner.\n"));
}
members_invited3.pop();
members_invited3.pop();
console.log("These are remaining members after removal: ", members_invited3);
