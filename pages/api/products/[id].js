// /products/id

const products = [
  {
    id: "12416353",
    name: "LEGEND X SONIC",
    price: 49.99,
    description:
      "After a year of trial and error with the SONIC® team (and A TON of “R&D” trips to America’s Favorite Drive-In) we are so stoked to deliver the best, and only official SONIC® Cherry Limeade and SONIC® Ocean Water™ pre-workout experiences.",
    image:
      "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2SonicOW.png?v=1624462174",
  },
  {
    id: "12121354",
    name: "LEGEND X SPACE JAM",
    price: 49.99,
    description: `We're gearing up for the game of the century. It's TUNE SQUAD vs. MONSTARS and this time, the "stuff's" no secret. These are two of our most legendary formulas to date, ensuring you bring your A-Game to the court, the gym and wherever else you wind up on the trip to Moron Mountain.`,
    image:
      "https://cdn.shopify.com/s/files/1/2060/6331/products/TuneSquad.png?v=1633531123",
  },
  {
    id: "12124161",
    name: "LEGEND X SOUR PATCH KIDS",
    price: 49.99,
    description: `More Energy, More Pumps, More Focus and your favorite SOUR PATCH KIDS® flavors. Life. Made.`,
    image:
      "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2RB.png?v=1641330627",
  },
  {
    id: "12311356",
    name: "LEGEND X WELCH'S",
    price: 49.99,
    description: `The authentic O.G. Grape flavor we all know and love.`,
    image:
      "https://cdn.shopify.com/s/files/1/2060/6331/products/LegendV2Welch_s.png?v=1614032024",
  },
];

export default function (req, res) {
  if (req.method === "GET") {
    const product = products.find((product) => product.id === req.query.id);
    res.status(200).json(product);
  }
}
