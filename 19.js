var guests_invited = ["Ali", "Babar", "Farhan"];
var guest_invitation = ("You are invited for Dinner Mr.");
guests_invited.forEach(function (invite_) {
    console.log(guest_invitation, invite_);
});
console.log("The Number of People invited in Dinner are: ", guests_invited.length);
