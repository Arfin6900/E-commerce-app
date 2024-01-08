import { item1, item2, item3, item4, item5, item6, item7, item8 } from "./images"

const categories=[
    {
       name:"First Category",
       description:"Now in Manhattan Elevate your day with Grab and Go's Fresh Juices where freshness meets outstanding flavor! Sip, savor, and supercharge your senses. It's not just a drink; it's a liquid boost for your superhero journey. Grab a bottle, seize the moment, and let our juices be your secret weapon to conquer the day!",
       items:[
        {
            // Price id's not found
            name:"ELIXIRS & JUICES 7.50 - Cacao Lion's Brew Elixir",
            image:item1,
            description:"a decadent fusion that unites the rich allure of cacao with the bold essence of lion's mane, the warm embrace of cinnamon, and the invigorating kick of coffee. This luscious elixir is a symphony of flavors crafted to tantalize your taste buds and elevate your senses.",
            price:12,
            priceId:"price_1OT0xxBsvaxDJwymvEmk17xW",
            testPriceId:"price_1OVvDJBsvaxDJwymviMLcct2"
        },
        {
            name:"Sunshine Elixir -",
            image:item2,
            description:"a vibrant blend of Carrot, Orange, Ginger, and Turmeric. Crafted to awaken your taste buds and nourish your body, this golden elixir is a refreshing journey through the sun-kissed fields of wellness.",
            price:15,
            priceId:"price_1OT0xxBsvaxDJwymvEmk17xW",
            testPriceId:"price_1OVvDJBsvaxDJwymviMLcct2"
        },
        {
            // price id's not found
            name:"Green Vitality ", 
            description:"a rejuvenating blend that harmonizes the crisp essence of celery, the verdant richness of spinach, the zesty kick of ginger, and the citrusy brightness of lemon. This invigorating elixir is a celebration of freshness, designed to refresh your palate and revitalize your senses",
            price:22,
            image:item3,
            priceId:"price_1OVeaOBsvaxDJwymAp5ZJg8E",
            testPriceId:"price_1OVvEyBsvaxDJwymd8LkGmty"

        },
        {
            name:`"Green Zen Fusion,"`,
            description:`a harmonious blend that marries the crisp essence of celery, the verdant richness of spinach, the invigorating allure of matcha, the zesty kick of ginger, and the citrusy brightness of lemon. This vibrant elixir, known as "Green Zen Fusion," is a celebration of freshness, meticulously crafted to refresh your palate and revitalize your senses.`,
            price:22,
            image:item3,
            priceId:"price_1OVeaOBsvaxDJwymAp5ZJg8E",
            testPriceId:"price_1OVvEyBsvaxDJwymd8LkGmty"
            
        },
        {
            name:`"Love Beet Juice" –`,
            description:`a tantalizing concoction that combines the earthy richness of beets with the zesty allure of lemon, the warming kick of ginger, and a hint of cayenne spice. This invigorating elixir is crafted to awaken your taste buds and nourish your body with a burst of wholesome goodness.`,
            price:22,
            image:item4,
            priceId:"price_1OT0vSBsvaxDJwymKljaSsjF",
            testPriceId:"price_1OVvEyBsvaxDJwymd8LkGmty"

        }
       ]
    },
    {
        name:"Second Category",
        description:"Vegan Desserts near me are now in Manhattan. Elevate your snacking experience and unleash the superhero within!",
        items:[
         {
             name:`"Hulk Energy Balls" –`,
             description:`" the powerhouse of natural vitality! Packed with the robust combination of matcha, flax, almonds, and sunflower seeds, these bite-sized wonders are your go-to snack for an instant energy boost`,
             price:12,
             image:item6,
             priceId:"price_1OVejnBsvaxDJwymHtto7WOI",
             testPriceId:"price_1OVv3vBsvaxDJwym3U1prVns"

         },
         {
             name:"Ruby Vitality Bites",
             description:"Elevate your snack game with our – a powerhouse of natural energy crafted with the vibrant goodness of beets, flax, oat flour, sunflower butter, and walnuts. These delectable energy balls are not only a burst of flavor but also a nutritious delight, carefully designed to fuel your day with wholesome goodness. ",
             price:15,
             image:item7,
             priceId:"price_1OVeeEBsvaxDJwymtghuUq0M",
             testPriceId:"price_1OVv6ZBsvaxDJwym8h5vXKh8"

         },
         {
             name:"Chocolate Chip Cookie Dough Bliss Balls",
             description:"– a guilt-free indulgence that captures the nostalgic essence of cookie dough, while delivering a boost of wholesome goodness. These delectable bliss balls are crafted with a delightful blend of chocolate chips, flax, oat flour, sunflower butter, and walnuts, creating a heavenly treat that satisfies both your sweet cravings and your desire for nutritious snacking.",
             price:22,
             image:item8,
             priceId:"price_1OVeg5BsvaxDJwymc0yLJYX9",
             testPriceId:"price_1OVvIsBsvaxDJwymp1nmEHzD"
         }
        ]
     }
]


// Producttion Id

// Price ID,Product Name
// price_1OVgibBsvaxDJwymjincyzHW,Green Zen  Balls
// price_1OVf4gBsvaxDJwymwodK9T1D,Carrot Ginger 8oz
// price_1OVenkBsvaxDJwymWJQh26AW,Celery Carrot Lemon Ginger Juice
// price_1OVejnBsvaxDJwymHtto7WOI,Hulk Energy Balls
// price_1OVeg5BsvaxDJwymc0yLJYX9,Chocolate Chip Cookie Dough Bliss Balls -----
// price_1OVeeEBsvaxDJwymtghuUq0M,Ruby Vitality Bites
// price_1OVeaOBsvaxDJwymAp5ZJg8E,Green Zen Fusion 4 oz           --test id not found
// price_1OVeXMBsvaxDJwymbNOIc9gt,Lion's Brew Elixir 4 oz
// price_1OVbueBsvaxDJwymfSWrNZgp,Love Beet 4oz
// price_1OVbsxBsvaxDJwymWPAeLWCX,Carrot Ginger 4 oz
// price_1OVbqeBsvaxDJwym5nz6uFoW,Green Power House
// price_1OT15jBsvaxDJwymMSbH8W5K,Lion's Roar Meditation: Awakening Your Inner Power
// price_1OT0xxBsvaxDJwymvEmk17xW,Sunshine Elixir
// price_1OT0vSBsvaxDJwymKljaSsjF,Love Beet Juice
// price_1OT0rVBsvaxDJwymw2OMb6mn,Chocolate Chip Cookie Dough Energy Balls
// price_1OR2tVBsvaxDJwym9UeugUxR,Soup



// Test Id


// /Price ID,Product Name
// price_1OVvLjBsvaxDJwymN4URiKQD,Lion's Roar Meditation: Awakening Your Inner Power
// price_1OVvLGBsvaxDJwym8mDdZ3iQ,Soup
// price_1OVvIsBsvaxDJwymp1nmEHzD,Chocolate Chip Cookie Dough Energy Balls -----
// price_1OVvEyBsvaxDJwymd8LkGmty,Love Beet Juice
// price_1OVvDJBsvaxDJwymviMLcct2,Sunshine Elixir
// price_1OVv9EBsvaxDJwymCWQkFw79,Green Power House
// price_1OVv6ZBsvaxDJwym8h5vXKh8,Ruby Vitality Bites
// price_1OVv66BsvaxDJwymEaHlDiH7,Chocolate Chip Cookie Dough Bliss Balls
// price_1OVv3vBsvaxDJwym3U1prVns,Hulk Energy Balls
// price_1OVv2gBsvaxDJwymRQUDKzse,Celery Carrot Lemon Ginger Juice
// price_1OVv15BsvaxDJwyml7ptW0xd,Carrot Ginger 8oz
// price_1OVuzXBsvaxDJwym8Y2lOpBf,Green Zen  Balls
// price_1OVu2kBsvaxDJwymmShRBOOG,Juice





export default categories