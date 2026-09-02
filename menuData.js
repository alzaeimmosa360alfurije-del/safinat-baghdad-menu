const menuData = [
  {
    id: "grills",
    title: "المشويات",
    items: [
      { id: 1, name: "كباب لحم", price: "18,000 د.ع", image: "/images/kebab-meat.jpeg" },
      { id: 2, name: "تكة لحم", price: "20,000 د.ع", image: "/images/tikka-meat.jpeg" },
      { id: 3, name: "كباب دجاج", price: "15,000 د.ع", image: "/images/kebab-chicken.jpeg" },
      { id: 4, name: "تكة دجاج", price: "15,000 د.ع", image: "/images/tikka-chicken.jpeg" },
      { id: 5, name: "مشكل سفينة بغداد", price: "20,000 د.ع", image: "/images/mix-grill.jpeg" },
      { id: 6, name: "ضلوع مشوية", price: "20,000 د.ع", image: "/images/ribs.jpeg" }
    ]
  },
  {
    id: "natural-juices",
    title: "العصائر الطبيعية",
    items: [
      { id: 7, name: "عصير برتقال", price: "5,000 د.ع", image: "/images/juice-orange.jpeg" },
      { id: 8, name: "عصير ليمون نعناع", price: "5,000 د.ع", image: "/images/juice-lemon-mint.jpeg" },
      { id: 9, name: "عصير رمان", price: "5,000 د.ع", image: "/images/juice-pomegranate.jpeg" }
    ]
  },
  {
    id: "avocado",
    title: "الافوكادو",
    items: [
      { id: 10, name: "افوكادو بالعسل", price: "6,000 د.ع", image: "/images/avocado-honey.jpeg" },
      { id: 11, name: "افوكادو عسل بالمكسرات", price: "8,000 د.ع", image: "/images/avocado-nuts.jpeg" },
      { id: 12, name: "افوكادو سفينة بغداد", price: "10,000 د.ع", image: "/images/avocado-safina.jpeg" }
    ]
  },
  {
    id: "smoothies",
    title: "السموذي",
    items: [
      { id: 13, name: "سموذي فراولة", price: "5,000 د.ع", image: "/images/smoothie-strawberry.jpeg" },
      { id: 14, name: "سموذي بلوبيري", price: "5,000 د.ع", image: "/images/smoothie-blueberry.jpeg" },
      { id: 15, name: "سموذي باش فروت", price: "5,000 د.ع", image: "/images/smoothie-passionfruit.jpeg" }
    ]
  },
  {
    id: "milkshakes",
    title: "ميلك شيك",
    items: [
      { id: 16, name: "ميلك شيك نوتيلا", price: "6,000 د.ع", image: "/images/milkshake-nutella.jpeg" },
      { id: 17, name: "ميلك شيك اوريو", price: "6,000 د.ع", image: "/images/milkshake-oreo.jpeg" },
      { id: 18, name: "ميلك شيك فستق", price: "6,000 د.ع", image: "/images/milkshake-pistachio.jpeg" }
    ]
  },
  {
    id: "fruits-icecream",
    title: "الفواكه ايسكريم",
    items: [
      { id: 19, name: "طبق فواكة ملكي", price: "8,000 د.ع", image: "/images/fruit-plate-royal.jpeg" },
      { id: 20, name: "ايس كريم مشكل", price: "5,000 د.ع", image: "/images/icecream-assorted.jpeg" },
      { id: 21, name: "فروت چوكليت", price: "4,000 د.ع", image: "/images/fruit-chocolate.jpeg" }
    ]
  },
  {
    id: "hookah",
    title: "الأراكيل",
    items: [
      { id: 22, name: "تفاحتين مصري", price: "9,000 د.ع", image: "/images/hookah-double-apple.jpeg" },
      { id: 23, name: "علك نعناع", price: "9,000 د.ع", image: "/images/hookah-mint-gum.jpeg" },
      { id: 24, name: "حامض ونعناع", price: "9,000 د.ع", image: "/images/hookah-lemon-mint.jpeg" },
      { id: 25, name: "خلطة سفينة بغداد", price: "10,000 د.ع", image: "/images/hookah-safina.jpeg" },
      { id: 26, name: "طبيعي اناناس", price: "15,000 د.ع", image: "/images/hookah-pineapple.jpeg" }
    ]
  },
  {
    id: "oriental-dishes",
    title: "الاكلات الشرقية",
    items: [
      { id: 27, name: "قوزي على تمن", price: "18,000 د.ع", image: "/images/oriental-qoozi.jpeg" },
      { id: 28, name: "بامية باللحم", price: "12,000 د.ع", image: "/images/oriental-bamia.jpeg" }
    ]
  },
  {
    id: "red-meat-western",
    title: "اللحوم الحمراء غربي",
    items: [
      { id: 29, name: "ستيك بقر سبيشال", price: "24,000 د.ع", image: "/images/steak-beef.jpeg" },
      { id: 30, name: "بيف ميشيغان", price: "22,000 د.ع", image: "/images/beef-michigan.jpeg" }
    ]
  },
  {
    id: "white-meat-western",
    title: "اللحوم البيضاء غربي",
    items: [
      { id: 31, name: "ستيك دجاج بالمشروم", price: "16,000 د.ع", image: "/images/chicken-steak.jpeg" },
      { id: 32, name: "تشكن اسكالوب", price: "15,000 د.ع", image: "/images/chicken-escalope.jpeg" }
    ]
  },
  {
    id: "soups",
    title: "الحساء",
    items: [
      { id: 33, name: "شوربة عدس", price: "4,000 د.ع", image: "/images/soup-lentil.jpeg" },
      { id: 34, name: "شوربة فطر بالكريمة", price: "5,000 د.ع", image: "/images/soup-mushroom.jpeg" }
    ]
  },
  {
    id: "appetizers",
    title: "المقبلات",
    items: [
      { id: 35, name: "مقبلات مشكلة VIP", price: "10,000 د.ع", image: "/images/appetizers-mix.jpeg" },
      { id: 36, name: "حمص بطحينة", price: "5,000 د.ع", image: "/images/hummus.jpeg" },
      { id: 37, name: "تبولة / فتوش", price: "5,000 د.ع", image: "/images/tabbouleh.jpeg" }
    ]
  },
  {
    id: "breakfast",
    title: "الفطور الصباحي",
    items: [
      { id: 38, name: "طبق فطور سفينة بغداد VIP", price: "15,000 د.ع", image: "/images/breakfast-vip.jpeg" },
      { id: 39, name: "قيمر وعسل عراقي", price: "8,000 د.ع", image: "/images/breakfast-qaimar.jpeg" }
    ]
  },
  {
    id: "cocktail-juices",
    title: "عصائر كوكتيل",
    items: [
      { id: 40, name: "كوكتيل سفينة بغداد", price: "7,000 د.ع", image: "/images/cocktail-safina.jpeg" },
      { id: 41, name: "كوكتيلطبقات فواكه", price: "6,000 د.ع", image: "/images/cocktail-layers.jpeg" }
    ]
  },
  {
    id: "mojito",
    title: "موهيتو",
    items: [
      { id: 42, name: "موهيتو كلاسيك", price: "5,000 د.ع", image: "/images/mojito-classic.jpeg" },
      { id: 43, name: "موهيتو فراولة", price: "5,000 د.ع", image: "/images/mojito-strawberry.jpeg" },
      { id: 44, name: "موهيتو بلوبيري", price: "5,000 د.ع", image: "/images/mojito-blueberry.jpeg" }
    ]
  },
  {
    id: "pasta",
    title: "الباستا",
    items: [
      { id: 45, name: "باستا ألفريدو دجاج", price: "12,000 د.ع", image: "/images/pasta-alfredo.jpeg" },
      { id: 46, name: "باستا بولونيز", price: "12,000 د.ع", image: "/images/pasta-bolognese.jpeg" }
    ]
  },
  {
    id: "snacks",
    title: "سناك",
    items: [
      { id: 47, name: "كرات الجبن الفاخرة", price: "6,000 د.ع", image: "/images/snack-cheese-balls.jpeg" },
      { id: 48, name: "فنجر بتيتو صوص", price: "4,000 د.ع", image: "/images/snack-fries.jpeg" }
    ]
  },
  {
    id: "cakes",
    title: "الكيك",
    items: [
      { id: 49, name: "كيك شوكولاتة فادج", price: "6,000 د.ع", image: "/images/cake-chocolate.jpeg" },
      { id: 50, name: "تشيز كيك بلوبيري", price: "6,000 د.ع", image: "/images/cake-cheesecake.jpeg" }
    ]
  },
  {
    id: "kunafa",
    title: "الكنافة",
    items: [
      { id: 51, name: "كنافة بالجبن النابلسي", price: "7,000 د.ع", image: "/images/kunafa-cheese.jpeg" },
      { id: 52, name: "كنافة بالفستق والنوتيلا", price: "8,000 د.ع", image: "/images/kunafa-nutella.jpeg" }
    ]
  },
  {
    id: "crepe-waffle",
    title: "كريب و الوافل",
    items: [
      { id: 53, name: "كريب نوتيلا موز", price: "7,000 د.ع", image: "/images/crepe-nutella.jpeg" },
      { id: 54, name: "وافل بلجيكي فواكه", price: "7,000 د.ع", image: "/images/waffle-fruits.jpeg" }
    ]
  },
  {
    id: "pizza",
    title: "البيتزا",
    items: [
      { id: 55, name: "بيتزا مارغريتا", price: "10,000 د.ع", image: "/images/pizza-margherita.jpeg" },
      { id: 56, name: "بيتزا بيبروني", price: "12,000 د.ع", image: "/images/pizza-pepperoni.jpeg" },
      { id: 57, name: "بيتزا سوبر سوبريم", price: "14,000 د.ع", image: "/images/pizza-supreme.jpeg" }
    ]
  },
  {
    id: "seafood-fish",
    title: "الاسماك",
    items: [
      { id: 58, name: "سمك مسكوف عراقي", price: "25,000 د.ع", image: "/images/fish-masgouf.jpeg" },
      { id: 59, name: "روبيان جامبو مشوي", price: "22,000 د.ع", image: "/images/shrimp-grilled.jpeg" }
    ]
  },
  {
    id: "hot-drinks",
    title: "المشروبات الساخنة",
    items: [
      { id: 60, name: "شاي عراقي مهيل", price: "2,000 د.ع", image: "/images/hot-tea.jpeg" },
      { id: 61, name: "قهوة تركية", price: "3,000 د.ع", image: "/images/hot-turkish-coffee.jpeg" },
      { id: 62, name: "قهوة عربية بالهيل", price: "3,000 د.ع", image: "/images/hot-arabic-coffee.jpeg" }
    ]
  },
  {
    id: "latte-coffee",
    title: "الاتية والقهوة الاختصاصية",
    items: [
      { id: 63, name: "كافيه لاتيه", price: "5,000 د.ع", image: "/images/latte-classic.jpeg" },
      { id: 64, name: "سبانيش لاتيه", price: "6,000 د.ع", image: "/images/latte-spanish.jpeg" },
      { id: 65, name: "كابوتشينو", price: "5,000 د.ع", image: "/images/cappuccino.jpeg" }
    ]
  }
];

module.exports = menuData;