import { useState } from 'react'
import { Link } from 'react-router-dom';

function Ex01() {
    const [nomeproduto, setNomeproduto] = useState("NomeProduto")
    const [preco, setPreco ] = useState("Preço")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        console.log (nomeproduto, preco)
        setResultado()
    }


    return (
        <>
            <h2>Exercício 01</h2>
            <p>1. Peça ao usuário o nome de um produto e o preço.
                Mostre uma mensagem dizendo quanto custa o produto.</p>

            <section>

                <form>
                    <isabel>Nome do Produto</isabel>
                    <input
                        type="text"
                        value={nomeproduto}
                        onChange={(event) => setNomeproduto(event.target.value)}
                    />
                    <isabel>Preço</isabel>
                    <input
                        type="text"
                        value={preco}
                        onChange={(event) => setPreco(event.target.value)}
                    />

                    <p>{resultado}</p>

                </form>
            </section>
        </>
    )
}

export default Ex01