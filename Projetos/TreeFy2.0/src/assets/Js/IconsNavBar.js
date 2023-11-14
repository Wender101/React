//? Vai colocar um background no li de icone de acordo com o que estiver escrito nele
function iconesNavBar() {
    const lis = document.getElementsByClassName('liIcons')

    for (let i = 0; i < lis.length; i++) {
        const li = lis[i]
        const iconText = li.textContent.trim()
        const imagePath = `src/assets/Imgs/icons/${iconText}.png`

        li.style.backgroundImage = `url(${imagePath})`
        li.textContent = ''

        li.addEventListener('click', () => {
            fecharAbas().then(() => {
                document.getElementById(`${iconText}Page`).style.display = 'block'
            })
        })
    }
}

function fecharAbas() {
    return new Promise((resolve, reject) => {
        // Seleciona todos os elementos com a classe "minha-classe"
        const Pages = document.querySelectorAll('.Pages');

        // Agora, você pode percorrer os elementos usando um loop "for" em JavaScript
        for (let i = 0; i < Pages.length; i++) {
            const elemento = Pages[i]
            elemento.style.display = 'none'
            console.log(elemento.textContent) // Exemplo: exibe o conteúdo de cada elemento
        }

        resolve()
    })
}

document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        iconesNavBar()
    }, 500)
})