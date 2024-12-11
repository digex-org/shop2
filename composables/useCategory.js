import { reactive } from "vue";

export function useCategory() {
    const state = reactive({
        categories: [
            {
                id: 1,
                name: 'men',
                image: '/images/new.webp',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
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
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
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
                image: '/images/goodDeal.webp',
                subCategory: [
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'kids',
                image: '/images/kitchen.webp',
                subCategory: [
                    {
                        name: "Kids",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'accessories',
                image: '/images/bedroom.webp',
                subCategory: [
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: 'Bags & Backpacks' },
                            { name: 'Socks' },
                            { name: 'Sports Equipment' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'sale',
                image: '/images/livingRoom.webp',
                subCategory: [
                    {
                        name: "Sports",
                        subCategory: [
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
                id: 6,
                name: 'gift',
                image: '/images/lighting.webp',
            },
        ],
    });

    return {
        categories: state.categories,
    };
}
