import { useState } from "react"
import axios from "axios";

export const Entrar = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    async function entrar(e) {
        try {
            e.preventDefault();
            var usuarioObjt = {
                usuario,
                password
            }
            const res = await axios.post('https://xenipal-data-production.up.railway.app/api/entrar', usuarioObjt)
            if (res.data !== "12e1293f-06dc-4de9-9e9d-40afef9e35e9") {
                window.location.href="/"
                localStorage.setItem('usuario', res.data)
                localStorage.setItem('planta1', "planta1")
                localStorage.setItem('planta2', "planta2")
                localStorage.setItem('planta3', "planta3")
                localStorage.setItem('planta4', "planta4")
                localStorage.setItem('planta5', "planta5")
                localStorage.setItem('planta6', "planta6")
            }else{
                document.getElementById("warnings").innerHTML = "El usuario no existe"
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return <>
        <form id="form" onSubmit={entrar}>
            <div class="fondo">
                <div class="container">
                    <div id="forme">
                        <div class="logo"><img src="img/logo.png" alt="logo"/></div>
                        <h2 class="iniciar-sesion">Iniciar sesión</h2>
                        <div class="rellenar">
                            <div class="nom"><i class="fa-solid fa-user"></i><input type="text" name="usuario" id="usuario" placeholder="Usuario" required autoComplete="off" value={usuario} onChange={(e) => { setUsuario(e.target.value) }}/></div>
                            <div class="port"><i class="fa-solid fa-paperclip"></i><input type="text" name="enlace" id="enlace" placeholder="Vínculo" required autoComplete="off" onChange={(e) => { localStorage.setItem("enlace", e.target.value) }}/></div>
                            <div class="pass"><i class="fa-solid fa-key"></i><input type="password" name="password" id="password" placeholder="Contraseña" required autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }}/></div>
                        </div>
                        <p class="warnings" id="warnings"></p>
                        <button type="submit" class="boton-registro">Iniciar sesión</button>
                        <div class="inicio">¿No tienes una cuenta? <a href='/nuevoUsuario'>Regístrate</a></div>
                    </div>
                </div>
            </div>
        </form>
    </>
}
