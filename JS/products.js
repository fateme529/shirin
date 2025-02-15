const products = [
    {
        index: 0,
        src: "../images/p1.png",
        name: "کیندر تخم مرغی",
        price: "69,000 هزار تومن",
    },
    {
        index: 1,
        src: "../images/p2.png",
        name: "بیسکویت نوتلا سکه ایی",
        price: "89 هزار تومن",
    },
    {
        index: 2,
        src: "../images/p3.png",
        name: "شکلات آلپین گولد شیری و فندقی",
        price: "140 هزار تومن",
    },
    {
        index: 3,
        src: "../images/p4.png",
        name: "شکلات گودیوا ترکیه 24 عدد 35 گرمی",
        price: "هزار تومن399",
    },
    {
        index: 4,
        src: "../images/p5.png",
        name: "شکلات کادویی",
        price: "499 هزار تومن",
    },
    {
        index: 5,
        src: "../images/p6.png",
        name: " شکلات پذیرایی رز برند کدبری اصل انگلیس 600 گرم | Cadbury roses",
        price: "هزار تومن 600",
    },
    {
        index: 6,
        src: "../images/p7.png",
        name: " ترافل خوشمزه بلژیکی(انواع طعم ها) 200 گرمی truffles",
        price: "هزار تومن 500",
    },
    {
        index: 7,
        src: "../images/p8.png",
        name: "شکلات تخته ایی گالیان اصل بلژیکی 100 گرم",
        price: "هزار تومن 287",
    },
    {
        index: 8,
        src: "../images/p9.png",
        name: "پودر کاکائو هرشیز آمریکا (hersheys) 226 گرم",
        price: "189 هزار تومن",
    },
    {
        index: 9,
        src: "../images/p10.png",
        name: "شکلات کیندر کانتری با مغز غلات ساخت ایتالیا باکس 40 عددی",
        price: "999 هزار تومن",
    },
];

const products_tag = document.querySelector(".products");

show();
function show() {
    products.map((value) => {
        let div = document.createElement("div");
        div.className = "product";

        let pro_detaile = document.createElement("div");
        pro_detaile.className = "pro_detaile";

        let p_price = document.createElement("p");
        p_price.textContent = value.price;
        p_price.className = "p_price";

        let image = document.createElement("img");
        image.src = value.src;
        image.alt = value.name;

        let name = document.createElement("p");
        name.textContent = value.name;
        name.className = "p_name";

        pro_detaile.appendChild(name);
        pro_detaile.appendChild(p_price);
        div.appendChild(image);
        div.appendChild(pro_detaile);

        products_tag.appendChild(div);

        console.log(div);
    });
}
