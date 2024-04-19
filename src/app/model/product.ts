import { Vendor } from "./vendor";

export class Product{
    id: number;
    vendor:Vendor;
    partnumber: string;
    name: string;
    price: number;
    unit: string;
    photopath: string;
    

    constructor(id:number=0, vendor=new Vendor(),partnumber='',name = '',price =0,
        unit='', photopath = ' '){
            this.id = id;
            this.vendor = vendor;
            this.partnumber = partnumber;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photopath = photopath;
            
        }
    


}