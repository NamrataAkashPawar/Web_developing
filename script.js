const products = [
  {
    id: 1,
    name: "Men's Cotton Casual Shirt",
    description: "Breathable fabric, slim fit, perfect for everyday wear.",
    price: 1500,
    img: "https://png.pngtree.com/png-clipart/20211116/original/pngtree-mens-shirts-cotton-fabrics-wearing-coats-png-image_6933161.png"
  },
  {
    id: 2,
    name: "Women's Floral Kurti",
    description: "Printed Anarkali style, rayon material, elegant look.",
    price: 450,
    img: "https://png.pngtree.com/png-clipart/20240404/original/pngtree-d-women-kurti-with-pant-amp-dupatta-american-full-body-white-png-image_14747328.png"
  },
  {
    id: 3,
    name: "Men's Running Shoes",
    description: "Comfortable lightweight shoes for running and casual use.",
    price: 600,
    img: "https://th.bing.com/th/id/OIP.WIyRv7oe0yuLCuQdx_t8TQHaEl?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  {
    id: 4,
    name: "Women's Handbag",
    description: "PU leather, stylish & spacious for daily essentials.",
    price: 1260,
    img: "https://png.pngtree.com/png-clipart/20220913/original/pngtree-women-hand-bag-png-image_8616128.png"
  },
  {
    id: 5,
    name: "Bluetooth Earbuds",
    description: "Noise-canceling, 20 hours playback, compact charging case.",
    price: 750,
    img: "https://th.bing.com/th/id/OIP.ldyVAnyrukhe_Q1lxxSssAHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 6,
    name: "Ocean Breeze Unisex Perfume",
    description: "A light aquatic scent with hints of citrus and sea salt. Refreshing and breezy, perfect for summer days.",
    price: 550,
    img: "https://wallpapers.com/images/hd/ocean-inspired-perfume-bottle-png-wxe-qu30fxcmgolgtyng.jpg"
  },
  {
    id: 7,
    name: "Smart Fitness Band",
    description: "Track your steps, heart rate, and sleep quality with this smart band.",
    price: 550,
    img: "https://th.bing.com/th/id/OIP.0NArMnw-vk2oF6ZQbdHgogHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  {
    id: 8,
    name: "Sunglasses for Men & Women",
    description: "UV-protected, stylish frame, suitable for all face shapes.",
    price: 250,
    img: "https://stylefrizz.com/img/sold-out-high-top-low-cut-converse-sunglasses.jpg"
  },
  {
    id: 9,
    name: "Women's Elegant Watch",
    description: "Water-resistant, rose gold dial, premium leather strap.",
    price: 850,
    img: "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-watch-luxury-watch-transparent-png-image_6687168.png"
  },
  {
    id: 10,
    name: "Backpack for College & Office",
    description: "Durable material, multiple compartments, laptop-friendly.",
    price: 400,
    img: "https://th.bing.com/th/id/OIP.YEsGytpe2OnekU0OSYteuQHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  {
    id: 11,
    name: "Room freshener",
    description: "Automatic room freshener",
    price: 480,
    img: "https://www.bigbasket.com/media/uploads/p/l/40191601_1-godrej-aer-smart-matic-bluetooth-enabled-automatic-air-freshener-kit-alive-2200-sprays.jpg"
  },
  {
    id: 12,
    name: "Laptop Sleeve Bag",
    description: "Slim and protective sleeve with minimalist design and soft interior padding.",
    price: 300,
    img: "https://th.bing.com/th/id/OIP.tls_kO9fuBuproKL3CQVswHaHa?w=500&h=500&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  {
    id: 13,
     name: "Gaming Mouse",
    description: "Ergonomic design with customizable RGB lighting and precision sensor.",
    price: 350,
    img: "https://th.bing.com/th/id/OIP.Iq00H-5QCWsiF1Dz0My_twHaGH?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  {
    id: 14,
    name: "Cotton Face Masks (Pack of 5)",
    description: "Reusable, breathable masks with adjustable straps. Stylish and safe.",
    price: 30,
    img: "https://th.bing.com/th/id/OIP.HZo2VCeouMJNtkweUjmIwwHaHa?w=191&h=191&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 15,
    name: "Speaker",
    description: "Compact and powerful with deep bass and 10-hour playtime.",
    price: 600,
    img: "https://purepng.com/public/uploads/medium/purepng.com-audio-speakeraudio-speakersaudiospeakerssound-speaker-1701528343548vnexg.png"
  }

];

const cart = [];

function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(product => `
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${product.img}" class="card-img-top" alt="${product.name}" onclick="openBuyNowModal(${product.id})">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-muted">${product.description}</p>
          <p><strong>Price:</strong> ₹${product.price}</p>
          <button class="btn btn-sm btn-primary w-100" onclick="addToCartById(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCartById(id) {
  const product = products.find(p => p.id === id);
  if (product) addToCart(product);
}

function addToCart(product) {
  const index = cart.findIndex(p => p.id === product.id);
  if (index === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[index].quantity++;
  }
  renderCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(p => p.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}
function renderCart() {
  const list = document.getElementById('cart-items');
  const total = document.getElementById('total-price');
  list.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(product => {
    totalPrice += product.price * product.quantity;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      ${product.name} (x${product.quantity})
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${product.id})">Remove</button>
    `;
    list.appendChild(li);
  });

  total.textContent = totalPrice.toFixed(2);
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const summary = cart.map(p => `${p.name} x${p.quantity}`).join("\n");
  alert("Order placed for:\n" + summary + "\n\nThank you for shopping with TrendEase!");

  cart.length = 0;
  renderCart();
}

function openBuyNowModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <img src="${product.img}" class="img-fluid mb-3" alt="${product.name}">
    <h5>${product.name}</h5>
    <p>${product.description}</p>
    <p><strong>Price:</strong> ₹${product.price}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById('buyNowModal'));
  modal.show();
}
renderProducts();
