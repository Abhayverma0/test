const questions = [
  "What is your favorite way to initiate intimacy?",
  "Have you ever tried roleplaying a fantasy? Which one?",
  "What is your favorite sexual position?",
  "What is your favorite part of my body?",
  "Have you ever tried sexting? How did it go?",
  "What is your favorite type of lingerie on me?",
  "Have you ever watched porn together?",
  "What is your favorite sex toy?",
  "What is your favorite time of day for intimacy?",
  "What is your favorite romantic gesture?",
  "Have you ever written me a love letter?",
  "What is your favorite date night activity?",
  "What is your favorite romantic movie?",
  "Have you ever dedicated a song to me?",
  "What is your favorite way to express love?",
  "What is your favorite romantic restaurant?",
  "What would be your favorite playful activity to do together?",
  "What is your favorite board game to play together?",
  "What is your favorite playful nickname for me?",
  "What is your favorite playful prank to play on me?",
  "What is your favorite playful way to tease me?",
  "If you could be any character from a book, who would you be and why?",
  "What is your favorite roleplay scenario?",
  "If you could have a romantic dinner anywhere in the world, where would it be?",
  "If you could have a romantic getaway, where would it be?",
  "What is your favorite way to communicate with me?",
  "What is your favorite way to show affection?",
  "What is your favorite way to spend quality time together?",
  "What is your favorite way to support each other?",
  "What is your favorite way to keep the spark alive?",
  "Have you ever tried bondage?",
  "What is your favorite type of foreplay?",
  "Have you ever tried sensory deprivation?",
  "What is your favorite type of massage?",
  "Have you ever tried temperature play?",
  "What is your favorite type of lubricant?",
  "Have you ever tried edging?",
  "What is your favorite type of orgasm?",
  "Have you ever tried sensual domination?",
  "What is your favorite type of roleplay?",
  "Have you ever tried a golden shower?",
  "What is your favorite type of fetish?",
  "Have you ever tried fisting?",
  "What is your favorite type of sensation play?",
  "Have you ever tried electrostimulation?",
  "What is your favorite type of impact play?",
  "Have you ever tried wax play?",
  "What is your favorite type of breath play?",
  "Have you ever tried knife play?",
  "What is your favorite type of humiliationplay?",
  "Have you ever tried age play?",
  "What is your favorite type of pet play?",
  "Have you ever tried medical play?",
  "What is your favorite type of mind play?",
  "Have you ever tried consensual non-consent?",
  "What is your favorite type of power exchange?",
  "Have you ever tried group sex?",
  "What is your favorite type of public play?",
  "Have you ever tried exhibitionism?",
  "What is your favorite type of voyeurism?",
  "Have you ever tried cuckolding?",
  "What is your favorite type of cross-dressing?",
  "Have you ever tried gender play?",
  "What is your favorite type of size play?",
  "Have you ever tried inflation?",
  "What is your favorite type of piercing play?",
  "Have you ever tried blood play?",
  "What is your favorite type of scarification?",
  "Have you ever tried branding?",
  "What is your favorite type of mummification?",
  "Have you ever tried sensory deprivation?",
  "What is your favorite type of predicament bondage?",
  "Have you ever tried suspension bondage?",
  "What is your favorite type of self-bondage?",
  "Have you ever tried orgasm denial?",
  "What is your favorite type of chastity play?",
  "Have you ever tried cock and ball torture?",
  "What is your favorite type of figging?",
  "Have you ever tried sounding?",
  "What is your favorite type of urethral play?",
  "Have you ever tried pegging?",
  "What is your favorite type of strap-on play?",
  "Have you ever tried double penetration?",
  "What is your favorite type of anal play?",
  "Have you ever tried prostate massage?",
  "What is your favorite type of nipple play?",
  "Have you ever tried breast play?",
  "What is your favorite type of face slapping?",
  "Have you ever tried hair pulling?",
  "What is your favorite type of spanking?",
  "Have you ever tried caning?",
  "What is your favorite type of flogging?",
  "Have you ever tried whipping?",
  "What is your favorite type of paddling?",
  "Have you ever tried caning?",
  "What is your favorite type of crop play?",
  "Have you ever tried riding crop play?",
  "What is your favorite type of bullwhip play?",
  "Have you ever tried singletail play?",
  "What is your favorite type of flogger play?",
  "Have you ever tried dragon tail play?",
  "What is your favorite type of cat o' nine tails play?",
  "Have you ever tried rope play?",
  "What is your favorite type of shibari?",
  "Have you ever tried kinbaku?",
  "What is your favorite type of suspension?",
  "Have you ever tried predicament bondage?",
  "What is your favorite type of self-suspension?",
  "Have you ever tried fire play?",
  "What is your favorite type of wax play?",
  "Have you ever tried knife play?",
  "What is your favorite type of blood play?",
  "Have you ever tried scarification?",
  "What is your favorite type of branding?",
  "Have you ever tried mummification?",
  "What is your favorite type of sensory deprivation?",
  "Have you ever tried predicament bondage?",
  "What is your favorite type of suspension bondage?",
  "Have you ever tried self-bondage?",
  "What is your favorite type of orgasm denial?",
  "Have you ever tried chastity play?",
  "What is your favorite type of cock and ball torture?",
  "Have you ever tried figging?",
  "What is your favorite type of sounding?",
  "Have you ever tried urethral play?",
  "What is your favorite type of pegging?",
  "Have you ever tried strap-on play?",
  "What is your favorite type of double penetration?",
  "Have you ever tried anal play?",
  "What is your favorite type of prostate massage?",
  "Have you ever tried nipple play?",
  "What is your favorite type of breast play?",
  "Have you ever tried face slapping?",
  "What is your favorite type of hair pulling?",
  "Have you ever tried spanking?",
  "What is your favorite type of caning?",
  "Have you ever tried flogging?",
  "What is your favorite type of whipping?",
  "Have you ever tried paddling?",
  "What is your favorite type of caning?",
  "Have you ever tried crop play?",
  "What is your favorite type of riding crop play?",
  "Have you ever tried bullwhip play?",
  "What is your favorite type of singletail play?",
  "Have you ever tried flogger play?",
  "What is your favorite type of dragon tail play?",
  "Have you ever tried cat o' nine tails play?",
  "What is your favorite type of rope play?",
  "Have you ever tried shibari?",
  "What is your favorite type of kinbaku?",
  "Have you ever tried suspension?",
  "What is your favorite type of predicament bondage?",
  "Have you ever tried self-suspension?",
  "What is your favorite type of fire play?",
  "Have you ever tried wax play?",
  "What is your favorite type of knife play?",
  "Have you ever tried blood play?",
  "What is your favorite type of scarification?",
  "Have you ever tried branding?",
  "What is your favorite type of mummification?",
  "Have you ever tried sensory deprivation?",
  "What is your favorite type of predicament bondage?",
  "Have you ever tried suspension bondage?",
  "What is your favorite type of self-bondage?",
  "Have you ever tried orgasm denial?",
  "What is your favorite type of chastity play?",
  "Have you ever tried cock and ball torture?",
  "What is your favorite type of figging?",
  "Have you ever tried sounding?",
  "What is your favorite type of urethral play?",
  "Have you ever tried pegging?",
  "What is your favorite type of strap-on play?",
  "Have you ever tried double penetration?",
  "What is your favorite type of anal play?",
  "Have you ever tried prostate massage?",
  "What is your favorite type of nipple play?",
  "Have you ever tried breast play?",
  "What is your favorite type of face slapping?",
  "Have you ever tried hair pulling?",
  "What is your favorite type of spanking?",
  "Have you ever tried caning?",
  "What is your favorite type of flogging?",
  "Have you ever tried whipping?",
  "What is your favorite type of paddling?",
  "Have you ever tried caning?",
  "What is your favorite type of crop play?",
  "Have you ever tried riding crop play?",
  "What is your favorite type of bullwhip play?",
  "Have you ever tried singletail play?",
  "What is your favorite type of flogger play?",
  "Have you ever tried dragon tail play?",
  "What is your favorite type of cat o' nine tails play?",
  "Have you ever tried rope play?",
  "What is your favorite type of shibari?",
  "Have you ever tried kinbaku?",
  "What is your favorite type of suspension?",
  "Have you ever tried predicament bondage?",
  "What is your favorite type of self-suspension?",
  "Have you ever tried fire play?",
  "What is your favorite type of wax play?",
  "Have you ever tried knife play?",
  "What is your favorite type of blood play?",
  "Have you ever tried scarification?",
  "What is your favorite type of branding?",
  "Have you ever tried mummification?",
  "What is your favorite type of sensory deprivation?",
];

function drawQuestion() {
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerText = randomQuestion;
}
drawQuestion();
