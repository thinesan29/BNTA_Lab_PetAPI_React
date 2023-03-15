import { useEffect, useState } from "react"
import PetList from "./PetList";

const PetContainer = () => {
const [pets, setPets] = useState([]);
const loadPetData = async() => {
    const response = await fetch ("http://localhost:8080/pets");
    const data = await response.json();
    setPets(data);
}

useEffect(() => {
        loadPetData();

},[])

return(
    <>
    <PetList pets={pets}/>

    </>
)
}

export default PetContainer;