export class GoogleBook {
    kind: string
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