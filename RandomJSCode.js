// How to make the website talks

const speak = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);
  [sp.voice] = speechSynthesis.getVoices();
  speechSynthesis.speak(sp);
};
speak("TEST");

//You can use #javascript destructuring assignments to grab a specific Array index into a named variable.
let array = ["sleman", "samer", "zaitoun"];
let { 1: middlename } = array;
console.log(middlename);
// samer is the expected output

//shortcut to make an array
[...Array(5).keys].map((item) => item);
// 0 ,1,2,3,4

const soundFile = new Audio("url");
soundFile.play();

// whenever i wanna reutrn data that has delay time i should use callback
const GeoCode = (adress, callback) => {
  setTimeout(() => {
    const data = {
      lat: 1,
      long: 0,
    };

    return callback(data);
  }, 2000);
};

GeoCode("amman", (data) => {
  console.log(data);
});
