# Arsa (Plot) Sistemi ve İzin Yönetimi

Kasaba içerisindeki her bir chunk, ayrı bir **arsa (plot)** olarak özelleştirilebilir. Arsa komutları sayesinde vatandaşlara özel yaşam alanları satabilir, tarım veya arena bölgeleri oluşturabilir ve kimin hangi bloğa dokunabileceğini en ince ayrıntısına kadar kontrol edebilirsiniz.

---

### Temel Arsa İşlemleri

| Komut | Açıklama |
| :--- | :--- |
| `/plot claim` | Satışa çıkarılmış durumdaki arsayı satın alarak üzerinize geçirir. |
| `/plot unclaim` | Sahibi olduğunuz arsayı bırakır ve tekrar kasaba mülkiyetine döndürür. |
| `/plot fs <Fiyat>` veya `/plot forsale` | Arsayı belirlediğiniz fiyattan satışa çıkarır. |
| `/plot nfs` veya `/plot notforsale` | Satışta olan arsayı ilandan kaldırır. |
| `/plot set name <İsim>` | Arsanıza haritada ve giriş bildirimlerinde görünecek özel bir isim verir. |
| `/plot clear` | Arsadaki kilitli tabelaları ve sandık marketlerini temizler. |
| `/plot evict` | Arsayı kullanan kişiyi tahliye ederek arsayı geri alır. |

---

### Arsa Türünü Değiştirme

Kasaba yöneticileri, bulundukları chunk'ın işlevini değiştirerek özel alanlar oluşturabilir:

* `/plot set farm` — Arsayı **Tarım Alanı** yapar (Yalnızca ekin ekme/biçme odaklı düzen).
* `/plot set arena` — Arsayı **Arena** yapar (PvP her zaman aktif olur).
* `/plot set bank` — Arsayı **Banka** bölgesi olarak tanımlar.
* `/plot set embassy` — Yabancı kasaba oyuncularının bile satın alabileceği **Elçilik** arsası oluşturur.
* `/plot set inn` — Oyuncuların konaklayabileceği **Han (Inn)** alanı yapar.
* `/plot set jail` — Kasaba kurallarını ihlal edenlerin tutulacağı **Hapishane** alanını belirler.
* `/plot set wilds` — Arsayı doğal kaynakların toplanabileceği **Vahşi Bölge** yapar.

---

### Arsa İçi Güvenlik Ayarları (Toggle)

Kendi arsanızda geçerli olacak kuralları kasabadan bağımsız olarak ayarlayabilirsiniz:

* `/plot toggle pvp on/off` — Arsa sınırları içinde PvP'yi açar veya kapatır.
* `/plot toggle mobs on/off` — Arsa içinde yaratık doğmasını engeller veya izin verir.
* `/plot toggle explosion on/off` — Patlamaların arsanıza zarar vermesini kontrol eder.
* `/plot toggle fire on/off` — Yangın çıkmasını ve blokların yanmasını açar veya kapatır.

---

### Oyuncu Bazlı Yetkilendirme

Arsanıza ortak almak veya belirli bir kişiye erişim vermek için:

* `/plot trust add <Oyuncu>` — Oyuncuyu arsanızda tam güvenilir ilan eder (Blok kırabilir, koyabilir ve sandıkları açabilir).
* `/plot trust remove <Oyuncu>` — Oyuncunun güvenilirlik yetkisini kaldırır.
* `/plot perm add <Oyuncu>` — Oyuncuya özel arsa izni tanımlar.
* `/plot perm remove <Oyuncu>` — Oyuncudan özel arsa iznini geri alır.
* `/plot perm gui` — Arsa izinlerini karmaşık komutlar yazmadan görsel menü (GUI) üzerinden ayarlamanızı sağlar.
* `/plot perm hud` — Durduğunuz arsanın mevcut izin tablosunu ekranda gösterir.

---

### Gelişmiş Grup İzin Matrisi

Towny'de izinler 4 eylem ve 5 oyuncu grubu üzerinden yönetilir:
* **Eylemler:** `build` (blok koyma), `destroy` (blok kırma), `switch` (kapı, şalter, düğme kullanma), `itemuse` (kova, çakmak vb. eşya kullanma).
* **Gruplar:** `resident` (kasaba üyesi), `nation` (ulus üyesi), `ally` (müttefik), `friend` (arkadaş), `outsider` (yabancı).

```bash
# Örnek Kullanım: Kasaba üyelerinin blok koymasına izin verir
/plot set perm resident build on

# Örnek Kullanım: Yabancıların sandık/kapı açmasını engeller
/plot set perm outsider switch off
