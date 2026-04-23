import { useState } from 'react'

function Ex01() {
    return (
        <main>
            <section>
                <h2>Exercício 01</h2>
                <p>1. Peça ao usuário o nome de um produto e o preço.
                    Mostre uma mensagem dizendo quanto custa o produto.</p>
            </section>
            <section>
                <form>
                    <p>Nome Completo</p>
                    <input type="text" />
                    <p>CPF:</p>
                    <input type="text" />
                    <p>Telefone</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="text" />
                    <p>Senha</p>
                    <input type="text" />
                </form>
            </section>
        </main>
    )
}

export default Ex01