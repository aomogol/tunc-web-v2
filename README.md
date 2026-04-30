## 🎨 TUNÇ ELEKTRONİK - WEB SİTESİ

### 📋 Proje Açıklaması
TUNÇ Elektronik için modern, responsive ve profesyonel bir web sitesidir. Panasonic AM-100 SMT makinesi ve elektronik bileşen ürünleri için optimize edilmiş tasarıma sahiptir.

**Tasarım Özellikleri:**
- ✅ Modern & Minimal Tasarım
- ✅ Tam Responsive (Mobile, Tablet, Desktop)
- ✅ Dark/Light Tema Seçeneği
- ✅ Panasonic AM-100 Öne Çıkartılmış
- ✅ YouTube Video Entegrasyonu
- ✅ İletişim Formu
- ✅ Smooth Animasyonlar

---

## 🎯 Renk Paleti

| Renk | Kod | Kullanım |
|------|-----|----------|
| Primary Dark | #0F2438 | Header, Başlıklar |
| Primary Light | #1a3a52 | Vurgular |
| Accent Gold | #C9A961 | Butonlar, Linkler |
| Light BG | #FFFFFF | Açık Tema Arka Plan |
| Dark BG | #0A1621 | Koyu Tema Arka Plan |

---

## 📁 Klasör Yapısı

```
tunc-web/
├── index.html          # Ana Sayfa
├── products.html       # Ürünlerimiz
├── about.html         # Hakkımızda
├── contact.html       # İletişim
├── css/
│   └── styles.css     # Ana CSS Dosyası
├── js/
│   └── script.js      # JavaScript (Dark/Light tema, Form)
└── assets/
    ├── tunc-logo.jpeg
    ├── tunc-logo1.png
    ├── tunc-logo2-1.png
    └── tunc-fav-logo.jpeg
```

---

## 🚀 Kurulum & Çalıştırma

### Seçenek 1: Doğrudan HTML Dosyaları ile
1. Klasörü açın: `/mnt/data/projeler-aom/tunc-web/`
2. `index.html` dosyasını tarayıcıda açın

### Seçenek 2: Local Server ile (Önerilen)
```bash
# Python 3 ile
cd /mnt/data/projeler-aom/tunc-web/
python -m http.server 8000

# Tarayıcıda açın: http://localhost:8000
```

```bash
# Python 2 ile
python -m SimpleHTTPServer 8000
```

```bash
# Node.js http-server ile
npx http-server
```

---

## ⚙️ DÜZENLEMELER GEREKLİ

Sitein tam işlevselliği için aşağıdaki yerleri düzeltmeniz ZORUNLUDUR:

### 📧 İletişim Sayfasında (contact.html)

1. **Email Adres**
   - Satır: Yaklaşık 60
   - Bul: `info@tunctrade.com`
   - Değiştir: Gerçek email adresiniz
   - Ayrıca: HTML'de `mailto:` linkini güncelleyin

2. **Telefon Numarası**
   - Satır: Yaklaşık 68
   - Bul: `xxx xxx xx xx`
   - Değiştir: Gerçek telefon numaranız
   - Format: `+90 XXX XXX XX XX` önerilir

3. **WhatsApp Link**
   - Satır: Yaklaşık 84
   - Bul: `https://wa.me/905551234567`
   - Değiştir: `https://wa.me/[TÜRKİYE_KODU_90_DAHİL_NUMARANZ]`
   - Örnek: `https://wa.me/905551234567`

4. **LinkedIn Profili**
   - Satır: Yaklaşık 92
   - Bul: `https://linkedin.com/company/tunc-elektronik`
   - Değiştir: Gerçek LinkedIn sayfa linkiniz

5. **Çalışma Saatleri**
   - Satır: Yaklaşık 100
   - Dilediğiniz şekilde değiştirin

6. **Şirket Adresi**
   - Satır: Yaklaşık 74
   - Bul: `İstanbul, Türkiye`
   - Değiştir: Tam adresiniz

### 📝 Hakkımızda Sayfasında (about.html)

Aşağıdaki başlık bölümlerine kendi içeriklerinizi ekleyin:

1. **Şirket Tarihçesi** (satır ~30)
2. **Vizyon** (satır ~36)
3. **Misyon** (satır ~42)
4. **Değerlerimiz** (satır ~48)
5. **Neden Bize Güvenebilirsiniz?** (satır ~55)
6. **Teknoloji & Yetkinlik** (satır ~61)
7. **Müşteri Memnuniyeti** (satır ~67)

Tüm "about-placeholder" div'lerini kendi içerikleriniz ile değiştirin.

---

## 🎨 Tema Değişikliği

### Dark Mode'u Varsayılan Yapma
`js/script.js` dosyasının 6. satırını değiştirin:
```javascript
const savedTheme = localStorage.getItem('theme') || 'dark'; // 'light' yerine 'dark'
```

### Renk Paleti Değişikliği
`css/styles.css` dosyasının başındaki CSS Variables bölümünde (satır 8-31):
```css
:root {
  --primary-dark: #0F2438;  /* Değiştirebilirsiniz */
  --accent-gold: #C9A961;    /* Değiştirebilirsiniz */
  /* ... diğer renkler */
}
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1400px ve üzeri
- **Tablet**: 768px - 1399px
- **Mobile**: 600px - 767px
- **Small Mobile**: 599px ve altı

---

## 🔧 Teknik Özellikler

### HTML5
- Semantik HTML5 yapısı
- Accessibility (a11y) standartları
- Meta tags SEO optimizasyonu

### CSS3
- CSS Grid ve Flexbox
- CSS Variables (Custom Properties)
- Media Queries (Responsive)
- Smooth Transitions & Animations
- Dark Mode Support

### JavaScript
- Vanilla JavaScript (Hiçbir Framework Yok)
- localStorage kullanarak tema tercihini kaydetme
- Mobile menu toggle
- Form validasyonu
- Smooth scrolling
- IntersectionObserver (Lazy Loading)

### Performans
- Optimize edilmiş görseller
- Minify edilebilir CSS/JS
- Hızlı yükleme için optimize edilmiş

---

## 📧 Form İşleme

### Mevcut Durum
Form şu anda **front-end validasyonu** yapar ve localStorage'da kaydedilmez.

### Backend Entegrasyonu İçin
Aşağıdaki servisleri kullanabilirsiniz:

1. **Formspree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms**
   - HTML'e `netlify` attribute ekleyin
   
3. **Backend Oluşturun**
   - Node.js + Express
   - Python + Flask
   - PHP

Form submit işlemi için `js/script.js` satır ~85'teki console.log yerine backend endpoint'inizi ekleyin.

---

## 🎬 Video Entegrasyonu

Panasonic AM-100 tanıtım videosu YouTube embed ile entegre edilmiştir:
- `index.html` satır ~55
- Link: `https://www.youtube.com/embed/yFUkiH7sYmg`

Başka video eklemek için:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen="" loading="lazy"></iframe>
```

---

## 🔍 SEO Optimizasyonu

### Başlık & Açıklama
- Her sayfanın kendi `<title>` ve `<meta description>` etiketleri var
- Türkçe anahtar kelimeler kullanılmıştır

### Geliştirmeler
1. Google Search Console'a ekleyin
2. sitemap.xml oluşturun
3. robots.txt ekleyin
4. Heading hiyerarşisini kontrol edin (H1 → H2 → H3)

---

## 🐛 Sorun Giderme

### Tema Toggle Çalışmıyor
- Browser console'unda (F12) hata kontrol edin
- localStorage etkinleştirilmiş mi kontrol edin
- Cache'i temizleyin

### Görseller Görünmüyor
- Assets klasöründeki dosyaları kontrol edin
- Dosya yollarını kontrol edin (büyük/küçük harf farkı)
- `file://` protokolü yerine HTTP server kullanın

### Mobile Menu Açılmıyor
- Hamburger buton görünüyor mu kontrol edin
- JavaScript console hatası kontrol edin
- CSS media queries kontrol edin

---

## 📈 İyileştirme Önerileri (Gelecek)

1. **Blog/Haber Sayfası**
2. **Referanslar/Case Studies**
3. **Teknik Spesifikasyonlar Detaylandırılması**
4. **Canlı Sohbet Widget**
5. **Multi-Language Desteği (EN, DE, etc.)**
6. **Certifications & Awards Sayfası**
7. **FAQ Sayfası**
8. **Google Analytics Entegrasyonu**
9. **Sitemap & RSS Feed**
10. **PWA (Progressive Web App) Desteği**

---

## 📞 İletişim

**Geliştirme Tarihi:** Nisan 2026
**Son Güncelleme:** Nisan 30, 2026

---

## ✅ Checklist - Canlı Almadan Önce

- [ ] Tüm iletişim bilgilerini güncellediniz
- [ ] Hakkımızda sayfasını doldurmadınız
- [ ] Tüm linkler (telefon, email, LinkedIn vb.) çalışıyor
- [ ] Form test ettiniz
- [ ] Dark/Light tema geçişini test ettiniz
- [ ] Mobile'da tamamen responsive mi kontrol ettiniz
- [ ] Tüm sayfalardaki görseller görünüyor
- [ ] YouTube videosu yükleniyor
- [ ] Tüm CSS/JS dosyaları doğru yükleniyor
- [ ] Domain ile hosting ayarlandı (tunctrade.com)

---

**İyi çalışmalar! 🚀**

TUNÇ Elektronik Web Sitesi için herhangi bir sorunuz varsa, lütfen iletişime geçin.
