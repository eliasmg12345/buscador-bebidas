import { Image, Modal } from "react-bootstrap"
import useBebida from "../hooks/useBebida"


const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebida()
    
    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i = 0; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={i}>
                        {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y Cantidad</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida