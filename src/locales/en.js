import React from 'react'
import { Link } from 'react-router-dom'

export default {
  dictionary: {
    collapse: 'Örtmək',
    readMore: 'Daha ətraflı',
    expand: 'genişləndirmək',
    dontCall: 'Geri zəng etməyin',
    deliveryService: 'Çatdırılma xidməti',
    campaigns: 'Aksiyalar',
    bonuses: 'Bonuslar',
    delivery: 'Çatdırılma',
    about: 'Şirkət haqqında',
    franchise: 'Franşiza',
    freeFromPhone: 'Şəhər nömrələrindən zənglər pulsuzdur',
    search: 'Axtarış',
    find: 'Tapmaq',
    takeItMyself: 'Al-apar',
    wantDelivery: 'Çatdırılma istəyirəm',
    pleaseChooseOtherAddress: 'Zəhmət olmasa başqa ünvan seçin',
    pleaseChooseAddressFromDropdown:
      'Zəhmət olmasa açılan siyahıdan ünvanı seçin',
    pleaseEnterAddress: 'Zəhmət olmasa ünvan daxil edin',
    choose: 'Seçmək',
    titleName: 'Panaziya mətbəxinin restoran şəbəkəsi',
    download: 'Yükləmək',
    chipBasket: 'Səbət',
    clearBasket: 'Səbəti boşalt',
    yourOrder: 'Sizin sifarişiniz',
    profile: 'Profil',
    orderHistory: 'Sifarişlərin tarixcəsi',
    personalInfo: 'Şəxsi məlumatlar',
    deliveryAddresses: 'Çatdırılma ünvanı',
    orderIsProcessed: 'Sifariş qəbul olundu',
    pleaseChooseAddress: 'Zəhmət olmasa ünvan seçin',
    pleaseChooseRestaurant: 'Restoranın ünvanını seçin',
    ok: 'Ок',
    loyaltyProgram: 'Loyallıq proqramı',
    sushiMaster: 'Suhshi-Master',
    sushiMasterIn: 'SUŞİ VƏ ROLLARIN BAKIDA ÇATDIRILMASI',
    or: 'Və ya',
    nothingFound: 'Heç bir məlumat tapımadı',
    yourRegion: 'Sizin şəhəriniz',
    no_other: 'Xeyr, başqa',
    yes_thanks: 'Bəli, təşəkkür edirəm',
    apartment: 'Mənzil',
    intercom: 'Domofon',
    entrance: 'Blok',
    floor: 'Mərtəbə',
    addressTitle: 'Ünvan',
    loginToApp: 'Sayta giriş',
    getCode: 'Kod almaq',
    login: 'Giriş',
    sendSmsAgain: 'Yenidən SMS göndərin',
    sendCodeAgainAfter: ({ timeToShow }) => 'Təkrar göndər: ' + timeToShow,
    phoneNumber: 'Əlaqə nömrəsi',
    codeFromSms: 'SMS – dən kod',
    proceed: 'Göndərmək',
    street: 'Küçə',
    house: 'ev',
    yourBonuses: 'Sizin bonuslarınız',
    noNetworkConnection: 'Şəbəkə bağlantısı yoxdur',
    promocode: 'Promokod',
    promocodeFailedMessage: 'Promo kodu səhv daxil edilmişdir',
    cancel: 'Ləğv etmək',
    surrenderFrom: 'Manata xırda',
    apply: 'Tətbiq etmək',
    bonusDiscount: 'Bonus endirimi',
    discount: 'Endirim',
    bonusesToAccrue: 'Əlavə olunacaq bonuslar',
    total: 'Yekun',
    contactlessDelivery: 'Təmassız çatdırılma',
    today: '',
    tomorrow: '',
    onDay: {
      SUNDAY: 'Bazar günü',
      MONDAY: 'Bazar ertəsi',
      TUESDAY: 'Cərşənbə axşamı',
      WEDNESDAY: 'Çərşənbə',
      THURSDAY: 'Cümə axşamı',
      FRIDAY: 'Cümə',
      SATURDAY: 'Şənbə',
      ANY: 'İstənilən gün',
    },
    toTime: 'Müəyyən bir vaxta',
    toMonth: {
      JANUARY: 'Yanvar',
      FEBRUARY: 'Fevral',
      MARCH: 'Mart',
      APRIL: 'Aprel',
      MAY: 'May',
      JUNE: 'Iyun',
      JULY: 'Iyul',
      AUGUST: 'Avqust',
      SEPTEMBER: 'Sentyabr',
      OCTOBER: 'Oktyabr',
      NOVEMBER: 'Noyabr',
      DECEMBER: 'Dekabr',
    },
    dayOfWeek: {
      SUNDAY: 'Bazar',
      MONDAY: 'Bazar ertəsi',
      TUESDAY: 'Çərşənbə axşamı',
      WEDNESDAY: 'Çərşənbə',
      THURSDAY: 'Cümə axşamı',
      FRIDAY: 'Cümə',
      SATURDAY: 'Şənbə',
    },
    units: {
      short: {
        gram: 'qr.',
        item: 'ədəd.',
      },
    },
    getMoreDetails: 'Daha ətraflı',
    IWant: 'İstəyirəm',
    page: 'Səhifə',
    thereIsNothing: 'Heçnə yoxdur',
    addressChanged: 'Ünvan uğurla dəyişdirildi',
    addressAdded: 'Ünvan uğurla əlavə edildi',
    addressRemoved: 'Ünvan uğurla silindi',
    addressesNotFound: 'Əlavə olunmuş ünvan yoxdur',
    addAddress: 'Ünvan əlavə etmək',
    dataChanged: 'Məlumat uğurla dəyişdirildi',
    save: 'Yadda saxla',
    edit: 'Düzəliş et',
    phone: 'əlaqə nömrəsi',
    addEmail: 'e-mail ünvanını əlavə etmək',
    myBirthday: 'Mənim ad günüm',
    head: {
      title:
        'Sushi Master - Bakıda yapon mətbəxi təqdim edən restoranlar şəbəkəsidir',
      description: ({ phone }) =>
        `Sushi Master Yapon qida çatdırılması restoranlar şəbəkəsində ləzzətli və təzə suşi, rulon, isti wok qutuları. Özünüzlə götürün və ya çatdırılma sifariş edin! ${phone}`,
    },
    repeat: 'Təkrarlamaq',
    status: 'Status',
    rating: 'Reytinq',
    estimate: 'Qiymətləndirmək',
    recipient: 'Alici',
    address: 'Ünvan',
    deliveryType: 'Sifarişin alınma üsulu',
    deliveryTypes: {
      restaurant: 'Al-apar xidməti',
      delivery: 'çatdırılma',
      restaurantSubtitle: `n restorandan aparmaq olar`,
      deliverySubtitle: 'Sifariş qey olunan ünvana çatdırılacaq',
    },
    paymentType: 'Ödəniş üsulu',
    cash: 'Nağd',
    products: 'Məhsullar',
    paymentTotal: 'TOPLAM ÖDƏNİŞ',
    evaluationIsReceived: 'Bu sifarişin qiymətləndirilməsi artIq alınıb',
    noOrdersFound: 'Hələ ki, sifarişlər yoxdur',
    currentOrders: 'Cari sifarişlər',
    allOrders: 'Bütün sifarişlər',
    viewOrderStatus: 'Sifarişin statusuna baxmaq',
    rateOrder: 'Sifarişinizi qiymətləndirin',
    featuredProducts: 'Seçilmiş məhsullar',
    friendInvite: 'Dostunu dəvət et',
    logout: 'Çıxmaq',
    logoutAccount: 'Hesabdan çıxmaq',
    areYouWantLogout: 'Hesabdan çıxmaq istədiyinizə əminsiniz?',
    confirm: 'Təstiq etmək',
    personalAccount: 'Şəxsi kabinet',
    tellAboutYou: 'Özünüz haqqında',
    orderStatus: 'Sifarişin statusu',
    paymentTypes: {
      CASH: 'Nağd',
      CARD_ONLINE: 'Onlayn',
      CARD_COURIER: 'Bank kartı vasitəsi ilə kuryerə',
      CASHBOX: 'Restoranda ödəniş',
    },
    paymentTypesWord: 'Ödəniş üsulu',
    orderStatuses: {
      INIT: 'Yüklənmə',
      NEW: 'Yeni',
      NOT_CONFIRMED: 'Təsdiq edilməyib',
      AWAITING_DELIVERY: 'Çatdırılma gözlənilir',
      IN_PROGRESS: 'Hazırlanır',
      READY: 'Hazırdır',
      ON_THE_WAY: 'Yolda',
      DELIVERED: 'Çatdırılıb',
      CANCELLED: 'Ləğv edildi',
      CLOSED: 'Tamamlanıb',
    },
    contacts: 'Əlaqə',
    deliveryConditions: 'Çatdırılma şərtləri',
    toOrder: 'Sifariş et',
    homeAddress: '🏡 Ev',
    personName: 'Ad',
    extInfo: {
      apartment: 'Mənzil',
      intercom: 'Domofon',
      entrance: 'Blok',
      floor: 'Mərtəbə',
    },
    addressName: 'Ünvan',
    saveToMyAddress: 'Mənim ünvanlarıma əlavə et',
    recipientData: 'Alıcının məlumatları',
    orderForFriend: 'Dostun üçün sifariş et',
    receiverName: 'Alıcının adı',
    receiverPhone: 'Alıcının telefon nömrəsi',
    pickupConditions: 'Al-apar şərtlər',
    date: 'Tarix',
    time: 'Vaxt',
    asSoonAsPossible: 'Mümkün qədər tez',
    deliverTo: 'üçün çatdırılacaq ',
    pickUpAfter: 'Saatdan sonra götürmək ',
    additionally: 'Əlavə',
    comment: 'Şərh',
    next: 'Davam etmək',
    newAddress: 'Yeni ünvan',
    myAddresses: 'Mənim ünvanlarim',
    pickupPoints: 'Al-apar məntəqələri',
    pickupPointsIn: ({ city }) =>
      `Al-apar məntəqələri. ${city}. Gənclik restoranı`,
    selectRestaurant: 'Restoranın ünvanını seçin',
    toCatalog: 'Kataloqa keçin',
    pageNotFound: 'Səhifə tapılmadı və ya hələ ki, yaradılmayıb',
    add: 'Əlavə etmək',
    accessError: 'Giriş xətası',
    pleaseSignIn: 'Zəhmət olmasa daxil olun və ya qeydiyyatdan keçin',
    signIn: 'Daxil olmaq',
    toMain: 'Baş səhifə',
    composition: 'Məhsul tərkibi',
    in: '',
    dish: 'Yemək',
    nutritionalElements: {
      weight: 'Çəki, qr.',
      protein: 'Zülallar, qr.',
      fat: 'Yağlar, qr.',
      carbohydrate: 'Karbohidratlar, qr.',
      kilocalorie: 'Kkal',
    },
    backToMenu: 'Menyuya qayıd',
    menu: 'Menyuya',
    main: 'Qlavnaya',
    publicOffer: 'Hüquqi məlumat',
    privacyPolicy: 'Məxfilik siyasəti',
    fullDetails: 'Tam rekvizitlər',
    checkouting: 'Sifarişin verilməsi',
    orderAccepted: 'Sifarişiviz qəbul olundu',
    dataIsSaved: 'Məlumatlar yaddaşa alındı',
    filtersAndSort: 'Filtr və çeşidləmə',
    purchase: ({ bonuses }) => (
      <>
        Alışınız üçün sizə <span className="red">{bonuses}-a</span> gədər bonus
        yüklənəcək
      </>
    ),
    authForBonuses: ({ onClick }) => (
      <>
        Bonus istifadə etmək istəyirsiz? &thinsp;
        <span className="red bold" onClick={onClick}>
          Şəxsi kabineta daxil olun və ya qeydiyyətdan keçin
        </span>
      </>
    ),
  },
  components: {
    tooltip: {
      title: ({ time }) =>
        `Məhsul ${time} aralığında sifariş üçün aktiv olacaq:`,
    },
    addressModal: {
      checkAddress: 'Ünvanı yoxlamaq istəyirsiniz?',
      enterAddress: 'Çatdırılma ünvanını qeyd edin',
      choosePlace: 'Sifarişinizi haradan götürəcəyinizi qeyd edin',
      subParagraph: {
        step_1:
          'Ünvanınızın çatdırılma zonasında olduğundan əmin olmaq istəyirik.',
      },
      returnToDishesSelectionCaption:
        'Ünvanı yoxladıqdan sonra yeməklərin seçiminə qayıdacaqsınız',
    },
    errorBoundary: {
      text:
        'Saytda xəta baş verdmişdir. Problemi aradan qaldırmaq üçün artıq çalışırıq. Yaranan narahatlığa görə üzr istəyirik',
    },
    addressItem: {
      workHourText: {
        delivery: ({ start, end }) =>
          `Çatdırılma üçün sifarişlərin qəbulu: ${start} - ${end}`,
        restaurant: ({ start, end }) =>
          `Al-apar xidməti üçün sifarişlərin qəbulu: ${start} - ${end}`,
      },
    },
    deliverySubHead: ({ cityName }) =>
      `Əhatə dairəsi və catdırılma qiyməti ${cityName}`,

    selectCityModal: {
      header: 'Şəhərinizi seçin',
      whatDoYouWant: 'Şəhərin adı üzrə axtarış',
      button: 'Davam etmək',
    },
    cityNotServed: {
      title: 'Sifarişi müvəqqəti olaraq mümkün deyil',
      message: ({ cityPhone }) => (
        <>
          Texniki səbəblərə görə sifariş etmək müvəqqəti olaraq mümükün deyil.
          Narahatçılığa görə üzr istəyirik. Hər hansı bir sualınız varsa{' '}
          <strong>{cityPhone}</strong> nömrəsinə zəng edin
        </>
      ),
      button: 'Başqa bir şəhər seçmək',
    },
    login: {
      bonuses: 'alış-verişdən bonuslar qazanın',
      history: 'Sifarişlərin tarixcəsinə baxın',
      address: 'Seçdiyiniz ünvanları yaddaşda saxlayın',
      ERROR_PHONE_IS_EMPTY: 'Əlaqə nömrənizi daxil edin',
      ERROR_PHONE: 'Xahiş edirik, nomrəni düzgün daxil edin',
      ERROR_WRONG_CODE: 'Zəhmət olmasa düzgün şifrəni daxil edin',
    },
    orderRating: {
      header: 'Sifarişi qiymətləndirin.',
      description: 'Sushi Master sizə xoşbəxtlik gətirdimi?',
      quality: 'Yeməyin dadı və keyfiyyəti',
      courtesy: 'Nəzakətlik',
      speed: 'Sürət',
      inTime: 'Sifariş vaxtında çatdırıldı',
      late: 'Sifariş gecikdi',
      sadReview: 'Xoşbəxtlik bu gün çatdırılmadı',
      fineReview: 'Mən xoşbəxtəm',
      sadOrderDetail: 'Xoşbəxtlik bu gün çatdırılmadı 😔',
      fineOrderDetail: 'Mən xoşbəxtəm 😍',
      modalSadTitle:
        'Zəhmət olmasa bizə daha ətraflı məlumat verəsiniz, daha yaxşı olmaq üçün çalışırıq.',
      modalFineTitle: 'Bəyəndiklərinizi bizə deyin.',
      modalSadPlaceholder: 'Balığın az, düyünün isə köhnəlmiş',
      modalFinePlaceholder: 'Düyünün təzə, balığın dadlı',
      modalAttachPhoto: 'Şəkil əlavə edin',
      modalDontEnterReview: 'Qiymətləndirin',
    },
    bonusContainer: {
      availableBonus: ({ count }) =>
        `İstifadə oluna biləcək bonuslar: ${count}`,
      count: 'Xərclənəcək bonuslar',
      bonusesApplied: 'Bonuslar tətbiq olundu',
      bonusesAdmission: 'Bonus ballarının silinməsi təstiq olunmalıdır',
    },
    freeDeliveryCircle: {
      textBlock: [
        <>
          Çatdırılma <span className="bold">pulsuz</span> olacaq!
        </>,
        ({ count }) => (
          <>
            Biraz daha! <span className="bold">Pulsuz</span> catdırılma üçün{' '}
            {count} AZN qalıb
          </>
        ),
      ],
    },
    orderDataContainer: {
      confirmPromocode: 'Promo kodunu təsdiqləməlisiniz',
      dontCall: 'Geri zəng etməyin',
      callMePls: 'Geri zəng edin, səbəbini sizə izah edək ',
      rules: (
        <p>
          <Link to="/offer">İstifadəçi razılaşması</Link> və{' '}
          <Link to="/privacy-policy">məxfilik siyasəti</Link> ilə, o cümlədən
          şəxsi məlumatlarımın emal olunmasına razıyam
        </p>
      ),
    },
    products: {
      productAvailability: {
        time: ({ begin, end }) => `${begin} dan ${end} dək`,
        timeAndDay: ({ day, begin, end }) =>
          `${day || ''} ${begin}-dan ${end}-dək`,
      },
      productInfoBlock: {
        title: 'Məhsulun qida dəyəri',
        weight: 'Çəki',
        protein: 'Zülallar',
        fat: 'Yağlar',
        carbohydrate: 'Karbohidratlar',
        kilocalorie: 'Enerji dəyəri',
      },
      filter: {
        title: 'Filtr',
        caption: 'Çeşidləmə',
        sortDefault: 'Qarşıq',
        sortAsc: 'Əvvəlcə ucuz"',
        sortDesc: 'Əvvəlcə baha',
        cancel: 'Ləğv et',
        apply: 'Tətbiq et',
      },
      head: {
        title: ({ product, city }) =>
          `〚${product + '〛' ||
            'Yüklənir...'} ${city} şəhərinə Sushi Masterdən sifariş etmək`,
        description: ({ product, price, city, cityPrepositional }) =>
          `${product} ${price} ₼ qiymətinə Sushi Master-dən ${cityPrepositional} sifariş etmək. ${city} şəhəri üzrə sürətli çatdırılma. ✅  Yüksək keyfiyyətli, təzə məhsullar.`,
      },
    },
    profile: {
      addresses: {
        alert: {
          ERROR: {
            title: 'Çatdırılma ünvanı',
            text: 'Sorğu zamanı xəta baş vermişdir',
            confirmButtonText: 'ОК',
          },
          REMOVE: {
            title: 'Çatdırılma ünvanı',
            text: 'Bu ünvanı silmək istədiyinizə əminsiniz?',
            cancelButtonText: 'Ləğv et',
            confirmButtonText: 'Təstiq etmək',
          },
          CURRENT_ADDRESS_ERROR: {
            title: 'Çatdırılma ünvanı',
            text: 'Təəssüf ki, bu ünvanı silə bilməzsiniz.',
            confirmButtonText: 'ОК',
          },
        },
      },
      bonuses: {
        caption: 'Bonuslar ilə əməliyyatların tarixçəsi',
        noOperations: 'Hələ ki, əməliyyat yoxdur',
        friendInviteText:
          'Dostunuzu dəvət edin və dostunuzun sizin kodla etdiyi ilk sifarişinə görə 15% endirim qazanın',
      },
      info: {
        birthday:
          'Xüsusi təkliflər və hədiyyələr qazanmaq üçün ad gününüzü daxil edin.',
        birthdayLabel: 'Mənim Ad günüm',
        changePhoto: 'Şəkli dəyişmək',
        email: `e-mail unvanını əlavə edin. Yeniliklərdən və aksiyalarımızdan xəbərdar olun. Fərdi promo kod, endirim və hədiyyələr qazanın`,
      },
      orderDetails: {
        title: ({ orderNum, date }) =>
          `${date} tarixdə olan ${orderNum} nömrəli sifariş`,
      },
    },
    about: {
      head: {
        title: ({ city }) =>
          `Fast casual və take away formatında olan Yapon və Pan-Asiya mətbəxlərinin beynəlxalq şəbəkəsidir | Sushi Master, ${city}`,
        description: ({ city }) =>
          `Sushi Master - ${city}: yapon mətbəxi təqdim edən restoranlar şəbəkəsidir : Sushi Master Yapon qida çatdırılması restoranlar şəbəkəsində ləzzətli və təzə suşi, rulon, isti wok qutuları.`,
      },
      firstContainer: [
        'Beynəlxalq Yapon və Pan-Asiya restoran şəbəkəsi olan Sushi Master-ə xoş gəldiniz.',
        'Evinizə çatdırılma sifariş etmək və ya sifarişi özünüzlə götürmək istəyirsinizsə, doğru yerdəsiniz.',
      ],
      secondContainer: {
        aboutOfCompanyCards: [
          {
            text: 'restoran',
            value: '360',
          },
          {
            text: 'şəhər',
            value: '165',
          },
          {
            text: 'ölkə',
            value: '14',
          },
          {
            text: '2020 -ci ildə satış',
            value: '$75 milyon',
          },
          {
            text: 'xoşbəxt qonaq',
            value: '4 milyon',
          },
          {
            text: 'hazırlanmış rollar ',
            value: '22 milyon',
          },
        ],
        texts: [
          '- NİYƏ DİQQƏTİMİ ÇƏKDİNİZ?',
          '- Çox sadədir - fərqli şəhərlərdə və ölkələrdə çoxlu restoranlarımız var.',
          '- LAP ÇOX - NƏ QƏDƏRDİR?',
        ],
      },
      thirdContainer: {
        title: 'Restoran açılış dinamikası',
        description:
          'Sushi Master 2013 -cü ildə 1 restorandan 8 il ərzində beynəlxalq bir şəbəkəyə çevrildi. Hər həftə bir neçə yeni restoran açılır. İldən ilə, planetin ən sevimli suşi restoranı olmaq üçün keyfiyyəti qoruyaraq böyüyürük.',
      },
      fourthContainer: {
        texts: [
          '- Əla. Niyə Sushi Master-də sifariş verinmək lazımdır?',
          '- Çünki dadlı, sərfəli və sürətlidir.',
        ],
        aboutOfFood: [
          {
            text:
              'Sushi Master ayda bir neçə dəfə çeşidi yeniləyir və onu müəllif yenilikləri ilə zəngin edir, lakin ənənəvi reseptə və hazırlanma texnologiyasına sadiq qalır. Suşi düyüsündən orijinal rulon dəstlərinə qədər, salatlar, şirniyyatlar və içkilər - hər biri kamandamızın bacarıq və həvəsisini təcəssüm etdirir',
            title: 'Dadlıdır',
          },
          {
            text:
              'Qiymət və keyfiyyət balansına əhəmiyyət veririk. Buna görə də müştərilərə daim hədiyyələr, aylıq və həftəlik aksiyalar təqdim edirik.',
            title: 'Sərfəlidir',
          },
          {
            text:
              'Sushi Master komandasının hər bir əməkdaşı sifarişi nə qədər tez çatdırılmasını vacib olduğunu bilir. Qeydiyyatdan başlayaraq bütün mərhələlərdə vaxtınızı qənaət edirik. Və eyni zamanda sevdiyiniz suşiləri daha da yaxınlaşdırmaq üçün hər həftə yeni restoran açırıq.',
            title: 'Sürət',
          },
        ],
      },
      fifthContainer: {
        title: 'Bəs sonra?',
        whatIsNext: [
          {
            text:
              'İstənilən şəkildə sifariş verə bilərsiniz: mobil tətbiq vasitəsilə, vebsaytında, telefonla və ya restoranda.',
            title: 'Rahat sifariş',
          },
          {
            text: 'Yalnzı təzə ingridientlərdən istifadə edirik.',
            title: 'Təzə məhsullar',
          },
          {
            text:
              'Bütün əməkdaşlarımız sanitariya və gigiyena qaydalarına əməl edir.',
            title: 'Təmizlik və keyfiyyət',
          },
          {
            text:
              'Yeməklər sizin üçün öz işini sevən peşəkar mütəxəsislər tərəfindən hazırlanır.',
            title: 'Professional komanda',
          },
        ],
      },
      sixthContainer: {
        first: 'Nəhayyət! Sifarişim məndədir!',
        second:
          'SUSHI MASTER SİZİ YENİDƏN QONAQ gözləyir. Çünki işimizi və hər qonağımızı çox sevirik. Dünyanın hər yerində Sushi Master ailəsinin hər gün xoşbəxt olmasını istəyirik və siz, ailənin bir hissəsi olmasını istəyirik.',
        third: 'SADƏCƏ SİFARİŞ DEYİL, HƏR QUTUDA XOŞBƏXTLİKDİR!',
      },
    },
    bonus: {
      head: {
        title: 'Loyallıq proqramı | Sushi Master',
        description: ({ city }) =>
          `Sushi Master - ${city} Yapon mətbəxinin restoranlar şəbəkəsidir. Hər yeni müştərinin ilk sifarişinə 50% endirim HƏDİYYƏ!`,
      },
      banner: [
        `Hər sifarişdən CASHBACK qazanın!`,
        'Bizim bonus proqramımıza qoşulun və qənaət edin.',
        `Sifariş etdiyiniz zaman bizi sevindirirsiniz. Hər sifarişinizə görə CASHBACK qazanacaqsınız.`,
      ],
      card: [
        'Möhtəşəmdir? Bəli, Möhtəşəmdir!',
        'Bu necə işləyir?',
        `Sifariş zamanı qonaqlar ödədiyi hər 10 manata üçün 1 AZN cashback qazanır.`,
      ],
      order: [
        'Növbəti sifariş',
        `Cari ayda təkrar roll istəsəniz, sifariş dəyərinin 15% -i geri qaytarılacaq.`,
      ],
      'order-stop': [
        'Bəs sifarişlərimi dayandırsam?',
        `1 ay ərzində sifariş etməsəniz 5 % - dan başlamalı olacaqsınız`,
      ],
      procent: [
        'Çox sadədir!',
        'ayda bir dəfədən az olduqda',
        'ayda bir və daha çox olduqda isə',
      ],
      alert: [
        `Əsas odur ki, 3 ay ərzində bizi unutmayasınız! 90 gündən sonra bonuslar sıfırlanacaq.`,
      ],
      warning: [
        'Qonaq sifarişin maksimum 50% -ni bütün kateqoriyalar üzrə hesablanmış bonuslarla ödəyə bilər:',
        `- rollar, suşi, setlər, isti yeməklər, VOK, salatlar, setlər, bizness lunch, içkilər, desertlər.`,
      ],
      faq: [
        'Faq',
        'Bonus sistemi nə zaman keçərli deyil?',
        'Aksiyalar, xüsusi təkliflər, birdəfəlik endirimlər, endirimli kombolar.',
        'Bonus balları nə zaman toplanılmır?',
        'Hədiyyələr, prizlər, sertifikatlar, endirimlər və promokodlar verilən zaman.',
        'Bonuslarla ödədiyiniz sifarişə bonus balları qazanılırmı?',
        'Bəli! Sifarişin 50% -i bonus balları ilə alındıqda, qalan məbləğdən ballar balansa köçürülür.',
      ],
      menu: [
        'Bonus sistemini daha sərfəli və sadə etmək üçün mümkün qədər asanlaşdırmağa çalışdıq. Ümid edirik, bəyəndiniz!',
        'Menyu gedin',
      ],
    },
    actions: {
      head: {
        title: ({ city }) =>
          `${city} suşi və rulonlarda promosyonlar və endirimlər | Suşi ustası`,
        description: ({ city, phone }) =>
          `${city}Sushi Master Yapon restoranlar şəbəkəsində suşi və rulonlarda endirimlər və endirimlər. Ev və ofis çatdırılması, münasib qiymətlər. ${phone} zəng edin`,
      },
      headDetail: {
        title: ({ title }) =>
          `${title} || Sushi Master Yapon restoran şəbəkəsində aksiya və endirimlər`,
        description: ({ title }) =>
          `Sushi Master-dən"${title}" aksiyası. ❤️ Sizlər üçün ancaq ən yaxşısını hazırlayırıq.`,
      },
      titleDetail: 'Aksiyada iştirak edən yeməklər:',
      share: 'Dostun ilə paylaş:',
      toActions: 'Aksiyaların siyahısına qayıd',
    },
    cart: {
      head: {
        title:
          'Sushi Master - Bakıda yapon mətbəxi təqdim edən restoranlar şəbəkəsidir',
        description: ({ phone }) =>
          `Sushi Master Yapon qida çatdırılması restoranlar şəbəkəsində ləzzətli və təzə suşi, rulon, isti wok qutuları. Özünüzlə götürün və ya çatdırılma sifariş edin! ${phone}`,
      },
      indicateNumber: 'Zəhmət olmasa personların sayını qeyd edin',
      recommended: 'Tövsiyə edirik',
      checkout: 'Sifarişi göndər',
      checkoutFixedButton: ({ price, symbol }) =>
        `Sifarişi göndər üçün ${price} ${symbol}`,
      addSomething: 'Səbətə istədiyiniz məhsulları əlavə edin',
      toCatalog: 'Kataloqa keçin',
      addToOrder: 'Sifarişə əlavə eləmək istəyirsiz?',
    },
    catalog: {
      head: {
        title: [
          ({ city, cityPrepositional }) =>
            `${city} suşi çatdırılması || ${cityPrepositional} Sushi Master - Dadlı roll və suşiləri evə və ya ofisə sifariş etmək`,
          ({ city, cityPrepositional, category }) =>
            `${category} ${city} şəhəri üzrə çatdırılma || ${cityPrepositional} Sushi Master - dadlı ${category} evə və ya ofisə sifariş etmək`,
        ],
        description: [
          ({ cityNamePrepositional, cityName }) =>
            `${cityNamePrepositional} dadlı roll və suşilər ! 🍣 ${cityName} ❤ "Sushi Master"-dən suşi çatdırılması .⌚ Sənin şəhərində suşilərin sürətli çatdırılması. 🤩 Roll və suşilərə daimi aksiyalar. ✅  Biz yalnız yüksək keyfiyyətli, təzə məhsullardan istifadı edirik.`,
          ({ cityNamePrepositional, cityName, category }) =>
            `${cityNamePrepositional} ${category} sifariş etmək  ! 🤩 ${category} ${cityName} ❤️ "Sushi Master"-dən çatdırılma. ⌚ Sənin şəhərində suşilərin sürətli çatdırılması.🤩 Daimi aksiyalar. ✅  Biz yalnız yüksək keyfiyyətli, təzə məhsullardan istifadı edirik.`,
        ],
      },
    },
    delivery: {
      head: {
        title: ({ city }) =>
          `${city} Çatdırılma qiyməti suşi və rollar | Sushi Master`,
        description: ({ city }) =>
          `${city} Sushi Master yapon mətbəxi restoranlar şəbəkəsinin fəaliyyət şərtləri: çatdırılma ərazisi və qiymətləri, al-apar ünvanları, sifarişin qəbul saatları, ödəmə üsulları`,
      },
      title: ({ city }) => `Əhatə dairəsi və catdırılma qiyməti ${city}`,
      deliveryInfo: {
        title: 'Bəs çatdırılma şərtləri?',
        description:
          'Bölgəni təyin etmək üçün çatdırılma ünvanını göstərin və ya xəritədə seçin.',
        placeholderInput: 'Çatdırılma ünvanını daxil edin',
        from: 'dan',
        to: 'qədər',
        deliveryTime: 'Çatdırılma vaxtı',
        minutes: 'dəq.',
        free: 'Pulsuz',
        workInterval: ({ from, to }) => (
          <>
            <span>İşləyirik ilə</span>
            <span>
              {from} qədər {to}
            </span>
          </>
        ),
        blocksTitle: 'Necə ödəmək və cazibədarlığınızı əldə etmək olar?',
        blocks: [
          {
            title: 'nağd ödəniş',
            text:
              'Sifariş alındıqdan sonra kuryerə və ya restoranda nağd ödəniş.',
          },
          {
            title: 'Bank kartla online',
            text:
              'Veb saytında sifariş verərkən (xidmət bu kartlar üçün mövcuddur: Visa, MasterCard)',
          },
          {
            title: 'Alındıqdan sonra bank kartı ilə',
            text:
              'Kuryer və restoran kassalarında MasterCard, Visa edən terminallar var.',
          },
          {
            title: 'Çatdırılma',
            text:
              'İstənilən rahat şəkildə sifariş verin, sifarişi verdiyiniz ünvandan alın',
          },
          {
            title: 'Restorandan götür',
            text:
              'İstıdiyiniz restoranda sizə uyğun vaxtda sifarişinizi əldə edin',
          },
          {
            title: 'Öncədən sifariş',
            text:
              '"Müəyyən bir vaxt" seçin, dəqiqə bə dəqiqə sifarişiniz çatdırılsın. Sifariş ən az 60 dəqiqə çatdırılma vaxtından əvvəl verilə bilər',
          },
        ],
      },
      payment: {
        title: 'Gəlirik!',
        text:
          'Ləzzətli yeməklərinizin vaxtında çatması üçün əlimizdən gələni edəcəyik. Ancaq birdən bir tıxac, sunami, yadplanetlilərin hücumu kuryerlərimizin sizə vaxtında tələsməsini maneə törədirsə, operator gecikmə barədə sizə məlumat verəcək. Bizim mükəmməl rollarımızı yeməyiniz üçün bütün maneələri mütləq aşacağıq.',
        zone: '* İlk zonaya',
      },
      order: {
        title: 'Necə sifariş etmək olar',
        text: `Suşi və rolların rahat şəkildə çatdırılmasını sifariş edin: telefonla və ya veb sayt vasitəsilə. Sayt vasitəsilə sifariş vermək üçün bəyəndiyiniz məhsulu səbətə əlavə edin, sonra müvafiq bölməyə keçin və "Ödəniş et" düyməsini basın.Görünən pəncərədə məlumatlarınızı daxil edin və bir ödəniş üsulunu (bank kartı / nağd) və sifarişin alınma üsulunu seçin.
Sifarişi özünüz ala bilərsiniz və ya müəyyən bir vaxta qədər kuryerlə çatdırılmasını seçə bilərsiniz. "Ən qısa müddətdə" yanındakı qutuyu yoxlayaraq sifarişinizi ən qısa zamanda alacaqsınız.
Sifarişinizi verdikdən sonra bir təsdiq zəngi alacaqsınız. İnternet vasitəsilə sifariş vermək imkanınız yoxdursa, qaynar xəttimizə zəng edin və ya "Geri çağır" funksiyasından istifadə edin - və operatorumuz sizinlə əlaqə saxlayacaq
`,
      },
    },
    onlinePayment: {
      head: {
        title: `Sushi Master - Bakıda yapon mətbəxi təqdim edən restoranlar şəbəkəsidir`,
        description: ({ phone }) =>
          `Sushi Master Yapon qida çatdırılması restoranlar şəbəkəsində ləzzətli və təzə suşi, rulon, isti wok qutuları. Özünüzlə götürün və ya çatdırılma sifariş edin! ${phone}`,
      },
      waitText: 'Ödənişin statusu haqqında məlumat gözlənilir',
      errorText: `Ödəniş prosesi zamanı səhv baş verdi. Xahiş edirəm məlumatları yoxlayın və yenidən cəhd edin.`,
    },
    order: {
      head: {
        title: `Sushi Master - Bakıda yapon mətbəxi təqdim edən restoranlar şəbəkəsidir`,
        description: ({ phone }) =>
          `Sushi Master Yapon qida çatdırılması restoranlar şəbəkəsində ləzzətli və təzə suşi, rulon, isti wok qutuları. Özünüzlə götürün və ya çatdırılma sifariş edin! ${phone}`,
      },
      alertState: {
        SAVE_ADDRESS_ERROR: {
          title: 'Çatdırılma ünvanı',
          text: 'Sorğu zamanı xəta baş vermişdir',
        },
        NOT_SELECTED_ADDRESS: {
          title: 'Xəta',
          text: `Çatdırılma ünvanı seçilməyib və ya səhv nömrə daxil edilib. Zəhmət olmasa bir daha cəhd edin.`,
        },
        PAYMENT_ERROR: {
          title: 'Sifarişin ödənilməsi',
          text: `Ödənişin həyata keçirilməsi zamanı xəta baş vermişdir. Zəhmət olmasa bir az sonra bir daha cəhd edin.`,
        },
        ERROR: {
          title: 'Sifarişin yaradılması',
          text: `Üzr istəyirik, sifarişin yaradılması zamanı xəta baş vermişdir. Zəhmət olmasa bir az sonra yenidən cəhd edin`,
        },
        EMPTY_FORM: {
          title: 'Sifarişin yaradılması',
          text: `Ödənişin həyata keçirilməsi zamanı xəta baş vermişdir. Zəhmət olmasa bir az sonra bir daha cəhd edin. Boş forma`,
        },
        WRONG_ADDRESS: {
          title: 'Sifarişin yaradılması',
          text: 'Zəhmət olmasa başqa ünvan seçin',
        },
        MIN_PRICE_ERROR: {
          title: 'Çatdırılma ünvanları',
          text: ({ minPriceForDelivery }) =>
            `Çatdırılma sifarişi üçün minimal məbləğ ${minPriceForDelivery} AZN təşkil edir`,
        },
        PHONE_NUMBER: {
          title: 'Sifarişin yaradılması',
          text: 'Nömrənin formatı səhvdir',
        },
      },
      validation: {
        requiredField: 'Mütləq doldurulmalı xana',
        invalidPhone: ({ length }) =>
          `Telefon nömrəsi ${length} rəqəmdən ibarət olmalıdı`,
        selectedPaymentType: 'Ödəniş üsulunu seçin',
        name: 'Adınızı daxil edin',
        enterFriendName: 'Alıcının adını daxil edin',
        enterPhone: 'Telefon nömrənizi daxil edin',
        enterFriendPhone: 'Alıcının telefon nömrəsini daxil edin',
        enterCorrectPhone: 'Mobil nömrəni düzgün qeyd edin',
        enterDeliveryAddress: 'Çatdırılma ünvanını daxil edin',
        enterRestaurant: 'Restoranı seçin',
        enterDate: 'Tarixi daxil edin',
        enterTime: 'Vaxtı daxil edin',
        enterCorrectSurrender: 'Məlumatı düzgün daxil edin',
        toastSurrender: `Sifarişin qiyməti qalıq pulu almaq üçün qeyd olunan məbləğdən böyükdür`,
      },
      addressAddedSuccess: 'Ünvan uğurla əlavə edildi',
      noTimeAvailable: 'Sifariş üçün uyğun vaxt yoxdu',
      selectAddress: 'Zəhmət olmasa ünvan seçin',
      withoutSurrender: 'Qalıqsız',
      addComment: 'Şərh əlavə etmək',
      addNewAddress: 'Yeni ünvan əlavə etmək',
      amountToSpend: 'Xərcləmək istədiyiniz məbləği göstərin:',
      onMap: 'Xəritədə',
      list: 'Siyahı',
      addressesOfRestaurants: 'Restoran ünvanları',
      amountOfPersons: 'Şəxslərin sayı',
      emailOptional: 'Email',
      searchByAddress: 'ünvana görə axtarmaq',
      quantityPerson: 'Şəxslərin sayı',
      personCountText: 'Şəxslərin sayı 1-dən az olmayan və 50-dən çox olmayan',
    },
    orderSuccessScene: {
      thanksForOrder: 'Sifariş üçün təşəkkür edirik! ♥️',
      orderInProcess: ({ orderNum }) => `№${orderNum}-li sifariş hazırlanır`,
      supportText: 'Sualınız varsa zəng edin:',
      predictions: [
        'Yeni bilik sizə uğur gətirəcək.',
        'Gözlənilməyəz təklifi nəzərdən keçirməlisiniz.',
        'Ruhunuz və vücudunuz nə tələb edirsə onu da edin.',
        'Məqsədinizə nail omaq üçün əlinizdən gələni edin.',
        'İnkişafınıza nə mane olduğunu anlamaq üçün özünüzə baxın.',
        'Keçmişi geridə qoyub yeni bir səhifə açmağın zamanı gəldi.',
        'Nəyi özünüzə uyğun hesab edirsinizsə onu da edin.',
        'Kainatın sizə göndərdiyi işarələrə qarşı diqqətli olun.',
        'Sizin hissləriniz və emossiyalarınız kimlərisə narahat edəcək.',
        'Kainat səni eşidir və anlayır. Səbirli ol.',
        'Öz yolunu tapmaq istəyirsənsə, elə indi yolunu dəyiş.',
        'Vacib bir şeyi indi edin.',
        'Bunun sənin olduğunu hiss edirsənsə - heç kimə qulaq asma, risk elə!',
        'Oturub dincəlməyin vaxtı gəldi.',
        'Tortlarınız, şirniyyatlarınız və digər kiçik sevincləriniz olacaq.',
        'Ümidləriniz və planlarınız bütün gözləntiləri aşacaqdır.',
        'Dəyişdirə bilmədiklərinizi qəbul edin və özünüzü daha yaxşı hiss edəcəksiniz.',
        'Uğurlar çətin anları keçməyə kömək edəcəkdir.',
        'Şad xəbərlər poçtnan sizə gələcək.',
        'Təyyarə bileti və səyahət sizin yolunuzu gözləyir.',
        'Sevgi günlərinizi işıqlandıracaq və parlaq eliyəcək.',
        'Gözləntilərinizin nəticəsi sizi yanıltmayacaq.',
        'İstəklərinizi həyata keçirmək üçün özünüzə imkan yaradın.',
        'İstəklərinizi həyata keçirmək üçün özünüzə imkan yaradın.',
      ],
      yourPrediction: 'bu gün üçün proqnozunuz',
      joinToSocial:
        'Ən son aksiyalardan xəbərdar olmaq üçün sosial şəbəkələrdə bizə qoşulun',
    },
    dateInputBirthday: {
      modalTitle: 'Daha sora doğum tarixinizi dəyişə bilməyəcəksiniz',
      toastDisabledInput: 'Təssüf ki, doğum tarixinizi dəyişmək mümkün deyil',
    },
  },
  saga: {
    cartInfo: {
      limit: `Sizin sifarişiniz üçün maksimal sayda pulsuz çubuqlar seçilib`,
    },
    orderSaga: {
      addressNotFound: `Ünvan tapılmadı`,
      enterStreetFirst: `İlk öncə küçəni seçin`,
      UNREACHABLE_ADDRESS: `Ünvan çatdırılma zonasından kənarda yerləşir`,
    },
  },
}
