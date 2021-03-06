const startButton = document.getElementById("start-button");
const configButton = document.getElementById("config-button");
const minutesHandle = document.getElementById("minutes-handle");
const secondsHandle = document.getElementById("seconds-handle");

const getTimeInSeconds = (minutes, seconds) => {
  return Number(minutes) * 60 + Number(seconds);
};

let timerId = "";
let mode = "STOPPED";
let timer = getTimeInSeconds(minutesHandle.value, secondsHandle.value);
let isConfigMode = true;

const toggleConfig = () => (isConfigMode = !isConfigMode);

const makeDoubleDigitString = (number) =>
  number < 10 ? `0${number}` : `${number}`;

const updateUI = () => {
  const timerWrapper = document.querySelector(".timer__wrapper");

  if (mode === "RUNNING") {
    timerWrapper.classList.remove("timer__wrapper--stopped");
    timerWrapper.classList.add("timer__wrapper--running");
  } else {
    timerWrapper.classList.remove("timer__wrapper--running");
    timerWrapper.classList.add("timer__wrapper--stopped");
  }
};

const startTimer = () => {
  timerId = setInterval(() => {
    ++timer;

    const minutes = makeDoubleDigitString(Math.floor(timer / 60));
    const seconds = makeDoubleDigitString(timer % 60);

    minutesHandle.value = minutes;
    secondsHandle.value = seconds;
  }, 1000);

  mode = "RUNNING";
  updateUI();
};

const stopTimer = () => {
  clearTimeout(timerId);
  mode = "STOPPED";
  updateUI();
};

const handleButton = () => {
  const isRunning = mode === "RUNNING";
  startButton.innerText = isRunning ? "START" : "STOP";
  isRunning ? stopTimer() : startTimer();
};

const handleConfig = () => {
  toggleConfig();

  minutesHandle.disabled = !isConfigMode;
  secondsHandle.disabled = !isConfigMode;
};

const normalizeValue = (value) => (Number(value) > 60 ? 0 : Number(value));
const handleChangeMinutes = ({ target: { value } }) => {
  minutesHandle.value = makeDoubleDigitString(normalizeValue(value));
  timer = (timer % 60) + normalizeValue(value) * 60;
};

const handleChangeSeconds = ({ target: { value } }) => {
  secondsHandle.value = makeDoubleDigitString(normalizeValue(value));
  timer = Math.floor(timer / 60) + normalizeValue(value);
};

startButton.addEventListener("click", handleButton);
configButton.addEventListener("click", handleConfig);

secondsHandle.addEventListener("change", handleChangeSeconds);
minutesHandle.addEventListener("change", handleChangeMinutes);
