// Função para adicionar produto ao carrinho
function addToCart(productId, productName, productPrice) {
  // Cria um objeto com as informações do produto
  const product = {
    id: productId,
    name: productName,
    price: productPrice,
  };

  // Salva o produto no localStorage (para persistir entre páginas)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Exibe uma mensagem de "Item Adicionado ao Carrinho"
  alert('Item Adicionado ao Carrinho');
}

// Event listener para os botões "Adicionar ao Carrinho"
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', function() {
    const productElement = button.closest('.product');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('.p-name').textContent;
    const productPrice = productElement.querySelector('.p-price').textContent.replace('R$', '').trim();

    // Chama a função para adicionar o produto ao carrinho
    addToCart(productId, productName, productPrice);
  });
});































const feedbacks = [
  {
    name: "Maria Lima",
    text: "Amei as roupas! A qualidade é incrível e o atendimento é excelente. Voltarei sempre!",
    hearts: "❤️❤️❤️❤️❤️",
    avatar: "👗"
  },
  {
    name: "Ana Clara",
    text: "Peças lindíssimas, entregaram no prazo. Recomendo muito!",
    hearts: "❤️❤️❤️❤️",
    avatar: "👜"
  },
  {
    name: "Juliana Costa",
    text: "O atendimento personalizado faz toda a diferença. Estou muito satisfeita!",
    hearts: "❤️❤️❤️❤️❤️",
    avatar: "👡"
  },
  {
    name: "Fernanda Almeida",
    text: "Adorei a experiência de compra, muito prática e eficiente!",
    hearts: "❤️❤️❤️❤️",
    avatar: "👒"
  },
  {
    name: "Paula Ribeiro",
    text: "Preços acessíveis e peças de altíssima qualidade. Super recomendo!",
    hearts: "❤️❤️❤️❤️❤️",
    avatar: "👠"
  },
  {
    name: "Camila Souza",
    text: "Os looks são perfeitos, exatamente como nas fotos. Estou apaixonada!",
    hearts: "❤️❤️❤️❤️❤️",
    avatar: "👚"
  }
];



















let currentFeedback = 0;

function updateFeedback() {
  document.getElementById('client-name').textContent = feedbacks[currentFeedback].name;
  document.getElementById('feedback-text').textContent = feedbacks[currentFeedback].text;
  document.querySelector('.hearts').textContent = feedbacks[currentFeedback].hearts;
  document.querySelector('.avatar').textContent = feedbacks[currentFeedback].avatar;
}

function nextFeedback() {
  currentFeedback = (currentFeedback + 1) % feedbacks.length;
  updateFeedback();
}

// Configura o carrossel de feedbacks para alternar a cada 30 segundos
setInterval(nextFeedback, 30000);
updateFeedback();

// Carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');
let autoScroll;

function moveToNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inicia a rotação automática do carrossel de imagens
function startAutoScroll() {
  autoScroll = setInterval(moveToNextImage, 8000); // 8 segundos entre as transições
}

// Pausa a rotação automática
function stopAutoScroll() {
  clearInterval(autoScroll);
}

// Inicia a rotação automática ao carregar
startAutoScroll();

// Pausa e reinicia a rotação automática ao interagir com o carrossel
const carouselContainer = document.querySelector('.carousel');
carouselContainer.addEventListener('mouseover', stopAutoScroll);
carouselContainer.addEventListener('mouseout', startAutoScroll);

// Navegação manual
document.querySelector('.prev-btn').addEventListener('click', () => {
  stopAutoScroll(); // Pausa ao clicar
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.next-btn').addEventListener('click', () => {
  stopAutoScroll(); // Pausa ao clicar
  moveToNextImage();
});
