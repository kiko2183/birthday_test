import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  const fullText =
    'Бажаю тобі щастя, тепла, яскравих моментів і здійснення всіх мрій. Дякую, що ти є ❤️';
  const [displayedText, setDisplayedText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoVisible, setPhotoVisible] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
  const [greetingText, setGreetingText] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const years = ['фотогалерея'];

  // Initial typing effect for main text
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Independent typing effects for each greeting
  useEffect(() => {
    const isVisible = photoVisible[1]; // Extract complex expression
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting1 = `Сонечко, вітаю тебе з твоїм Днем народження.
Цей день є прекрасним, бо 19 років тому на світ з’явилось таке чудо, як ти.
Ще рівно рік тому ми сиділи на лавочці, балакали про все і ні про що водночас, слухали The Night We Met. У тебе в голові крутилось, який я ахуєнний кент, а я думав: «Яка ж ти все-таки чудова». І тоді ми навіть подумати не могли, що наступне День народження святкуватимемо вже як пара.
Я дуже радий, що все склалося саме так.
Хочу побажати тобі здоров’я — це найважливіше. Зараз, можливо, не все так добре, як хотілося б, але я дуже надіюсь, що ми розберемося з усім якнайшвидше.
Бажаю ще й вдачі. Як би там не було, але вона дуже важлива. Якби міг, то поділився б своєю — мені ж справді щастить: вибив стільки легендарок у Ґеншині за короткий час 😄 І найголовніше — моя вдача допомогла мені знайти тебе.
Сподіваюся, що твої мрії будуть збуватись, і ти впевнено йтимеш шляхом, який обереш. А я — завжди поруч. Я постараюсь зробити все, що в моїх силах, аби твої мрії здійснювались.
Ти в мене дуже гарна, мила, добра, розумна і сіллі водночас — просто найкраща дівчинка 💖
Ми знайомі трохи більше року, але за цей час ми вже стільки всього пережили, що в мене складається враження, ніби пройшло набагато більше часу. Часто, коли ми гуляли або просто сиділи вдома, і треба було вже розходитись, ставало сумно, бо часу завжди мало.
Коли я з тобою — час просто злітає. Складається враження, що й вічності не вистачить, щоб наобійматися, пообговорювати все й усіх на світі, подуріти чи навіть просто посидіти поруч у тиші.
Тому я щиро надіюсь, що існують інші життя, і в кожному з них ми знову і знову будемо знаходити одне одного.
Я тебе дуже сильно люблю. І хотілося б просто взяти й відгородити тебе від усіх проблем цього світу, але, на жаль, принаймні зараз — не можу.
Та я буду поруч і робитиму все, що в моїх силах.
Дякую твоїй мамі, що народила і виховала таку прекрасну доньку. І дякую тобі — за те, що ти в мене є.
З любов’ю — назавжди твій майбутній чоловік.
P.S. (Роман)`;
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 1: greeting1.slice(0, i + 1) }));
        i++;
        if (i === greeting1.length) clearInterval(interval);
      }, 20); // Прискорений ефект (20 мс замість 50 мс)
    } else {
      setGreetingText((prev) => ({ ...prev, 1: '' })); // Reset when hidden
    }
    return () => clearInterval(interval);
  }, [photoVisible[1]]); // Use specific key as dependency

  useEffect(() => {
    const isVisible = photoVisible[2];
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting2 = 'Вітаю';
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 2: greeting2.slice(0, i + 1) }));
        i++;
        if (i === greeting2.length) clearInterval(interval);
      }, 20);
    } else {
      setGreetingText((prev) => ({ ...prev, 2: '' }));
    }
    return () => clearInterval(interval);
  }, [photoVisible[2]]);

  useEffect(() => {
    const isVisible = photoVisible[3]; // Extract complex expression
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting3 = `З Днем народження, рідна, вітаю,
Щастя, радості щиро бажаю!
Хай у серці панує весна,
І минає печаль сторона.

Хай сміється душа, наче дзвін,
І в кишені завжди буде грін!
Подорожей, відкриттів і казок,
Щоб життя пролітало, як строк.

Хай любов зігріває щодня,
А достаток — не мрія, а суть буття.
Менше жиру — більше м’язів крутих,
Щоб всі заздрили формам твоїм бойовим!

Будь здоровою, сильною, смілою,
З кожним роком красивішою й милою.
І нехай усе буде, як хочеш сама —
Бо племінниця ти в мене — огого яка! 💖`;
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 3: greeting3.slice(0, i + 1) }));
        i++;
        if (i === greeting3.length) clearInterval(interval);
      }, 20); // Прискорений ефект
    } else {
      setGreetingText((prev) => ({ ...prev, 3: '' })); // Reset when hidden
    }
    return () => clearInterval(interval);
  }, [photoVisible[3]]); // Use specific key as dependency

  useEffect(() => {
    const isVisible = photoVisible[4]; // Extract complex expression
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting4 = 'Люба Катерино вітаю тебе з твоїм днем🥳, нехай все що ти собі задумала буде збувати і хоч я знаю що деколи  це все здається нейтральним, але маючи надію все може вийти і я бажаю щоб у тебе все вийшло, бо ти дуже розумна та талановита і тому все можливо😘. Успіхів тобі у навчанні та у майбутній професії займайся тим чим тобі дійсно подобається, шукай себе, пробуй помиляйся йди далі і все ж будь щаслива, звичайно сподіваюсь що помилок ти наробиш не багато, але навіть якщо й ні життя то складна штука головне щоб поруч були ми всі, і ми будемо задля того щоб ти не втрачала надію, будемо твоїм бензином або крилами всім чим захочеш, задля того щоб у тебе все вийшло. Кохай та будь коханою так щоб потім було що внукам розказати, так щоб дещо навіть було крінжово згадувати😅, і щоб з кожним роком ваше кохання було все більше а довіра міцніше🥰, у стосунках буває все, і хороше і погане але бажаю щоб погано майже не було, миру та злагоди вам ❤️ Ну і здоровʼя хоч зараз все не так радісно сподіваюсь ти зможеш розібратися зі всіма негараздами, не будеш нехтувати не тільки фізичним а й моральним станом, щоб з часом ти змогла сказати та сука я змогла. Тому йди тільки вперед не зупиняйся і надто часто не обертайся назад, мрій, будь щаслива і усміхнена, радій життю і знай що ми з Марічкою поруч навіть за багато кілометрів ми морально з тобою 🥰';
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 4: greeting4.slice(0, i + 1) }));
        i++;
        if (i === greeting4.length) clearInterval(interval);
      }, 20); // Прискорений ефект
    } else {
      setGreetingText((prev) => ({ ...prev, 4: '' })); // Reset when hidden
    }
    return () => clearInterval(interval);
  }, [photoVisible[4]]); // Use specific key as dependency

  useEffect(() => {
    const isVisible = photoVisible[5]; // Extract complex expression
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting5 = `Катеринко, вітаю тебе з Днем народження!❤️ 
Ну що, тобі 19. Ура! Нарешті ти можеш… та ні, нічого нового ти не можеш — просто ще на рік ближче до кризи двадцяти.🤗
Я не знаю, чи зможу підібрати слова, які насправді передадуть усе те, що я відчуваю до тебе. Ти щира, добра, кумедна, сильна, іноді сварлива. За це все я тебе люблю.🥰♥️
Ти — людина, яка реально вміє дружити: не по приколу, не на словах, а по-справжньому. Та ще й з тобою ніколи не буває нудно. З тобою я можу бути собою, можливо, навіть крінжовішою версією себе — і я знаю, що ти й такою мене приймеш. Пройшли ми вже справді багато разом. Різну фігню творили. Десь були не надто хороші наслідки, але головне — що ми виносили з цього якісь уроки.
Бажаю, щоб цей рік був для тебе кращим, ніж усі попередні. 🥳Побільше спокою тобі бажаю вдома. Також — міцного кохання: щоб ви з Романом далі йшли плече до плеча і бороли всі негаразди на своєму шляху. Успіхів тобі в автошколі та міцних нервів для університету. Насправді, основне, що я хочу побажати — це те, щоб ти була щасливою. Решта факторів до цього приложаться. Нехай тебе завжди оточують люди, з якими тобі комфортно не лише говорити, а й мовчати.🥰
Ну і, звісно, як без грошиків — бажаю тобі мати їх якнайбільше, щоб ти собі ні в чому не відмовляла.💶
P.S. Я завжди поруч і люблю, обіймаю тебе.🫶🏻❤️✨
P.P.S. Усміхайся частіше`;
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 5: greeting5.slice(0, i + 1) }));
        i++;
        if (i === greeting5.length) clearInterval(interval);
      }, 20); // Прискорений ефект
    } else {
      setGreetingText((prev) => ({ ...prev, 5: '' })); // Reset when hidden
    }
    return () => clearInterval(interval);
  }, [photoVisible[5]]); // Use specific key as dependency

  useEffect(() => {
    const isVisible = photoVisible[6]; // Extract complex expression
    let interval;
    if (isVisible) {
      let i = 0;
      const greeting6 = 'З Днем народження! Нехай твій день буде такий же незабутній, як пароль, який ти забула. І щоб тобі завжди щастило, як при відкритті розкішної скрині з рідкісною зброєю, а в житті було більше удачі, ніж при крутках персонажів.';
      interval = setInterval(() => {
        setGreetingText((prev) => ({ ...prev, 6: greeting6.slice(0, i + 1) }));
        i++;
        if (i === greeting6.length) clearInterval(interval);
      }, 20); // Прискорений ефект
    } else {
      setGreetingText((prev) => ({ ...prev, 6: '' })); // Reset when hidden
    }
    return () => clearInterval(interval);
  }, [photoVisible[6]]); // Use specific key as dependency

  const photoUrls = [
    '/images/photo_2025-08-07_03-10-05.jpg',
    '/images/photo_2025-08-07_03-50-39.jpg',
    '/images/photo_2025-08-07_03-39-22.jpg',
    '/images/photo_2025-08-07_03-55-50.jpg',
    '/images/photo_2025-08-07_03-55-46.jpg',
    '/images/photo_2025-08-07_03-39-33.jpg',
  ];

  return (
    <div className="home-container">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <button
            onClick={() => setMenuOpen(false)}
            className="close-button"
            aria-label="Закрити меню"
          >
            ✕
          </button>
          <h2 className="fullscreen-menu-title">Спогади</h2>
          <div className="fullscreen-menu-links">
            {years.map((year) => (
              <Link
                key={year}
                to={`/memories/${year}`}
                className="memory-button"
                onClick={() => setMenuOpen(false)}
              >
                {year}
              </Link>
            ))}
            <Link
              to="/"
              className="back-button"
              onClick={() => setMenuOpen(false)}
            >
              ⬅ Назад до головної
            </Link>
          </div>
        </div>
      )}

      <div className="main-content">
        <h2 className="main-title">З Днем Народження, Любімка! 🎉</h2>
        <p className="typing-text">{displayedText}</p>

        {/* Desktop/Tablet menu */}
        <div className="desktop-menu">
          {years.map((year) => (
            <Link key={year} to={`/memories/${year}`} className="memory-button">
              {year}
            </Link>
          ))}
        </div>

        {/* New buttons and photo/greeting sections */}
        <div className="greeting-buttons">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index + 1} className="greeting-item">
              <button
                className="memory-button"
                onClick={() => setPhotoVisible((prev) => ({ ...prev, [index + 1]: !prev[index + 1] }))}
              >
                Привітання від {['любимого чоловіка', 'мами', 'Сергія', 'Софії', 'Марічки', 'Олега'][index]}
              </button>
              {photoVisible[index + 1] && (
                <div className="photo-greeting-container">
                  <img
                    src={photoUrls[index]}
                    alt={`Привітання ${index + 1}`}
                    className="greeting-photo"
                  />
                  <p className="greeting-text">{greetingText[index + 1]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
