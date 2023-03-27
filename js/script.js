var links = document.querySelectorAll('.cabecalho h3')


links.forEach(e => {
    e.addEventListener('click', () => {
        if (!e.classList.contains('active')) {
            links.forEach(l => l.classList.remove('active'));
            e.classList.add('active');
        }
    })
})

const msg = document.getElementById("Mensagem")
const assunto = document.getElementById("Assunto")
const nome = document.getElementById("Nome")
const telefone = document.getElementById("Telefone")

document.getElementById('whatsapp').addEventListener('click', function () {


    var phone_number = "55" + "6292487077";

    if (msg.value.length > 0) {
        var message = `Assunto: ${assunto.value}, Ola me chamo ${nome.value}, meu número para contato é ${telefone.value} e gostaria de ...`
    } else {
        var message = ''
    }


    var url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);
    window.open(url);

});




document.getElementById('mail').addEventListener("click", function () {
    var emailDestinatario = "tenentecambio@gmail.com"
    var assunto = "Nova mensagem";

    if (msg.value.length > 0) {
        var message = `Assunto: ${assunto.value}, Ola me chamo ${nome.value}, meu número para contato é ${telefone.value} e gostaria de ...`
    } else {
        var message = ''
    }

    var link = "mailto:" + emailDestinatario + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(message);

    window.open(link, "_blank");
});


document.getElementById('dev').addEventListener("click", function () {
    var emailDestinatario = "luccabrasi.es@gmail.com";
    var assunto = "Novo orçamento";

    var message = `Ola, gostaria de fazer um orçamento..`

    var link = "mailto:" + emailDestinatario + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(message);

    window.open(link, "_blank");
});

// GALERIA

const items = document.querySelectorAll('.item');

const expand = (item, i) => {
    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });
    gsap.to(items, {
        width: item.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(1, .6)'
    });


    item.clicked = !item.clicked;
    gsap.to(item, {
        width: item.clicked ? '42vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)'
    });

};

items.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener('click', () => expand(item, i));
});
