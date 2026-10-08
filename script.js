// ==========================================================================
// CineMatch — Платформа персонального подбора фильмов с обложками
// Автор проекта: Курицын Антон, группа 31-ОИБ
// ==========================================================================

const MOVIES_DATABASE = [
    // --- ХОРРОРЫ И УЖАСЫ (НОВАЯ КАТЕГОРИЯ) ---
    {
        id: 101,
        title: "Сияние",
        originalTitle: "The Shining (1980)",
        year: 1980,
        rating: 8.4,
        runtime: "144 мин",
        genres: ["horror", "mystery", "thriller"],
        mood: "horror",
        era: "retro",
        director: "Стэнли Кубрик",
        cast: "Джек Николсон, Шелли Дювалл, Дэнни Ллойд",
        quote: "«А вот и Джонни!»",
        description: "Писатель Джек Торренс соглашается провести зиму в роли смотрителя роскошного, но отрезанного снегами от мира отеля «Оверлук». Древнее зло отеля постепенно сводит его с ума.",
        posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #370617, #03071e)"
    },
    {
        id: 102,
        title: "Заклятие",
        originalTitle: "The Conjuring (2013)",
        year: 2013,
        rating: 7.5,
        runtime: "112 мин",
        genres: ["horror", "mystery"],
        mood: "horror",
        era: "golden",
        director: "Джеймс Ван",
        cast: "Вера Фармига, Патрик Уилсон, Лили Тейлор",
        quote: "«Основано на реальных материалах исследователей паранормального»",
        description: "Эд и Лоррейн Уоррен — всемирно известные детективы паранормальных явлений. К ним обращается семья с пятью дочерьми, чей новый уединенный дом терроризирует злобный демон.",
        posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1b1b2f, #162447)"
    },
    {
        id: 103,
        title: "Чужой",
        originalTitle: "Alien (1979)",
        year: 1979,
        rating: 8.5,
        runtime: "117 мин",
        genres: ["horror", "sci-fi"],
        mood: "horror",
        era: "retro",
        director: "Ридли Скотт",
        cast: "Сигурни Уивер, Том Скеррит, Джон Хёрт",
        quote: "«В космосе никто не услышит твой крик»",
        description: "Грузовой космический корабль «Ностромо» перехватывает сигнал с неизвестной планеты. Высадившись на поверхность, экипаж сталкивается с идеальной и безжалостной формой жизни.",
        posterUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #0a0908, #22333b)"
    },
    {
        id: 104,
        title: "Оно",
        originalTitle: "It (2017)",
        year: 2017,
        rating: 7.3,
        runtime: "135 мин",
        genres: ["horror", "mystery", "adventure"],
        mood: "horror",
        era: "golden",
        director: "Андрес Мускетти",
        cast: "Билл Скарсгард, Джейден Мартелл, Финн Вулфхард",
        quote: "«Ты тоже будешь летать»",
        description: "В городке Дерри штата Мэн начинают бесследно пропадать дети. Группа школьников-изгоев объединяется, чтобы дать бой древнему чудовищу, принимающему образ клоуна Пеннивайза.",
        posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #6a040f, #03071e)"
    },
    {
        id: 105,
        title: "Солнцестояние",
        originalTitle: "Midsommar (2019)",
        year: 2019,
        rating: 7.1,
        runtime: "147 мин",
        genres: ["horror", "drama", "mystery"],
        mood: "mind-blown",
        era: "golden",
        director: "Ари Астер",
        cast: "Флоренс Пью, Джек Рейнор, Уильям Джексон Харпер",
        quote: "«Праздник, который начинается раз в 90 лет»",
        description: "Группа американских студентов приезжает в отрезанную от цивилизации шведскую деревню на праздник летнего солнцестояния. Однако идиллические обряды скрывают зловещие языческие культы.",
        posterUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #d4a373, #faedcd)"
    },

    // --- ФЭНТЕЗИ И ПРИКЛЮЧЕНИЯ ---
    {
        id: 106,
        title: "Властелин колец: Братство Кольца",
        originalTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
        year: 2001,
        rating: 8.8,
        runtime: "178 мин",
        genres: ["fantasy", "adventure", "action"],
        mood: "adrenaline",
        era: "golden",
        director: "Питер Джексон",
        cast: "Элайджа Вуд, Иэн Маккеллен, Вигго Мортенсен, Шон Астин",
        quote: "«Одно Кольцо, чтоб править всеми...»",
        description: "Скромный хоббит Фродо Бэггинс получает в наследство Кольцо Всевластья Темного Властелина Саурона. Чтобы спасти Средиземье, он должен уничтожить его в жерле Роковой Горы.",
        posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #132a13, #31572c)"
    },
    {
        id: 107,
        title: "Гарри Поттер и узник Азкабана",
        originalTitle: "Harry Potter and the Prisoner of Azkaban (2004)",
        year: 2004,
        rating: 8.2,
        runtime: "142 мин",
        genres: ["fantasy", "adventure", "mystery"],
        mood: "cozy",
        era: "golden",
        director: "Альфонсо Куарон",
        cast: "Дэниэл Рэдклифф, Руперт Гринт, Эмма Уотсон, Гэри Олдман",
        quote: "«Торжественно клянусь, что замышляю шалость, и только шалость»",
        description: "На третьем курсе Хогвартса Гарри и его друзья узнают о побеге опасного мага Сириуса Блэка, который, как считают все, охотится за Гарри. Замок берут под охрану жуткие дементоры.",
        posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #2b2d42, #4a4e69)"
    },

    // --- БИОГРАФИЯ И ИСТОРИЧЕСКАЯ ДРАМА ---
    {
        id: 108,
        title: "Оппенгеймер",
        originalTitle: "Oppenheimer (2023)",
        year: 2023,
        rating: 8.2,
        runtime: "180 мин",
        genres: ["biography", "drama"],
        mood: "thoughtful",
        era: "new",
        director: "Кристофер Нолан",
        cast: "Киллиан Мёрфи, Эмили Блант, Мэтт Дэймон, Роберт Дауни мл.",
        quote: "«Теперь я стал Смертью, разрушителем миров»",
        description: "Грандиозная история физика-теоретика Роберта Оппенгеймера, возглавившего Манхэттенский проект и создавшего первое в истории человечества ядерное оружие.",
        posterUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #401f00, #7a3e00)"
    },

    // --- ФАНТАСТИКА, ТРИЛЛЕРЫ И ДЕТЕКТИВЫ ---
    {
        id: 1,
        title: "Интерстеллар",
        originalTitle: "Interstellar (2014)",
        year: 2014,
        rating: 8.6,
        runtime: "169 мин",
        genres: ["sci-fi", "drama", "adventure"],
        mood: "thoughtful",
        era: "golden",
        director: "Кристофер Нолан",
        cast: "Мэттью Макконахи, Энн Хэтэуэй, Джессика Честейн",
        quote: "«Следующий шаг человечества станет величайшим»",
        description: "Когда засуха и пыльные бури ставят человечество на грань вымирания, группа исследователей отправляется сквозь червоточину в поисках нового дома среди звёзд.",
        posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #0d1b2a, #1b263b)"
    },
    {
        id: 2,
        title: "Остров проклятых",
        originalTitle: "Shutter Island (2010)",
        year: 2010,
        rating: 8.5,
        runtime: "138 мин",
        genres: ["thriller", "detective", "mystery"],
        mood: "mind-blown",
        era: "golden",
        director: "Мартин Скорсезе",
        cast: "Леонардо ДиКаприо, Марк Руффало, Бен Кингсли",
        quote: "«Что лучше: жить монстром или умереть человеком?»",
        description: "Два судебных пристава расследуют загадочное исчезновение пациентки из неприступной психиатрической лечебницы для особо опасных преступников на отдаленном острове.",
        posterUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1b1b2f, #162447)"
    },
    {
        id: 3,
        title: "Начало",
        originalTitle: "Inception (2010)",
        year: 2010,
        rating: 8.7,
        runtime: "148 мин",
        genres: ["sci-fi", "thriller", "action"],
        mood: "mind-blown",
        era: "golden",
        director: "Кристофер Нолан",
        cast: "Леонардо ДиКаприо, Джозеф Гордон-Левитт, Эллиот Пейдж",
        quote: "«Твой разум — место преступления»",
        description: "Кобб — искусный вор секретов из глубин подсознания во время сна. Ему дают невозможную задачу: внедрить чужую идею в разум наследника бизнес-империи.",
        posterUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #222831, #393e46)"
    },
    {
        id: 4,
        title: "Джентльмены",
        originalTitle: "The Gentlemen (2020)",
        year: 2020,
        rating: 8.5,
        runtime: "113 мин",
        genres: ["crime", "comedy", "action"],
        mood: "laugh",
        era: "new",
        director: "Гай Ричи",
        cast: "Мэттью Макконахи, Чарли Ханнэм, Хью Грант, Колин Фаррелл",
        quote: "«В джунглях есть только одно правило: когда лев голоден — он ест»",
        description: "Американский экспат построил в Лондоне тайную империю и решает продать ее миллиардерам. Однако схема мгновенно привлекает шантажистов, бандитов и аристократов.",
        posterUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #2b2d42, #8d99ae)"
    },
    {
        id: 5,
        title: "1+1 (Неприкасаемые)",
        originalTitle: "Intouchables (2011)",
        year: 2011,
        rating: 8.8,
        runtime: "112 мин",
        genres: ["comedy", "drama"],
        mood: "cozy",
        era: "golden",
        director: "Оливье Накаш, Эрик Толедано",
        cast: "Франсуа Клюзе, Омар Си",
        quote: "«Иногда вам нужно погрузиться в чужой мир, чтобы открыть свой»",
        description: "Богатый аристократ Филипп, прикованный к инвалидному креслу, нанимает сиделкой парня с улицы Дрисса, только что вышедшего из тюрьмы. Рождается невероятная дружба.",
        posterUrl: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #264653, #2a9d8f)"
    },
    {
        id: 6,
        title: "Бегущий по лезвию 2049",
        originalTitle: "Blade Runner 2049 (2017)",
        year: 2017,
        rating: 8.0,
        runtime: "164 мин",
        genres: ["sci-fi", "thriller", "drama"],
        mood: "thoughtful",
        era: "golden",
        director: "Дени Вильнёв",
        cast: "Райан Гослинг, Харрисон Форд, Ана де Армас",
        quote: "«Все лучшие воспоминания — ненастоящие»",
        description: "Офицер полиции Кей — репликант нового поколения. Случайно он раскрывает секрет, способный перевернуть устройство всего мира и существование человечества.",
        posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #03071e, #370617)"
    },
    {
        id: 7,
        title: "Достать ножи",
        originalTitle: "Knives Out (2019)",
        year: 2019,
        rating: 8.1,
        runtime: "130 мин",
        genres: ["detective", "comedy", "crime"],
        mood: "laugh",
        era: "golden",
        director: "Райан Джонсон",
        cast: "Дэниэл Крэйг, Ана де Армас, Крис Эванс, Джейми Ли Кёртис",
        quote: "«У каждого в этой семье есть скелет в шкафу... и мотив»",
        description: "После празднования 85-летия богатого автора детективных романов находят мертвым. Частный детектив Бенуа Блан принимается за расследование, где каждый — подозреваемый.",
        posterUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #3d314a, #684756)"
    },
    {
        id: 8,
        title: "Унесённые призраками",
        originalTitle: "Spirited Away (2001)",
        year: 2001,
        rating: 8.5,
        runtime: "125 мин",
        genres: ["anime", "adventure", "fantasy"],
        mood: "cozy",
        era: "golden",
        director: "Хаяо Миядзаки",
        cast: "Руми Хираги, Мию Ирино, Мари Нацуки",
        quote: "«Никогда не забывай, кто ты на самом деле»",
        description: "Маленькая Тихиро попадает вместе с родителями в таинственный заброшенный город. Оказавшись в царстве духов и колдуньи Юбабы, девочка спасает семью.",
        posterUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1d3557, #457b9d)"
    },
    {
        id: 9,
        title: "Паразиты",
        originalTitle: "Gisaengchung (2019)",
        year: 2019,
        rating: 8.6,
        runtime: "131 мин",
        genres: ["thriller", "drama", "comedy"],
        mood: "mind-blown",
        era: "golden",
        director: "Пон Джун-хо",
        cast: "Сон Кан-хо, Ли Сон-гюн, Чо Ё-джон",
        quote: "«Знаешь, какой план никогда не проваливается? Тот, которого нет»",
        description: "Семья бедняков Ким хитростью устраивается на работу в роскошный дом семейства Пак, выдавая себя за репетиторов, шофера и экономку.",
        posterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #14213d, #000000)"
    },
    {
        id: 10,
        title: "Дюна: Часть вторая",
        originalTitle: "Dune: Part Two (2024)",
        year: 2024,
        rating: 8.5,
        runtime: "166 мин",
        genres: ["sci-fi", "adventure", "action"],
        mood: "adrenaline",
        era: "new",
        director: "Дени Вильнёв",
        cast: "Тимоти Шаламе, Зендея, Ребекка Фергюсон, Остин Батлер",
        quote: "«Да пребудет с тобой сила пустыни»",
        description: "Пол Атрейдес объединяется с фременами на песчаной планете Арракис, готовясь отомстить заговорщикам, уничтожившим его дом.",
        posterUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #48321d, #724e2c)"
    },
    {
        id: 11,
        title: "Бойцовский клуб",
        originalTitle: "Fight Club (1999)",
        year: 1999,
        rating: 8.7,
        runtime: "139 мин",
        genres: ["thriller", "drama"],
        mood: "mind-blown",
        era: "retro",
        director: "Дэвид Финчер",
        cast: "Эдвард Нортон, Брэд Питт, Хелена Бонем Картер",
        quote: "«Первое правило бойцовского клуба: никому не рассказывать о клубе»",
        description: "Офисный клерк знакомится с харизматичным Тайлером Дёрденом. Их общение рождает подпольный клуб, который меняет основы общества.",
        posterUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #2b2b2b, #444444)"
    },
    {
        id: 12,
        title: "Побег из Шоушенка",
        originalTitle: "The Shawshank Redemption (1994)",
        year: 1994,
        rating: 9.1,
        runtime: "142 мин",
        genres: ["drama", "crime"],
        mood: "thoughtful",
        era: "retro",
        director: "Фрэнк Дарабонт",
        cast: "Тим Роббинс, Морган Фриман, Боб Гантон",
        quote: "«Страх делает тебя пленником. Надежда дает свободу»",
        description: "Энди Дюфрейн несправедливо осужден на два пожизненных срока в суровой тюрьме Шоушенк. Ни время, ни стены не смогли сломить его дух.",
        posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1f2421, #323031)"
    },
    {
        id: 13,
        title: "Темный рыцарь",
        originalTitle: "The Dark Knight (2008)",
        year: 2008,
        rating: 8.5,
        runtime: "152 мин",
        genres: ["action", "crime", "thriller"],
        mood: "adrenaline",
        era: "golden",
        director: "Кристофер Нолан",
        cast: "Кристиан Бэйл, Хит Леджер, Аарон Экхарт",
        quote: "«Зачем быть таким серьезным?»",
        description: "Бэтмен ведет войну с преступностью в Готэме, но в городе объявляется Джокер, погружающий мегаполис в анархию и хаос.",
        posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #111d4a, #0b132b)"
    },
    {
        id: 14,
        title: "Ла-Ла Ленд",
        originalTitle: "La La Land (2016)",
        year: 2016,
        rating: 8.0,
        runtime: "128 мин",
        genres: ["romance", "drama", "comedy"],
        mood: "cozy",
        era: "golden",
        director: "Дэмьен Шазелл",
        cast: "Райан Гослинг, Эмма Стоун, Джон Ледженд",
        quote: "«Для мечтателей, пусть они и кажутся безрассудными»",
        description: "История любви начинающей актрисы Мии и фанатичного джазового пианиста Себастьяна на фоне неонового Лос-Анджелеса.",
        posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #592e83, #230c33)"
    },
    {
        id: 15,
        title: "Тайна Коко",
        originalTitle: "Coco (2017)",
        year: 2017,
        rating: 8.7,
        runtime: "105 мин",
        genres: ["anime", "adventure", "comedy", "fantasy"],
        mood: "cozy",
        era: "golden",
        director: "Ли Анкрич, Эдриан Молина",
        cast: "Энтони Гонсалес, Гаэль Гарсиа Берналь",
        quote: "«Помни меня, даже когда мы должны проститься»",
        description: "12-летний Мигель отправляется в захватывающий Страну Мертвых, чтобы разгадать тайну своих предков и исполнить мечту стать музыкантом.",
        posterUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #d00000, #ffba08)"
    },
    {
        id: 16,
        title: "Зеленая книга",
        originalTitle: "Green Book (2018)",
        year: 2018,
        rating: 8.4,
        runtime: "130 мин",
        genres: ["comedy", "drama", "biography"],
        mood: "cozy",
        era: "golden",
        director: "Питер Фаррелли",
        cast: "Вигго Мортенсен, Махершала Али, Линда Карделлини",
        quote: "«Мир полон одиноких людей, боящихся сделать первый шаг»",
        description: "Вышибала Тони Лип нанят водителем утонченного темнокожего пианиста Дона Ширли во время турне по консервативному югу США.",
        posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1e3d59, #17b978)"
    },
    {
        id: 17,
        title: "Леон",
        originalTitle: "Léon (1994)",
        year: 1994,
        rating: 8.7,
        runtime: "110 мин",
        genres: ["action", "crime", "drama"],
        mood: "intense",
        era: "retro",
        director: "Люк Бессон",
        cast: "Жан Рено, Натали Портман, Гари Олдман",
        quote: "«Жизнь всегда такое дерьмо или только в детстве? — Всегда»",
        description: "Профессиональный наёмный киллер Леон спасает и берет под опеку 12-летнюю сироту Матильду, чью семью убили коррумпированные копы.",
        posterUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #2b2d42, #181925)"
    },
    {
        id: 18,
        title: "Престиж",
        originalTitle: "The Prestige (2006)",
        year: 2006,
        rating: 8.5,
        runtime: "130 мин",
        genres: ["thriller", "detective", "drama", "mystery"],
        mood: "mind-blown",
        era: "golden",
        director: "Кристофер Нолан",
        cast: "Хью Джекман, Кристиан Бэйл, Майкл Кейн, Скарлетт Йоханссон",
        quote: "«Вы внимательно следите?»",
        description: "Два фокусника-иллюзиониста в викторианском Лондоне вступают в беспощадную войну за секрет идеального телепортационного трюка.",
        posterUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop",
        bgGradient: "linear-gradient(135deg, #1c1917, #44403c)"
    }
];

// Состояние фильтра
let currentFilter = {
    genre: "all",
    mood: "all",
    era: "all",
    minRating: 7.0,
    sortBy: "rating"
};

// ==========================================================================
// Инициализация при загрузке страницы
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initGenreFilters();
    initMoodFilters();
    initAdditionalInputs();
    initActionButtons();
    initCollectionsPreset();
    initQuickQuiz();
    initModal();

    // Первичный рендеринг
    applyFiltersAndRender();
});

// ==========================================================================
// 1. Фильтры жанров и настроения
// ==========================================================================
function initGenreFilters() {
    const genreButtons = document.querySelectorAll("#genreContainer .tag-btn");
    genreButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            genreButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter.genre = btn.dataset.genre;
            applyFiltersAndRender();
        });
    });
}

function initMoodFilters() {
    const moodButtons = document.querySelectorAll("#moodContainer .chip-btn");
    moodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            moodButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter.mood = btn.dataset.mood;
            applyFiltersAndRender();
        });
    });
}

function initAdditionalInputs() {
    const eraSelect = document.getElementById("eraSelect");
    const ratingRange = document.getElementById("ratingRange");
    const ratingValueText = document.getElementById("ratingValueText");
    const sortSelect = document.getElementById("sortSelect");

    if (eraSelect) {
        eraSelect.addEventListener("change", (e) => {
            currentFilter.era = e.target.value;
            applyFiltersAndRender();
        });
    }

    if (ratingRange && ratingValueText) {
        ratingRange.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value);
            ratingValueText.textContent = val.toFixed(1);
            currentFilter.minRating = val;
            applyFiltersAndRender();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentFilter.sortBy = e.target.value;
            applyFiltersAndRender();
        });
    }
}

// ==========================================================================
// 2. Кнопки действий (Подбор, Сброс, Рандомайзер)
// ==========================================================================
function initActionButtons() {
    const findBtn = document.getElementById("findMoviesBtn");
    const resetBtn = document.getElementById("resetFiltersBtn");
    const randomNavBtn = document.getElementById("randomMovieNavBtn");
    const heroRandomBtn = document.getElementById("heroRandomBtn");

    if (findBtn) {
        findBtn.addEventListener("click", () => {
            applyFiltersAndRender();
            document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetAllFilters);
    }

    const triggerRandom = () => {
        const randomIndex = Math.floor(Math.random() * MOVIES_DATABASE.length);
        const randomMovie = MOVIES_DATABASE[randomIndex];
        openMovieModal(randomMovie);
    };

    if (randomNavBtn) randomNavBtn.addEventListener("click", triggerRandom);
    if (heroRandomBtn) heroRandomBtn.addEventListener("click", triggerRandom);

    // Ссылки в футере
    document.querySelectorAll(".genre-quick-link").forEach(link => {
        link.addEventListener("click", (e) => {
            const genre = link.dataset.genre;
            const genreBtn = document.querySelector(`#genreContainer .tag-btn[data-genre="${genre}"]`);
            if (genreBtn) {
                genreBtn.click();
                document.getElementById("filter-section")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function resetAllFilters() {
    currentFilter = {
        genre: "all",
        mood: "all",
        era: "all",
        minRating: 7.0,
        sortBy: "rating"
    };

    // Сброс визуалов
    document.querySelectorAll("#genreContainer .tag-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('#genreContainer .tag-btn[data-genre="all"]')?.classList.add("active");

    document.querySelectorAll("#moodContainer .chip-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('#moodContainer .chip-btn[data-mood="all"]')?.classList.add("active");

    const eraSelect = document.getElementById("eraSelect");
    if (eraSelect) eraSelect.value = "all";

    const ratingRange = document.getElementById("ratingRange");
    const ratingValueText = document.getElementById("ratingValueText");
    if (ratingRange) ratingRange.value = 7.0;
    if (ratingValueText) ratingValueText.textContent = "7.0";

    applyFiltersAndRender();
}

// ==========================================================================
// 3. Пресеты тематических коллекций
// ==========================================================================
function initCollectionsPreset() {
    const colCards = document.querySelectorAll(".collection-card");
    colCards.forEach(card => {
        card.addEventListener("click", () => {
            const presetMood = card.dataset.preset;
            
            // Если выбран хоррор — переключаем жанр на horror
            if (presetMood === "horror") {
                const horrorGenreBtn = document.querySelector(`#genreContainer .tag-btn[data-genre="horror"]`);
                if (horrorGenreBtn) horrorGenreBtn.click();
            } else {
                const targetMoodBtn = document.querySelector(`#moodContainer .chip-btn[data-mood="${presetMood}"]`);
                if (targetMoodBtn) targetMoodBtn.click();
            }

            document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// ==========================================================================
// 4. Фильтрация и рендеринг фильмов С ОБЛОЖКАМИ
// ==========================================================================
function applyFiltersAndRender() {
    let filtered = MOVIES_DATABASE.filter(movie => {
        // Жанр
        if (currentFilter.genre !== "all" && !movie.genres.includes(currentFilter.genre)) {
            return false;
        }
        // Настроение
        if (currentFilter.mood !== "all" && movie.mood !== currentFilter.mood) {
            return false;
        }
        // Эпоха
        if (currentFilter.era !== "all" && movie.era !== currentFilter.era) {
            return false;
        }
        // Рейтинг
        if (movie.rating < currentFilter.minRating) {
            return false;
        }
        return true;
    });

    // Сортировка
    if (currentFilter.sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentFilter.sortBy === "year") {
        filtered.sort((a, b) => b.year - a.year);
    } else if (currentFilter.sortBy === "runtime") {
        filtered.sort((a, b) => parseInt(b.runtime) - parseInt(a.runtime));
    }

    renderMoviesGrid(filtered);
}

function renderMoviesGrid(movies) {
    const grid = document.getElementById("moviesGrid");
    const countBadge = document.getElementById("resultsCountBadge");
    const heading = document.getElementById("resultsHeading");

    if (!grid) return;

    if (countBadge) {
        countBadge.textContent = `Найдено фильмов: ${movies.length}`;
    }

    if (movies.length === 0) {
        if (heading) heading.textContent = "По вашим параметрам ничего не найдено";
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px;">
                <span style="font-size: 3rem;">🔍</span>
                <h3 style="margin: 16px 0 8px; font-size: 1.4rem;">Слишком строгие критерии поиска</h3>
                <p style="color: var(--text-muted); margin-bottom: 20px;">Попробуйте понизить планку рейтинга или выбрать другой жанр.</p>
                <button class="btn btn-gold" onclick="resetAllFilters()">Сбросить фильтры</button>
            </div>
        `;
        return;
    }

    if (heading) {
        heading.textContent = `Рекомендации: Топ-${movies.length} для вашего вечера`;
    }

    grid.innerHTML = movies.map(movie => {
        const genreBadges = movie.genres.map(g => `<span class="m-tag">${translateGenre(g)}</span>`).join("");
        return `
            <div class="movie-card">
                <div class="movie-poster-header" style="background: ${movie.bgGradient};">
                    <img src="${movie.posterUrl}" alt="${movie.title}" class="movie-poster-img" loading="lazy" onerror="this.style.opacity='0.1'">
                    <div class="poster-overlay"></div>
                    <div class="poster-content-meta">
                        <div class="movie-rating-badge">★ ${movie.rating}</div>
                        <span class="movie-year-badge">${movie.year}</span>
                    </div>
                </div>
                <div class="movie-body">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-orig-title">${movie.originalTitle}</div>
                    <div class="movie-tags-row">
                        ${genreBadges}
                    </div>
                    <p class="movie-desc">${movie.description}</p>
                    <div class="movie-footer-action">
                        <span class="movie-runtime">⏱️ ${movie.runtime}</span>
                        <button class="btn-card-details" onclick="openMovieById(${movie.id})">О фильме →</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function translateGenre(genreCode) {
    const map = {
        "horror": "Ужасы",
        "mystery": "Мистика",
        "fantasy": "Фэнтези",
        "biography": "Биография",
        "sci-fi": "Фантастика",
        "thriller": "Триллер",
        "detective": "Детектив",
        "comedy": "Комедия",
        "drama": "Драма",
        "action": "Боевик",
        "crime": "Криминал",
        "adventure": "Приключения",
        "anime": "Аниме",
        "romance": "Мелодрама"
    };
    return map[genreCode] || genreCode;
}

// ==========================================================================
// 5. Модальное окно с деталями и большой обложкой
// ==========================================================================
function initModal() {
    const modal = document.getElementById("movieModal");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}

window.openMovieById = function(id) {
    const movie = MOVIES_DATABASE.find(m => m.id === id);
    if (movie) openMovieModal(movie);
};

function openMovieModal(movie) {
    const modal = document.getElementById("movieModal");
    const content = document.getElementById("modalDynamicContent");
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="modal-hero" style="background: ${movie.bgGradient};">
            <img src="${movie.posterUrl}" alt="${movie.title}" class="modal-poster-img" onerror="this.style.opacity='0.1'">
            <div class="poster-overlay"></div>
            <div style="position: relative; z-index: 2;">
                <span class="movie-year-badge" style="margin-bottom: 8px; display: inline-block;">${movie.year} &bull; ${movie.runtime}</span>
                <h2 class="modal-title">${movie.title}</h2>
                <div style="color: var(--text-sub); font-size: 0.95rem;">${movie.originalTitle}</div>
            </div>
        </div>
        <div class="modal-inner-padding">
            <div class="modal-meta-row">
                <span class="movie-rating-badge">★ Рейтинг: ${movie.rating}</span>
                <span>Режиссёр: <strong>${movie.director}</strong></span>
            </div>
            <div class="modal-quote">${movie.quote}</div>
            <p class="modal-full-desc">${movie.description}</p>
            <div class="modal-details-grid">
                <span>В главных ролях: <br><strong>${movie.cast}</strong></span>
                <span>Жанры: <br><strong>${movie.genres.map(translateGenre).join(", ")}</strong></span>
            </div>
            <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button class="btn btn-glass" onclick="document.getElementById('movieModal').style.display='none'">Закрыть</button>
                <button class="btn btn-gold" onclick="alert('Фильм «${movie.title}» добавлен в ваш персональный список просмотра!')">🍿 Смотреть сейчас</button>
            </div>
        </div>
    `;

    modal.style.display = "flex";
}

// ==========================================================================
// 6. Экспресс-квиз за 60 секунд (с поддержкой ужасов и фэнтези)
// ==========================================================================
function initQuickQuiz() {
    const quizQuestions = [
        {
            title: "1. С кем вы планируете просмотр?",
            options: [
                { label: "👤 В полном одиночестве, хочу погрузиться в атмосферу", tag: "solo" },
                { label: "💑 Со второй половинкой (уютный романтический вечер)", tag: "pair" },
                { label: "🎉 С шумной компанией друзей под попкорн", tag: "friends" },
                { label: "👨‍👩‍👧 Всей семьей", tag: "family" }
            ]
        },
        {
            title: "2. Чего больше всего хочется от сюжета?",
            options: [
                { label: "🧟‍♂️ Леденящих мурашек, ужаса и саспенса (Хоррор)", mood: "horror" },
                { label: "🤯 Запутанную головоломку и неожиданный финал", mood: "mind-blown" },
                { label: "😂 Искренне посмеяться и отвлечься от забот", mood: "laugh" },
                { label: "☕ Теплоты, душевности и веры в добро", mood: "cozy" },
                { label: "🔥 Бешеного напряжения и адреналина", mood: "adrenaline" }
            ]
        },
        {
            title: "3. Сколько времени вы готовы уделить?",
            options: [
                { label: "⚡ До 2 часов — что-то динамичное и компактное", duration: "short" },
                { label: "🌌 Готов к монументальному кинополотну (2.5+ часа)", duration: "long" }
            ]
        }
    ];

    let currentStep = 0;
    let quizAnswers = {};

    const stepText = document.getElementById("quizStepText");
    const fillBar = document.getElementById("quizFill");
    const qTitle = document.getElementById("quizQuestionTitle");
    const optionsList = document.getElementById("quizOptionsList");
    const resultBox = document.getElementById("quizResultBox");

    if (!qTitle || !optionsList) return;

    function renderQuizStep() {
        if (currentStep >= quizQuestions.length) {
            showQuizResult();
            return;
        }

        const q = quizQuestions[currentStep];
        if (stepText) stepText.textContent = `Вопрос ${currentStep + 1} из ${quizQuestions.length}`;
        if (fillBar) fillBar.style.width = `${((currentStep + 1) / quizQuestions.length) * 100}%`;
        qTitle.textContent = q.title;

        optionsList.innerHTML = q.options.map((opt, i) => `
            <button class="quiz-choice-btn" data-index="${i}">
                ${opt.label}
            </button>
        `).join("");

        optionsList.querySelectorAll(".quiz-choice-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const opt = q.options[parseInt(btn.dataset.index)];
                Object.assign(quizAnswers, opt);
                currentStep++;
                renderQuizStep();
            });
        });
    }

    function showQuizResult() {
        if (qTitle) qTitle.style.display = "none";
        if (optionsList) optionsList.style.display = "none";

        // Подбираем идеальный фильм под ответы
        let matched = MOVIES_DATABASE.filter(m => {
            if (quizAnswers.mood && m.mood === quizAnswers.mood) return true;
            return false;
        });

        if (matched.length === 0) matched = MOVIES_DATABASE;
        const bestMovie = matched[Math.floor(Math.random() * matched.length)];

        if (resultBox) {
            resultBox.innerHTML = `
                <div style="margin-bottom: 14px;">
                    <img src="${bestMovie.posterUrl}" alt="${bestMovie.title}" style="width: 140px; height: 190px; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.6); border: 2px solid var(--gold-primary);">
                </div>
                <h4>Идеальный фильм для вашего вечера:</h4>
                <h3 style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${bestMovie.title} (${bestMovie.year})</h3>
                <p style="color: var(--text-sub); margin-bottom: 18px; font-size: 0.95rem;">${bestMovie.description}</p>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    <button class="btn btn-gold" onclick="openMovieById(${bestMovie.id})">Смотреть карточку фильма</button>
                    <button class="btn btn-secondary" id="restartQuizBtn">Пройти заново ⟳</button>
                </div>
            `;
            resultBox.style.display = "block";

            document.getElementById("restartQuizBtn")?.addEventListener("click", () => {
                currentStep = 0;
                quizAnswers = {};
                if (qTitle) qTitle.style.display = "block";
                if (optionsList) optionsList.style.display = "flex";
                resultBox.style.display = "none";
                renderQuizStep();
            });
        }
    }

    renderQuizStep();
}
