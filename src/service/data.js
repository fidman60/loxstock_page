const categories = [
    {
        id: 1,
        icon: "icon1.png",
    },
    {
        id: 2,
        icon: "icon2.png",
    },
    {
        id: 3,
        icon: "icon3.png",
    },
    {
        id: 4,
        icon: "icon4.png",
    },
    {
        id: 5,
        icon: "icon5.png",
    },
    {
        id: 6,
        icon: "icon6.png",
    },
];


const subCategories = [
    {
        category_id: 1,
        items: [
            {
                id: 1,
                icon: "list_icon3.png",
                label: "Parc saisi affecté à l'agence",
            },
            {
                id: 2,
                icon: "list_icon2.png",
                label: "Matériels inconnus",
            },
            {
                id: 3,
                icon: "list_icon6.png",
                label: "Matériels affectés sur une autre agence",
            },
            {
                id: 4,
                icon: "list_icon5.png",
                label: "Matériels inconnus",
            },
            {
                id: 5,
                icon: "list_icon4.png",
                label: "Matériels affectés sur une autre agence",
            },
        ]
    },
    {
        category_id: 2,
        items: [
            {
                id: 6,
                icon: "list_icon1.png",
                label: "Parc saisi affecté à l'agence",
            },
            {
                id: 7,
                icon: "list_icon2.png",
                label: "Matériels inconnus",
            },
            {
                id: 8,
                icon: "list_icon3.png",
                label: "Matériels affectés sur une autre agence",
            },
        ]
    },
    {
        category_id: 3,
        items: [
            {
                id: 8,
                icon: "list_icon6.png",
                label: "Parc saisi affecté à l'agence",
            },
            {
                id: 10,
                icon: "list_icon4.png",
                label: "Matériels inconnus",
            },
            {
                id: 11,
                icon: "list_icon3.png",
                label: "Matériels affectés sur une autre agence",
            },
            {
                id: 12,
                icon: "list_icon5.png",
                label: "Matériels affectés sur une autre agence",
            },
        ]
    },
    {
        category_id: 4,
        items: [
            {
                id: 13,
                icon: "list_icon2.png",
                label: "Matériels de l'agence",
            },
            {
                id: 14,
                icon: "list_icon5.png",
                label: "Matériels inconnus",
            },
            {
                id: 15,
                icon: "list_icon4.png",
                label: "Matériels affectés sur une autre agence",
            },
        ]
    },
    {
        category_id: 5,
        items: [
            {
                id: 16,
                icon: "list_icon3.png",
                label: "Matériels inconnus",
            },
            {
                id: 17,
                icon: "list_icon4.png",
                label: "Matériels inconnus",
            },
        ]
    },
    {
        category_id: 6,
        items: [
            {
                id: 18,
                icon: "list_icon1.png",
                label: "Parc saisi affecté à l'agence",
            },
            {
                id: 19,
                icon: "list_icon2.png",
                label: "Matériels inconnus",
            },
            {
                id: 20,
                icon: "list_icon3.png",
                label: "Matériels affectés sur une autre agence",
            },
            {
                id: 21,
                icon: "list_icon6.png",
                label: "Matériels affectés sur une autre agence",
            },
        ]
    },
];


const materials = [
    {
        id: 1,
        code_proprietaire: 1128,
        code_societe: 10,
        no_serie: "B310E002",
        cat: "001",
        classe: "0001",
        description: null,
        nom_agence: null,
        marque: "KAESER",
        modele: "M20",
        type_parc: "R",
        commentaire_argent: null,
        explications_ra: null,
        explications_rtr: null,
    },
    {
        id: 2,
        code_proprietaire: 1128,
        code_societe: 10,
        no_serie: "BZ4DJ304",
        cat: "001",
        classe: "0001",
        description: "text description 2",
        nom_agence: null,
        marque: "KAESER",
        modele: "M20",
        type_parc: "R",
        commentaire_argent: "commentaire agent 2",
        explications_ra: "explication ra 2",
        explications_rtr: null,
    },
    {
        id: 3,
        code_proprietaire: 1128,
        code_societe: 10,
        no_serie: "2H433N44",
        cat: "001",
        classe: "0001",
        description: "text description 3",
        nom_agence: null,
        marque: "KAESER",
        modele: "M20",
        type_parc: "R",
        commentaire_argent: "commentaire agent 3",
        explications_ra: null,
        explications_rtr: "explications_rtr 3",
    },
    {
        id: 4,
        code_proprietaire: 1128,
        code_societe: 10,
        no_serie: "N433435",
        cat: "001",
        classe: "0001",
        description: null,
        nom_agence: null,
        marque: "KAESER",
        modele: "M20",
        type_parc: "R",
        commentaire_argent: null,
        explications_ra: "explications ra 4",
        explications_rtr: null,
    },
];

export {categories , subCategories, materials};