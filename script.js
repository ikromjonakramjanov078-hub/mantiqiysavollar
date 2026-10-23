
const $ = (id) => document.getElementById(id);

const screens = {
  intro: $("intro"),
  game: $("game"),
  ending: $("ending")
};

const questions = [
  {
    title: "1-savol — Diqqat",
    code: "MANTIQ_001",
    symbol: "01",
    story: "Birinchi sinov boshlandi. Savolni diqqat bilan o‘qi.",
    question: "Qaysi oyda 28 kun bor?",
    options: ["Faqat fevralda", "Barcha oylarda", "Faqat yanvarda", "Hech qaysi oyda"],
    answer: 1,
    explanation: "Barcha oylarda kamida 28 kun bor."
  },
  {
    title: "2-savol — Poyga",
    code: "MANTIQ_002",
    symbol: "02",
    story: "Tez javob berishga shoshilma.",
    question: "Poygada ikkinchi o‘rindagi yuguruvchini quvib o‘tding. Nechanchi o‘ringa chiqding?",
    options: ["Birinchi", "Ikkinchi", "Uchinchi", "To‘rtinchi"],
    answer: 1,
    explanation: "Ikkinchi o‘rindagi yuguruvchini quvib o‘tsang, uning o‘rnini egallaysan."
  },
  {
    title: "3-savol — Sonlar",
    code: "MANTIQ_003",
    symbol: "03",
    story: "Sonlar ketma-ketligidagi qonuniyatni top.",
    question: "2, 4, 8, 16, ... Keyingi son qaysi?",
    options: ["24", "30", "32", "36"],
    answer: 2,
    explanation: "Har bir son oldingisining ikki baravari."
  },
  {
    title: "4-savol — Vaqt",
    code: "MANTIQ_004",
    symbol: "04",
    story: "Vaqt bilan bog‘liq jumboq.",
    question: "Ikki soatning yarmi necha daqiqa?",
    options: ["30", "60", "90", "120"],
    answer: 1,
    explanation: "Ikki soat 120 daqiqa, uning yarmi 60 daqiqa."
  },
  {
    title: "5-savol — Shamlar",
    code: "MANTIQ_005",
    symbol: "05",
    story: "Savoldagi har bir so‘z muhim.",
    question: "5 ta sham yonib turibdi. 2 tasi o‘chirildi. Oxirida nechta sham qoladi?",
    options: ["3 ta", "2 ta", "5 ta", "0 ta"],
    answer: 1,
    explanation: "O‘chirilgan ikki sham erib tugamasa, ular qoladi."
  },
  {
    title: "6-savol — Fibonacci",
    code: "MANTIQ_006",
    symbol: "06",
    story: "Har bir keyingi son oldingi ikki son yig‘indisiga teng.",
    question: "1, 1, 2, 3, 5, 8, ... Keyingi son?",
    options: ["11", "12", "13", "15"],
    answer: 2,
    explanation: "5 + 8 = 13."
  },
  {
    title: "7-savol — Mushuklar",
    code: "MANTIQ_007",
    symbol: "07",
    story: "Tasavvuringda xonani ko‘z oldingga keltir.",
    question: "Xonaning 4 burchagida bittadan mushuk bor. Har biri qolgan uchta mushukni ko‘radi. Jami nechta mushuk bor?",
    options: ["4 ta", "8 ta", "12 ta", "16 ta"],
    answer: 0,
    explanation: "Jami 4 ta mushuk bor; har biri qolgan uchtasini ko‘radi."
  },
  {
    title: "8-savol — Yosh",
    code: "MANTIQ_008",
    symbol: "08",
    story: "Yoshlar orasidagi bog‘liqlikni aniqlang.",
    question: "Aka 20 yoshda, ukasi 10 yoshda. Aka ukasidan necha yosh katta?",
    options: ["5 yosh", "10 yosh", "2 baravar katta", "20 yosh"],
    answer: 1,
    explanation: "20 − 10 = 10 yosh."
  },
  {
    title: "9-savol — Ortiqcha son",
    code: "MANTIQ_009",
    symbol: "09",
    story: "Qator ichidagi boshqalardan farqli sonni top.",
    question: "Qaysi son boshqalaridan farq qiladi: 2, 4, 6, 9, 10?",
    options: ["2", "4", "9", "10"],
    answer: 2,
    explanation: "2, 4, 6 va 10 juft sonlar, 9 esa toq son."
  },
  {
    title: "10-savol — Qo‘l siqish",
    code: "MANTIQ_010",
    symbol: "10",
    story: "Oddiy vaziyatdagi hisobni bajaring.",
    question: "3 kishi uchrashib, har biri qolgan ikki kishi bilan bir martadan qo‘l siqdi. Jami nechta qo‘l siqish bo‘ldi?",
    options: ["2", "3", "4", "6"],
    answer: 1,
    explanation: "Uchta juftlik bor: A-B, A-C va B-C."
  },
  {
    title: "11-savol — Ketma-ketlik",
    code: "MANTIQ_011",
    symbol: "11",
    story: "Qonuniyatni aniqlash vaqti.",
    question: "5, 10, 15, 20, ... Keyingi son?",
    options: ["22", "24", "25", "30"],
    answer: 2,
    explanation: "Har safar 5 qo‘shilmoqda."
  },
  {
    title: "12-savol — Kunlar",
    code: "MANTIQ_012",
    symbol: "12",
    story: "Hafta kunlarini hisobla.",
    question: "Bugun dushanba bo‘lsa, 10 kundan keyin qaysi kun bo‘ladi?",
    options: ["Seshanba", "Chorshanba", "Payshanba", "Juma"],
    answer: 2,
    explanation: "7 kundan keyin dushanba, yana 3 kun o‘tsa payshanba."
  },
  {
    title: "13-savol — Tuxumlar",
    code: "MANTIQ_013",
    symbol: "13",
    story: "Ish tezligini ham hisobga ol.",
    question: "2 ta tovuq 2 kunda 2 ta tuxum qilsa, 4 ta tovuq 4 kunda nechta tuxum qiladi?",
    options: ["4", "6", "8", "16"],
    answer: 2,
    explanation: "Har bir tovuq 2 kunda bittadan tuxum qiladi. Jami 8 ta tuxum."
  },
  {
    title: "14-savol — Ota va o‘g‘il",
    code: "MANTIQ_014",
    symbol: "14",
    story: "Masalani diqqat bilan o‘qib, ortiqcha ma’lumot qo‘shma.",
    question: "Otaning 3 o‘g‘li bor. Har bir o‘g‘ilning bittadan singlisi bor. Oilada kamida nechta farzand bor?",
    options: ["3", "4", "6", "7"],
    answer: 1,
    explanation: "Uch o‘g‘ilning bitta umumiy singlisi bor: jami 4 farzand."
  },
  {
    title: "15-savol — Tarozilar",
    code: "MANTIQ_015",
    symbol: "15",
    story: "Tenglikni topishga harakat qil.",
    question: "1 kilogramm paxta og‘irmi yoki 1 kilogramm temir?",
    options: ["Paxta", "Temir", "Ikkalasi teng", "Aniqlab bo‘lmaydi"],
    answer: 2,
    explanation: "Ikkalasining ham massasi 1 kilogramm."
  },
  {
    title: "16-savol — Raqamlar",
    code: "MANTIQ_016",
    symbol: "16",
    story: "Eng kichik ikki xonali natural sonni aniqlang.",
    question: "Eng kichik ikki xonali natural son qaysi?",
    options: ["0", "1", "10", "11"],
    answer: 2,
    explanation: "Eng kichik ikki xonali natural son — 10."
  },
  {
    title: "17-savol — Qalamlar",
    code: "MANTIQ_017",
    symbol: "17",
    story: "Buyumlarning umumiy narxini hisoblang.",
    question: "3 ta qalam 6000 so‘m turadi. 1 ta qalam qancha?",
    options: ["1000 so‘m", "1500 so‘m", "2000 so‘m", "3000 so‘m"],
    answer: 2,
    explanation: "6000 ÷ 3 = 2000 so‘m."
  },
  {
    title: "18-savol — Soat",
    code: "MANTIQ_018",
    symbol: "18",
    story: "Soat millari orasidagi burchakni hisobla.",
    question: "Soat 3:00 bo‘lganda millar orasidagi kichik burchak necha daraja?",
    options: ["45°", "90°", "120°", "180°"],
    answer: 1,
    explanation: "Har bir soat oralig‘i 30°. Uchta oraliq 90°."
  },
  {
    title: "19-savol — Kvadratlar",
    code: "MANTIQ_019",
    symbol: "19",
    story: "Sonlar orasidagi qonuniyatni top.",
    question: "1, 4, 9, 16, 25, ... Keyingi son?",
    options: ["30", "32", "36", "49"],
    answer: 2,
    explanation: "Bular kvadrat sonlar. 6 × 6 = 36."
  },
  {
    title: "20-savol — Savat",
    code: "MANTIQ_020",
    symbol: "20",
    story: "So‘zlarga emas, vaziyatga e’tibor ber.",
    question: "Savatda 6 ta olma bor. 6 kishiga bittadan olma berildi, lekin savatda bitta olma qoldi. Qanday qilib?",
    options: ["Bitta olma yashirildi", "Oxirgi kishiga olma savati bilan berildi", "Bir kishi olma olmadi", "Olma ikkiga bo‘lindi"],
    answer: 1,
    explanation: "Oxirgi kishiga savatdagi olma bilan birga savat ham berildi."
  },
  {
    title: "21-savol — Shamlar",
    code: "MANTIQ_021",
    symbol: "21",
    story: "Bu safar qancha sham yonib turganini aniqlang.",
    question: "4 ta sham yonib turibdi. 1 tasi o‘chirildi. Hozir nechta sham yonib turibdi?",
    options: ["1 ta", "3 ta", "4 ta", "0 ta"],
    answer: 1,
    explanation: "Bitta sham o‘chirildi, qolgan 3 tasi yonib turibdi."
  },
  {
    title: "22-savol — Ko‘payish",
    code: "MANTIQ_022",
    symbol: "22",
    story: "Ketma-ketlikni davom ettir.",
    question: "3, 6, 12, 24, ... Keyingi son?",
    options: ["36", "42", "48", "54"],
    answer: 2,
    explanation: "Har safar son 2 ga ko‘paytiriladi."
  },
  {
    title: "23-savol — Yoshni top",
    code: "MANTIQ_023",
    symbol: "23",
    story: "Yoshlar orasidagi farqni hisobla.",
    question: "Ali Valining yoshidan 2 yosh katta. Vali 12 yoshda. Ali necha yoshda?",
    options: ["10", "12", "14", "24"],
    answer: 2,
    explanation: "12 + 2 = 14 yosh."
  },
  {
    title: "24-savol — Taqvim",
    code: "MANTIQ_024",
    symbol: "24",
    story: "Yil davomiyligini esla.",
    question: "Oddiy yilda necha kun bor?",
    options: ["360", "364", "365", "366"],
    answer: 2,
    explanation: "Oddiy yilda 365 kun, kabisa yilida 366 kun bor."
  },
  {
    title: "25-savol — Ortiqcha so‘z",
    code: "MANTIQ_025",
    symbol: "25",
    story: "So‘zlarning umumiy guruhini aniqlang.",
    question: "Qaysi biri boshqalaridan farq qiladi?",
    options: ["Olma", "Nok", "Sabzi", "Shaftoli"],
    answer: 2,
    explanation: "Sabzi sabzavot, qolganlari meva."
  },
  {
    title: "26-savol — Amallar tartibi",
    code: "MANTIQ_026",
    symbol: "26",
    story: "Matematik amallar tartibini unutmang.",
    question: "8 + 2 × 3 = ?",
    options: ["30", "14", "24", "18"],
    answer: 1,
    explanation: "Avval 2 × 3 = 6, so‘ng 8 + 6 = 14."
  },
  {
    title: "27-savol — Yo‘nalish",
    code: "MANTIQ_027",
    symbol: "27",
    story: "Yo‘nalishlarni tasavvur qil.",
    question: "Shimolga qarab turibsan. O‘ngga burilsang, qaysi tomonga qaraysan?",
    options: ["G‘arb", "Sharq", "Janub", "Shimol"],
    answer: 1,
    explanation: "Shimolga qaraganda o‘ng tomon sharq bo‘ladi."
  },
  {
    title: "28-savol — Yashirin son",
    code: "MANTIQ_028",
    symbol: "28",
    story: "Berilgan shartdan foydalan.",
    question: "Bir sonni 5 ga ko‘paytirib, 5 qo‘shilsa, 20 chiqadi. Son nechchi?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "5 × 3 + 5 = 20."
  },
  {
    title: "29-savol — Geometriya",
    code: "MANTIQ_029",
    symbol: "29",
    story: "Shaklning asosiy xususiyatini esla.",
    question: "Uchburchakning nechta tomoni bor?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "Uchburchakning 3 ta tomoni bor."
  },
  {
    title: "30-savol — Yakuniy sinov",
    code: "MANTIQ_030",
    symbol: "♛",
    story: "Oxirgi savol! Barcha bilimlaringni ishga sol.",
    question: "Bir oilada 2 ota va 2 o‘g‘il bor, ammo jami 3 kishi. Bu qanday mumkin?",
    options: ["Bu mumkin emas", "Bobo, ota va o‘g‘il", "Ikki egizak va ota", "Uch aka-uka"],
    answer: 1,
    explanation: "Bobo, uning o‘g‘li va nabirasi — jami 3 kishi."
  }
];

let currentLevel = 0;
let score = 0;
let correctAnswers = 0;
let answered = false;
let toastTimer;

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function updateScore() {
  $("score").textContent = String(score).padStart(4, "0");
}

function startGame() {
  currentLevel = 0;
  score = 0;
  correctAnswers = 0;
  answered = false;

  updateScore();
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentLevel];
  answered = false;

  $("roomTitle").textContent = q.title;
  $("roomCode").textContent = q.code;
  $("doorSymbol").textContent = q.symbol;
  $("storyText").textContent = q.story;
  $("question").textContent = q.question;

  const number = currentLevel + 1;
  const percent = Math.round(number / questions.length * 100);

  $("levelLabel").textContent =
    `SAVOL ${String(number).padStart(2, "0")} / ${questions.length}`;

  $("progressPercent").textContent = `${percent}%`;
  $("progressBar").style.width = `${percent}%`;

  $("remaining").textContent =
    `${questions.length - number} ta savol qoldi`;

  $("feedback").textContent = "";
  $("feedback").className = "feedback";

  $("nextBtn").disabled = true;
  $("nextBtn").innerHTML = number === questions.length
    ? "NATIJANI KO‘RISH <span>→</span>"
    : "KEYINGI SAVOL <span>→</span>";

  const options = $("options");
  options.innerHTML = "";

  q.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = optionText;

    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));

    options.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const q = questions[currentLevel];
  const buttons = [...$("options").querySelectorAll(".option")];

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && index !== q.answer) {
      button.classList.add("wrong");
    }
  });

  const feedback = $("feedback");

  if (selectedIndex === q.answer) {
    score += 100;
    correctAnswers++;
    updateScore();

    feedback.textContent = `✓ TO‘G‘RI! ${q.explanation} +100 ball`;
    feedback.className = "feedback good";

    showToast("+100 BALL!");
  } else {
    feedback.textContent = `✕ NOTO‘G‘RI. ${q.explanation}`;
    feedback.className = "feedback bad";
  }

  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  if (currentLevel < questions.length - 1) {
    currentLevel++;
    renderQuestion();
  } else {
    showEnding();
  }
}

function showEnding() {
  showScreen("ending");

  const percent = Math.round(correctAnswers / questions.length * 100);

  $("finalScore").textContent = score;
  $("correctCount").textContent =
    `${correctAnswers}/${questions.length}`;

  $("resultPercent").textContent = `${percent}%`;
  $("resultBar").style.width = `${percent}%`;

  let title;
  let message;
  let rank;
  let secret;
  let symbol;

  if (correctAnswers >= 27) {
    title = "Mantiq dahosi!";
    message = "Ajoyib natija! Sen mantiqiy savollarning deyarli barchasini to‘g‘ri yechding.";
    rank = "DAHO";
    symbol = "♛";
    secret = "Haqiqiy bilim — javobni topish bilan birga, nima uchun shundayligini tushuntira olishdir.";
  } else if (correctAnswers >= 21) {
    title = "Zo‘r natija!";
    message = "Sen juda yaxshi fikrlaysan. Yana biroz mashq bilan eng yuqori darajaga chiqishing mumkin.";
    rank = "USTA";
    symbol = "★";
    secret = "Har bir murakkab savolni kichik qismlarga ajratib ko‘r.";
  } else if (correctAnswers >= 15) {
    title = "Yaxshi natija!";
    message = "Sen ko‘plab savollarni to‘g‘ri yechding. Mashq qilishda davom et!";
    rank = "IZQUVAR";
    symbol = "◈";
    secret = "Xatolaringni tahlil qilish keyingi safar tezroq fikrlashga yordam beradi.";
  } else if (correctAnswers >= 8) {
    title = "Yaxshi boshlanish!";
    message = "Sen asosiy jumboqlarni yecha olding. Endi murakkabroq savollar bilan mashq qil.";
    rank = "TADQIQOTCHI";
    symbol = "⌘";
    secret = "Shoshilishdan ko‘ra savolni diqqat bilan o‘qish muhimroq.";
  } else {
    title = "Yana bir bor urinib ko‘r!";
    message = "Har bir urinish tajriba beradi. Savollarni qayta yechib, natijangni yaxshila.";
    rank = "BOSHLANG‘ICH";
    symbol = "?";
    secret = "Mantiqiy fikrlash mashq bilan rivojlanadi. Taslim bo‘lma!";
  }

  $("endingTitle").textContent = title;
  $("endingText").textContent = message;
  $("endingRank").textContent = rank;
  $("endingSymbol").textContent = symbol;
  $("secretText").textContent = secret;
}

function returnHome() {
  showScreen("intro");
}

$("startBtn").addEventListener("click", startGame);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", startGame);
$("homeBtn").addEventListener("click", returnHome);

document.addEventListener("keydown", event => {
  if (!screens.game.classList.contains("active") || answered) return;

  const index = ["a", "b", "c", "d"].indexOf(event.key.toLowerCase());

  if (index !== -1) {
    const button = $("options").querySelectorAll(".option")[index];

    if (button) {
      button.click();
    }
  }
});
