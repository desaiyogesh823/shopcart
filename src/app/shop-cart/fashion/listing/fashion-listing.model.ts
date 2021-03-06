export class FashionItemModel {
  price: number;
  salePrice: number;
  image: string;
  squareImage: string;
  showcaseImages: Array<string>;
  name: string;
  style: string;
  relatedProducts: Array<string>;
}

export class FashionListingModel {
  items: Array<FashionItemModel> = [
    new FashionItemModel(),
    new FashionItemModel(),
    new FashionItemModel(),
    new FashionItemModel()
  ];

  constructor(readonly isShell: boolean) { }
}
