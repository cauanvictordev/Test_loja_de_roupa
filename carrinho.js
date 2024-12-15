// Função para atualizar os itens do carrinho
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Limpa o conteúdo atual

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  // Cria os elementos para cada item no carrinho
  cart.forEach((item, index) => {
    // Garantir que valores sejam números válidos
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 0;
    const itemTotal = price * quantity;
    total += itemTotal;

    const itemRow = document.createElement('div');
    itemRow.classList.add('cart-item');

    itemRow.innerHTML = `
      <div class="item-name">${item.name || "Item sem nome"}</div>
      <div class="item-price">R$${price.toFixed(2)}</div>
      <div class="item-quantity">
        <div class="quantity-controls">
          <button onclick="changeQuantity(${index}, -1)">-</button>
          <span>${quantity}</span>
          <button onclick="changeQuantity(${index}, 1)">+</button>
        </div>
      </div>
      <div class="item-total">R$${itemTotal.toFixed(2)}</div>
    `;
    cartItemsContainer.appendChild(itemRow);
  });

  // Atualiza o preço total
  document.getElementById('total-price').textContent = `R$${total.toFixed(2)}`;
}

// Função para alterar a quantidade de um item
function changeQuantity(index, delta) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Atualiza a quantidade, garantindo que seja um número válido
  cart[index].quantity = (parseInt(cart[index].quantity) || 0) + delta;

  // Remove o item se a quantidade for zero ou menor
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  // Salva novamente no localStorage e atualiza o carrinho
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Adiciona itens ao carrinho no primeiro carregamento, se estiver vazio
function initializeCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cart = [
      { name: "Produto A", price: "10.00", quantity: 1 },
      { name: "Produto B", price: "20.00", quantity: 2 },
      { name: "Produto C", price: "15.50", quantity: 1 },
    ];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  updateCart();
}

// Inicializa o carrinho quando a página for carregada
document.addEventListener('DOMContentLoaded', initializeCart);
6




















































    document.addEventListener("DOMContentLoaded", () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      document.getElementById('cart-container').style.marginTop = `${navbarHeight + 20}px`;
    });
    