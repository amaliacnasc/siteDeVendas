    let linksInternos = document.querySelectorAll('a[href^="#"]');
    console.log(linksInternos);

    linksInternos.forEach(function (element) {
        element.addEventListener('click', clicou)
    }); 

    function clicou(event) {
        event.preventDefault(); 
        let href = event.currentTarget.getAttribute('href');
        let secao = document.querySelector(href)
        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        console.log(secao)
    }