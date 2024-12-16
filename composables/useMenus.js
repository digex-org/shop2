import { reactive } from "vue";

export function useMenus() {
    const state = reactive({
        menus: [
            {
                id: 1,
                name: 'men',
                image: '/images/category2.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subMenu: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subMenu: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'women',
                image: '/images/category1.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subMenu: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subMenu: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'kids',
                image: '/images/category4.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subMenu: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subMenu: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'accessories',
                image: '/images/category3.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subMenu: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],            },
            {
                id: 5,
                name: 'sale',
                image: '/images/category1.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subMenu: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'gift',
                image: '/images/category2.png',
                subMenu: [
                    {
                        name: "Shoes",
                        subMenu: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subMenu: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subMenu: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subMenu: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
        ],
    });

    return {
        menus: state.menus,
    };
}
