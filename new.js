const products = [
  {
    id: 1,
    name: "Ultra Comfort Running Shoes",
    shortCode: "UCRS123",
    category: "Footwear",
    subCategory: "Running",
    tags: ["sports", "comfort", "durable"],
    brand: {
      name: "SpeedX",
      manufacturer: "SpeedX Inc.",
    },
    industry: "Sports",
    country: "USA",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    shortCode: "CDJ456",
    category: "Clothing",
    subCategory: "Jackets",
    tags: ["fashion", "denim", "classic"],
    brand: {
      name: "FashionHub",
      manufacturer: "FashionHub Ltd.",
    },
    industry: "Clothing",
    country: "Italy",
  },
  {
    id: 3,
    name: "Smartphone X12",
    shortCode: "SPX12",
    category: "Electronics",
    subCategory: "Mobile Phones",
    tags: ["smartphone", "electronics", "4G"],
    brand: {
      name: "TechMinds",
      manufacturer: "TechMinds Corp.",
    },
    industry: "Electronics",
    country: "China",
  },
  {
    id: 4,
    name: "Gaming Laptop Pro",
    shortCode: "GLP789",
    category: "Electronics",
    subCategory: "Laptops",
    tags: ["gaming", "high-performance", "portable"],
    brand: {
      name: "GameTech",
      manufacturer: "GameTech Inc.",
    },
    industry: "Electronics",
    country: "USA",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    shortCode: "SSWB321",
    category: "Home",
    subCategory: "Kitchenware",
    tags: ["sustainable", "portable", "kitchen"],
    brand: {
      name: "EcoLife",
      manufacturer: "EcoLife Products",
    },
    industry: "Home",
    country: "Germany",
  },
  {
    id: 6,
    name: "Bluetooth Headphones",
    shortCode: "BH202",
    category: "Electronics",
    subCategory: "Audio",
    tags: ["wireless", "audio", "bluetooth"],
    brand: {
      name: "SoundMax",
      manufacturer: "SoundMax Ltd.",
    },
    industry: "Electronics",
    country: "Japan",
  },
  {
    id: 7,
    name: "Yoga Mat",
    shortCode: "YM567",
    category: "Fitness",
    subCategory: "Exercise Equipment",
    tags: ["fitness", "yoga", "non-slip"],
    brand: {
      name: "FitGear",
      manufacturer: "FitGear Co.",
    },
    industry: "Fitness",
    country: "India",
  },
  {
    id: 8,
    name: "Digital Wrist Watch",
    shortCode: "DWW001",
    category: "Accessories",
    subCategory: "Watches",
    tags: ["digital", "fashion", "timepiece"],
    brand: {
      name: "TimeWave",
      manufacturer: "TimeWave Ltd.",
    },
    industry: "Accessories",
    country: "Switzerland",
  },
  {
    id: 9,
    name: "Electric Toothbrush",
    shortCode: "ETB88",
    category: "Personal Care",
    subCategory: "Oral Care",
    tags: ["electric", "oral", "hygiene"],
    brand: {
      name: "OralEase",
      manufacturer: "OralEase Inc.",
    },
    industry: "Personal Care",
    country: "USA",
  },
  {
    id: 10,
    name: "LED Desk Lamp",
    shortCode: "LDL334",
    category: "Home",
    subCategory: "Lighting",
    tags: ["led", "lighting", "desk"],
    brand: {
      name: "BrightLite",
      manufacturer: "BrightLite Ltd.",
    },
    industry: "Home",
    country: "South Korea",
  },
  {
    id: 11,
    name: "Professional Camera",
    shortCode: "PCAM90",
    category: "Electronics",
    subCategory: "Cameras",
    tags: ["photography", "professional", "dslr"],
    brand: {
      name: "PhotoPro",
      manufacturer: "PhotoPro Inc.",
    },
    industry: "Electronics",
    country: "Japan",
  },
  {
    id: 12,
    name: "Smart Thermostat",
    shortCode: "ST123",
    category: "Electronics",
    subCategory: "Home Automation",
    tags: ["smart home", "thermostat", "energy saving"],
    brand: {
      name: "HomeSmart",
      manufacturer: "HomeSmart Co.",
    },
    industry: "Electronics",
    country: "Canada",
  },
  {
    id: 13,
    name: "Leather Wallet",
    shortCode: "LW456",
    category: "Accessories",
    subCategory: "Wallets",
    tags: ["leather", "fashion", "durable"],
    brand: {
      name: "LuxLeather",
      manufacturer: "LuxLeather Inc.",
    },
    industry: "Accessories",
    country: "Italy",
  },
  {
    id: 14,
    name: "Mountain Bike",
    shortCode: "MB789",
    category: "Sports",
    subCategory: "Cycling",
    tags: ["cycling", "outdoor", "mountain"],
    brand: {
      name: "CycleMaster",
      manufacturer: "CycleMaster Ltd.",
    },
    industry: "Sports",
    country: "Germany",
  },
  {
    id: 15,
    name: "Air Purifier",
    shortCode: "AP123",
    category: "Home",
    subCategory: "Appliances",
    tags: ["clean air", "home", "appliance"],
    brand: {
      name: "PureAir",
      manufacturer: "PureAir Inc.",
    },
    industry: "Home",
    country: "China",
  },
  {
    id: 16,
    name: "Wireless Charger",
    shortCode: "WC456",
    category: "Electronics",
    subCategory: "Accessories",
    tags: ["wireless", "charger", "convenience"],
    brand: {
      name: "ChargePlus",
      manufacturer: "ChargePlus Ltd.",
    },
    industry: "Electronics",
    country: "South Korea",
  },
  {
    id: 17,
    name: "Non-Stick Frying Pan",
    shortCode: "NSFP789",
    category: "Home",
    subCategory: "Kitchenware",
    tags: ["cooking", "kitchen", "non-stick"],
    brand: {
      name: "CookEase",
      manufacturer: "CookEase Ltd.",
    },
    industry: "Home",
    country: "France",
  },
  {
    id: 18,
    name: "Noise Cancelling Headphones",
    shortCode: "NCH001",
    category: "Electronics",
    subCategory: "Audio",
    tags: ["audio", "noise-cancelling", "music"],
    brand: {
      name: "SoundWave",
      manufacturer: "SoundWave Ltd.",
    },
    industry: "Electronics",
    country: "Japan",
  },
  {
    id: 19,
    name: "Portable Power Bank",
    shortCode: "PPB234",
    category: "Electronics",
    subCategory: "Accessories",
    tags: ["portable", "charging", "convenience"],
    brand: {
      name: "PowerUp",
      manufacturer: "PowerUp Inc.",
    },
    industry: "Electronics",
    country: "China",
  },
  {
    id: 20,
    name: "Fitness Tracker",
    shortCode: "FT567",
    category: "Fitness",
    subCategory: "Wearables",
    tags: ["fitness", "tracker", "wearable", "comfort"],
    brand: {
      name: "FitTrack",
      manufacturer: "FitTrack Co.",
    },
    industry: "Fitness",
    country: "USA",
  },
  {
    id: 21,
    name: "Eco-Friendly Tote Bag",
    shortCode: "EFTB001",
    category: "Accessories",
    subCategory: "Bags",
    tags: ["eco-friendly", "fashion", "sustainable", "latest", "style"],
    brand: {
      name: "GreenEarth",
      manufacturer: "GreenEarth Inc.",
    },
    industry: "Accessories",
    country: "India",
  },
  {
    id: 22,
    name: "Adjustable Office Chair",
    shortCode: "AOC123",
    category: "Furniture",
    subCategory: "Office",
    tags: ["furniture", "office", "adjustable"],
    brand: {
      name: "ComfortSeating",
      manufacturer: "ComfortSeating Ltd.",
    },
    industry: "Furniture",
    country: "Sweden",
  },
];

 function all_products(){
  var alldata='';
  products.map(function(e){
  
    alldata += `<tr>
    <td>`+e.id+`</td>
    <td>`+e.name+`</td>
    <td>`+e.category+`</td>
    <td>`+e.subCategory+`</td>
    <td>`+e.industry+`</td>
    <td>`+e.country+`</td>
    <td>`+e.brand.name+`</td>
    <td>`+e.brand.manufacturer+`</td>
    <td>`+e.tags+`</td>
  </tr>`;
  })
  document.getElementById('product_body') .innerHTML= alldata;
  document.getElementById('sport') .style.display="none";
 
 
  
 }
 function footwear(){
  var footwearr='';
  products.map(function(e){
    if(e.category==='Footwear'){
      footwearr += `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
         <td>`+e.brand.name+`</td>
         <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
  
    })
    document.getElementById('foot') .innerHTML= footwearr;
 }
 function clothing(){
  var clothes='';
  products.map(function(e){
    if(e.category=='Clothing'){
      clothes += `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
          <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('clothing') .innerHTML= clothes;
    document.getElementById('foot') .style.display="none";
   
    
 }
 function electronics(){
  var elec='';
  products.map(function(e){
    if(e.category === 'Electronics'){
      elec += `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
          <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('elecc') .innerHTML= elec;
    document.getElementById('clothing') .style.display="none";
   
   
    
 }
 function home(){
  var hom='';
  products.map(function(e){
    if(e.category === 'Home'){
      hom += `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
          <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('home') .innerHTML= hom;
    document.getElementById('elecc') .style.display="none";
    
   
    
 }
 function Accessories(){
  var Acces='';
  products.map(function(e){
    if(e.category === 'Accessories'){
      Acces+= `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
         <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('Acc') .innerHTML= Acces;
    document.getElementById('home') .style.display="none";
   
    
 }
 function personal(){
  var p='';
  products.map(function(e){
    if(e.category === 'Personal Care'){
      p+= `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
         <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('pcare') .innerHTML= p;
    document.getElementById('fit') .style.display="none";
   
    
 }
 function furniture(){
  var f='';
  products.map(function(e){
    if(e.category === 'Furniture'){
      f+= `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
         <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('frnitur') .innerHTML= f;
    document.getElementById('pcare') .style.display="none";
   
    
 }
 function sports(){
  var s='';
  products.map(function(e){
    if(e.category === 'Sports'){
      s+= `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
          <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('sport') .innerHTML= s;
    document.getElementById('frnitur') .style.display="none";

   
    
 }
 function fitness(){
  var f='';
  products.map(function(e){
    if(e.category === 'Fitness'){
      f+= `<tr>
          <td>`+e.id+`</td>
          <td>`+e.name+`</td>
          <td>`+e.category+`</td>
          <td>`+e.subCategory+`</td>
          <td>`+e.industry+`</td>
          <td>`+e.country+`</td>
         <td>`+e.brand.name+`</td>
          <td>`+e.brand.manufacturer+`</td>
          <td>`+e.tags+`</td>
        </tr>`;
    }
    })
    document.getElementById('fit') .innerHTML= f;
    document.getElementById('Acc') .style.display="none";

   
    
 }
 
 
 
