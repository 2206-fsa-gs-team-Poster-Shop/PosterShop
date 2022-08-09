const { green, red } = require("chalk");

const {
  db,
  models: { Product, User, Order_Product },
} = require("./server/db");

const products = [
  {
    name: "Air Jordan Bred 11s",
    size: 8.5,
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/319254/1.jpg",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
    quantity: 10,
    price: 220,
    stylecode: "378037061",
  },
  {
    name: "Air Jordan 1",
    size: 10,
    imageUrl:
      "https://cdn.flightclub.com/750/TEMPLATE/314576/1.jpg",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
    quantity: 10,
    price: 180,
    stylecode: "dm7866 162",
  },
  {
    name: "Nike Air Max",
    size: 7,
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/283552/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "M",
    brand: "Nike",
    quantity: 10,
    price: 210,
  },
  {
    name: "Air Jordan Bred 11s",
    size: 9,
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/802269/1.jpg",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
    quantity: 10,
    price: 220,
  },
  {
    name: "DUNK LOW PREMIUM",
    size: 7,
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/311754/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "W",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Nike African Style",
    size: 12,
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/320354/1.jpg",
    description:
      "African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ",
    category: "U",
    brand: "Nike",
    quantity: 10,
  },
];

const users = [
  {
    username: "user1",
    password: "123",
    firstName: "Watson",
    lastName: "Chen",
    email: "wc.watsonchen@gmail.com",
    creditCard: "1234567890123456",
    address: "100 Lake Rd",
    phoneNumber: "6504577805",
  },
];

const order_products = [
  {
    productId: 1,
    quantity: 1,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 1,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 1,
    size: 8,
    category: "M",
    price: 70000,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      products.map((product) => {
        return Product.create({
          name: product.name,
          imageUrl: product.imageUrl,
          brand: product.brand,
        });
      })
    );

    // await Promise.all(
    //   products.map((product) => {
    //     return Order_Product.create({
    //       productId: 1,
    //       orderId: 2,
    //       quantity: product.quantity,
    //       size: product.size,
    //       category: product.category,
    //       price: product.price,
    //     });
    //   })
    // );

    // await Order_Product.create({
    //   productId: 1,
    //   quantity: 1,
    //   size: 6,
    //   category: 'W',
    //   price: 70000,
    // });

    await Promise.all(
      order_products.map((orderProduct) => {
        return Order_Product.create(orderProduct);
      })
    );

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
  } catch (err) {
    // console.log("SEEDING ERROR !")
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
