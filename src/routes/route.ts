import { IncomingMessage, ServerResponse } from 'http';
import productController from '../controllers/product.controller';

const routeHandler = (req: IncomingMessage, res: ServerResponse) =>{

    const url = req.url
    const method = req.method
    const header = req.headers
    

    if(url === "/" && method === 'GET'){
        // console.log("This is root route");
        res.writeHead(200,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({message: 'This is root Route'}))


    }else if(url?.startsWith('/product')){
       productController(req, res)
    }  
    
    
    else{
        res.writeHead(404,{
            "content-type": "application/json"
        })
            res.end(JSON.stringify({message: 'This is NOT root Route'}))

    }



}


export default routeHandler;