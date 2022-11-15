import { products } from "./products";

export default function handler(req, res) {
  // kurze Schreibweise
  switch (req.method) {
    case "PUT":
    case "PATCH":
      res.status(200).json({ message: "PUT or PATCH called." });
      break;
    case "GET":
      res.status(200).json(products.map((product) => product.id));
      break;
    case "POST":
      res.status(200).json({ message: "Product successfully saved" });
      break;
    default:
      res.status(400).json({ error: "method not supported" });
  }
}
