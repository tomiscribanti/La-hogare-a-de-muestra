const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarForm = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.nombre, e.target, 'name');
            break;

        case "lastname":
            validarCampo(expresiones.nombre, e.target, 'lastname');
            break;

        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
            break;

    }
}

const campos = {
    name: false,
    lastname: false,
    email: false
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.add('form__group-correct');
        document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.name && campos.lastname && campos.email) {
        formulario.reset();

        document.getElementById('form__message-exit').classList.add('form__message-exit-active');
        setTimeout(() => {
            document.getElementById('form__message-exit').classList.remove('form__message-exit-active');
            document.getElementById('form__message').classList.remove('form__message-active');
        }, 4000);

        document.querySelectorAll('.form__group-correct').forEach((icono) => {
            icono.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
    }
});




const fullImgBox = document.getElementById('fulImgBox');
const fullimg = document.getElementById('fulImg');


function closeImg() {
    fullImgBox.style.display = "none";
}

function openImg(reference) {
    fullImgBox.style.display = "flex";
    fullimg.src = reference;
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        500: {
            items: 2
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1000: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})


window.addEventListener('scroll', () => {
    const navEffect = document.querySelector("nav");
    navEffect.classList.toggle('scroll', window.scrollY > 0);
});


const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}



window.sr = ScrollReveal();


sr.reveal('.section__homes', {
    duration: 2000,
    mobile: true,
    rotate: { x:0, y: 80, z:0}
});

sr.reveal('.services', {
    duration: 2000,
    mobile: true,
    origin: 'top',
    distance: '100px'
});


sr.reveal('.about', {
    duration: 2000,
    mobile: true,
    origin: 'left',
    distance: '50px'
});

sr.reveal('.footerS', {
    duration: 2000,
    mobile: true,
    origin: 'bottom',
    distance: '10px'
});

const hamburger = document.querySelector('.navBarIcon');
const navLink = document.querySelector('.nav-links');
const links = document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle("open");
});