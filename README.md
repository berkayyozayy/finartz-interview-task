# Finartz Assignment
<img width="1429" alt="Screen Shot 2021-03-15 at 10 14 36" src="https://user-images.githubusercontent.com/52782215/111116592-4929a300-8577-11eb-8c37-79d49bcf15de.png">

## Projen Yapısı ve Özellikleri

Proje [TMDB API](https://developers.themoviedb.org/4/getting-started) dan verileri alıp Popüler Olanlar ve İzlemek Ücretsiz olmak üzere iki ayrı bölümde kategorilendirmektedir.

### Popüler Olanlar
1) Yayın Akışı <br>
2) Televizyonda <br>
3) Kiralık <br>
4) Sinemalarda <br>

### İzlemek Ücretsiz
1) Filmler <br>
2) TV <br>

### Özellikler
1) Kullanıcı image, title, date, vote average bilgilerini [TMDB API](https://developers.themoviedb.org/4/getting-started) dan gelen güncel veriler ile yatay eksende scroll ederek görüntüleyebilmektedir. <br>
2) Popüler Olanlar ve İzlemek Ücretsiz bölümlerinde farklı kategorilerden seçim yapabilmektedir. <br>
3) Kullanıcı thumbs up ve thumbs down butonlarına erişim sağlayabilmektedir. Butonlardan herhangi birine tıklandığında diğer buton yok olmaktadır. Tıklanan butona tekrar tıklandığında thumbs up ve thumbs down butonları aktif hale gelmektedir. <br>

## Projede Kullanılan Teknolojiler
1) React Hooks : useState & useEffect <br>
2) ES6 Syntax <br>
3) Git <br>

## NPM Paketleri
1) Axios <br>
2) Styled Components <br>
3) FontAwesome Icons <br>
4) React Lazy Load Image Components <br>

## Eksikler
1) Score göstergesi API dan alınan veriler ile yüzdelik olarak gösterilmektedir. Border score değerine göre renklenmektedir slider olarak şekillendirilmemiştir. API dan gelen verinin değeri 50'den küçük ise kırmızı, 50 ile 70 arasında ise sarı, 70'den büyük bir değer ise yeşil olarak gösterilmektedir.  <br>
2) Tab geçişleri useState ile kontrol edilmektedir. Stillendirme de geliştirilmesi gereken özellikler vardır. <br>

## Nasıl Çalışır?
**Step 1** : `npm install` <br />
**Step 2** : `npm start`


