
export type DessertItem = {
      id : number;
      name : string;
      price : number;
      category : string;
      image : string;
};

export type OrderDessertItem = DessertItem & {
    quantity : number;
};