import { useState } from "react";

const PetForm = ({pets}) => {
const [newPet, setNewPet] = useState({
    name:"",
    type:"",
    breed:"",
    age:0
})

const handleChange = (e) => {
    const petName = e.target.name;
    const copiedPet = {...newPet};
    copiedPet[petName] = e.target.value
    setNewPet(copiedPet);
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(newPet);
}

return (
    <form id="pet-form" onSubmit={handleFormSubmit}>
        <h3>Add a new pet</h3>
        <label htmlFor="pet-name">Pet Name:</label>
        <input 
        id="pet-name"
        name="name"
        type="text"
        placeholder="Enter pet name "
        onChange={handleChange}
        />
        <label htmlFor="type">Pet Type:</label>
        <input 
        id="type"
        name="type"
        type="text"
        placeholder="Enter type of pet "
        onChange={handleChange}
        />
        <label htmlFor="breed">Pet Breed:</label>
        <input 
        id="breed"
        name="breed"
        type="text"
        placeholder="Enter pet's breed "
        onChange={handleChange}
        />
         <label htmlFor="age">Pet Age:</label>
        <input 
        id="age"
        name="age"
        type="number"
        placeholder="Enter pet's age "
        onChange={handleChange}
        />
    </form>
)
} 