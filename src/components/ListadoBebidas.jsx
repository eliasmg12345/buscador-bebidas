import { Row } from "react-bootstrap"
import useBebida from "../hooks/useBebida"
import Bebida from "./Bebida"

const ListadoBebidas = () => {

    const { bebidas } = useBebida()

    return (
        <Row className="mt-5">
            {bebidas.map(bebida => (
                <Bebida
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))}
        </Row>
    )
}

export default ListadoBebidas