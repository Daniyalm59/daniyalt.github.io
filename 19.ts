let guests_invited: string[] = ["Ali","Babar","Farhan"];
let guest_invitation: string = ("You are invited for Dinner Mr.")
guests_invited.forEach((invite_ : string) => {
    console.log(guest_invitation,invite_);
});
console.log("The Number of People invited in Dinner are: ",guests_invited.length);