export class GoogleBook {
    kind: string
    totalItems: number
    items: Item[]
}

export class Item {
    volumeInfo: {
        title: string
        authors: string,
        imageLinks:{
            thumbnail:string
        }
    }
}