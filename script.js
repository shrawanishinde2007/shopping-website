/* =====================================================================
   H.M Clothes - script.js
   One script powers every page. Each page has <body data-page="...">
   and this file renders the shared header/footer plus page content.
   ===================================================================== */
'use strict';

/* ---------------------------------------------------------------------
   1. PRODUCT DATA  (add new products by copying one object below)
   price    = original price (MRP) in INR
   discount = percentage off
   image    = public URL OR a local file like "images/dress1.jpg"
   --------------------------------------------------------------------- */
const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

const PRODUCTS = [
  { id: 1,  name: "Women's Floral Dress",       brand: "Rosette",      gender: "Women", category: "Dresses",     price: 1999, discount: 50, rating: 4.4, reviews: 1284, sizes: ["XS","S","M","L","XL"],         colors: ["Pink","Blue"],          material: "100% Viscose Rayon",           isNew: true,  image: U("1515886657613-9f3515b0c78f"), desc: "A breezy floral midi dress with a flattering A-line cut and flutter sleeves. Perfect for brunches and summer outings." },
  { id: 2,  name: "Women's Casual Dress",       brand: "Urban Muse",   gender: "Women", category: "Dresses",     price: 1499, discount: 40, rating: 4.2, reviews: 842,  sizes: ["S","M","L","XL"],              colors: ["Black","Green"],        material: "Cotton Blend",                 isNew: false, image: U("1595777457583-95e059d581b8"), desc: "Easy everyday dress with a relaxed fit and side pockets. Soft, breathable and wrinkle resistant." },
  { id: 3,  name: "Women's Denim Jacket",       brand: "Blue Thread",  gender: "Women", category: "Jackets",     price: 2499, discount: 45, rating: 4.5, reviews: 2310, sizes: ["XS","S","M","L","XL"],         colors: ["Blue","Black"],         material: "100% Cotton Denim",            isNew: true,  image: U("1551028719-00167b16eac5"), desc: "A classic cropped denim jacket with button closure and chest pockets. Layer it over anything." },
  { id: 4,  name: "Men's Casual Shirt",         brand: "Roadster",     gender: "Men",   category: "Shirts",      price: 1299, discount: 55, rating: 4.1, reviews: 3120, sizes: ["S","M","L","XL","XXL"],        colors: ["Blue","White","Green"], material: "Pure Cotton",                  isNew: false, image: U("1596755094514-f87e34085b2c"), desc: "Slim-fit casual shirt in a soft cotton weave with a spread collar and full sleeves." },
  { id: 5,  name: "Men's Graphic T-Shirt",      brand: "Highlander",   gender: "Men",   category: "T-Shirts",    price: 699,  discount: 50, rating: 4.3, reviews: 5402, sizes: ["S","M","L","XL","XXL"],        colors: ["Black","White","Red"],  material: "Cotton Jersey",                isNew: true,  image: U("1521572163474-6864f9cf17ab"), desc: "Everyday crew-neck tee with a bold chest print. Pre-shrunk for a lasting fit." },
  { id: 6,  name: "Men's Slim Fit Jeans",       brand: "Blue Thread",  gender: "Men",   category: "Jeans",       price: 1999, discount: 60, rating: 4.4, reviews: 4188, sizes: ["S","M","L","XL","XXL"],        colors: ["Blue","Black"],         material: "98% Cotton, 2% Elastane",      isNew: false, image: U("1542272604-787c3835535d"), desc: "Stretch denim with a slim, tapered leg. Mid-rise waist and five-pocket styling." },
  { id: 7,  name: "Men's Pullover Hoodie",      brand: "Highlander",   gender: "Men",   category: "Hoodies",     price: 1499, discount: 45, rating: 4.6, reviews: 2760, sizes: ["S","M","L","XL","XXL"],        colors: ["Grey","Black","Blue"],  material: "Fleece (80% Cotton, 20% Poly)", isNew: true,  image: U("1556821840-3a63f95609a7"), desc: "Heavyweight fleece hoodie with a kangaroo pocket and adjustable drawstring hood." },
  { id: 8,  name: "Kids Cartoon T-Shirt",       brand: "Little Pops",  gender: "Kids",  category: "T-Shirts",    price: 499,  discount: 40, rating: 4.3, reviews: 920,  sizes: ["XS","S","M","L"],              colors: ["Yellow","Blue"],        material: "Soft Combed Cotton",           isNew: false, image: U("1519238263530-99bdd11df2ea"), desc: "Fun printed tee made with gentle, skin-friendly cotton that kids love." },
  { id: 9,  name: "Kids Party Dress",           brand: "Little Pops",  gender: "Kids",  category: "Dresses",     price: 1199, discount: 50, rating: 4.5, reviews: 640,  sizes: ["XS","S","M","L"],              colors: ["Pink","Red"],           material: "Net with Cotton Lining",       isNew: true,  image: U("1518831959646-742c3a14ebf7"), desc: "A twirl-worthy party frock with a layered skirt and satin bow at the waist." },
  { id: 10, name: "Women's Cotton Kurti",       brand: "Aarya",        gender: "Women", category: "Kurtis",      price: 899,  discount: 55, rating: 4.3, reviews: 3890, sizes: ["S","M","L","XL","XXL"],        colors: ["Blue","Yellow","Pink"], material: "Pure Cotton",                  isNew: false, image: U("1583391733956-6c78276477e2"), desc: "Straight-cut printed kurti with three-quarter sleeves, ideal for work and festive days." },
  { id: 11, name: "Women's Silk Blend Saree",   brand: "Aarya",        gender: "Women", category: "Sarees",      price: 2999, discount: 60, rating: 4.6, reviews: 1760, sizes: ["M","L"],                       colors: ["Red","Green"],          material: "Silk Blend with Zari Border",  isNew: true,  image: U("1610030469983-98e550d6193c"), desc: "Elegant silk blend saree with a woven zari border and matching blouse piece." },
  { id: 12, name: "Men's Formal Shirt",         brand: "Park Lane",    gender: "Men",   category: "Shirts",      price: 1699, discount: 50, rating: 4.2, reviews: 1980, sizes: ["S","M","L","XL","XXL"],        colors: ["White","Blue"],         material: "Cotton Poplin",                isNew: false, image: U("1594938298603-c8148c4dae35"), desc: "Crisp, wrinkle-resistant formal shirt with a regular fit and button-down collar." },
  { id: 13, name: "Men's Bomber Jacket",        brand: "Roadster",     gender: "Men",   category: "Jackets",     price: 2999, discount: 55, rating: 4.4, reviews: 1330, sizes: ["S","M","L","XL"],              colors: ["Black","Green"],        material: "Polyester Shell, Quilted Lining", isNew: true, image: U("1551028719-00167b16eac5"), desc: "Lightweight bomber with ribbed cuffs and hem plus zip-front closure for chilly evenings." },
  { id: 14, name: "Women's Crop Top",           brand: "Urban Muse",   gender: "Women", category: "Tops",        price: 699,  discount: 45, rating: 4.0, reviews: 2210, sizes: ["XS","S","M","L"],              colors: ["White","Black","Pink"], material: "Ribbed Cotton Knit",           isNew: false, image: U("1503342217505-b0a15ec3261c"), desc: "Fitted ribbed crop top with a square neckline. Pairs with high-waist jeans or skirts." },
  { id: 15, name: "Women's High-Rise Jeans",    brand: "Blue Thread",  gender: "Women", category: "Jeans",       price: 1799, discount: 50, rating: 4.4, reviews: 3470, sizes: ["XS","S","M","L","XL"],         colors: ["Blue","Black"],         material: "Stretch Denim",                isNew: false, image: U("1541099649105-f69ad21f3246"), desc: "High-rise skinny jeans with a sculpting stretch fit and a clean, faded wash." },
  { id: 16, name: "Men's Polo T-Shirt",         brand: "Park Lane",    gender: "Men",   category: "T-Shirts",    price: 899,  discount: 50, rating: 4.3, reviews: 4205, sizes: ["S","M","L","XL","XXL"],        colors: ["Blue","White","Red"],   material: "Pique Cotton",                 isNew: true,  image: U("1583743814966-8936f5b7be1a"), desc: "Smart-casual polo with a ribbed collar and two-button placket in breathable pique cotton." },
  { id: 17, name: "Kids Zip Hoodie",            brand: "Little Pops",  gender: "Kids",  category: "Hoodies",     price: 1199, discount: 40, rating: 4.5, reviews: 580,  sizes: ["XS","S","M","L"],              colors: ["Grey","Blue"],          material: "Soft Cotton Fleece",           isNew: false, image: U("1503944583220-79d8926ad5e2"), desc: "Cosy zip-up hoodie with kangaroo pockets for chilly mornings and playground adventures." },
  { id: 18, name: "Women's Knit Sweater",       brand: "Rosette",      gender: "Women", category: "Sweaters",    price: 1999, discount: 55, rating: 4.5, reviews: 1510, sizes: ["XS","S","M","L","XL"],         colors: ["Pink","Grey"],          material: "Acrylic Wool Blend",           isNew: true,  image: U("1434389677669-e08b4cac3105"), desc: "Chunky cable-knit sweater with a relaxed silhouette that keeps you warm and stylish." },
  { id: 19, name: "Men's Track Pants",          brand: "Active Pro",   gender: "Men",   category: "Track Pants", price: 999,  discount: 50, rating: 4.2, reviews: 2640, sizes: ["S","M","L","XL","XXL"],        colors: ["Black","Grey"],         material: "Dry-Fit Polyester",            isNew: false, image: U("1506629082955-511b1aa562c8"), desc: "Moisture-wicking track pants with zip pockets and an elasticated waist for gym or lounge." },
  { id: 20, name: "Women's Ethnic Dress",       brand: "Aarya",        gender: "Women", category: "Dresses",     price: 2499, discount: 60, rating: 4.6, reviews: 1120, sizes: ["S","M","L","XL","XXL"],        colors: ["Red","Yellow","Green"], material: "Georgette with Embroidery",    isNew: true,  image: U("1583391733981-8498408ee4b6"), desc: "Flared ethnic dress with fine embroidery and mirror work. A festive-season favourite." },
  { id: 21, name: "Men's Canvas Sneakers",      brand: "Active Pro",   gender: "Men",   category: "Shoes",       price: 1799, discount: 45, rating: 4.3, reviews: 2890, sizes: ["S","M","L","XL"],              colors: ["White","Black"],        material: "Canvas Upper, Rubber Sole",    isNew: false, image: U("1525966222134-fcfa99b8ae77"), desc: "Clean low-top canvas sneakers with cushioned insoles and a durable vulcanised sole." },
  { id: 22, name: "Women's Leather Handbag",    brand: "Rosette",      gender: "Women", category: "Accessories", price: 2299, discount: 50, rating: 4.4, reviews: 970,  sizes: ["M"],                           colors: ["Black","Red"],          material: "Vegan Leather",                isNew: true,  image: U("1584917865442-de89df76afd3"), desc: "Structured everyday handbag with a roomy interior, zip closure and detachable sling strap." },
  { id: 23, name: "Men's Leather Belt",         brand: "Park Lane",    gender: "Men",   category: "Accessories", price: 699,  discount: 40, rating: 4.1, reviews: 1430, sizes: ["M","L","XL"],                  colors: ["Black"],                material: "Genuine Leather",              isNew: false, image: U("1624222247344-550fb60583dc"), desc: "Classic reversible leather belt with a polished metal buckle. Works with formal and casual wear." },
  { id: 24, name: "Kids Denim Jeans",           brand: "Little Pops",  gender: "Kids",  category: "Jeans",       price: 999,  discount: 45, rating: 4.2, reviews: 710,  sizes: ["XS","S","M","L"],              colors: ["Blue"],                 material: "Soft Stretch Denim",           isNew: false, image: U("1519238263530-99bdd11df2ea"), desc: "Comfortable pull-on jeans with an elastic waist, made tough enough for playtime." }
];

/* Add derived fields: final price and size-wise ratings */
PRODUCTS.forEach((p) => {
  p.finalPrice = Math.round(p.price * (1 - p.discount / 100));
  // Deterministic size-wise ratings (so they don't change on every reload)
  p.sizeRatings = {};
  p.sizes.forEach((s, i) => {
    const r = p.rating + (((p.id + i * 3) % 5) - 2) * 0.1;
    p.sizeRatings[s] = Math.min(5, Math.max(3.5, r)).toFixed(1);
  });
});

/* ---------------------------------------------------------------------
   2. SMALL HELPERS
   --------------------------------------------------------------------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rupee = (n) => '₹' + Number(n).toLocaleString('en-IN');
const getParam = (k) => new URLSearchParams(location.search).get(k);
const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------------------------------------------------------------------
   3. LOCAL STORAGE LAYER
   Keys:  hm_cart, hm_wishlist, hm_users, hm_session
   --------------------------------------------------------------------- */
const store = {
  get(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; }
    catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ }
  }
};

let cart = store.get('hm_cart', []);          // [{id, size, qty}]
let wishlist = store.get('hm_wishlist', []);  // [productId, ...]

const saveCart = () => { store.set('hm_cart', cart); updateBadges(); };
const saveWishlist = () => { store.set('hm_wishlist', wishlist); updateBadges(); };

/* ---------------------------------------------------------------------
   4. IMAGE FALLBACK  (keeps the layout complete if a URL fails)
   --------------------------------------------------------------------- */
function fallbackImage(name) {
  const initials = esc(name.split(' ').slice(0, 2).join(' '));
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#ffe3ea'/><stop offset='1' stop-color='#ff9bb3'/></linearGradient></defs>
    <rect width='600' height='750' fill='url(#g)'/>
    <text x='300' y='350' font-size='90' text-anchor='middle'>👗</text>
    <text x='300' y='440' font-size='30' font-family='Arial' fill='#c2184a' text-anchor='middle'>${initials}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
// Global handler used by every <img onerror="imgFail(this)">
window.imgFail = function (img) {
  img.onerror = null;
  img.src = fallbackImage(img.alt || 'H.M Clothes');
};

/* ---------------------------------------------------------------------
   5. SHARED LAYOUT: HEADER, FOOTER, TOAST, BADGES
   --------------------------------------------------------------------- */
function renderHeader() {
  const user = store.get('hm_session', null);
  const q = esc(getParam('q') || '');
  const html = `
  <header class="site-header">
    <div class="container header-inner">
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">☰</button>
      <a href="index.html" class="logo">H.M <span>Clothes</span></a>
      <nav class="main-nav" id="mainNav">
        <a href="index.html" data-nav="home">Home</a>
        <a href="products.html?gender=Men" data-nav="men">Men</a>
        <a href="products.html?gender=Women" data-nav="women">Women</a>
        <a href="products.html?gender=Kids" data-nav="kids">Kids</a>
        <a href="products.html?filter=new" data-nav="new">New Arrivals</a>
        <a href="index.html#offers" data-nav="offers">Offers</a>
      </nav>
      <form class="search-bar" id="searchForm" role="search">
        <span class="search-icon">🔍</span>
        <input type="search" id="searchInput" placeholder="Search for clothes, brands and more" value="${q}" autocomplete="off">
      </form>
      <div class="header-actions">
        ${user
          ? `<span class="hi-user">Hi, ${esc(user.name.split(' ')[0])}</span><button class="link-btn" id="logoutBtn">Logout</button>`
          : `<a href="login.html" class="login-link">Login</a><span class="sep">/</span><a href="signup.html" class="login-link">Signup</a>`}
        <a href="wishlist.html" class="icon-btn" aria-label="Wishlist">❤️<span class="badge" id="wishCount">0</span></a>
        <a href="cart.html" class="icon-btn" aria-label="Cart">🛒<span class="badge" id="cartCount">0</span></a>
      </div>
    </div>
  </header>`;
  $('#site-header').innerHTML = html;

  // Highlight active nav link
  const page = document.body.dataset.page;
  const gender = (getParam('gender') || '').toLowerCase();
  let active = page === 'home' ? 'home' : '';
  if (page === 'products') active = getParam('filter') === 'new' ? 'new' : gender;
  const link = $(`[data-nav="${active}"]`);
  if (link) link.classList.add('active');

  // Mobile menu
  $('#menuToggle').addEventListener('click', () => $('#mainNav').classList.toggle('open'));
  $$('#mainNav a').forEach((a) => a.addEventListener('click', () => $('#mainNav').classList.remove('open')));

  // Search: go to the listing page with ?q=
  $('#searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const term = $('#searchInput').value.trim();
    location.href = 'products.html' + (term ? '?q=' + encodeURIComponent(term) : '');
  });

  // Logout
  const lo = $('#logoutBtn');
  if (lo) lo.addEventListener('click', () => { localStorage.removeItem('hm_session'); showToast('Logged out'); setTimeout(() => location.reload(), 600); });
}

function renderFooter() {
  const L = (t, h = '#') => `<li><a href="${h}">${t}</a></li>`;
  $('#site-footer').innerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h4>Online Shopping</h4>
        <ul>
          ${L('Men', 'products.html?gender=Men')}${L('Women', 'products.html?gender=Women')}${L('Kids', 'products.html?gender=Kids')}
          ${L('Dresses', 'products.html?category=Dresses')}${L('T-Shirts', 'products.html?category=T-Shirts')}${L('Jeans', 'products.html?category=Jeans')}
        </ul>
      </div>
      <div>
        <h4>Customer Support</h4>
        <ul>${['Contact Us', 'FAQ', 'Returns', 'Shipping', 'Help Center'].map((t) => `<li><a href="#" data-info="${t}">${t}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>${['About Us', 'Careers', 'Privacy Policy', 'Terms &amp; Conditions'].map((t) => `<li><a href="#" data-info="${t}">${t}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div class="socials">
          <a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener">YouTube</a>
          <a href="https://x.com" target="_blank" rel="noopener">Twitter/X</a>
        </div>
        <p class="promise">100% original products · Easy 14-day returns · Cash on delivery</p>
      </div>
    </div>
    <div class="footer-bottom">© 2026 H.M Clothes. All Rights Reserved.</div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Back to top">↑</button>`;

  // Info links show a toast so no button is ever "dead"
  $$('[data-info]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    showToast(a.dataset.info.replace('&amp;', '&') + ' page is coming soon');
  }));

  const top = $('#toTop');
  window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 500));
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function showToast(msg) {
  let box = $('#toastBox');
  if (!box) { box = document.createElement('div'); box.id = 'toastBox'; box.className = 'toast-box'; document.body.appendChild(box); }
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  box.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2400);
}

function updateBadges() {
  const c = $('#cartCount'), w = $('#wishCount');
  if (c) c.textContent = cart.reduce((n, i) => n + i.qty, 0);
  if (w) w.textContent = wishlist.length;
}

/* ---------------------------------------------------------------------
   6. CART + WISHLIST LOGIC
   --------------------------------------------------------------------- */
function addToCart(id, size, qty = 1, silent = false) {
  const p = byId(id);
  if (!p) return;
  size = size || p.sizes[Math.floor(p.sizes.length / 2)]; // default size from product card
  const line = cart.find((i) => i.id === p.id && i.size === size);
  if (line) line.qty = Math.min(10, line.qty + qty); else cart.push({ id: p.id, size, qty });
  saveCart();
  if (!silent) showToast(`Added to cart: ${p.name} (${size})`);
}

function toggleWishlist(id) {
  const i = wishlist.indexOf(Number(id));
  if (i > -1) { wishlist.splice(i, 1); showToast('Removed from wishlist'); }
  else { wishlist.push(Number(id)); showToast('Added to wishlist ❤️'); }
  saveWishlist();
}

/* ---------------------------------------------------------------------
   7. PRODUCT CARD + GRID RENDERING
   --------------------------------------------------------------------- */
function stars(r) {
  const full = Math.round(r);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function productCard(p, delay = 0) {
  const liked = wishlist.includes(p.id);
  return `
  <article class="product-card" style="animation-delay:${delay}ms">
    <div class="pc-img">
      <a href="product-details.html?id=${p.id}"><img src="${p.image}" alt="${esc(p.name)}" loading="lazy" onerror="imgFail(this)"></a>
      <span class="badge-discount">${p.discount}% OFF</span>
      ${p.isNew ? '<span class="badge-new">NEW</span>' : ''}
      <button class="wish-btn ${liked ? 'active' : ''}" data-wish="${p.id}" aria-label="Toggle wishlist">${liked ? '❤️' : '🤍'}</button>
      <div class="pc-rating"><b>${p.rating.toFixed(1)}</b> <span class="star">★</span> | ${p.reviews.toLocaleString('en-IN')}</div>
    </div>
    <div class="pc-body">
      <h4 class="pc-brand">${esc(p.brand)}</h4>
      <a class="pc-name" href="product-details.html?id=${p.id}">${esc(p.name)}</a>
      <div class="pc-price">
        <span class="final">${rupee(p.finalPrice)}</span>
        <span class="orig">${rupee(p.price)}</span>
        <span class="off">(${p.discount}% OFF)</span>
      </div>
      <button class="btn btn-primary btn-block" data-cart="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

/* Renders a list of products into a container and wires up the buttons */
function renderGrid(container, list, emptyMsg = 'No products found') {
  if (!list.length) {
    container.innerHTML = `<div class="empty"><div class="empty-ico">🛍️</div><h3>${emptyMsg}</h3><p>Try a different search or clear some filters.</p></div>`;
    return;
  }
  container.innerHTML = list.map((p, i) => productCard(p, Math.min(i, 12) * 40)).join('');
}

/* Event delegation: one listener handles every card on the page */
function bindProductActions() {
  document.addEventListener('click', (e) => {
    const wish = e.target.closest('[data-wish]');
    if (wish) {
      toggleWishlist(wish.dataset.wish);
      // Refresh heart icon(s) for that product
      $$(`[data-wish="${wish.dataset.wish}"]`).forEach((b) => {
        const on = wishlist.includes(Number(b.dataset.wish));
        b.classList.toggle('active', on);
        if (b.classList.contains('wish-btn')) b.textContent = on ? '❤️' : '🤍';
      });
      if (document.body.dataset.page === 'wishlist') initWishlist();
      return;
    }
    const add = e.target.closest('[data-cart]');
    if (add) addToCart(add.dataset.cart);
  });
}

/* ---------------------------------------------------------------------
   8. PAGE: HOME
   --------------------------------------------------------------------- */
function initHome() {
  const cats = [
    { name: 'Men',         emoji: '👔', href: 'products.html?gender=Men' },
    { name: 'Women',       emoji: '👗', href: 'products.html?gender=Women' },
    { name: 'Kids',        emoji: '🧸', href: 'products.html?gender=Kids' },
    { name: 'Dresses',     emoji: '💃', href: 'products.html?category=Dresses' },
    { name: 'T-Shirts',    emoji: '👕', href: 'products.html?category=T-Shirts' },
    { name: 'Jeans',       emoji: '👖', href: 'products.html?category=Jeans' },
    { name: 'Shoes',       emoji: '👟', href: 'products.html?category=Shoes' },
    { name: 'Accessories', emoji: '👜', href: 'products.html?category=Accessories' }
  ];
  $('#categoryGrid').innerHTML = cats.map((c) => `
    <a class="cat-card" href="${c.href}"><span class="cat-emoji">${c.emoji}</span><span>${c.name}</span></a>`).join('');

  // Trending = top-rated, most-reviewed products (first 12)
  const trending = [...PRODUCTS].sort((a, b) => b.reviews * b.rating - a.reviews * a.rating).slice(0, 12);
  renderGrid($('#trendingGrid'), trending);

  // Newsletter / coupon demo
  const nf = $('#newsletterForm');
  if (nf) nf.addEventListener('submit', (e) => {
    e.preventDefault();
    const em = $('#newsEmail').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) return showToast('Please enter a valid email');
    showToast('Thanks for subscribing! 🎉');
    nf.reset();
  });
}

/* ---------------------------------------------------------------------
   9. PAGE: PRODUCT LISTING (search + filters + sorting)
   --------------------------------------------------------------------- */
const filters = { q: '', gender: [], category: [], size: [], brand: [], color: [], maxPrice: 3000, rating: 0, discount: 0, sort: 'recommended', isNew: false };

function initProducts() {
  // Read starting state from URL (?q=, ?gender=, ?category=, ?filter=new)
  filters.q = (getParam('q') || '').toLowerCase();
  if (getParam('gender')) filters.gender = [getParam('gender')];
  if (getParam('category')) filters.category = [getParam('category')];
  filters.isNew = getParam('filter') === 'new';

  const uniq = (key) => [...new Set(PRODUCTS.flatMap((p) => p[key]))].sort();
  const box = (name, values, type = 'checkbox') => values.map((v) => {
    const checked = filters[name] && Array.isArray(filters[name]) && filters[name].includes(v) ? 'checked' : '';
    return `<label class="chk"><input type="${type}" name="${name}" value="${esc(v)}" ${checked}> ${esc(v)}</label>`;
  }).join('');

  const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  $('#fGender').innerHTML   = box('gender', ['Men', 'Women', 'Kids']);
  $('#fCategory').innerHTML = box('category', [...new Set(PRODUCTS.map((p) => p.category))].sort());
  $('#fSize').innerHTML     = box('size', sizeOrder);
  $('#fBrand').innerHTML    = box('brand', [...new Set(PRODUCTS.map((p) => p.brand))].sort());
  $('#fColor').innerHTML    = box('color', uniq('colors'));
  $('#fRating').innerHTML   = [4, 3, 2].map((r) => `<label class="chk"><input type="radio" name="rating" value="${r}"> ${r}★ &amp; above</label>`).join('') +
                              `<label class="chk"><input type="radio" name="rating" value="0" checked> All ratings</label>`;
  $('#fDiscount').innerHTML = [60, 50, 40, 30].map((d) => `<label class="chk"><input type="radio" name="discount" value="${d}"> ${d}% and above</label>`).join('') +
                              `<label class="chk"><input type="radio" name="discount" value="0" checked> Any discount</label>`;

  // Listen to every filter change
  $('#filterPanel').addEventListener('change', (e) => {
    const t = e.target;
    if (t.type === 'checkbox') {
      const arr = filters[t.name];
      if (t.checked) arr.push(t.value); else arr.splice(arr.indexOf(t.value), 1);
    } else if (t.name === 'rating') filters.rating = Number(t.value);
    else if (t.name === 'discount') filters.discount = Number(t.value);
    applyFilters();
  });

  const range = $('#priceRange');
  range.addEventListener('input', () => { filters.maxPrice = Number(range.value); $('#priceLabel').textContent = rupee(range.value); applyFilters(); });

  $('#sortSelect').addEventListener('change', (e) => { filters.sort = e.target.value; applyFilters(); });

  $('#clearFilters').addEventListener('click', () => { location.href = 'products.html'; });

  // Mobile: toggle filter drawer
  $('#filterToggle').addEventListener('click', () => $('#filterPanel').classList.toggle('open'));

  applyFilters();
}

function applyFilters() {
  let list = PRODUCTS.filter((p) => {
    if (filters.q) {
      const hay = `${p.name} ${p.brand} ${p.category} ${p.gender} ${p.colors.join(' ')}`.toLowerCase();
      // every word typed must match somewhere (e.g. "women dress")
      if (!filters.q.split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    if (filters.isNew && !p.isNew) return false;
    if (filters.gender.length && !filters.gender.includes(p.gender)) return false;
    if (filters.category.length && !filters.category.includes(p.category)) return false;
    if (filters.size.length && !filters.size.some((s) => p.sizes.includes(s))) return false;
    if (filters.brand.length && !filters.brand.includes(p.brand)) return false;
    if (filters.color.length && !filters.color.some((c) => p.colors.includes(c))) return false;
    if (p.finalPrice > filters.maxPrice) return false;
    if (p.rating < filters.rating) return false;
    if (p.discount < filters.discount) return false;
    return true;
  });

  const sorters = {
    recommended: (a, b) => b.reviews * b.rating - a.reviews * a.rating,
    'price-asc':  (a, b) => a.finalPrice - b.finalPrice,
    'price-desc': (a, b) => b.finalPrice - a.finalPrice,
    rating:       (a, b) => b.rating - a.rating,
    discount:     (a, b) => b.discount - a.discount
  };
  list.sort(sorters[filters.sort]);

  // Title + count
  let title = 'All Products';
  if (filters.q) title = `Results for “${getParam('q')}”`;
  else if (filters.isNew) title = 'New Arrivals';
  else if (filters.category.length === 1) title = filters.category[0];
  else if (filters.gender.length === 1) title = `${filters.gender[0]}'s Clothing`;
  $('#listTitle').textContent = title;
  $('#listCount').textContent = `${list.length} item${list.length === 1 ? '' : 's'}`;

  renderGrid($('#productGrid'), list, 'No products found');
}

/* ---------------------------------------------------------------------
   10. PAGE: PRODUCT DETAILS
   --------------------------------------------------------------------- */
function initDetails() {
  const p = byId(getParam('id'));
  const root = $('#detailsRoot');
  if (!p) {
    root.innerHTML = `<div class="empty"><div class="empty-ico">😕</div><h3>Product not found</h3><a class="btn btn-primary" href="products.html">Browse products</a></div>`;
    return;
  }
  document.title = `${p.name} | H.M Clothes`;
  let size = null, qty = 1, color = p.colors[0];

  const sizeBtns = ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => {
    const ok = p.sizes.includes(s);
    return `<button class="size-btn" data-size="${s}" ${ok ? '' : 'disabled'}>${s}</button>`;
  }).join('');

  const ratingBars = p.sizes.map((s) => {
    const r = p.sizeRatings[s];
    return `<div class="sr-row"><span>${s}</span><div class="sr-bar"><i style="width:${(r / 5) * 100}%"></i></div><b>${r} ★</b></div>`;
  }).join('');

  const colorDot = { Pink: '#ff6f91', Blue: '#2f6fdd', Black: '#222', White: '#f4f4f4', Green: '#2e9e5b', Red: '#d62839', Yellow: '#f6c026', Grey: '#9aa0a6' };

  root.innerHTML = `
  <div class="details-grid">
    <div class="details-img"><img id="mainImg" src="${p.image}" alt="${esc(p.name)}" onerror="imgFail(this)"><span class="badge-discount">${p.discount}% OFF</span></div>
    <div class="details-info">
      <h3 class="d-brand">${esc(p.brand)}</h3>
      <h1 class="d-name">${esc(p.name)}</h1>
      <div class="d-rating"><b>${p.rating.toFixed(1)} ★</b> <span>| ${p.reviews.toLocaleString('en-IN')} Ratings</span></div>
      <hr>
      <div class="d-price">
        <span class="final">${rupee(p.finalPrice)}</span>
        <span class="orig">MRP ${rupee(p.price)}</span>
        <span class="off">(${p.discount}% OFF)</span>
      </div>
      <p class="tax-note">Inclusive of all taxes</p>

      <h4 class="d-sub">Select Size <small id="sizeMsg"></small></h4>
      <div class="size-row" id="sizeRow">${sizeBtns}</div>

      <h4 class="d-sub">Colour: <span id="colorName">${color}</span></h4>
      <div class="color-row" id="colorRow">
        ${p.colors.map((c, i) => `<button class="color-dot ${i === 0 ? 'active' : ''}" data-color="${c}" title="${c}" style="background:${colorDot[c] || '#ccc'}"></button>`).join('')}
      </div>

      <h4 class="d-sub">Quantity</h4>
      <div class="qty-box"><button id="qMinus">−</button><span id="qVal">1</span><button id="qPlus">+</button></div>

      <div class="d-actions">
        <button class="btn btn-primary" id="addBtn">🛒 Add to Cart</button>
        <button class="btn btn-dark" id="buyBtn">⚡ Buy Now</button>
        <button class="btn btn-outline wish-detail ${wishlist.includes(p.id) ? 'active' : ''}" data-wish="${p.id}" id="wishBtn">${wishlist.includes(p.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}</button>
      </div>

      <div class="delivery">
        <h4 class="d-sub">Delivery Information</h4>
        <div class="pin-row"><input id="pin" maxlength="6" inputmode="numeric" placeholder="Enter PIN code"><button class="btn btn-outline" id="pinBtn">Check</button></div>
        <p id="pinMsg" class="pin-msg"></p>
        <ul class="d-list">
          <li>🚚 Free delivery above ₹999 (₹49 otherwise)</li>
          <li>💵 Cash on delivery available</li>
          <li>↩️ Easy 14-day returns and exchanges</li>
        </ul>
      </div>

      <div class="d-section">
        <h4 class="d-sub">Product Details</h4>
        <p>${esc(p.desc)}</p>
        <p class="d-meta"><b>Material:</b> ${esc(p.material)}<br><b>Category:</b> ${esc(p.category)} · ${esc(p.gender)}</p>
      </div>
      <div class="d-section">
        <h4 class="d-sub">Ratings by Size</h4>
        <div class="size-ratings">${ratingBars}</div>
      </div>
    </div>
  </div>
  <section class="section">
    <h2 class="section-title">You May Also Like</h2>
    <div class="product-grid" id="similarGrid"></div>
  </section>`;

  // Size selection
  $('#sizeRow').addEventListener('click', (e) => {
    const b = e.target.closest('.size-btn');
    if (!b || b.disabled) return;
    size = b.dataset.size;
    $$('.size-btn').forEach((x) => x.classList.toggle('active', x === b));
    $('#sizeMsg').textContent = `(Rating for ${size}: ${p.sizeRatings[size]} ★)`;
  });
  // Colour selection
  $('#colorRow').addEventListener('click', (e) => {
    const b = e.target.closest('.color-dot');
    if (!b) return;
    color = b.dataset.color;
    $('#colorName').textContent = color;
    $$('.color-dot').forEach((x) => x.classList.toggle('active', x === b));
  });
  // Quantity
  $('#qMinus').addEventListener('click', () => { qty = Math.max(1, qty - 1); $('#qVal').textContent = qty; });
  $('#qPlus').addEventListener('click', () => { qty = Math.min(10, qty + 1); $('#qVal').textContent = qty; });

  const needSize = () => {
    if (size) return false;
    showToast('Please select a size');
    $('#sizeRow').classList.add('shake');
    setTimeout(() => $('#sizeRow').classList.remove('shake'), 500);
    return true;
  };
  $('#addBtn').addEventListener('click', () => { if (!needSize()) addToCart(p.id, size, qty); });
  $('#buyBtn').addEventListener('click', () => { if (!needSize()) { addToCart(p.id, size, qty, true); location.href = 'cart.html'; } });

  // Wishlist button label (extra listener; the global one toggles the data)
  $('#wishBtn').addEventListener('click', () => {
    const on = wishlist.includes(p.id);
    $('#wishBtn').textContent = on ? '❤️ Wishlisted' : '🤍 Wishlist';
    $('#wishBtn').classList.toggle('active', on);
  });

  // Delivery check (demo: any valid 6 digit PIN works)
  $('#pinBtn').addEventListener('click', () => {
    const v = $('#pin').value.trim();
    const m = $('#pinMsg');
    if (!/^[1-9][0-9]{5}$/.test(v)) { m.textContent = 'Enter a valid 6-digit PIN code'; m.className = 'pin-msg bad'; return; }
    const d = new Date(); d.setDate(d.getDate() + 4);
    m.textContent = `✔ Delivery available. Get it by ${d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}`;
    m.className = 'pin-msg good';
  });

  // Similar products
  const similar = PRODUCTS.filter((x) => x.id !== p.id && (x.category === p.category || x.gender === p.gender)).slice(0, 4);
  renderGrid($('#similarGrid'), similar);
}

/* ---------------------------------------------------------------------
   11. PAGE: CART
   --------------------------------------------------------------------- */
const FREE_DELIVERY_ABOVE = 999;
const DELIVERY_CHARGE = 49;

function cartTotals() {
  let mrp = 0, sub = 0, items = 0;
  cart.forEach((l) => {
    const p = byId(l.id);
    if (!p) return;
    mrp += p.price * l.qty;
    sub += p.finalPrice * l.qty;
    items += l.qty;
  });
  const discount = mrp - sub;
  const delivery = sub === 0 || sub >= FREE_DELIVERY_ABOVE ? 0 : DELIVERY_CHARGE;
  return { mrp, discount, sub, delivery, total: sub + delivery, items };
}

function initCart() {
  // Drop lines whose product no longer exists
  cart = cart.filter((l) => byId(l.id));
  saveCart();
  const root = $('#cartRoot');

  if (!cart.length) {
    root.innerHTML = `<div class="empty"><div class="empty-ico">🛒</div><h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p><a class="btn btn-primary" href="products.html">Start Shopping</a></div>`;
    return;
  }
  const t = cartTotals();
  const need = Math.max(0, FREE_DELIVERY_ABOVE - t.sub);

  root.innerHTML = `
  <div class="cart-grid">
    <div class="cart-list">
      <div class="free-bar ${need === 0 ? 'done' : ''}">${need === 0 ? '🎉 You get FREE delivery on this order!' : `Add items worth <b>${rupee(need)}</b> more for FREE delivery`}</div>
      ${cart.map((l, idx) => {
        const p = byId(l.id);
        return `
        <div class="cart-item">
          <a href="product-details.html?id=${p.id}"><img src="${p.image}" alt="${esc(p.name)}" onerror="imgFail(this)"></a>
          <div class="ci-info">
            <h4>${esc(p.brand)}</h4>
            <a href="product-details.html?id=${p.id}">${esc(p.name)}</a>
            <p class="ci-size">Size: <b>${l.size}</b></p>
            <div class="qty-box small">
              <button data-dec="${idx}" aria-label="Decrease">−</button><span>${l.qty}</span><button data-inc="${idx}" aria-label="Increase">+</button>
            </div>
            <div class="ci-price"><b>${rupee(p.finalPrice * l.qty)}</b> <s>${rupee(p.price * l.qty)}</s> <span class="off">${p.discount}% OFF</span></div>
          </div>
          <button class="ci-remove" data-remove="${idx}" aria-label="Remove item">✕</button>
        </div>`;
      }).join('')}
    </div>
    <aside class="summary">
      <h3>Price Details (${t.items} item${t.items > 1 ? 's' : ''})</h3>
      <div class="sum-row"><span>Total MRP</span><span>${rupee(t.mrp)}</span></div>
      <div class="sum-row"><span>Discount</span><span class="green">− ${rupee(t.discount)}</span></div>
      <div class="sum-row"><span>Subtotal</span><span>${rupee(t.sub)}</span></div>
      <div class="sum-row"><span>Delivery Charge</span><span>${t.delivery ? rupee(t.delivery) : '<span class="green">FREE</span>'}</span></div>
      <div class="sum-total"><span>Total Amount</span><span>${rupee(t.total)}</span></div>
      <p class="save-note">You will save ${rupee(t.discount)} on this order</p>
      <button class="btn btn-primary btn-block" id="placeOrder">PLACE ORDER</button>
      <button class="btn btn-link btn-block" id="clearCart">Clear cart</button>
    </aside>
  </div>`;

  root.onclick = (e) => {
    const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), rem = e.target.closest('[data-remove]');
    if (inc) { cart[inc.dataset.inc].qty = Math.min(10, cart[inc.dataset.inc].qty + 1); saveCart(); initCart(); }
    else if (dec) { const l = cart[dec.dataset.dec]; l.qty = Math.max(1, l.qty - 1); saveCart(); initCart(); }
    else if (rem) { cart.splice(rem.dataset.remove, 1); saveCart(); showToast('Item removed'); initCart(); }
    else if (e.target.id === 'clearCart') { cart = []; saveCart(); initCart(); }
    else if (e.target.id === 'placeOrder') {
      if (!store.get('hm_session', null)) { showToast('Please login to place your order'); setTimeout(() => (location.href = 'login.html'), 900); return; }
      cart = []; saveCart(); initCart();
      showToast('Order placed successfully! 🎉');
    }
  };
}

/* ---------------------------------------------------------------------
   12. PAGE: WISHLIST
   --------------------------------------------------------------------- */
function initWishlist() {
  const root = $('#wishRoot');
  const items = wishlist.map(byId).filter(Boolean);
  $('#wishTitle').textContent = `My Wishlist (${items.length})`;

  if (!items.length) {
    root.innerHTML = `<div class="empty"><div class="empty-ico">💔</div><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it here.</p><a class="btn btn-primary" href="products.html">Explore Products</a></div>`;
    return;
  }
  root.innerHTML = `<div class="product-grid">${items.map((p, i) => `
    <article class="product-card" style="animation-delay:${i * 40}ms">
      <div class="pc-img">
        <a href="product-details.html?id=${p.id}"><img src="${p.image}" alt="${esc(p.name)}" onerror="imgFail(this)"></a>
        <span class="badge-discount">${p.discount}% OFF</span>
        <button class="wish-btn active" data-wish="${p.id}" aria-label="Remove from wishlist">✕</button>
      </div>
      <div class="pc-body">
        <h4 class="pc-brand">${esc(p.brand)}</h4>
        <a class="pc-name" href="product-details.html?id=${p.id}">${esc(p.name)}</a>
        <div class="pc-price"><span class="final">${rupee(p.finalPrice)}</span><span class="orig">${rupee(p.price)}</span><span class="off">(${p.discount}% OFF)</span></div>
        <button class="btn btn-primary btn-block" data-move="${p.id}">Move to Cart</button>
      </div>
    </article>`).join('')}</div>`;

  root.onclick = (e) => {
    const mv = e.target.closest('[data-move]');
    if (!mv) return;
    const id = Number(mv.dataset.move);
    addToCart(id, null, 1, true);
    wishlist = wishlist.filter((x) => x !== id);
    saveWishlist();
    showToast('Moved to cart 🛒');
    initWishlist();
  };
}

/* ---------------------------------------------------------------------
   13. PAGES: LOGIN + SIGNUP (validation, demo accounts in localStorage)
   NOTE: This is a front-end demo only. Passwords are stored in the
   browser and are NOT secure. Use a real backend for production.
   --------------------------------------------------------------------- */
const isEmail  = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isMobile = (v) => /^[6-9][0-9]{9}$/.test(v);

function setError(input, msg) {
  const field = input.closest('.field');
  field.classList.toggle('invalid', !!msg);
  field.querySelector('.err').textContent = msg || '';
  return !msg;
}

function initAuth(mode) {
  const form = $('#authForm');
  // Show / hide password buttons
  $$('.eye').forEach((b) => b.addEventListener('click', () => {
    const inp = b.previousElementSibling;
    inp.type = inp.type === 'password' ? 'text' : 'password';
    b.textContent = inp.type === 'password' ? '👁️' : '🙈';
  }));

  if (mode === 'login') {
    const saved = localStorage.getItem('hm_remember');
    if (saved) { $('#loginId').value = saved; $('#remember').checked = true; }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = $('#loginId').value.trim(), pw = $('#loginPw').value;
      let ok = true;
      ok = setError($('#loginId'), !id ? 'Enter your mobile number or email' : (isEmail(id) || isMobile(id)) ? '' : 'Enter a valid 10-digit mobile number or email') && ok;
      ok = setError($('#loginPw'), !pw ? 'Enter your password' : pw.length < 6 ? 'Password must be at least 6 characters' : '') && ok;
      if (!ok) return;

      const user = store.get('hm_users', []).find((u) => (u.email === id.toLowerCase() || u.mobile === id) && u.password === pw);
      if (!user) { setError($('#loginPw'), 'Incorrect details. Please check or create an account.'); return; }

      if ($('#remember').checked) localStorage.setItem('hm_remember', id); else localStorage.removeItem('hm_remember');
      store.set('hm_session', { name: user.name, email: user.email });
      showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`);
      setTimeout(() => (location.href = 'index.html'), 900);
    });

    $('#forgotLink').addEventListener('click', (e) => {
      e.preventDefault();
      const id = $('#loginId').value.trim();
      if (!id) return showToast('Enter your email or mobile first, then tap Forgot password');
      showToast('If this account exists, a reset link has been sent');
    });
  } else {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#suName').value.trim(), mobile = $('#suMobile').value.trim(), email = $('#suEmail').value.trim().toLowerCase();
      const pw = $('#suPw').value, cpw = $('#suCpw').value;
      let ok = true;
      ok = setError($('#suName'), name.length < 2 ? 'Enter your full name' : '') && ok;
      ok = setError($('#suMobile'), !isMobile(mobile) ? 'Enter a valid 10-digit Indian mobile number' : '') && ok;
      ok = setError($('#suEmail'), !isEmail(email) ? 'Enter a valid email address' : '') && ok;
      ok = setError($('#suPw'), pw.length < 6 ? 'Password must be at least 6 characters' : !/[0-9]/.test(pw) ? 'Include at least one number' : '') && ok;
      ok = setError($('#suCpw'), cpw !== pw ? 'Passwords do not match' : !cpw ? 'Confirm your password' : '') && ok;
      if (!ok) return;

      const users = store.get('hm_users', []);
      if (users.some((u) => u.email === email)) return setError($('#suEmail'), 'This email is already registered');
      if (users.some((u) => u.mobile === mobile)) return setError($('#suMobile'), 'This mobile number is already registered');

      users.push({ name, mobile, email, password: pw });
      store.set('hm_users', users);
      store.set('hm_session', { name, email });
      showToast('Account created successfully! 🎉');
      setTimeout(() => (location.href = 'index.html'), 1000);
    });
  }
}

/* ---------------------------------------------------------------------
   14. START-UP: decide what to run for the current page
   --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  updateBadges();
  bindProductActions();

  switch (document.body.dataset.page) {
    case 'home':      initHome(); break;
    case 'products':  initProducts(); break;
    case 'details':   initDetails(); break;
    case 'cart':      initCart(); break;
    case 'wishlist':  initWishlist(); break;
    case 'login':     initAuth('login'); break;
    case 'signup':    initAuth('signup'); break;
  }
});
