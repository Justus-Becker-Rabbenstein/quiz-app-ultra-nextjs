// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const products = [
    {
      id: 1,
      name: "Leberwurst",
      category: "Food",
    },
    {
      id: 2,
      name: "Banane",
      category: "Food",
    },
    {
      id: 3,
      name: "Handy",
      category: "Technology",
    },
  ];
  
  export default function handler(req, res) {
    console.log("Req method:", req.method);
    console.log("Req body:", req.body);
    console.log("Req headers:", req.headers);
    console.log("Req query:", req.query);
    console.log("typeOf Req query:", typeof req.query);
  
    /* Lange Schreibweise
    if (req.method === 'GET') {
      res.status(200).json(products);
    } else if (req.method === 'POST') {
      res.status(200).json({message: "Product successfully saved"});
    } else {
      res.status(400).json({error: "method not supported"});
    }
    */
  
    // kurze Schreibweise
    switch (req.method) {
      case "PUT":
      case "PATCH":
        res.status(200).json({ message: "PUT or PATCH called." });
        break;
      case "GET":
        const product = products.find((p)=>Number(p.id) === Number(req.query.productId));
        return res.status(200).json(product);
      case "POST":
        res.status(200).json({ message: "Product successfully saved" });
        break;
      default:
        res.status(400).json({ error: "method not supported" });
    }
  
    /* oder case ... return res.status(200).json(products); statt break */
  }
  