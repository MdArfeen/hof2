function countFavoriteIceCreams(data) {
    const iceCreamCounts = {};
  
    data.forEach((hero) => {
      hero.favoriteIceCreams.forEach((iceCream) => {
        if (iceCreamCounts[iceCream]) {
          iceCreamCounts[iceCream]++;
        } else {
          iceCreamCounts[iceCream] = 1;
        }
      });
    });
  
    return iceCreamCounts;
  }
  
  const data = [
    {
      name: "Superman",
      favoriteIceCreams: ["Strawberry", "Vanilla", "Chocolate", "Cookies & Cream"],
    },
    {
      name: "Batman",
      favoriteIceCreams: ["Cookies & Cream", "Mint Chocolate Chip", "Chocolate", "Vanilla"],
    },
    {
      name: "Flash",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
      name: "Aquaman",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
      name: "Green Lantern",
      favoriteIceCreams: ["Vanilla", "French Vanilla", "Vanilla Bean", "Strawberry"],
    },
    {
      name: "Robin",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
  ];
  
  const iceCreamCounts = countFavoriteIceCreams(data);
  console.log(iceCreamCounts);