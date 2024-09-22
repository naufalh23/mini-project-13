export interface IEvents { 
    sys: { id:  number | null | undefined; }; 
    fields: {
        title: string;  
        slug: string;
        eventtype: string;
        price: number;
        discount: number;
        capacity: number;
        location: string;
        date: string;
        image: { fields: 
            { file: 
                { url: string; }; 
            }; 
        }; 
        user: { 
            fields: {
                avatar: { 
                    fields: { 
                        file: { url: string; }; 
                    }; 
                }; 
                name: string; 
                email: string; 
            }; 
        };
    }
}

export interface EventInput {
    title: string;
    content: string;
    slug: string;
    location: string;
    price: number;
    discount: number;
    capacity: number;
    date: string;
    eventtype: string;
    image?: File | string | null
  }