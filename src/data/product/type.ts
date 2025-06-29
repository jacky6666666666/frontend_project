export interface GetAllProductDto {
  pid: number;
  name: string;
  imageUrl: string;
  price: number;
  hasStock: boolean;
}

export interface ProductDetailDto{
  pid: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  stock: number


}



export interface fighterJet {
    name: string
    pid: number
}

export interface  bomber{
    name: string
    pid: number
}

export interface drone{
   name: string
   pid: number

}