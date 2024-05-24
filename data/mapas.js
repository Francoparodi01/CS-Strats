import mirage from "../assets/mirage.png";
import inferno from "../assets/inferno.png";
import vertigo from "../assets/vertigo.png";
import nuke from "../assets/nuke.png";
import ancient from "../assets/ancient.png";
import anubis from "../assets/anubis.png";
import dust2 from "../assets/dust2.png";


//la idea es armar los mapas con un array de objetos, donde entran todos los videos de un lado ct y otro tr. 
//Despues con filter y map traigo todos los humos de cada mapa y los separo en el front. 

export default [
    {
        id: 1,
        nombre: "Mirage",
        img: mirage,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke A", url: "https://www.tiktok.com/@cartuchoyoutube/video/7358774602216049952?lang=es&q=smoke%20ct%20mirage%20cs2&t=171639149935" },
                { id: 2, title: "CT Smoke B", url: "url_to_video2" }
            ],
            tt: [
                { id: 1, title: "TT Smoke Mid", url: "url_to_video3" },
                { id: 2, title: "TT Smoke A", url: "url_to_video4" }
            ]
        }
    },
    {
        id: 2,
        nombre: "Inferno",
        img: inferno,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke Banana", url: "url_to_video5" },
                { id: 2, title: "CT Smoke Mid", url: "url_to_video6" }
            ],
            tt: [
                { id: 1, title: "TT Smoke Arch", url: "url_to_video7" },
                { id: 2, title: "TT Smoke Library", url: "url_to_video8" }
            ]
        }
    },
    {
        id: 3,
        nombre: "Vertigo",
        img: vertigo,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke A Ramp", url: "url_to_video9" },
                { id: 2, title: "CT Smoke Mid", url: "url_to_video10" }
            ],
            tt: [
                { id: 1, title: "TT Smoke B", url: "url_to_video11" },
                { id: 2, title: "TT Smoke Mid", url: "url_to_video12" }
            ]
        }
    },
    {
        id: 4,
        nombre: "Nuke",
        img: nuke,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke A", url: "url_to_video13" },
                { id: 2, title: "CT Smoke Outside", url: "url_to_video14" }
            ],
            tt: [
                { id: 1, title: "TT Smoke Heaven", url: "url_to_video15" },
                { id: 2, title: "TT Smoke A", url: "url_to_video16" }
            ]
        }
    },
    {
        id: 5,
        nombre: "Ancient",
        img: ancient,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke Mid", url: "url_to_video17" },
                { id: 2, title: "CT Smoke A", url: "url_to_video18" }
            ],
            tt: [
                { id: 1, title: "TT Smoke B", url: "url_to_video19" },
                { id: 2, title: "TT Smoke Mid", url: "url_to_video20" }
            ]
        }
    },
    {
        id: 6,
        nombre: "Anubis",
        img: anubis,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke A", url: "url_to_video21" },
                { id: 2, title: "CT Smoke Mid", url: "url_to_video22" }
            ],
            tt: [
                { id: 1, title: "TT Smoke B", url: "url_to_video23" },
                { id: 2, title: "TT Smoke A", url: "url_to_video24" }
            ]
        }
    },
    {
        id: 7,
        nombre: "Dust2",
        img: dust2,
        lado: {
            ct: [
                { id: 1, title: "CT Smoke Long", url: "url_to_video25" },
                { id: 2, title: "CT Smoke Mid", url: "url_to_video26" }
            ],
            tt: [
                { id: 1, title: "TT Smoke B", url: "url_to_video27" },
                { id: 2, title: "TT Smoke A", url: "url_to_video28" }
            ]
        }
    }
];