import type { IncomingMessage, ServerResponse } from "http";
import productService from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParse } from "../utils/parseBody";

const productController = async (req:IncomingMessage, res:ServerResponse) =>{

    const url = req.url
    const method = req.method
    // console.log(url);
    const urlPramas = url?.split("/")
    // console.log(urlPramas);
    const id = urlPramas && urlPramas[1] == "product" ? Number(urlPramas[2]) : null;
    console.log(id);


    if(url === "/product" && method === 'GET'){
         
        const products = productService()



         res.writeHead(200,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({massage: "succefully Data Retrive",
            data : products,
        }))

    }else if (method === 'GET' && id !== null){
        const products = productService()

        const product = products.find((p: IProduct )=> p.id === id)



         res.writeHead(200,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({massage: "succefully Data Retrive",
            data : product,
        }))
    }else if(method === "POST" && url === "/products"){

        const doby = await bodyParse(req)
        console.log(doby);
        



        res.writeHead(201,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({massage: "succefully Data Retrive",
            // data : product,
        }))

    } else if (method === "DELET" && id !== null){
            const products = productService()
        const index = products.findIndex((p: IProduct )=> p.id === id)

        if (index < 0){
            res.writeHead(404,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({massage: "succefully Data Delet",
            // data : product,
        }))


        }
    }

    


}

export default productController;