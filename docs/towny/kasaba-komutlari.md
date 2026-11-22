# Kasaba Yönetimi ve Komutları

Bir kasaba kurduğunuzda veya yönetici (Mayor / Assistant) olduğunuzda şehrinizin sınırlarını, ekonomisini, üyelerini ve güvenliğini aşağıdaki komutlarla yönetirsiniz.

---

### Kurulum, Katılım ve Genel Bilgi

| Komut | Açıklama |
| :--- | :--- |
| `/town new <İsim>` | Bulunduğunuz konumda belirlediğiniz isimle yeni bir kasaba kurar. |
| `/town here` | Ayak bastığınız arazinin hangi kasabaya ait olduğunu ve sınır bilgilerini gösterir. |
| `/town <Kasaba_Adı>` | Hedef kasabanın başkanı, üye sayısı, bankası ve genel durumunu inceler. |
| `/town list` | Sunucudaki tüm aktif kasabaları listeler. |
| `/town online` | Kasabanızda o an çevrimiçi olan üyeleri gösterir. |
| `/town invite <Oyuncu>` | Belirtilen oyuncuya kasabanıza katılması için davet gönderir. |
| `/town add <Oyuncu>` | Davet beklemeden oyuncuyu doğrudan kasabaya ekler (Yetki gerektirir). |
| `/town join <İsim>` | Herkese açık (`open`) durumdaki bir kasabaya katılmanızı sağlar. |
| `/town kick <Oyuncu>` | Seçilen üyeyi kasabadan çıkarır. |
| `/town leave` | Üyesi olduğunuz kasabadan ayrılmanızı sağlar. |
| `/town delete` | Kasabayı kalıcı olarak siler (Yalnızca kasaba başkanı kullanabilir). |
| `/town ?` | Oyun içi kasaba komut yardım menüsünü açar. |

---

### Toprak Sahiplenme (Claim) ve Arsa Düzeni

| Komut | Açıklama |
| :--- | :--- |
| `/town claim` | Bulunduğunuz chunk'ı kasabanızın sınırlarına dahil eder. |
| `/town unclaim` | Üzerinde durduğunuz bölgeyi kasaba sahipliğinden çıkarır. |
| `/town buy bonus <Miktar>` | Kasabanız için ekstra toprak sahiplenme (bonus claim) hakkı satın alır. |
| `/town outpost` | Ana kasaba sınırlarından uzaktaki bir bölgeyi ileri karakol olarak işaretler. |
| `/town outpost <Numara>` | Belirtilen numaralı ileri karakol noktasına ışınlar. |
| `/town plots` | Kasaba içindeki arsaların dağılımını ve fiyat bilgilerini gösterir. |
| `/town plotgrouplist` | Oluşturulmuş arsa gruplarını listeler. |
| `/town set plotprice <Miktar>` | Kasabadaki satışa çıkacak arsalar için varsayılan fiyatı belirler. |
| `/town set plottax <Miktar>` | Kasaba içindeki arsa sahiplerinden alınacak günlük vergiyi ayarlar. |

---

### Kasaba Ekonomisi ve Vergi Sistemi

::: warning BANKA BAKİYESİ
Kasabaların günlük işletme giderleri otomatik olarak kasaba bankasından kesilir. Bankada yeterli para kalmazsa kasabanız düşebilir!
:::

| Komut | Açıklama |
| :--- | :--- |
| `/town deposit <Miktar>` | Kendi cebinizden kasaba bankasına para yatırır. |
| `/town withdraw <Miktar>` | Kasaba bankasından kendi hesabınıza para çeker. |
| `/town bankhistory` | Kasaba bankasına yapılan son yatırma ve çekme işlemlerini gösterir. |
| `/town set taxes <Miktar>` | Kasaba üyelerinden alınacak günlük vergi miktarını ayarlar. |
| `/town toggle taxpercent on/off` | Verginin sabit tutar yerine oyuncunun parasının yüzdesi (%) olarak alınmasını sağlar. |

---

### Işınlanma ve Merkez Ayarları

| Komut | Açıklama |
| :--- | :--- |
| `/town spawn` | Kendi kasabanızın başlangıç noktasına ışınlar. |
| `/town spawn <Kasaba_Adı>` | Ziyarete açık başka bir kasabanın merkezine ışınlar. |
| `/town set spawn` | Durduğunuz noktayı kasabanın yeni ışınlanma merkezi yapar. |
| `/town set spawncost <Miktar>` | Kasaba dışından `/town spawn` ile gelen oyunculardan alınacak ücreti belirler. |
| `/town set homeblock` | Kasabanın ana merkez bloğunu (Homeblock) bulunduğunuz chunk'a taşır. |

---

### Üye, Rütbe ve Güven Yönetimi

| Komut | Açıklama |
| :--- | :--- |
| `/town reslist` | Kasabaya kayıtlı tüm vatandaşların listesini gösterir. |
| `/town ranklist` | Kasabadaki rütbeli yöneticileri ve rütbelerini listeler. |
| `/town rank add <Oyuncu> <Rütbe>` | Üyeye kasaba içi yetki rütbesi verir (Örn: `Assistant`). |
| `/town rank remove <Oyuncu> <Rütbe>` | Oyuncunun üzerindeki kasaba rütbesini alır. |
| `/town trust <Oyuncu>` | Oyuncuya kasaba genelinde geniş erişim ve inşaat yetkisi tanır. |
| `/town purge <Gün>` | Belirtilen gün sayısı boyunca sunucuya girmeyen pasif üyeleri kasabadan temizler. |

---

### Çevre, Koruma ve Ayarlar (Toggle)

Kasaba sınırlarındaki fiziksel kuralları ve erişim ayarlarını bu komutlarla özelleştirebilirsiniz:

* `/town toggle pvp on/off` — Kasaba içinde oyuncuların birbirine hasar vermesini açar veya kapatır.
* `/town toggle explosion on/off` — TNT, Creeper gibi patlamaların bloklara zarar vermesini engeller.
* `/town toggle fire on/off` — Ateşin yayılmasını ve yapıları yakmasını kontrol eder.
* `/town toggle mobs on/off` — Kasaba sınırlarında zararlı yaratıkların doğmasını açar veya kapatır.
* `/town toggle open on/off` — Kasabanın davetsiz katılıma açık olup olmadığını belirler.
* `/town toggle public on/off` — Yabancı oyuncuların kasabanıza `/town spawn` ile ışınlanabilmesini sağlar.
* `/town toggle neutral on/off` — Kasabanın savaşlara karşı tarafsız/barışçıl durumda olmasını ayarlar.
* `/town toggle nationzone on/off` — Ulus bölgeleriyle etkileşim ayarını düzenler.

---

### Diplomasi, Yasaklama ve Kimlik Özelleştirme

* **Yasaklama & Diplomasi:**
  * `/town ban <Oyuncu>` — İstenmeyen bir oyuncunun kasaba sınırlarınıza girmesini yasaklar.
  * `/town outlawlist` — Kasabadan yasaklanmış (Outlaw) oyuncuları listeler.
  * `/town allylist` — Müttefik kasabaları görüntüler.
  * `/town enemylist` — Düşman kasabaları listeler.
* **Kimlik & Duyuru:**
  * `/town set name <İsim>` — Kasabanızın adını değiştirir.
  * `/town set board <Mesaj>` — Oyuncular kasabaya girdiğinde sohbet ekranında beliren karşılama mesajını düzenler.
  * `/town say <Mesaj>` — Kasabadaki tüm çevrimiçi üyelere özel duyuru geçer.
  * `/town set mapcolor <Renk>` — Dinamik haritada kasaba sınırlarınızın görüneceği rengi seçer.
  * `/town set mayor <Oyuncu>` — Kasaba başkanlığını başka bir üyeye devreder.
* **Genel İzin Sıfırlama:**
  * `/town set perm on/off` — Kasaba genel izinlerini topluca açar veya kapatır.
  * `/town set perm reset` — Tüm izinleri sunucu varsayılanlarına döndürür.
