const allData = [

    {
      id:1,
      name: "LP (Dil: English) (6+)",
      time: "30.09.2022 20:30 - 23:00",
      image:"https://cdn.iticket.az/event/gallery/RyJj76koU54LA8anIIus7nvH19f7fzrc.png",
      price:"60 - 300 ₼",
      location: "Bakı Konqres Mərkəzi",
      about: `LAURA PERGOLIZZI adlı, LP ləqəbli məşhur amerikalı müğənni-bəstəkar ilk dəfə olaraq Bakıda ən böyük hitləri ilə çıxış edəcək və 2021-ci ilin sonunda işıq üzü görən “Churches” adlı son albomundan yeni mahnıları nümayiş etdirəcək.
  
      Şou 30 sentyabr 2022-ci il tarixində Azərbaycanda Bakı Konqres Mərkəzində keçiriləcək.
      
      LP bütün dünyada milyonlarla dinləyicinin qəlbini qazanıb. Onun hər bir mahnısı pərəstişkarları üçün əsl kəşfdir.
      Həssas performansı, həyəcanlı səsi və hədsiz enerjisi LP konsertlərini heyrətamiz, unudulmaz edir, qaçırmamalısınız!`,
    },
    {
      id:2,
      name: "Soner Sarıkabadayı (Dil: Türkçe) (12+)",
      time: "24.09.2022 20:00 - 21:30",
      image:"https://cdn.iticket.az/event/artist/HxA6YlSM3JuAuPkeHo7AmNNEyZUCfW7ZvR74a7Jv.png",
      price:"30 - 200 ₼",
      location: "Elektra Events Hall",
      about: `Soner Sarikabadayi adlı, məşhur türkiyəli müğənni-bəstəkar ilk dəfə olaraq Bakıda ən böyük hitləri ilə çıxış edəcək.
  
      Şou 24 sentyabr 2022-ci il tarixində Azərbaycanda Bakı Konqres Mərkəzində keçiriləcək.
      
      Soner bütün dünyada milyonlarla dinləyicinin qəlbini qazanıb. Onun hər bir mahnısı pərəstişkarları üçün əsl kəşfdir.
      Həssas performansı, həyəcanlı səsi və hədsiz enerjisi Soner konsertlərini heyrətamiz, unudulmaz edir, qaçırmamalısınız!`,
    },
    {
      id:3,
      name: "HADİSE (Dil: Türkçe) (6+)",
      time: "10.09.2022 20:00 - 22:00",
      image:"https://cdn.iticket.az/event/artist/kOzxB9aY2BA9wWWI9E5iXG4r38d4ZJzFosuR3Bwv.png",
      price:"25 - 250 ₼",
      location: "Bakı Konqres Mərkəzi",
      about: `COVİD-19 pasportu və ya immun sertifikatı olmayan tamaşaçılar tədbirə buraxılmır və əldə olunmuş biletlər geri qaytarılmır!
  
      Tədbir qonaqları “Sürətli Keçid” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişindən Mərkəzin ərazisinə daha rahat və sürətli keçid edə bilərlər. Bu əlavə xidmət bileti tədbirə giriş üçün nəzərdə tutulmayıb. Tədbirə daxil olmaq üçün tədbir bileti əldə etmək zəruridir.
      
      Tədbir qonaqları “Sürətli keçid + Avto dayanacaq” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişinin önündə məhdud sayda olan dayanacaqdan istifadə edə bilərlər.`,
    },
    {
      id:4,
      name: "Röya - NAZLI (Dil: Azərbaycanca) (6+)",
      time: "10.09.2022 20:00 - 22:0023.09.2022 20:00 - 22:00",
      image:"https://cdn.iticket.az/event/artist/5rnRLPzZmMiMnw2WgekLHo1mVKxNq1EUzKT1WAPr.png",
      price:"20 - 150 ₼",
      location: "Bakı Konqres Mərkəzi",
      about: `COVİD-19 pasportu və ya immun sertifikatı olmayan tamaşaçılar tədbirə buraxılmır və əldə olunmuş biletlər geri qaytarılmır!
  
      Tədbir qonaqları “Sürətli Keçid” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişindən Mərkəzin ərazisinə daha rahat və sürətli keçid edə bilərlər. Bu əlavə xidmət bileti tədbirə giriş üçün nəzərdə tutulmayıb. Tədbirə daxil olmaq üçün tədbir bileti əldə etmək zəruridir.
      
      Tədbir qonaqları “Sürətli keçid + Avto dayanacaq” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişinin önündə məhdud sayda olan dayanacaqdan istifadə edə bilərlər.`,
    },
    {
      id:5,
      name: "Jah Khalib (12+)",
      time: "27.11.2022 20:00 - 22:00",
      image:"https://cdn.iticket.az/event/artist/rnu5XMSdauId5ReEH052cjfYYCsm4rbv3x4ARywr.png",
      price:"50 - 230 ₼",
      location: "Bakı Konqres Mərkəzi",
      about: `COVİD-19 pasportu və ya immun sertifikatı olmayan tamaşaçılar tədbirə buraxılmır və əldə olunmuş biletlər geri qaytarılmır!
  
      Tədbir qonaqları “Sürətli Keçid” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişindən Mərkəzin ərazisinə daha rahat və sürətli keçid edə bilərlər. Bu əlavə xidmət bileti tədbirə giriş üçün nəzərdə tutulmayıb. Tədbirə daxil olmaq üçün tədbir bileti əldə etmək zəruridir.
      
      Tədbir qonaqları “Sürətli keçid + Avto dayanacaq” xidmətini əldə etməklə Bakı Konqres Mərkəzinin B girişinin önündə məhdud sayda olan dayanacaqdan istifadə edə bilərlər.`,
    },
    {
      id:6,
      name: "Tolgshow (9+)",
      time: "17.09.2022 20:00 - 22:00",
      image:"https://cdn.iticket.az/event/artist/34IFyzijYpdWVP3y2Zq5hsvOnXSErmP509OkP61y.png",
      price:"35 - 350 ₼",
      location: "Bakı Konqres Mərkəzi",
      about: `Tolga Çevik “Tolgshow” adlı şousu ilə Bakıya gəlir!
  
      “Arkadaşım” obrazı ilə milyonları güldürən Tolga Çevik improvizə performansı ilə Dünya Turu çərçivəsində “Triangle-Pro” təşkilatçılığında 17 sentyabr 2022-ci il tarixində Bakıda tamaşaçıların qarşısına çıxacaq.
      
      “Yönetmen” obrazını canlandıran Fırat Parlak və “Minik” ləqəbli musiqiçi Özer Atikin müşayiəti ilə tamamilə improvizasiya edilən şou Bakı Konqres Mərkəzində baş tutacaq.`,
    },
  
  ];
  export default allData;