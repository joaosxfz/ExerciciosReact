import './style.css'
import { useState } from 'react'

function Cadastro() {
    return (
        <main>
            <section>
                <h2>Cadastro</h2>
                <p>Preencha as informações abaixo para realizar seu cadastro</p>
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

export default Cadastro