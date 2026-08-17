# Kuşatma Savaşı Komutları

Kuşatma süreçlerini yönetmek, diplomasi kurmak, savaş durumunu takip etmek ve ganimet toplamak için kullanabileceğiniz temel komutlar aşağıda kategorize edilmiştir.

---

### Savaş Takip Komutu

* `/sw hud <Kasaba_İsmi>`  
  Devam eden kuşatma savaşının anlık durumunu (puanlar, kalan süre, aktif savaş aşaması) ekranda gösterir.

---

### Diplomasi ve Düşmanlık Komutları

* `/nation enemy add <Ulus_İsmi>`  
  Belirtilen ulusa resmi olarak düşmanlık ilan eder. Kuşatma savaşı başlatabilmek için bu komut zorunludur.
* `/nation ally add <Ulus_İsmi>`  
  Belirtilen ulusa müttefiklik teklifi gönderir.

---

### Peaceful (Barışçıl) Mod Komutu

* `/sw town togglepeaceful`  
  Kasabanızın barışçıl modunu açar veya kapatır.

::: warning DİKKAT
Peaceful mod kapatıldıktan sonra kasabanız doğrudan savaşlara açık hale gelir ve tekrar bu moda geçmek için bekleme süresi uygulanır.
:::

---

### Askeri Ödemeler ve Ekonomi

* `/sw nation paysoldiers <Miktar>`  
  Ulus hazinesinden savaşa katılan askerlere belirlenen miktarda ödül/maaş ödemesi yapar.

---

### İşgal Takip Komutları

* `/nation siegewar occupiedforeigntowns`  
  Ulusunuzun kontrol altında tuttuğu (işgal ettiği) yabancı kasabaları listeler.
* `/nation siegewar occupiedhometowns`  
  Ulusunuza ait olup düşmanlar tarafından işgal edilmiş olan kasabaları listeler.

---

### Ganimet Toplama

* `/sw collect`  
  Kazanılan kuşatma savaşı sonrasında elde edilen ganimet sandığını toplamanızı sağlar.
