const name = "Yuvraj"
const UserAge = 19

const user = {
    name,
    UserAge,
    location: "India"
}

console.log(user)

const obj = {
    label: "Red notebook",
    pages: 200,
    edition: 2020,
    author: "UVSinghK",
    rating: 4,
    stock: 201
}

const {label, edition, author:auth, rating = 5} = obj

console.log(label, auth, rating)

const transaction = (type, {label, author}) => {
    console.log(type, label, author)
}

transaction("order", obj)