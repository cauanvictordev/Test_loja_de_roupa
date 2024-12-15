function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<tr><td colspan="4">Seu carrinho está vazio.</td></tr>';
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.category}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><button onclick="removeFromCart(${index})">Remover</button></td>
    `;
    cartItems.appendChild(row);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Carregar o carrinho quando a página for carregada
window.onload = loadCart;
