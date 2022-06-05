import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "NIKE",
    model: "WOMEN's Air Force 1 Gypsy Rose",
    price:"99",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/AIR%20FORCE%201%20FONTANKA%20GYPSY%20ROSE.jpg?raw=true",
    status:"",
    for:"WOMEN",
    rating:"3.8",
    description:"Born out of the ideas and art of post-Soviet Union Russia, the Nike Air Force 1 Fontanka lets a new wave of comfort and style take hold.Upping the ante with its lifted midsole and layered upper that features soft leather and intricate stitching, the design celebrates the rebellious underground world of the St. Petersburg rave scene.If that’s not enough, the “cassette tape” of ultra-soft React foam in the heel adds a bold, retro look."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike x Blazer Mid'77 Purple Glitter",
    price:"110",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/Blazer%20Mid'77%20Purple%20Glitter.jpg?raw=true",
    status:"",
    for:"UNISEX",
    rating:"4.1",
    description:"This offering of the Nike Blazer Mid sports a very simple, traditional design featuring a White leather base with tonal branding throughout, matching leather overlays atop a solid White rubber sole. Highlighting the shoe are Purple glittered Swooshes on the sides."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Off-White x Air Jordan 1 High Chicago",
    price:"5400",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/the-ten-air-jordan-1-off-white.jpg?raw=true",
    status:"GRAIL",
    for:"MEN",
    rating:"4.9",
    description:"The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017. It marked the first time Virgil Abloh, founder of the Milan-based fashion label and Jordan Brand had teamed up. Nicknamed `The 10` edition, this pair comes in the original Chicago-themed white, black and varsity red colorway. Featuring a white, red and black-based deconstructed leather upper with a Swooshless medial side branded with `Off-White for Nike Air Jordan 1, Beaverton, Oregon, USA © 1985.` Other details include: floppy ankle collars with hidden `85` written on the inside, an oversized off-centered Swoosh on the lateral sides, `Air` written on the midsole and the word `Shoelaces` on the laces with no branding on the tongue. Their release date is set for 2017 where they retailed for $190 in men's sizes only. As if the hype wasn't enough, the limited availability made these Off-White x Air Jordan 1 Retro High OG's highly sought after, way before their official release. Those of you in need of a pair can hit up the marketplace to buy them. If you got a pair and want to see what they're going for, check online and then decide if it's time to sell or wait."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 4 Retro'RED-Thunder'",
    price:"540",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-4-retro-'red-thunder'-ct8527016/display_picture.png",
    status:"HEAT",
    for:"UNISEX",
    rating:"4.2",
    description:"The Air Jordan 4 first landed in 1989 and, decades later, its special details remain. The suede nubuck upper, mesh quarter panel and tongue bottom, and visible Air unit are back, but in a new colourway for the season. An all-black upper recalls OG styles while its Crimson accents to the mesh, midsole, eyestay and liner add a fiery, modern touch to a Jordan Brand classic."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG Patent 'Bred'",
    price:"542",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-patent-'bred'-555088063/display_picture.png",
    status:"",
    for:"MEN",
    rating:"3.5",
    description:"The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature weaved Nike Air tongue labels. From there, a classic Wings logo on the collar and a white with red Air sole complete the retro design."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Travis Scott x Air Jordan 6 Retro 'British Khaki'",
    price:"600",
    category:"Sneakers",
    image:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/49f6ae8b-43cb-4ddf-a0b6-f0abb145baa4/air-jordan-6-travis-scott-release-date.jpg",
    status:"HEAT",
    for:"MEN",
    rating:"3.4",
    description:"Travis Scott and Jordan Brand teamed up to deliver the Air Jordan 6 Retro Travis Scott British Khaki. The British Khaki marks the second time that Travis has added his touch to the Jordan 6 silhouette, the first being the 2019 Air Jordan 6 Travis Scott.The upper of the Air Jordan 6 Retro Travis Scott British Khaki is made of British Khaki suede. From there, hits of Bright Crimson appear on the heel and tongue embroidered logos. The upper also has two cargo pockets: one with a snap enclosure on the lateral ankle and one with a zip enclosure on the medial ankle. A translucent tongue, heel tab, and outsole that glows in the dark adds the finishing touches to this latest Travis Scott Jordan."
  },
  {
    _id: uuid(),
    brand: "DREW",
    model: "Drew house deconstructed mascot hoodie 'Golden Yellow'",
    price:"621",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/drew-house-mascot-hoodie-'golden-yellow'-/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"2.8",
    description:"100% cotton ventura fit - slightly cropped with drop shoulder and longer sleeve raw cuff and raw hem mascot screen print on front."
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "Fear of God Essentials 1977 Hoodie 'Iron'",
    price:"530",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/fear-of-god-essentials-1977-hoodie-'iron'-ss22/display_picture.png",
    status:"HEAT",
    for:"WOMEN",
    rating:"4.2",
    description:"Fear of God Essentials delivered this Fear of God Essentials Pullover Hoodie in Linen as a part of their SSENSE-exclusive Summer 2022 release.This Fear of God Essentials Pullover Hoodie features rubberized Essentials Logos on the chest, wrist, and back. Each Fear of God Essentials Pullover Hoodie made available as a part of this release was made from an 80% Cotton, 20% Viscose blend."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG 'Electro Orange'",
    price:"400",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-'electro-orange'-555088180/display_picture.png",
    status:"",
    for:"WOMEN",
    rating:"1.8",
    description:"The Air Jordan 1 High Electro Orange features a white leather upper with black overlays and a Hyper Orange ankle wrap. From there, a matching woven tongue label and sole complete the design."
  },
  {
    _id: uuid(),
    brand: "DREW",
    model: "Drew House Mascot Hoodie 'Sky Blue'",
    price: "310",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/drew-house-mascot-hoodie-'sky-blue'-/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"2.9",
    description:"100% cotton ventura fit - slightly cropped with drop shoulder and longer sleeve raw cuff and raw hem mascot screen print on front"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike SB x Wmns Dunk Low SE 'Candy'",
    price:"280",
    category:"Sneakers",
    image:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/d980330e-3a79-4ab5-b636-4263b23fbfd9/women-s-dunk-low-candy-release-date.jpg",
    status:"HEAT",
    status:"",
    for:"WOMEN",
    rating:"4.4",
    description:"The women's Nike Dunk Low SE Easter Candy (W) features a white leather upper with asymmetrical multi-colored overlays. A white and light yellow sole with multicolor speckle details completes the design. The women's Nike Dunk Low SE Easter Candy (W) released in June of 2021 ."
  },
  {
    _id: uuid(),
    brand: "McDonald's",
    model: "Travis Scott x McDonald's (Limited)",
    price:"180",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/travis-scott-x-mcdonald's-crew-t-shirt-mcdcrew/display_picture.png",
    status:"LIMITED",
    for:"UNISEX",
    rating:"4.3",
    description:"Travis Scott's collaborative Crew t-shirt with McDonald's never actually received an official release. The t-shirt was given out to McDonald's Crew members to wear during the time when the Travis Scott burger was available. This red Travis Scott Merch t-shirt features both a McDonald's logo and a Cactus Jack logo and released on September 8th, 2020."
  },
  {
    _id: uuid(),
    brand: "ADIDAS",
    model: "Yeezy Boost 350 Version 2 'Mono Mist'",
    price:"575",
    category:"Sneakers",
    image:"https://cdn.shopify.com/s/files/1/0360/6491/9692/products/adidas_Yeezy_Boost_350_V2_Mono_Mist_800x.jpg?v=1623671650",
    status:"",
    for:"MEN",
    rating:"4.1",
    description:"The adidas Yeezy 350 V2 Mono Mist's upper delivers monofilament mesh, a new material choice for the sneaker. Lastly, traditional Boost sole is added to the sole.The adidas Yeezy 350 V2 Mono Mist released in June, exclusively in EU."
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "Fear-of-God x Essential (Limited)",
    price:"125",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/fear-of-god-essentials-long-sleeve-t-shirt-'taupe'-ss21/display_picture.png",
    status:"LIMITED",
    for:"MEN",
    rating:"3.3",
    description:"Fear of God Essentials released this Fear of God Essentials T-shirt in desert taupe, alongside more than 200 other apparel items, as a part of their second release of the Spring/Summer 2022 season.This t-shirt features a velvety Essentials Fear of God logo on the left chest and a rubberized logo patch on its back. Each t-shirt made available as a part of this release was made from a 100% cotton jersey material."
  },
  {
    _id: uuid(),
    brand: "ADIDAS",
    model: "Yeezy Boost 350 Version 2 'ISRAFIL'",
    price:"389",
    category:"Sneakers",
    image:"https://cdn.shopify.com/s/files/1/0360/6491/9692/products/yeezyisrafil_1200x.jpg?v=1602783409",
    status:"",
    for:"WOMEN",
    rating:"4.7",
    description:"The adidas Yeezy Boost 350 V2 ‘Israfil’ features a patchwork-like composition on the Primeknit upper, constructed from a two-tone blend of tan and grey yarns. The neutral hues are enlivened by a streak of yellow on the signature post-dyed monofilament side stripe. Responsive cushioning comes courtesy of the standard full-length Boost midsole, encased in a semi-translucent rubber sidewall. A grippy gum rubber outsole provides durable traction underfoot.These Yeezy 350 v2 Israfil sneakers are a Summer 2020 release from adidas YEEZY. The colourway includes an orange monofilament side stripe and a light blue-grey and cream Primeknit upper. A lack of traditional heel tab, an on-and-off-again design element of the Yeezy 350 V2 collection, adds to the sleek look."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG 'Volt Gold'",
    price:"205",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-'volt-gold'-555088118/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"4.2",
    description:"Jordan Brand started 2021 on a high note with the Jordan 1 High Volt Gold. The Volt Gold offers a new take on the renowned Black Toe theme by implementing new materials and features that contribute to a reconstructed design aesthetic.In familiar Black Toe color blocking, the upper of the Jordan 1 Volt Gold is composed of white, black, and yellow leather. A Volt yellow-tinted panel donning the Jordan Wings logo wraps the ankle. Unlike OG Jordan 1 designs that feature double stitch reinforcement, the Volt Gold utilizes single stitch reinforcement on its overlays, creating dimensionality with exposed edges. A nylon tongue with exposed foam edges and reverse transparent tongue label emphasize Jordan’s reconstructed design approach. A yellowed midsole and black outsole offer an aged look.The Jordan 1 High Volt Gold released in January of 2021 "
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "Fear of God Essentials 1977 SHORTS 'IRON'",
    price:"310",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/fear-of-god-essentials-1977-shorts-'iron'-ss22/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"3.1",
    description:"Delivered as part of Fear of God Essentials' first release of the Spring/Summer 2022 season, this iron-colored pair of Fear of God Essentials 1977 Shorts was made available in March of 2022. The shorts are made from a heavyweight blend of cotton and polyester and feature logos on the crotch and left leg."
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike SB x Wmns Dunk Low 'Green Glow'",
    price:"708",
    category:"Sneakers",
    image:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/899448ae-a589-4355-a669-445cc4ab170f/women-s-dunk-low-green-glow-release-date.jpg",
    status:"",
    for:"WOMEN",
    rating:"2.9",
    description:"After releasing the Nike Dunk Low Orange Pearl (W) and Nike Dunk Low College Navy (W) in the spring of 2021, Nike delivered yet another women’s exclusive Dunk Low this season with the Nike Dunk Low Green Glow (W). While the Green Glow is the first of its kind, its usage of traditional Dunk color blocking adds a familiarity to the design. The upper of the Nike Dunk Low Green Glow (W) is composed of white leather with Green Glow leather overlays and Swoosh logos. From there, a woven Nike label is sewn to the tongue and a white 'NIKE' is embroidered on the heel. A white midsole and Green Glow outsole completes the design. The women's Nike Dunk Low Green Glow (W) released in April of 2021."
  },
];
