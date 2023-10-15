import{ faker } from "@faker-js/faker";

const CustomerList = [

    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5 <span>Author: Jane</span></p>
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 3  <span>Author: Alexander Dumas</span> </p>
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5  <span>Author: Albert Camus</span></p>
    },
    


]

export default CustomerList