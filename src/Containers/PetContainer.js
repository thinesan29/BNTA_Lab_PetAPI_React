import { useState, useEffect } from "react";
import PetsList from "../Components/PetsList";
import PetsForm from "../Components/PetsForm";

const PetsContainer = () => {

    const [pets, setPets] = useState([]);

    const loadPetsData = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json();
        setPets(data);
    }

    useEffect(() => {
        loadPetsData();
    }, []);

    const postPets= async (newPets) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPets)
        });
        const savedPets = await response.json();
        setPets([...pets, savedPets]);
    }

    const deletePets = async (id) => {
        await fetch(`http://localhost:8080/pets/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        loadPetsData();
    }



    return(
        <>
            <PetsForm 
                onSubmit={postPets}
            />
            <PetsList 
                pets={pets}
                onDelete={deletePets}
            />
        </>
    )

}

export default PetsContainer;