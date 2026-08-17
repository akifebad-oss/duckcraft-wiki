# Arsa Yönetimi ve Komutları

DuckCraft'ta kasaba içerisindeki parselleri yönetmek, kişisel alanlar oluşturmak ve izinsiz müdahaleleri engellemek için arsa komutları kullanılır.

---

### Temel Arsa Sahipliği ve İşlemleri
Arsa alma, satma ve isim düzenleme gibi temel işlevler:

* `/plot claim` — Satışa çıkarılmış bir arsayı üzerinize geçirir.
* `/plot unclaim` — Sahip olduğunuz arsayı terk eder, tekrar boşa çıkarır.
* `/plot fs` veya `/plot forsale` — Arsayı girdiğiniz fiyat üzerinden pazara çıkarır.
* `/plot nfs` veya `/plot notforsale` — Satılık olan arsayı pazardan çeker.
* `/plot set name <Yeni İsim>` — Arsanıza özel bir isim verir.
* `/plot clear` — Arsa üzerindeki kilitli tabelaları ve satış marketlerini temizler.
* `/plot evict` — Arsa üzerinde kiracı veya izinsiz bulunan oyuncuyu alandan tahliye eder.

---

### Arsa Türü Belirleme
Arsanıza işlevsel bir rol tanımlamak için bu kategoriyi kullanabilirsiniz:

* `/plot set farm` — Bölgeyi tarım ve çiftçilik alanına çevirir.
* `/plot set arena` — Alana PvP ve savaş alanı niteliği kazandırır.
* `/plot set bank` — Arsayı kasa/banka alanı olarak yapılandırır.
* `/plot set embassy` — Yabancı oyuncular için elçilik alanı tanımlar.
* `/plot set inn` — Konaklama ve otel alanı olarak belirler.
* `/plot set jail` — Arsayı cezaevi/hapishane bölgesine dönüştürür.
* `/plot set wilds` — Arsayı doğal/vahşi alan statüsüne getirir.

---

### Arsa İçi Güvenlik ve Kurallar (Toggle)
Arsanızda geçerli olacak çevre kurallarını belirlemek için:

* `/plot toggle pvp on/off` — Parsel sınırları dahilinde PvP'yi aktif veya pasif yapar.
* `/plot toggle mobs on/off` — Arsanızda yaratık doğmasını kontrol eder.
* `/plot toggle explosion on/off` — Patlayıcı blokların arsanıza hasar vermesini önler.
* `/plot toggle fire on/off` — Alevlerin yayılmasını ve blok yakmasını kısıtlar.

---

### Oyuncu Erişim ve Güven Yetkileri
Arsanıza arkadaşlarınızı dahil etmek veya belirli yetkiler vermek için:

* `/plot trust add <Oyuncu Adı>` — Oyuncuyu güvenilir ilan eder ve geniş erişim sağlar.
* `/plot trust remove <Oyuncu Adı>` — Oyuncunun arsadaki güven yetkisini iptal eder.
* `/plot perm add <Oyuncu Adı>` — Oyuncuya özel bir arsa izni tanımlar.
* `/plot perm remove <Oyuncu Adı>` — Oyuncudan özel arsa iznini geri alır.
* `/plot perm gui` — Yetki ayarlarını grafik arayüz (GUI) paneli üzerinden yönetmenizi sağlar.
* `/plot perm hud` — Mevcut arsanın izin durumunu ekranınızda gösterir.

---

### İnce Ayar Arsa İzinleri (Group & Role Perms)
Arsanızda kimlerin blok kırabileceğini (`destroy`), koyabileceğini (`build`), kapı/şalter kullanabileceğini (`switch`) veya eşya etkileşimi yapabileceğini (`itemuse`) ayarlamak için:

* `/plot set perm resident build/destroy/switch/itemuse on/off` — Kasaba üyelerinin yetkileri.
* `/plot set perm ally build/destroy/switch/itemuse on/off` — Müttefik oyuncuların yetkileri.
* `/plot set perm nation build/destroy/switch/itemuse on/off` — Aynı ulustakilerin yetkileri.
* `/plot set perm friend build/destroy/switch/itemuse on/off` — Eklediğiniz arkadaşlarınızın yetkileri.
* `/plot set perm outsider build/destroy/switch/itemuse on/off` — Dışarıdan gelen yabancıların yetkileri.
* `/plot set perm build/destroy/switch/itemuse on/off` — Herkesi kapsayan genel izin ayarı.
* `/plot set perm reset` — Tüm arsa izin yapılandırmasını varsayılana döndürür.

---

### Arsa Gruplandırma ve Toplu Yönetim
Yan yana birden fazla arsayı birleştirerek grup halinde yönetmek için:

* `/plot group add <Grup İsmi>` — İçinde durduğunuz arsayı bir gruba dahil eder.
* `/plot group remove` — Arsayı bağlı olduğu gruptan ayırır.
* `/plot group delete <Grup İsmi>` — Oluşturulan grubu tamamen siler.
* `/plot group rename <Yeni Grup İsmi>` — Arsa grubunun adını değiştirir.
* `/plot group forsale` veya `/plot group fs` — Grup içerisindeki tüm arsaları topluca satışa çıkarır.
* `/plot group notforsale` veya `/plot group nfs` — Grubun satış durumunu kaldırır.
* `/plot group toggle` — Grup arsalarının varsayılan niteliklerini düzenler.
* `/plot group toggle pvp/fire/mobs/explosion on/off` — Grubun güvenlik ve çevre ayarlarını topluca yönetir.
* `/plot group gui` — Grup izinlerini menü üzerinden kolayca ayarlamanızı sağlar.

---

### Grup Yetki Yönetimi
* `/plot group set perm on/off` — Tüm grubun izinlerini genel olarak açar/kapatır.
* `/plot group set perm resident build/destroy/switch/itemuse on/off` — Grup dahilinde kasaba üyesi yetkileri.
* `/plot group set perm ally build/destroy/switch/itemuse on/off` — Grup dahilinde müttefik yetkileri.
* `/plot group set perm nation build/destroy/switch/itemuse on/off` — Grup dahilinde ulus üyesi yetkileri.
* `/plot group set perm friend build/destroy/switch/itemuse on/off` — Grup dahilinde arkadaş yetkileri.
* `/plot group set perm outsider build/destroy/switch/itemuse on/off` — Grup dahilinde yabancı oyuncu yetkileri.
* `/plot group perm add <Oyuncu Adı>` — Bir oyuncuya grup bazlı özel yetki atar.
* `/plot group perm remove <Oyuncu Adı>` — Oyuncunun grup yetkisini kaldırır.
* `/plot group set perm reset` — Gruba bağlı tüm parsellerin yetkilerini sıfırlar.
