# Ulus (Krallık) Yönetimi ve Komutları

DuckCraft Towny ekosisteminde birden fazla kasabayı tek bir çatı altında toplayarak güçlü bir krallık kurabilir, siyasi ve ekonomik hakimiyet sağlayabilirsiniz.

---

### Krallık Kurma ve Şehir İltihakı
Yeni bir ulus oluşturmak ve şehirleri yönetmek için kullanabileceğiniz ana komutlar:

* `/nation new {isim}` — Yeni bir krallık/ulus ilan eder.
* `/nation add {şehir}` — Belirtilen kasabayı ulusunuza dahil eder.
* `/nation kick {şehir}` — Bir kasabayı ulus bünyesinden çıkartır.
* `/nation delete {krallık adı}` — Yetkiniz dahlinde ulusu tamamen ortadan kaldırır.

---

### Finansal Yönetim ve Vergilendirme
Ulus kasasını büyütmek ve bağlı kasabalardan vergi toplamak için:

* `/nation deposit {miktar}` — Kişisel bakiyenizden ulus bankasına aktarım yapar.
* `/nation withdraw {miktar}` — Ulus kasasından hesabınıza para çeker.
* `/nation set taxes {miktar}` — Ulusa bağlı her kasabadan alınacak periyodik vergiyi belirler.

---

### Krallık Hiyerarşisi ve Liderlik
Ulus yönetimine yeni yetkililer atamak için:

* `/nation set king {oyuncu}` — Krallık liderliğini (hükümdarlığı) başkasına devreder.
* `/nation rank add {oyuncu} {rütbe}` — Ulus üyesine özel bir krallık rütbesi atar.
* `/nation rank remove {oyuncu} {rütbe}` — Oyuncunun ulus rütbesini geri alır.

---

### Özelleştirme, Unvan ve Başkent
Krallığınızın adını ve oyuncularınızın unvanlarını özelleştirmek için:

* `/nation set capital {şehir}` — Ulusun merkez başkentini değiştirir.
* `/nation set name {isim}` — Krallığın ismini günceller.
* `/nation set tag {etiket}` — Chat üzerinde görünecek kısa ulus etiketini belirler.
* `/nation set tag clear` — Mevcut krallık etiketini sıfırlar.
* `/nation set title {isim} {açıklama}` — Seçilen oyuncunun isminin önüne özel unvan ekler.
* `/nation set surname {isim} {takma ad}` — Seçilen oyuncunun isminin sonuna soyad/lakap ekler.

---

### Genel Bilgi ve Sorgulama
* `/nation ?` — Ulus komutlarının listesini sunar.
* `/nation list` — Sunucuda bulunan tüm aktif ulusları listeler.
* `/nation online` — Krallık bünyesindeki çevrimiçi oyuncuları görüntüler.
* `/nation {krallık adı}` — Hedeflenen ulusun detaylarını ve bağlı şehirlerini inceler.
* `/nation leave` — Kasabanızın üyesi olduğu ulustan ayrılmasını sağlar.
