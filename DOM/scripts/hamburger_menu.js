export default function hamburgerMenu(panelBtn,uno,dos,tres,panel,menuLink){
    
    document.addEventListener("click", e =>{
        if(e.target.matches(panelBtn) || e.target.matches(uno) || e.target.matches(dos) || e.target.matches(tres)){
            document.querySelector(panel).classList.toggle("active");
            document.querySelector(panelBtn).classList.toggle("efect")
        }

        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove("active");
            document.querySelector(panelBtn).classList.remove("efect")
        }
    })

}