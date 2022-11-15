// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const products = ["Handy", "Banane"];

export default function handler(req, res) {
  console.log(req.method);
  console.log(req.body);
  console.log(req.headers);
  console.log(req.query);

  /* Lange Schreibweise
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    res.status(200).json({message: "Product successfully saved"});
  } else {
    res.status(400).json({error: "method not supported"});
  }
  */

  /* kurze Schreibweise */
  switch (req.method) {
    case "PUT":
    case "PATCH":
      res.status(200).json({ message: "PUT or PATCH called." });
      break;
    case "GET":
      res.status(200).json(products);
      break;
    case "POST":
      res.status(200).json({ message: "Product successfully saved" });
      break;
    default:
      res.status(400).json({ error: "method not supported" });
  }

  /* oder case ... return res.status(200).json(products); statt break */

  res.status(200).json(products);
}
