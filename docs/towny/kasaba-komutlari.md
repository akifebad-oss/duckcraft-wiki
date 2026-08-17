# Kasaba Yönetimi ve Komutları

DuckCraft Towny dünyasında yerleşkenizi güvenle inşa etmek, üyelerinizi organize etmek ve ekonominizi yönetmek için kasaba komutlarından faydalanabilirsiniz. Doğru yapılandırılmış bir kasaba, oyuncularınız için güvenli bir sığınak oluşturur.

---

### Temel Bilgi ve Durum Komutları
Kasabanız veya sunucudaki diğer yerleşkeler hakkında bilgi edinmek için aşağıdaki komutları kullanabilirsiniz:

* `/town here` — Şu an ayak bastığınız alanın hangi kasabaya ait olduğunu tespit eder.
* `/town {kasaba adı}` — Hedeflenen kasabanın genel durumunu ve detaylarını görüntüler.
* `/town list` — Sunucu üzerinde aktif olan tüm kasabaları listeler.
* `/town online` — Kasabanızda o anda oyunda olan kişileri gösterir.
* `/town ?` — Kullanabileceğiniz temel kasaba komut rehberini açar.

---

### Bölge Genişletme ve Arazi (Claim) Komutları
Kasabanızın sınırlarını belirlemek ve haritada yeni alanlar sahiplenmek için bu komutlar kullanılır:

* `/town claim` — Üzerinde durduğunuz sahipsiz bölgeyi kasaba sınırlarına katar.
* `/town unclaim` — Bulunduğunuz bölgeyi kasaba sahipliğinden çıkarır.
* `/town buy bonus {miktar}` — Kasabanız için ek hak (bonus claim) satın alır.
* `/town outpost` — Kasaba ana sınırlarından uzaktaki bir araziyi ileri karakol yapar.
* `/town outpost {#}` — Belirlenen numaradaki ileri karakol alanına ışınlar.
* `/town plots` — Kasaba bünyesindeki tüm parsellerin bilgisini sunar.
* `/town plotgrouplist` — Tanımlanmış arsa gruplarını listeler.
* `/town set plotprice {miktar}` — Kasabadaki satılık arsaların varsayılan taban fiyatını belirler.
* `/town set plottax {miktar}` — Arsa sahiplerinden toplanacak düzenli vergiyi ayarlar.

---

### Yerleşim Kurma ve Üye Yönetimi
Kasabanıza yeni oyuncular dahil etmek veya üye yapısını düzenlemek için gerekli komutlar:

* `/town new {isim}` — Belirlediğiniz isimle sıfırdan yeni bir kasaba kurar.
* `/town invite {oyuncu}` — Bir oyuncuya kasabanıza katılması için davet gönderir.
* `/town add {oyuncu}` — Oyuncuyu doğrudan kasaba kadrosuna ekler.
* `/town join {isim}` — Katılıma açık olarak işaretlenmiş bir kasabaya girmenizi sağlar.
* `/town kick {oyuncu}` — Bir üyeyi kasaba kadrosundan çıkartır.
* `/town leave` — Üyesi olduğunuz kasabadan kendi isteğinizle ayrılmanızı sağlar.
* `/town delete` — Kasabayı tamamen feshederek haritadan siler (Yetki gerektirir).

---

### Ekonomi ve Banka İşlemleri
Kasaba bütçesini kontrol etmek ve finansal vergilendirmeleri ayarlamak için kullanılan komutlar:

* `/town deposit {miktar}` — Kendi bakiyenizden kasaba kasasına para aktarır.
* `/town withdraw {miktar}` — Kasaba kasasından hesabınıza para çeker.
* `/town bankhistory` — Kasaba bankasında gerçekleşen son finansal hareketleri listeler.
* `/town set taxes {miktar}` — Sakinlerden alınacak günlük veya periyodik vergi tutarını belirler.
* `/town toggle taxpercent on/off` — Verginin sabit tutar yerine yüzde (%) üzerinden alınmasını sağlar.

---

### Konum ve Işınlanma Ayarları
Kasaba merkezini ve ışınlanma noktalarını yönetmek için kullanabileceğiniz komutlar:

* `/town spawn` — Sizi doğrudan kendi kasabanızın doğma noktasına ışınlar.
* `/town spawn {kasaba adı}` — İzin verilen başka bir kasabanın doğma noktasına ışınlar.
* `/town set spawn` — Durduğunuz noktayı kasabanın yeni ışınlanma konumu yapar.
* `/town set spawncost {miktar}` — Dışarıdan kasabanıza ışınlanan kişilerden alınacak ücreti belirler.
* `/town set homeblock` — Kasabanın çekirdek (ana) merkez bölgesini durduğunuz yere taşır.

---

### Rütbe, Yetki ve Oyuncu İzinleri
Üyelerinize sorumluluk vermek ve kasaba içi hiyerarşiyi yönetmek için:

* `/town reslist` — Kasabaya kayıtlı bütün sakinleri listeler.
* `/town ranklist` — Kasabadaki rütbe dağılımını ve rütbeli oyuncuları gösterir.
* `/town rank add {oyuncu} {rütbe}` — Belirtilen sakin için bir rütbe tanımlar.
* `/town rank remove {oyuncu} {rütbe}` — Oyuncunun üzerindeki rütbeyi geri alır.
* `/town trust {oyuncu}` — Oyuncuya kasaba genelinde tam güvenli erişim yetkisi verir.
* `/town purge [gün sayısı]` — Belirtilen gün kadar oyuna girmeyen pasif üyeleri topluca çıkartır.

---

### Güvenlik, Koruma ve Bayrak (Toggle) Ayarları
Kasaba içerisindeki doğa olaylarını ve oyuncu etkileşimlerini kısıtlamak için:

* `/town toggle pvp on/off` — Kasaba sınırlarında oyuncuların birbirine vurmasını açar/kapatır.
* `/town toggle explosion on/off` — Patlamaların (TNT, Creeper vb.) bloklara zarar vermesini engeller.
* `/town toggle fire on/off` — Yangın çıkmasını ve yangının yayılmasını denetler.
* `/town toggle mobs on/off` — Kasaba içinde zararlı yaratık doğup doğmayacağını ayarlar.
* `/town toggle open on/off` — Kasabanın davetsiz katılım durumunu yönetir.
* `/town toggle public on/off` — Kasaba spawn noktasının herkese açık olup olmadığını belirler.
* `/town toggle neutral on/off` — Savaş durumlarında kasabanın tarafsız kalmasını sağlar.
* `/town toggle nationzone on/off` — Ulus bölgeleriyle olan bağlantı durumunu ayarlar.

---

### Diplomasi ve Yasaklamalar
Diğer kasabalarla ilişkileri düzenlemek ve istenmeyen kişileri uzak tutmak için:

* `/town allylist` — Müttefik ilan edilen kasabaların listesini gösterir.
* `/town enemylist` — Düşman olarak işaretlenen kasabaları listeler.
* `/town ban {oyuncu}` — Belirli bir oyuncunun kasaba topraklarına girmesini yasaklar.
* `/town outlawlist` — Kasaba sınırlarından yasaklanan (outlaw) kişileri listeler.

---

### Duyuru ve Özelleştirme
Kasabanızın kimliğini ön plana çıkaracak komutlar:

* `/town set name {isim}` — Kasabanızın adını günceller.
* `/town set board {mesaj}` — Oyuncular kasabaya girdiğinde çıkan karşılama duyurusunu değiştirir.
* `/town say {mesaj}` — Kasaba içinde çevrimiçi olan tüm üyelere genel duyuru yayınlar.
* `/town set mapcolor {renk}` — Haritadaki kasaba alanınızın rengini değiştirir.
* `/town set mayor {oyuncu}` — Kasaba başkanlığını başka bir üyeye devreder.

---

### Genel Yetki Ayarları
* `/town set perm on/off` — Kasabanın genel izinlerini topluca açar veya kapatır.
* `/town set perm reset` — Tüm kasaba yetki yapılandırmasını varsayılan ayarlara geri döndürür.
