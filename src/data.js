// Define menu categories array
const categories = [
    { 
      name:'NON VEGETARIAN STARTERS', 
      description: "Delta's Kebabs - fresh, boneless fish or meat, charcoal grilled and served with salad and sauce."
    },
    { 
      name: 'VEGETARIAN STARTERS', 
      description: ""
    },
    { 
      name: 'TANDOORI DISHES', 
      description: `
        The Tandoori is a beehive shaped top opening earthen oven, fired with charcoal. 
        In it we roast or bake various marinated meat, seafood, vegetables and breads. 
        Tandoori foods are marinated in mildly spiced yogurt. 
        They are low in calories, nutritious, delicious and easily digested. All tandoori dishes are served with mint sauce and salad. 
      `
    },
    {
      name: 'DELTA SPECIALITIES',
      description: ""
    },
    { name: 'DELTA CLASSICS',
      description: "Fresh lean chicken or lamb, prawn or king prawns served with a classic range of curry sauces."
    },
    {
      name: 'BIRYANI',
      description: `Grand festive dishes prepared from Basmati rice, chicken, lamb, king prawns or vegetables 
      - cooked in Ghee (clarified butter) with delicate herbs and spices, served with a mixed vegetable curry sauce.`
    },
    { 
      name: 'MACH (FISH) DISHES',
      description: ""
    },
    {
      name: 'VEGETARIAN MAIN DISHES',
      description: ""
    },
    {
      name: "EUROPEAN SELECTION",
      description: "All dishes served with green salad, pomme frittes, mushrooms, fried onions and tomatoes."
    },
    {
      name: 'SABZI - SIDE DISHES',
      description: ""
    },
    {
      name: "RICE",
      description: ""
    },
    {
      name: "BREAD",
      description: "From our own bakery."
    },
    {
      name: 'POPADUMS AND CHUTNEYS',
      description: ""
    },
    {
      name: 'DESSERTS',
      description: ""
    },
    {
      name: 'BALTI & RECOMMENDED SET DINNERS',
      description: `Charcoal roasted chicken or lamb cutlets cooked in a medium strength sauce with chef's own special recipe. 
      The great Balti is actually the bucket shaped iron pot used for cooking various meat and chicken dishes in Winter in India. 
      It is usually eaten straight out of the pot with Tandoori Nan or Roti.`
    }
]

// Data for menu page
const menuItems = [
  {
    name: "Delta Special Chicken Pakora",
    description: "Filleted pieces of chicken breast marinated in Delta's unique spices, coated in batter then deep fried until crispy yet succulent. Served with salad and hot sweet and sour sauce.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Fish Pakora",
    description: "",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Murghi Tikka (Chicken) Kebab",
    description: "Marinated and then barbecued chicken kebab.",
    price: "£5.00",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Sheek Kebab (Minced Lamb)",
    description: "Minced lamb kebab.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Lamb Kebab",
    description: "Barbecued lamb pieces.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Assorted Kebab",
    description: "Mixed selection of vegetable chicken pakora, murghi tikka and lamb kebab.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Murghi Chaat",
    description: "Small pieces of chicken cooked with tomatoes and cucumbers in a hot and spicy sour sauce.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Prawn Pathia on Puri",
    description: "Prawns in a subtle sauce enhanced by fresh coriander on a bed of puffed fried bread and accompanied by green salad.",
    price: "£5.90",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "King Prawn Pathia on Puri",
    description: "King prawns in a subtle sauce enhanced by fresh coriander on a bed of puffed fried bread and accompanied by green salad.",
    price: "£6.90",
    category: "NON VEGETARIAN STARTERS"
  },
  {
    name: "Shrimp Cocktail",
    description: "Shrimps in Marie Rose sauce and salad.",
    price: "£5.50",
    category: "NON VEGETARIAN STARTERS"
    },
   {
    name: "Vegetable Pakora",
    description: "Mixed vegetables coated in batter and deep-fried.",
    price: "£4.50",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Delia Special Vegetable Pakora",
    description: "Marinated vegetable pakora in Delia's special spices and sauce.",
    price: "£5.00",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Paneer Tikka",
    description: "Chunks of Indian cottage cheese marinated and grilled.",
    price: "£5.90",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Garlic Mushroom Puri",
    description: "Garlic mushrooms served on puffed fried bread.",
    price: "£5.50",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced vegetables.",
    price: "£4.50",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Onion Bhaji",
    description: "Sliced onion mixed with herbs, lightly spiced, battered and fried.",
    price: "£4.50",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Chana Chaat",
    description: "Chickpeas cooked with cucumber and tomatoes in a tangy, spicy sauce.",
    price: "£5.50",
    category: "VEGETARIAN STARTERS"
  },
  {
    name: "Vegetable Chaat",
    description: "Fresh vegetables cooked with chaat masala for a tangy, spicy flavor.",
    price: "£5.50",
    category: "VEGETARIAN STARTERS"
  },
    {
    name: "Tandoori Murgh",
    description: "Half spring chicken marinated in yogurt with delicate herbs and spices, skewered and roasted in a clay oven.",
    price: "£9.10",
    category: "TANDOORI DISHES"
  },
  {
    name: "Chicken Tikka Kebab",
    description: "Fresh, lean chicken marinated and spiced with fresh herbs and spices, skewered and roasted in a clay oven.",
    price: "£9.10",
    category: "TANDOORI DISHES"
  },
  {
    name: "Lamb Tikka Kebab",
    description: "Fresh, lean lamb marinated and spiced with fresh herbs and spices, skewered and roasted in a clay oven.",
    price: "£9.50",
    category: "TANDOORI DISHES"
  },
  {
    name: "Tandoori Raj Chingree",
    description: "King prawns marinated in lemony sauce and roasted yogurt with an assortment of exotic spices, skewered and charcoal grilled.",
    price: "£14.90",
    category: "TANDOORI DISHES"
  },
  {
    name: "Delta Assorted Tandoori",
    description: "Consists of Tandoori chicken, lamb tikka, chicken tikka, king prawns, and shell kebab, as described. A 'must for all Tandoori Connoisseurs'.",
    price: "£15.90",
    category: "TANDOORI DISHES"
  },
{
    name: "Chilli Garlic Chicken",
    description: "Marinated charcoal grilled chicken cutlets, cooked in Delta's unique recipe with garlic, lentils and a healthy helping of sliced green chillies, garnished with fresh coriander and lemon. 'Hot but appetising'.",
    price: "£9.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Chicken Tikka Khumbi Dupiaza",
    description: "A most wonderful dish, consisting of charcoal grilled chicken cutlets and mushrooms cooked in a medium strength sauce of onions and green peppers.",
    price: "£9.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Podina Murgh Massallam",
    description: "Marinated chicken cutlets, charcoal grilled, cooked in a very aromatic medium sauce with fresh garden mint and spring onions.",
    price: "£9.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Tandoori Chicken Tikka Massallam",
    description: "Chicken kebabs cooked in a mild flavoured sauce with fresh herbs and spices.",
    price: "£9.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Tandoori Lamb Tikka Massallam",
    description: "Lamb kebabs cooked in a mild flavoured sauce with fresh herbs and spices.",
    price: "£9.50",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "King Prawn Tikka Massallam",
    description: "Tandoori king prawns cooked in a mild flavoured sauce with fresh herbs and spices.",
    price: "£13.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Makkhani Murgh",
    description: "Chicken kebabs cooked in a spectacular mild, spicy, buttery sauce.",
    price: "£9.50",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Chicken Pasanda",
    description: "Fresh, lean chicken, specially marinated and cooked in a subtle mild creamy almond sauce.",
    price: "£9.00",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Lamb Pasanda",
    description: "Fresh, lean lamb, specially marinated and cooked in a subtle mild creamy almond sauce.",
    price: "£9.20",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Shahjahani Murgh",
    description: "Small pieces of chicken cooked with almonds and sultanas in a very mild delicate sauce.",
    price: "£9.00",
    category: "DELTA SPECIALITIES"
  },
  {
    name: "Chicken",
    description: "",
    price: "£8.50",
    category: "DELTA CLASSICS"
  },
  {
    name: "Lamb",
    description: "",
    price: "£8.70",
    category: "DELTA CLASSICS"
  },
  {
    name: "Prawn",
    description: "",
    price: "£8.70",
    category: "DELTA CLASSICS"
  },
  {
    name: "King Prawn",
    description: "",
    price: "£12.90",
    category: "DELTA CLASSICS"
  },
  {
    name: "Badami Korma",
    description: "A mild delicate sauce of natural yogurt, cream, almonds, coconuts, fresh herbs and spices.",
    price: "",
    category: "DELTA CLASSICS"
  },
  {
    name: "Kashmiri",
    description: "A mild sauce prepared with fresh lychees and bananas in exotic tropical spices.",
    price: "",
    category: "DELTA CLASSICS"
  },
  {
    name: "Malayan",
    description: "A mild delicate dish prepared with almond, coconut, pineapple, fruit juices and cream to create a beautifully balanced flavour.",
    price: "",
    category: "DELTA CLASSICS"
  },
  {
    name: "Bhuna",
    description: "Medium strength traditional dish garnished with onions, herbs, tomatoes and selected spices.",
    price: "",
    category: "DELTA CLASSICS"
  },
  {
    name: "Jhal Bhuna",
    description: "A fairly hot traditional dish garnished with onions, herbs, tomatoes and selected spices.",
    price: "",
    category: "DELTA CLASSICS"
  },
  {
    name: "Dupiaza",
    description: "Medium strength dish of cubed onions and green pepper producing a very distinctive taste.",
    price: "",
    category: "DELTA CLASSICS"
  },
   {
    name: "Chicken",
    description: "",
    price: "£11.20",
    category: "BIRYANI"
  },
  {
    name: "Lamb",
    description: "",
    price: "£11.50",
    category: "BIRYANI"
  },
  {
    name: "King Prawn",
    description: "",
    price: "£14.90",
    category: "BIRYANI"
  },
  {
    name: "Chicken Tikka",
    description: "",
    price: "£11.50",
    category: "BIRYANI"
  },
  {
    name: "Lamb Tikka",
    description: "",
    price: "£11.90",
    category: "BIRYANI"
  },
  {
    name: "Sabzi (Vegetable)",
    description: "",
    price: "£9.50",
    category: "BIRYANI"
  },
  {
    name: "Sea Bass Massallam",
    description: "Grilled sea bass filleted fish cooked with lemon, garlic and green herbs - medium.",
    price: "£13",
    category: "MACH (FISH) DISHES"
  },
  {
    name: "Begunni Macchi",
    description: "Sea bass filleted village curry. Fried fish fillets cooked with aubergine, garlic and spices. A dish 'Mum' would approve of.",
    price: "£13",
    category: "MACH (FISH) DISHES"
  },
  {
    name: "Rasedar Macchi",
    description: "Prepared with pimento, garlic, fresh coriander and spices, garnished with spicy fried tomatoes - fairly hot.",
    price: "£13",
    category: "MACH (FISH) DISHES"
  },
  {
    name: "Malaidar Macchi",
    description: "A rich combination of fish and a delicate tasting sauce consisting of almond and coconut - mild.",
    price: "£13",
    category: "MACH (FISH) DISHES"
  },
  {
    name: "Rasuni Macchi",
    description: "Prepared with a generous helping of sliced garlic, lentils, fresh herbs and spices, garnished with coriander and lemon - medium.",
    price: "£13",
    category: "MACH (FISH) DISHES"
  },
  {
    name: "Sabzi Jalfrezie",
    description: "Mixed vegetables cooked in a blend of fresh ingredients, in a medium hot savoury sauce.",
    price: "£7.60",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Sabzi Sambar",
    description: "A hot, rich gathering of mixed vegetables prepared together with lentils.",
    price: "£7.60",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Sabzi Rangilla",
    description: "Mixed vegetables prepared in a rich delicate, mild sauce of almonds and coconuts.",
    price: "£7.60",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Alo Chapps Massallam",
    description: "Mixed vegetable cutlet in a spectacular mild buttery sauce.",
    price: "£7.90",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Sag Panir",
    description: "Fresh spinach combined in a delicate tasting surprise with home-made cottage cheese.",
    price: "£7.90",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Mater Panir",
    description: "Medium strength dish prepared combining peas and home-made cottage cheese, with herbs and spices.",
    price: "£7.90",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Chana Massallam",
    description: "Chickpeas with lentils, eggs, spring onions, fresh coriander, herbs and spices.",
    price: "£7.60",
    category: "VEGETARIAN MAIN DISHES"
  },
  {
    name: "Sabzi Biryani",
    description: "Mixed vegetables and basmati rice, cooked together in a blend of fresh herbs and spices, served with a vegetable curry sauce.",
    price: "£9.50",
    category: "VEGETARIAN MAIN DISHES"
  },
{
    name: "Roast Chicken",
    description: "Served with green salad, pomme frittes, mushrooms, fried onions and tomatoes.",
    price: "£9.50",
    category: "EUROPEAN SELECTION"
  },
  {
    name: "Chicken or Prawn Omelette",
    description: "Served with green salad, pomme frittes, mushrooms, fried onions and tomatoes.",
    price: "£9.50",
    category: "EUROPEAN SELECTION"
  },
  {
    name: "Mushroom Omelette",
    description: "Served with green salad, pomme frittes, mushrooms, fried onions and tomatoes.",
    price: "£9.00",
    category: "EUROPEAN SELECTION"
  },
  {
    name: "Chana Sag",
    description: "Chickpeas with spinach.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Sag Alo",
    description: "Spinach with spiced potatoes.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Bhindi Bhaji",
    description: "Spiced Okra.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Cauliflower Bhaji",
    description: "Spiced cauliflower.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Brinzal Bhuna",
    description: "Aubergine.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Mughlai Sag",
    description: "Spinach.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Mixed Vegetable Bhaji",
    description: "Dry mixed vegetables.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Mushroom Bhaji",
    description: "Mushrooms with fresh herbs and spices.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Alo Gobi Massallam",
    description: "Spiced potatoes and cauliflower.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Alo Mater",
    description: "Peas with potatoes.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Bombay Alo",
    description: "Lightly spiced potatoes.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Tarka Dal",
    description: "Stewed lentils and split peas.",
    price: "£5",
    category: "SABZI - SIDE DISHES"
  },
  {
    name: "Boiled",
    description: "Boiled Basmati Rice.",
    price: "£2.90",
    category: "RICE"
  },
  {
    name: "Pilau",
    description: "Saffron Basmati Rice.",
    price: "£3.50",
    category: "RICE"
  },
  {
    name: "Special",
    description: "Basmati stir-fried with egg and peas.",
    price: "£3.90",
    category: "RICE"
  },
  {
    name: "Sabzi Pilau",
    description: "Basmati rice stir-fried with saffron and mixed vegetables.",
    price: "£3.90",
    category: "RICE"
  },
  {
    name: "Mushroom Pilau",
    description: "Basmati rice fried with mushrooms.",
    price: "£3.90",
    category: "RICE"
  },
  {
    name: "Nan",
    description: "Leavened bread baked in our clay oven.",
    price: "£3",
    category: "BREADS"
  },
  {
    name: "Peshwari Nan",
    description: "Leavened bread stuffed with ground almonds and sultanas.",
    price: "£3.50",
    category: "BREADS"
  },
  {
    name: "Keema Nan",
    description: "Leavened bread stuffed with spiced minced meat.",
    price: "£3.50",
    category: "BREADS"
  },
  {
    name: "Garlic Nan",
    description: "Leavened bread coated with fresh garlic and coriander.",
    price: "£3.50",
    category: "BREADS"
  },
  {
    name: "Paratha",
    description: "Fried layered whole wheat bread.",
    price: "£3.50",
    category: "BREADS"
  },
  {
    name: "Puri",
    description: "Puffed deep fried bread.",
    price: "£1.30",
    category: "BREADS"
  },
  {
    name: "Tandoori Roti",
    description: "Unleavened wholemeal bread baked in our clay oven.",
    price: "£3",
    category: "BREADS"
  },
  {
    name: "Chapati",
    description: "Thin unleavened wholemeal bread.",
    price: "£1.20",
    category: "BREADS"
  },
  {
    name: "Plain Popadum",
    description: "",
    price: "£0.90",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Massala Popadum",
    description: "",
    price: "£1",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Onion Raita",
    description: "",
    price: "£2.30",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Cucumber Raita",
    description: "",
    price: "£2.30",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Mixed Pickle",
    description: "",
    price: "£1.10",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Lime Pickle",
    description: "",
    price: "£1.10",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Spicy Onions",
    description: "",
    price: "£2",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Mango Chutney",
    description: "",
    price: "£1",
    category: "POPADUMS AND CHUTNEYS"
  },
  {
    name: "Kulfi",
    description: "",
    price: "£3.80",
    category: "DESSERTS"
  },
  {
    name: "Gulabjamun",
    description: "",
    price: "£3.80",
    category: "DESSERTS"
  },
  {
    name: "Chicken Balti Set Dinner",
    description: "Sabzi Pakora, Chicken Balti, Pilau Rice, Nan.",
    price: "£15.90",
    category: "BALTI & RECOMMENDED SET DINNERS"
  },
  {
    name: "Lamb Balti Set Dinner",
    description: "Sabzi Pakora, Lamb Balti, Pilau Rice, Nan.",
    price: "£16.90",
    category: "BALTI & RECOMMENDED SET DINNERS"
  },
  {
    name: "Non-Vegetarian Dinner for One Person",
    description: "Delta Assorted Kebab (Starter), Makkhani Murgh, Sag Alo, Puri, Pilau Rice, Kulfi (Dessert).",
    price: "£18",
    category: "BALTI & RECOMMENDED SET DINNERS"
  },
  {
    name: "Non-Vegetarian Dinner for Two People",
    description: "2 Delta Assorted Kebabs (Starter), Chicken Tikka Massallam, Lamb Pasanda, Mixed Vegetable Bhaji, Alo Gobi Massallam, Large Pilau Rice, Peshwari Nan, Kulfi/Gulabjamun (Dessert).",
    price: "£33",
    category: "BALTI & RECOMMENDED SET DINNERS"
  },
  {
    name: "Vegetarian Dinner for One Person",
    description: "Assorted Vegetarian Starter, Sabzi Jalfrezie, Alo Mater, Puri, Pilau Rice, Kulfi (Dessert).",
    price: "£17",
    category: "BALTI & RECOMMENDED SET DINNERS"
  }
]
  // Home page images
	const imageSrcs = [
		'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/delta-about_yxrldi.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/IMG_3524_u5glad.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/IMG_3528_bakdn7.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/IMG_3532_ororhk.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/IMG_3534_gf3qb2.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028792/IMG_3540_t5k3tq.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3546_jqtlco.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3553_cvrufg.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3556_wqnnom.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028794/IMG_3581_uyoiip.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3558_eilqga.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3561_wzvtxu.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028794/IMG_3562_prb2nf.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028794/IMG_3566_llpio2.jpg',
    'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028794/IMG_3576_spfzu2.jpg'
	]

export { categories, menuItems, imageSrcs } 