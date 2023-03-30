export const Inicio=()=>{

    if (localStorage.getItem("usuario") === null){
        localStorage.setItem("usuario", "12e1293f-06dc-4de9-9e9d-40afef9e35e9")
        window.location.reload();
    }

    function click(){
        window.location.href= '/entrar';
        localStorage.setItem("usuario", "12e1293f-06dc-4de9-9e9d-40afef9e35e9")
    }

    return <>
        <iframe src={localStorage.getItem("enlace")} title="Principal"></iframe>
        <div class="salir" onClick={click}><i class="fa-solid fa-door-open fa-lg"></i></div>
    </>
}