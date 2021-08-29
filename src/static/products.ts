import { AuctionProduct, AuctionState } from "./interfaces/AuctionProduct";

export const products: AuctionProduct[] = [{
    id: 1,
    thumbnail: '/assets/images/products/car.jpg',
    title: 'Brand new Tesla Model S',
    max_retail_price: 42500,
    start_time: '2021-08-20 19:20',
    end_time: '2021-08-21 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 10,
    wild_card: 450.00,
    lux: 250,
    buy_in_limit: 500,
    current_buy_in: 100,
    state: AuctionState.ACTIVE,
    images: [{
        id: 1,
        src: '/assets/images/products/tesla.jpg'
    }, {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNSDqNxP0GW6VQorNnPMMRWwA0C3O9oY-_02-P9gi1BbyzhwKWoHJDb2ypuCXKGJtMcE&usqp=CAU'
    }, {
        id: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaJx4ndONzd-Q-aTqDmHOY2MyRh1WoEzlGzjgYNLvvOWToNclQlN-KjHqM2D7y2Q6QhY&usqp=CAU'
    }, {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOh-QBIEm-Zn64F6I-xFQ7n4EfxwmFVQHcS5gW7o72Ut6Pkkj96rfg21enT5XJPvjrmU&usqp=CAU'
    }, {
        id: 5,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUyKrJD8TSWuSbZOewXLKU2Bpu-dRdXJo8cwI-aLnCZuoR8mnXGbMRD7sjmeAA3T9oHA&usqp=CAU'
    },]
},
{
    id: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU',
    title: 'Brand new Tesla Model S',
    max_retail_price: 3000,
    start_time: '2021-08-20 19:20',
    end_time: '2021-08-21 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 9,
    wild_card: 250.00,
    buy_in_limit: 500,
    current_buy_in: 10,
    lux: 150,
    state: AuctionState.ACTIVE,
    images: [{
        id: 1,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU'
    }]
}
]