class ProductCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.wrapper = this.container.querySelector('.carousel-wrapper');
    this.slides = this.container.querySelectorAll('.carousel-slide');
    this.currentIndex = 0;
    this.slidesToShow = 1;
    
    this.setupEventListeners();
    this.updateSlidePosition();
  }
  
  setupEventListeners() {
    const prevBtn = this.container.querySelector('.carousel-btn-prev');
    const nextBtn = this.container.querySelector('.carousel-btn-next');
    const indicators = this.container.querySelectorAll('.indicator');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
  }
  
  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.updateSlidePosition();
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }
  
  goToSlide(index) {
    if (index >= 0 && index < this.slides.length) {
      this.currentIndex = index;
      this.updateSlidePosition();
    }
  }
  
  updateSlidePosition() {
    const offset = -this.currentIndex * 100;
    this.wrapper.style.transform = `translateX(${offset}%)`;
    
    this.container.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
    
    const prevBtn = this.container.querySelector('.carousel-btn-prev');
    const nextBtn = this.container.querySelector('.carousel-btn-next');
    
    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = this.currentIndex === this.slides.length - 1;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  new ProductCarousel('productCarousel');
});
