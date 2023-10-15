import{ faker } from "@faker-js/faker";

const FreelancersList = [

    {
        "key": 0,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5 <span>Author: Alice Walker</span></p>
    },
    {
        "key": 1,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 4 <span>Author: Roald Dahl</span></p>
    },
    {
        "key": 2,
        "avatar": faker.image.urlLoremFlickr({category:'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5 <span>Author: Arundhati Roy</span></p>
    },


]

export default FreelancersList