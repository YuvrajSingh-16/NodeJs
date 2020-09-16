// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x*x  // Short hand method
// console.log(square(3))

////  Arrow functions don't bind their this value 
//// they access the this value from the context they were created 

const event = {
    name: "Birthday Party",
    GuestList: ["Yuvraj", "Rajat", "Zack"],
    printGuestList() {
        console.log("Guest list for :", this.name)
        this.GuestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()