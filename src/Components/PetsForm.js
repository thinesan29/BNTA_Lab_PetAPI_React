import { useState } from "react"

const PetsForm = ({pets, onSubmit}) => {

    const [newPets, setNewPets] = useState({
        name: "",
        type: "",
        breed: "",
        age: 0
    })

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedPets= {...newPets};
        copiedPets[propertyName] = event.target.value;
        setNewPets(copiedPets);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(newPets);
    }

    return(
        <form id="pets-form" onSubmit={handleFormSubmit}>
            <h3>Add a new pets</h3>

            <label htmlFor="pets-name">Pets Name:</label>
            <input
                id="pets-name"
                name="name"
                type="text"
                placeholder="enter pets name"
                onChange={handleChange} 
            />

            <label htmlFor="type">Type:</label>
            <input
                id="type"
                name="type"
                type="text"
                placeholder="enter pets type"
                onChange={handleChange}
            />

            <label htmlFor="breed">Breed:</label>
            <input
                id="breed"
                name="breed"
                type="text"
                placeholder="enter pets breed"
                onChange={handleChange}
            />

            <label htmlFor="age">Age:</label>
            <input 
                id="age" 
                name="age"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
            />

            <input type="submit" value="Add Pet"/>          
        </form>
    )

}

export default PetsForm;