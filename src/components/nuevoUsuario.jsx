import { useState } from "react"
import axios from "axios";

export const NuevoUsuario = () => {
    const [nombre, setnombre] = useState('');
    const [usuario, setusuario] = useState('');
    const [password, setpassword] = useState('');

    async function agregarUsuario(e) {
        try {
            e.preventDefault();
            var usuarioObjt = {
                nombre,
                usuario,
                password
            }
            //console.log(usuarioObjt);
            const res = await axios.post('https://xenipal-data-production.up.railway.app/api/nuevoUsuario', usuarioObjt)
            //console.log(res);
            if(res.data === 'Registro perfecto'){
                window.location.href = '/entrar'
            }else{
                document.getElementById("warnings").innerHTML = res.data
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return <>
        <form id="form" onSubmit={agregarUsuario}>
            <div class="fondo">
                <div class="container">
                    <div id="forme">
                        <div class="logo"><img src="img/logo.png" alt="logo"/></div>
                        <h2 class="crear-cuenta">Crear nueva cuenta</h2>
                        <div class="rellenar">
                            <div class="nom"><i class="fa-solid fa-user-tag"></i><input type="text" class="name" id="name" placeholder="Nombre" name="nombre" required autoComplete="off" value={nombre} onChange={(e) => { setnombre(e.target.value) }} /></div>
                            <div class="usu"><i class="fa-solid fa-user"></i><input type="text" class="username" id="username" placeholder="Usuario" name="username" required autoComplete="off" value={usuario} onChange={(e) => { setusuario(e.target.value) }} /></div>
                            <div class="pass"><i class="fa-solid fa-key"></i><input type="password" class="password" id="password" placeholder="Contraseña" name="password" required autoComplete="off" value={password} onChange={(e) => { setpassword(e.target.value) }} /></div>
                        </div>
                        <p class="warnings" id="warnings"></p>
                        <button type="submit" onclick='cambiar()' class="boton-registro">Registrarse</button>
                        <div class="inicio"><a href='/entrar'>o Iniciar Sesión</a></div>
                    </div>
                </div>
            </div>
        </form>
    </>
}