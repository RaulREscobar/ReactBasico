import React, { useState } from 'react';

/* ESTA ES UNA FORMA DE HACERLO CON UNA VARIABLE DE ESTADO POR CADA DATO PEDIDO

export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);
    
    const handleSubmit = () => {
        e.preventDefault();
        alert("El formnulario se envio");
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <p>Elije tu sabor JS Favorito</p>
                <input
                    type="radio"
                    name="sabor"
                    id="vanilla"
                    value="vanilla"
                    onChange={(e) => setSabor(e.target.value)}
                    defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>

                <input
                    type="radio"
                    name="sabor"
                    id="react"
                    value="react"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="react">React</label>

                <input
                    type="radio"
                    name="sabor"
                    id="angular"
                    value="angular"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="angular">Angular</label>

                <input
                    type="radio"
                    name="sabor"
                    id="vue"
                    value="vue"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="vue">Vue</label>

                <input
                    type="radio"
                    name="sabor"
                    id="svelte"
                    value="svelte"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="svelte">Svelte</label>

                <p>Elije tu lenguaje de programación Favorito</p>

                <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    onChange={(e) => setTerminos(e.target.checked)}
                />
                <input type="submit"/>
            </form>
        </>
    );
} */


/* ACA SE HACE UNA FUNCION QUE AGARRA TODOS LOS DATOS Y LOS PONE EN UN OBJETO */

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    };



    const handleSubmit = () => {
        e.preventDefault();
        alert("El formnulario se envio");
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name='nombre'
                    value={form.nombre}
                    onChange={handleChange}
                />
                <p>Elije tu sabor JS Favorito</p>
                <input
                    type="radio"
                    name="sabor"
                    id="vanilla"
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>

                <input
                    type="radio"
                    name="sabor"
                    id="react"
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>

                <input
                    type="radio"
                    name="sabor"
                    id="angular"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>

                <input
                    type="radio"
                    name="sabor"
                    id="vue"
                    value="vue"
                    onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>

                <input
                    type="radio"
                    name="sabor"
                    id="svelte"
                    value="svelte"
                    onChange={handleChange}
                />
                <label htmlFor="svelte">Svelte</label>

                <p>Elije tu lenguaje de programación Favorito</p>

                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    onChange={handleCheked}
                />
                <input type="submit" />
            </form>
        </>
    );
}