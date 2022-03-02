import { useState } from "react";
function Componente() {
    const [contador, setContador] = useState(0)
    return (
        <div>
            <h1>Você clicou {contador} vezes</h1>
            <button onClick={() => setContador(contador + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
export default Componente