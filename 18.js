var locations = ["US", "Dubai", "London", "Australia", "Russia", "Japan"];
console.log("List in original order: ", locations);
var sorted_list = locations.slice();
sorted_list.sort();
console.log("List in alphabetical order: ", sorted_list);
console.log("List is still in its original order: ", locations);
var sorted_list_reverse = locations.slice();
sorted_list_reverse.sort(function (a, b) { return b.localeCompare(a); });
console.log("List in Reverse Alphabetical order: ", sorted_list_reverse);
console.log("List is still in its original order: ", locations);
var reverse_order = locations.slice();
reverse_order.reverse();
console.log("List is in reverse order: ", reverse_order);
console.log("List is still in orignal order: ", locations);
locations.sort();
console.log("List is sorted in Alphabetical order", locations);
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("List is sorted in Reverse Alphabetical order", locations);
