export const Footer =() =>{
    
    const currentYear = new Date ().getFullYear();
    return(
        <>
        
        <footer>
            <p>Feito por Bethynna . Densevolvedora e Artista</p>
           <p>&copy;{currentYear} Todos os direitos reservados!</p> 
        </footer>
        </>
    )
}