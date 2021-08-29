export interface AuctionProduct {
    id: number,
    thumbnail: string,
    title: string,
    max_retail_price: number,
    start_time?: string,
    end_time?: string, 
    highest_bidder: string,
    bid_count: number,
    wild_card: number,
    lux: number,
    state: AuctionState,
    buy_in_limit: number,
    current_buy_in: number,
    images: SubItem[]
}
interface SubItem {
    id: number,
    src: string,
}

export enum AuctionState {
    'READY', 'ACTIVE', 'DONE'
}