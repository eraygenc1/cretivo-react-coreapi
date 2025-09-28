  // Basit filtreleme işlevselliği
  document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.filtered');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Filtre butonlarına tıklama işlemi
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            filterItems(filterValue);
        });
    });

    // Öğeleri filtreleme fonksiyonu
    function filterItems(filterValue) {
        gridItems.forEach(function(item) {item.style.opacity = '0';
            // Geçiş efekti için opacity ayarları
            if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
                  // Ekranda göster
                setTimeout(() => {item.style.scale = '1';
                    item.style.display = 'block';  // Ekranda göster (opacity geçişi sonrası)
                }, 500 ); item.style.opacity = '1';  // Opacity geçişi 500ms'lik süreyle
            } else {
                item.style.opacity = '0';  // Opacity'yi sıfırla
                setTimeout(() => {
                    item.style.display = 'none';  // Öğeyi gizle (opacity geçişi sonrası)
                }, 500);  // Opacity geçişi 500ms'lik süreyle
            }
        });
    }
});