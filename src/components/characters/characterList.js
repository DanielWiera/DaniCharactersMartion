const characterList = [
    {
        name: "Angyal Daniella",
        title: "A Mráz Kálmán Internátus diákja",
        birthday: "2003-12-05",
        img: "angyaldaniella.jpg",
        pic: "Kiss Daniella",
        color: "#CEA2FD"
    },
    {
        name: "Brankovich Alexandra",
        title: "ELTE-EMK, mágikus lények szak, modell",
        birthday: "2002-01-03",
        img: "brankovichalexandra.png",
        pic: "Samantha Guerrero",
        color: "#2D548E"
    },
    {
        name: "Brankovich Tivadar",
        title: "Mágustörténész, műtárgyszakértő",
        birthday: "1982-04-06",
        img: "brankovichtivadar.png",
        pic: "Justus Frederic Hansen",
        color: "#B8860B"
    },
    {
        name: "Caterina Coxton",
        title: "A Coxton Varázslóképző tanára",
        birthday: "1993-03-03",
        img: "caterinacoxton.png",
        pic: "Charelle Schriek",
        color: "#FF007F"
    },
    {
        name: "Diósy Szervác",
        title: "A Ferfex ösvény diákja, Harmadik évfolyam",
        birthday: "2009-11-03",
        img: "diosyszervac.png",
        pic: "Hero Fiennes Tiffin",
        color: "#466d55"
    },
    {
        name: "Fenyvesi Liliána Nóra",
        title: "Énekesnő, dalszerző, zenész",
        birthday: "1995-11-24",
        img: "fenyvesililiananora.jpg",
        pic: "Chrissy Costanza",
        color: "#BA55D3"
    },
    {
        name: "Kirtz Imre",
        title: "Üzletember",
        birthday: "1986-09-07",
        img: "kirtzimre.png",
        pic: "Chez Rust",
        color: "#4A4DAE"
    },
    {
        name: "Morgós Rajmund",
        title: "Gépjármű mechatronikai technikus",
        birthday: "2002-02-10",
        img: "morgosrajmund.png",
        pic: "River Viiperi",
        color: "#FBE7A1"
    },
    {
        name: "Orsay Rafael",
        title: "Rubin gemmárius",
        birthday: "1991-02-03",
        img: "orsayrafael.jpg",
        pic: "Mehmet Ozun Dolunay",
        color: "#880808"
    },
    {
        name: "Póra Tódor Péter",
        title: "Ezermester",
        img: "poratodorpeter.png",
        birthday: "1996-10-27",
        pic: "Arthur Gosse",
        color: "#CC9966"
    },
    {
        name: "Varsányi Diána Liza",
        title: "A Karpena ösvény diákja, Ötödik évfolyam",
        img: "varsanyidianaliza.png",
        birthday: "2006-09-08",
        pic: "Lizge Cömert",
        color: "#236F21"
    },
]

export const getCharacters = (order) => {
    switch (order) {
        case "Név":
            return characterList.sort((a, b) => a.name >= b.name ? 1 : -1);
        case "Kor":
            return characterList.sort((a,b) => new Date(a.birthday) <= new Date(b.birthday) ? 1 : -1)
        default:
            return characterList.sort((a, b) => a.name >= b.name ? 1 : -1);
    }

}