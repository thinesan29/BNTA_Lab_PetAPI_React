import Pet from "./Pet";

const PetList = ({pets}) => {
    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>

    })
    return <>{petComponents}</>
}

export default PetList;