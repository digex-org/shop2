export function useProduct() {
    const state = reactive({
        products: [
            {
                id: 1,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 85,
                rating: 4.5,
                isLimitedTime: true,
                category: 'New',
                brand: "Brand A",
                color: "black",
                size: "M"
            },
            {
                id: 2,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 79,
                rating: 4.7,
                isLimitedTime: false,
                category: 'New',
                brand: "Brand A",
                color: "blue",
                size: "M"
            },
            {
                id: 3,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 75,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Bedroom',
                brand: "Brand A",
                color: "white",
                size: "M"
            },
            {
                id: 4,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 75,
                originalPrice: 93,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Lighting',
            },
            {
                id: 5,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 75,
                originalPrice: 125,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Good Deal',
            },
            {
                id: 6,
                image: '/images/product.png',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.png', '/images/product.png', '/images/product.png'],
                title: "STOCKING STUFFERS",
                price: 75,
                originalPrice: 175,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Living Room',
            },
        ]
    });

    return {
        products: state.products,
    }
}
