import Image from "next/image";

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: "2019 Toyota Corolla Altis(NEW) 1.8 Hybrid尊爵 自排 灰",
        href: "#",
        price: "NT$ 638,000",
        imageSrc:
            "/public/cars/8D32D4B6-5B20-4512-B6EE-A1454A916F21-1024x768.jpeg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "2019 Toyota Corolla Altis 1.8雅緻版 自排 黑",
        href: "#",
        price: "NT$ 478,000",
        imageSrc:
            "/public/cars/F6E6B481-17BB-4498-86EB-254AEA0D3F5A-1024x768.jpeg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "2016 Nissan X-Trail 2.5豪華影音版 自排 白",
        href: "#",
        price: "NT$ 588,000",
        imageSrc:
            "/public/cars/0AEB1AD6-5B64-467D-A19A-929B244C679C-1024x768.jpeg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "2016 Mazda CX-3 2.0 SKYACTIVE-G頂級型 自排 白",
        href: "#",
        price: "NT$ 578,000",
        imageSrc:
            "/public/cars/91C86F88-E43B-4FDC-8B50-FA848287EF57-1024x768.jpeg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 5,
        name: "2020 Volkswagen T-ROC 280 TSI Style Design 1.5 自排 白",
        href: "#",
        price: "NT$ 888,000",
        imageSrc:
            "/public/cars/5C56E829-BCF2-4EB4-A9A7-163065987B82-1024x768.jpeg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 6,
        name: "2014 Lexus ES 300h豪華版 2.5 自排 黑",
        href: "#",
        price: "NT$ 698,000",
        imageSrc:
            "/public/cars/4C7A5B74-672A-437C-9A18-42D40797D3CD-1024x768.jpeg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 7,
        name: "2018 Mazda CX-3 2.0 SKY-G頂級型 自排 藍",
        href: "#",
        price: "NT$ 578,000",
        imageSrc:
            "/public/cars/86EBF10D-737C-44D6-A851-9864BD765FFC-1024x768.jpeg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 8,
        name: "2015 Mazda 3 5D 2.0頂級型 自排 藍",
        href: "#",
        price: "NT$ 888,000",
        imageSrc:
            "/public/cars/FE0CF236-468C-47E6-B679-821DC2160BB6-1024x768.jpeg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 9,
        name: "2015 Ford Kuga 1.5時尚經典型 自排 白",
        href: "#",
        price: "NT$ 698,000",
        imageSrc:
            "/public/cars/C1AC907C-2307-405E-80E9-7DF954941136-1024x768.jpeg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
];

export default function ProductList() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={product.href}
                            className="group"
                        >
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    fill
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                {product.price}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
