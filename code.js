// Declaring variables
var career;
var careerRequest;
var careerRequestReason;
var response;

// Hides error text from user's view
hideElement("errorText");
hideElement("errorRequestText");

// Takes user from opening screen to options screen
onEvent("startButton", "click", function(){
  setScreen("optionScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Back buttons
onEvent("backButton1", "click", function(){
  setScreen("openingScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton2", "click", function(){
  setScreen("optionScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton3", "click", function(){
  setScreen("optionScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton4", "click", function(){
  setScreen("optionScreen");
  hideElement("errorText");
  setText("careerDropdown", "Choose a career to explore...");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton5", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton7", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton9", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton10", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton11", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton12", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton16", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("backButton17", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
  setText("careerRequestInput", "");
  setText("careerReasonInput", "");
  hideElement("errorRequestText");
});

onEvent("backButton18", "click", function(){
  setScreen("archQuizScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Takes user from options screen to other screens
onEvent("aboutButton", "click", function(){
  setScreen("aboutWISHScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("eventsButton", "click", function(){
  setScreen("eventsScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

setText("opportunitiesLabel", "- Career Exploration Days \n - STEM Conferences \n - Local and National Hackathons \n - School Clubs (Robotics, Science Olympiad, Math Clubs, Computer Clubs, etc.) \n - STEM courses offered at school \n - Women in STEM Conventions");

onEvent("careerButton", "click", function(){
  setScreen("careersScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Takes users from careers screen to specific career exploration screens
onEvent("goButton", "click", function(){
  career = getText("careerDropdown");
  if (career == "Mechanical Engineering") {
    setScreen("mechScreen1");
  } else if (career == "Architecture") {
    setScreen("architectureScreen1");
  } else if (career == "Computer Science") {
    setScreen("compSciScreen1");
  } else if (career == "Aerospace Engineering"){
    setScreen("aerospaceScreen1");
  } else if (career == "Chemical Engineering") {
    setScreen("chemScreen1");
  } else if (career == "Biology") {
    setScreen("biologyScreen1");
  } else if (career == "Civil Engineering") {
    setScreen("civilScreen1");
  } else {
    showElement("errorText");
  }
  
  if (career != "Choose a career to explore...") {
    hideElement("errorText");
  } 
  setText("careerDropdown", "Choose a career to explore...");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Request a career form
onEvent("requestFormButton", "click", function(){
  setScreen("requestFormScreen");
  hideElement("errorText");
  setText("careerDropdown", "Choose a career to explore...");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("submitRequestButton", "click", function(){
  careerRequest = getText("careerRequestInput");
  careerRequestReason = getText("careerReasonInput");
  if (careerRequest == "" || careerRequestReason == "") {
    showElement("errorRequestText");
  } else {
    createRecordSync("Request a Career", {Request: careerRequest, Reason: careerRequestReason});
    setScreen("careersScreen");
    setText("careerRequestInput", "");
    setText("careerReasonInput", "");
    hideElement("errorRequestText");
  }
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Aerospace Engineering
onEvent("aeroNextButton1", "click", function(){
  setScreen("aerospaceScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroNextButton2", "click", function(){
  setScreen("aerospaceScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroNextButton3", "click", function(){
  setScreen("aerospaceScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroBackButton1", "click", function(){
  setScreen("aerospaceScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroBackButton2", "click", function(){
  setScreen("aerospaceScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroBackButton3", "click", function(){
  setScreen("aerospaceScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroBackButton4", "click", function(){
  setScreen("aerospaceScreen4");
  setText("aeroDatesDropdown", "Choose...");
  setText("aeroWomenDropdown", "Choose...");
  setText("aeroMathDropdown", "Choose...");
  setText("aeroInventionsDropdown", "Choose...");
  hideElement("aeroQuizFinished");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

var aeroQuiz = ["When was the first satellite sent to space?", "Who was the first woman to work at NASA?", "Which of these inventions were made by aerospace engineers?", "Which type of math is most useful in aerospace engineering?"];
onEvent("aeroQuizStartButton", "click", function() {
  setScreen("aerospaceQuizScreen1");
  questionGenerator(aeroQuiz);
  answerMechanism(ranQuestion);
  setText("aeroQuizResultLabel", "Begin your quiz!");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroQuizNextButton", "click", function() {
  questionGenerator(aeroQuiz, aeroQuiz.length);
  answerMechanism(ranQuestion);
  resetDropdowns();
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("aeroQuizSubmitButton", "click", function () {
  if (ranQuestion == "When was the first satellite sent to space?") {
    response = getText("aeroDatesDropdown");
  } else if (ranQuestion == "Who was the first woman to work at NASA?") {
    response = getText("aeroWomenDropdown");
  } else if (ranQuestion == "Which of these inventions were made by aerospace engineers?") {
    response = getText("aeroInventionsDropdown");
  } else {
    response = getText("aeroMathDropdown");
  }
  questionResponses(ranQuestion, response);
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Architecture
onEvent("archNextButton", "click", function(){
  setScreen("architectureScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archBackButton1", "click", function(){
  setScreen("architectureScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archBackButton2", "click", function(){
  setScreen("architectureScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archNextButton2", "click", function(){
  setScreen("architectureScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archBackButton3", "click", function(){
  setScreen("architectureScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archNextButton3", "click", function(){
  setScreen("architectureScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archBackButton4", "click", function(){
  setScreen("architectureScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("archQuizButton", "click", function(){
  setScreen("archQuizScreen");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

var creativeBox;
var artisticBox;
var hardWorkBox;
var flexibleBox;
var easyGoingBox;
onEvent("archQuizSubmitButton", "click", function(){
  setScreen("archQuizScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
  creativeBox = getChecked("creativeCheckBox");
  artisticBox = getChecked("artisticCheckBox");
  hardWorkBox = getChecked("hardWorkCheckBox");
  flexibleBox = getChecked("flexibleCheckBox");
  easyGoingBox = getChecked("easyCheckBox");
  if(creativeBox){
    setProperty("creativeResult", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("creativeResult", "background-color", rgb(253, 54, 48));
  }
  
  if(artisticBox){
    setProperty("artisticResult", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("artisticResult", "background-color", rgb(253, 54, 48));
  }
  
  if(hardWorkBox){
    setProperty("hardWorkResult", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("hardWorkResult", "background-color", rgb(253, 54, 48));
  }
  
  if(flexibleBox){
    setProperty("flexibleResult", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("flexibleResult", "background-color", rgb(253, 54, 48));
  }
  
  if(easyGoingBox){
    setProperty("easyGoingResult", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("easyGoingResult", "background-color", rgb(253, 54, 48));
  }
});


// Biology 
onEvent("bioNextButton1", "click", function(){
  setScreen("biologyScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioBackButton1", "click", function(){
  setScreen("biologyScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioNextButton2", "click", function(){
  setScreen("biologyScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioBackButton2", "click", function(){
  setScreen("biologyScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioBackButton3", "click", function(){
  setScreen("biologyScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioNextButton3", "click", function(){
  setScreen("biologyScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioBackButton4", "click", function(){
  setScreen("biologyScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

setText("bioCollegeLabel", "- Harvard University \n - Massachusetts Institute of Technology \n - Stanford University \n - University of California, Berkeley \n - University of California, San Francisco");

var biologyFacts = ["It is impossible for plants to grow hair.", "The color of a reptile can help keep it warm.", "It is easy for bats to transfer disease to humans, and vice versa.", "The largest organism on Earth is a blue whale.", "Monarch butterflies are brightly colored to scare away predators."];
var biologyFactsDescriptions = ["FALSE! The hair-like features of a plant are called trichomes. They protect the plant from droughts, excessive sun exposure, and animals!", "TRUE! Reptiles have cells called melanocytes that turn darker colors when the body is in need of warmth. Darker colors absorb more heat from the sun.", "TRUE! Bats are similar mammals to humans, making it easier for disease to pass between the two species.", "FALSE! The largest organism on Earth is actually fungus! Fungus is much larger than any whale or tree in existence on Earth.", "TRUE! The bright colors of a monarch butterfly’s wings help scare away any predators that are thinking of attacking the insects."];
var bioFact;
onEvent("bioFactsStartButton", "click", function(){
  setScreen("biologyFactsScreen");
  factsGenerator(biologyFacts);
  setProperty("bioFactDescriptionLabel", "background-color", rgb(238, 163, 249));
  setText("bioFactDescriptionLabel", "");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioNextFactButton", "click", function(){
  factsGenerator(biologyFacts);
  setText("bioFactDescriptionLabel", "");
  setProperty("bioFactDescriptionLabel", "background-color", rgb(238, 163, 249));
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioFalseButton", "click", function(){
  bioFact = getText("bioFactsLabel");
  factsAnswers(biologyFactsDescriptions);
  if ((bioFact == "It is impossible for plants to grow hair.") || (bioFact == "The largest organism on Earth is a blue whale.")) {
    setProperty("bioFactDescriptionLabel", "background-color", rgb(48, 228, 70));
  } else {
    setProperty("bioFactDescriptionLabel", "background-color", rgb(249, 90, 90));
  }
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("bioTrueButton", "click", function(){
  bioFact = getText("bioFactsLabel");
  factsAnswers(biologyFactsDescriptions);
  if ((bioFact == "It is impossible for plants to grow hair.") || (bioFact == "The largest organism on Earth is a blue whale.")) {
    setProperty("bioFactDescriptionLabel", "background-color", rgb(249, 90, 90));
  } else {
    setProperty("bioFactDescriptionLabel", "background-color", rgb(48, 228, 70));
  }
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Computer Science
onEvent("compNextButton1", "click", function(){
  setScreen("compSciScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compBackButton1", "click", function(){
  setScreen("compSciScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compNextButton2", "click", function(){
  setScreen("compSciScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compBackButton2", "click", function(){
  setScreen("compSciScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compNextButton3", "click", function(){
  setScreen("compSciScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compBackButton3", "click", function(){
  setScreen("compSciScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compBackButton4", "click", function(){
  setScreen("compSciScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

setText("womenCompSciLabel1", "- Radia Perlman: Created the “spanning tree protocol,” which improved the way networks are able to communicate with each other \n - Sister Mary Kenneth Keller: First woman in the US to get a Ph.D. in computer science, which inspired many women to follow in her footsteps \n - Annie Easley: Computer programmer for NASA, and created code that made batteries for hybrid vehicles a possibility \n - Jeannette Wing: Wrote an essay called “Computational Thinking,” which proved that computer science logic can be used to problem-solve in other career fields");
setText("compSciColleges", "- Massachusetts Institute of Technology \n - Stanford University \n - University of California, Berkeley \n - Carnegie Mellon University \n - University of Illinois, Urbana-Champaign");

onEvent("compSciQuizButton", "click", function() {
  setScreen("compSciQuizScreen");
  questionGenerator(compQuiz);
  answerMechanism(ranQuestion);
  setText("compQuizResultLabel", "Begin your quiz!");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compQuizNewButton", "click", function() {
  questionGenerator(compQuiz, compQuiz.length);
  answerMechanism(ranQuestion);
  resetDropdowns();
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("compQuizSubmitButton", "click", function () {
  if (ranQuestion == "About how many programming languages exist today?") {
    response = getText("compLangNumDropdown");
  } else if (ranQuestion == "True or False: The first computer programmer in the world was a male mathematics professor.") {
    response = getText("compFirstProDropdown");
  } else if (ranQuestion == "How was computer science utilized during WWII?") {
    response = getText("compWWIIDropdown");
  } else if (ranQuestion == "What was the name of the first programming language?") {
    response = getText("compFirstLangDropdown");
  } else {
    response = getText("compImportantDropdown");
  }
  questionResponses(ranQuestion, response);
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

var compQuiz = ["About how many programming languages exist today?", "True or False: The first computer programmer in the world was a male mathematics professor.", "How was computer science utilized during WWII?", "What was the name of the first programming language?", "True or False: The most important part about computer science is learning different programming languages."];


// Mechanical Engineering 

onEvent("mechNextButton1", "click", function() {
  setScreen("mechScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechBackButton1", "click", function() {
  setScreen("mechScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechNextButton2", "click", function() {
  setScreen("mechScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechBackButton2", "click", function() {
  setScreen("mechScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechNextButton3", "click", function() {
  setScreen("mechScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechBackButton3", "click", function() {
  setScreen("mechScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechBackButton4", "click", function() {
  setScreen("mechScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechQuizStartButton", "click", function() {
  setScreen("mechQuizScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechBackButton5", "click", function() {
  setScreen("mechQuizScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("mechQuizSubmitButton", "click", function() {
  setScreen("mechQuizScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
  var mechProblemBox = getChecked("mechProblemBox");
  var mechMathBox = getChecked("mechMathBox");
  var mechBuildingBox = getChecked("mechBuildingBox");
  var mechAttentionBox = getChecked("mechAttentionBox");
  var mechCommunicationBox = getChecked("mechCommunicationBox");
  if(mechProblemBox){
    setProperty("mechProblemResultLabel", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("mechProblemResultLabel", "background-color", rgb(253, 54, 48));
  }
  
  if(mechMathBox){
    setProperty("mechMathResultLabel", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("mechMathResultLabel", "background-color", rgb(253, 54, 48));
  }
  
  if(mechBuildingBox){
    setProperty("mechBuildingResultLabel", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("mechBuildingResultLabel", "background-color", rgb(253, 54, 48));
  }
  
  if(mechAttentionBox){
    setProperty("mechAttentionResultLabel", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("mechAttentionResultLabel", "background-color", rgb(253, 54, 48));
  }
  
  if(mechCommunicationBox){
    setProperty("mechCommunicationResultLabel", "background-color", rgb(20, 243, 73));
  } else {
    setProperty("mechCommunicationResultLabel", "background-color", rgb(253, 54, 48));
  }
});

setText("mechWomenLabel2", "- Mary Anderson: Designed and built the windshield wipers for automobiles \n - Bertha Benz: Built the first ever brake pads when her car’s wooden brakes stopped working \n - Dorothee Pullinger: Helped build and create the very first automobiles that were proportioned to a woman’s size and clothes \n - Mimi Vandermolen: Designed and built the revolutionary Ford Taurus, which had new mechanical features like dashboard controls and air conditioning dials");
setText("mechCollegeLabel2", "- Massachusetts Institute of Technology \n - Stanford University \n - California Institute of Technology \n - University of California, Berkeley \n - Georgia Institute of Technology");


// Chemical Engineering
onEvent("chemNextButton1", "click", function() {
  setScreen("chemScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemBackButton1", "click", function() {
  setScreen("chemScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemBackButton2", "click", function() {
  setScreen("chemScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemNextButton2", "click", function() {
  setScreen("chemScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemBackButton3", "click", function() {
  setScreen("chemScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemNextButton3", "click", function() {
  setScreen("chemScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemBackButton4", "click", function() {
  setScreen("chemScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemGameStartButton", "click", function() {
  setScreen("chemFactsScreen");
  factsGenerator(chemicalFacts);
  setProperty("chemFactDescriptionLabel", "background-color", rgb(238, 163, 249));
  setText("chemFactDescriptionLabel", "");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

setText("chemWomenLabel2", "- Carolyn Bertozzi: Helped design and create modern artificial bones and contact lenses that respond better to the human body than previous designs \n - Hazel Bishop: Used her knowledge of chemistry to invent the commercial product of smear-proof lipstick \n - Edith Flanigen: Designed a process to make synthetic emeralds, which have been used for jewelry and microwave lasers \n - Alice Hamilton: Performed the first investigations on the safety of industrial workplaces, and made discoveries that would eventually result in the creation of many workplace safety laws");
setText("chemCollegeLabel2", "- Massachusetts Institute of Technology \n - Georgia Institute of Technology \n - Stanford University \n - University of California, Berkeley \n - University of Delaware");

var chemicalFacts = ["Chemical engineering and economics are never intertwined.", "Chemical engineering is important in the business of agriculture.", "Chemical engineers are required to follow a step-by-step process for innovation.", "Chemical engineers work in manufacturing, marketing, research, labs, and other innovative fields.", "Energy corporations cannot benefit from chemical engineers."];
var chemicalFactsDescriptions = ["FALSE: Chemical engineers work to tailor their inventions and solutions to be economically sustainable for large companies!", "TRUE: Chemical engineers create formulas for fertilizers that increase the amount of crops grown in a short period of time!", "FALSE: Companies must give chemical engineers some freedom to let their creativity run wild. Creativity encourages new ideas that have potential to become a new sustainable product.", "TRUE: There are many jobs offered on the more analytical side of innovation as well as on the more creative side of innovation for chemical engineers!", "FALSE: Chemical engineers help create more sustainable fuels, more durable and environmentally friendly lightbulbs, lighter materials for transportation vehicles, and so much more!"];
onEvent("chemNewFactButton", "click", function() {
  factsGenerator(chemicalFacts);
  setText("chemFactDescriptionLabel", "");
  setProperty("chemFactDescriptionLabel", "background-color", rgb(238, 163, 249));
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

var chemFact;
onEvent("chemFalseButton", "click", function() {
  chemFact = getText("chemFactLabel");
  factsAnswers(chemicalFactsDescriptions);
  if ((chemFact == "Chemical engineering is important in the business of agriculture.") || (chemFact == "Chemical engineers work in manufacturing, marketing, research, labs, and other innovative fields.")) {
    setProperty("chemFactDescriptionLabel", "background-color", rgb(249, 90, 90));
  } else {
    setProperty("chemFactDescriptionLabel", "background-color", rgb(48, 228, 70));
  }
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("chemTrueButton", "click", function() {
  chemFact = getText("chemFactLabel");
  factsAnswers(chemicalFactsDescriptions);
  if ((chemFact == "Chemical engineering is important in the business of agriculture.") || (chemFact == "Chemical engineers work in manufacturing, marketing, research, labs, and other innovative fields.")) {
    setProperty("chemFactDescriptionLabel", "background-color", rgb(48, 228, 70));
  } else {
    setProperty("chemFactDescriptionLabel", "background-color", rgb(249, 90, 90));
  }
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});


// Civil Engineering
onEvent("civilNextButton1", "click", function() {
  setScreen("civilScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilBackButton1", "click", function() {
  setScreen("civilScreen1");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilNextButton2", "click", function() {
  setScreen("civilScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilBackButton2", "click", function() {
  setScreen("civilScreen2");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilNextButton3", "click", function() {
  setScreen("civilScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilBackButton3", "click", function() {
  setScreen("civilScreen3");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilBackButton4", "click", function() {
  setScreen("civilScreen4");
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilStartQuizButton", "click", function() {
  setScreen("civilQuizScreen");
  setText("civilQuizResultLabel", "Begin your quiz!");
  questionGenerator(civilQuiz);
  resetDropdowns();
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilQuizNewButton", "click", function() {
  questionGenerator(civilQuiz, civilQuiz.length);
  answerMechanism(ranQuestion);
  resetDropdowns();
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

onEvent("civilQuizSubmitButton", "click", function() {
  if (ranQuestion == "How have civil engineers influenced water slides?") {
    response = getText("civilWaterslideDropdown");
  } else if (ranQuestion == "Who is considered the father of American civil engineering?") {
    response = getText("civilFatherDropdown");
  } else if (ranQuestion == "What was the first product of civil engineering?") {
    response = getText("civilProductDropdown");
  } else if (ranQuestion == "When was the term 'civil engineering' first put into use?") {
    response = getText("civilTermDropdown");
  } else {
    response = getText("civilRollerDropdown");
  }
  questionResponses(ranQuestion, response);
  playSound("assets/category_app/app_button_slide_cool_2.mp3");
});

setText("civilWomenLabel", "- Emily Roebling: Oversaw the building of the Brooklyn Bridge and learned how to calculate stress on materials \n - Elsie Eaves: Worked for the Colorado State Highway Department, US Bureau of Public Roads, and many other companies, and was the first woman to fully join the American Society of Civil Engineers \n - Nora Stanton: Worked as a civil engineer for the Radley Steel Construction Company as well as the New York Public Service Commission");
setText("civilCollegesLabel", "- University of California, Berkeley \n - University of Illinois, Urbana-Champaign \n - Georgia Institute of Technology \n - University of Texas, Austin (Cockrell) \n - Stanford University");
var civilQuiz = ["How have civil engineers influenced water slides?", "Who is considered the father of American civil engineering?", "What was the first product of civil engineering?", "When was the term 'civil engineering' first put into use?", "True or False: Civil engineering is important in the assembly of rollercoasters."];








// FUNCTIONS
var ranNum;
var ranQuestion;
function questionGenerator (list, count) {
  hideElement("compQuizFinished");
  hideElement("aeroQuizFinished");
  hideElement("civilQuizFinished");
  if (count == 0) {
    if (list == compQuiz) {
      compQuiz = ["About how many programming languages exist today?", "True or False: The first computer programmer in the world was a male mathematics professor.", "How was computer science utilized during WWII?", "What was the name of the first programming language?", "True or False: The most important part about computer science is learning different programming languages."];
      showElement("compQuizFinished");
      list = compQuiz;
    } else if (list == aeroQuiz) {
      aeroQuiz = ["When was the first satellite sent to space?", "Who was the first woman to work at NASA?", "Which of these inventions were made by aerospace engineers?", "Which type of math is most useful in aerospace engineering?"];
      showElement("aeroQuizFinished");
      list = aeroQuiz;
    } else if (list == civilQuiz) {
      civilQuiz = ["How have civil engineers influenced water slides?", "Who is considered the father of American civil engineering?", "What was the first product of civil engineering?", "When was the term 'civil engineering' first put into use?", "True or False: Civil engineering is important in the assembly of rollercoasters."];
      showElement("civilQuizFinished");
      list = civilQuiz;
    }
  }
  ranNum = randomNumber(0, list.length - 1);
  ranQuestion = list[ranNum];
  if (list == compQuiz) {
    setText("compSciQuizQuestions", ranQuestion);
  } else if (list == aeroQuiz) {
    setText("aeroQuizQuestionsLabel", ranQuestion);
  } else if (list == civilQuiz) {
    setText("civilQuizQuestionLabel", ranQuestion);
  }
  removeItem(list, ranNum);
  count = list.length;
}


function answerMechanism (question) {
  if (question == "When was the first satellite sent to space?"){
    showElement("aeroDatesDropdown");
    hideElement("aeroWomenDropdown");
    hideElement("aeroInventionsDropdown");
    hideElement("aeroMathDropdown");
  } else if (question == "Who was the first woman to work at NASA?"){
    showElement("aeroWomenDropdown");
    hideElement("aeroDatesDropdown");
    hideElement("aeroInventionsDropdown");
    hideElement("aeroMathDropdown");
  } else if (question == "Which of these inventions were made by aerospace engineers?"){
    showElement("aeroInventionsDropdown");
    hideElement("aeroWomenDropdown");
    hideElement("aeroDatesDropdown");
    hideElement("aeroMathDropdown");
  } else if (question == "Which type of math is most useful in aerospace engineering?"){
    showElement("aeroMathDropdown");
    hideElement("aeroInventionsDropdown");
    hideElement("aeroWomenDropdown");
    hideElement("aeroDatesDropdown");
  } else if (question == "About how many programming languages exist today?") {
    showElement("compLangNumDropdown");
    hideElement("compFirstProDropdown");
    hideElement("compWWIIDropdown");
    hideElement("compFirstLangDropdown");
    hideElement("compImportantDropdown");
  } else if (question == "True or False: The first computer programmer in the world was a male mathematics professor.") {
    showElement("compFirstProDropdown");
    hideElement("compLangNumDropdown");
    hideElement("compWWIIDropdown");
    hideElement("compFirstLangDropdown");
    hideElement("compImportantDropdown");
  } else if (question == "How was computer science utilized during WWII?") {
    showElement("compWWIIDropdown");
    hideElement("compFirstProDropdown");
    hideElement("compLangNumDropdown");
    hideElement("compFirstLangDropdown");
    hideElement("compImportantDropdown");
  } else if (question == "What was the name of the first programming language?") {
    showElement("compFirstLangDropdown");
    hideElement("compWWIIDropdown");
    hideElement("compLangNumDropdown");
    hideElement("compFirstProDropdown");
    hideElement("compImportantDropdown");
  } else if (question == "True or False: The most important part about computer science is learning different programming languages.") {
    showElement("compImportantDropdown");
    hideElement("compWWIIDropdown");
    hideElement("compFirstProDropdown");
    hideElement("compFirstLangDropdown");
    hideElement("compLangNumDropdown");
  } else if (question == "How have civil engineers influenced water slides?") {
    showElement("civilWaterslideDropdown");
    hideElement("civilFatherDropdown");
    hideElement("civilProductDropdown");
    hideElement("civilRollerDropdown");
    hideElement("civilTermDropdown");
  } else if (question == "Who is considered the father of American civil engineering?") {
    hideElement("civilWaterslideDropdown");
    showElement("civilFatherDropdown");
    hideElement("civilProductDropdown");
    hideElement("civilRollerDropdown");
    hideElement("civilTermDropdown");
  } else if (question == "What was the first product of civil engineering?") {
    hideElement("civilWaterslideDropdown");
    hideElement("civilFatherDropdown");
    showElement("civilProductDropdown");
    hideElement("civilRollerDropdown");
    hideElement("civilTermDropdown");
  } else if (question == "When was the term 'civil engineering' first put into use?") {
    hideElement("civilWaterslideDropdown");
    hideElement("civilFatherDropdown");
    hideElement("civilProductDropdown");
    hideElement("civilRollerDropdown");
    showElement("civilTermDropdown");
  } else if (question == "True or False: Civil engineering is important in the assembly of rollercoasters.") {
    hideElement("civilWaterslideDropdown");
    hideElement("civilFatherDropdown");
    hideElement("civilProductDropdown");
    showElement("civilRollerDropdown");
    hideElement("civilTermDropdown");
  }
}

function questionResponses(question, answer) {
  if (answer == "Choose..."){
    setText("aeroQuizResultLabel", "Choose your answer!");
    setText("compQuizResultLabel", "Choose your answer!");
    setText("civilQuizResultLabel", "Choose your answer!");
  } else if (question == "When was the first satellite sent to space?"){
    if (answer == "1957"){
      setText("aeroQuizResultLabel", "That's correct!");
    } else {
      setText("aeroQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "Who was the first woman to work at NASA?"){
    if (answer == "Pearl I. Young"){
      setText("aeroQuizResultLabel", "That's correct!");
    } else {
      setText("aeroQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "Which of these inventions were made by aerospace engineers?"){
    if (answer == "Enriched baby formula"){
      setText("aeroQuizResultLabel", "That's correct!");
    } else {
      setText("aeroQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "Which type of math is most useful in aerospace engineering?"){
    if (answer == "Calculus"){
      setText("aeroQuizResultLabel", "That's correct!");
    } else {
      setText("aeroQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "About how many programming languages exist today?") {
    if (answer == "700"){
      setText("compQuizResultLabel", "That's correct!");
    } else {
      setText("compQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "True or False: The first computer programmer in the world was a male mathematics professor.") {
    if (answer == "False") {
      setText("compQuizResultLabel", "That's correct! The first computer programmer was a female mathematician!");
    } else {
      setText("compQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "How was computer science utilized during WWII?") {
    if (answer == "Cracking the Enigma machine") {
      setText("compQuizResultLabel", "That's correct!");
    } else {
      setText("compQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "What was the name of the first programming language?") {
    if (answer == "FORTRAN") {
      setText("compQuizResultLabel", "That's correct!");
    } else {
      setText("compQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "True or False: The most important part about computer science is learning different programming languages.") {
    if (answer == "False") {
      setText("compQuizResultLabel", "That's correct!");
    } else {
      setText("compQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "How have civil engineers influenced water slides?") {
    if (answer == "Figured out correct flume to water ratio") {
      setText("civilQuizResultLabel", "That's correct! This discovery prevents people from getting stuck in waterslides!");
    } else {
      setText("civilQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "Who is considered the father of American civil engineering?") {
    if (answer == "Benjamin Wright") {
      setText("civilQuizResultLabel", "That's correct!");
    } else {
      setText("civilQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "What was the first product of civil engineering?") {
    if (answer == "Great Pyramid of Giza") {
      setText("civilQuizResultLabel", "That's correct! This product is also one of the Seven Wonders of the World!");
    } else {
      setText("civilQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "When was the term 'civil engineering' first put into use?") {
    if (answer == "1828") {
      setText("civilQuizResultLabel", "That's correct!");
    } else {
      setText("civilQuizResultLabel", "That's incorrect! Try again!");
    }
  } else if (question == "True or False: Civil engineering is important in the assembly of rollercoasters.") {
    if (answer == "True") {
      setText("civilQuizResultLabel", "That's correct!");
    } else {
      setText("civilQuizResultLabel", "That's incorrect! Try again!");
    }
  }
}

function resetDropdowns () {
  // Aerospace
  setText("aeroDatesDropdown", "Choose...");
  setText("aeroInventionsDropdown", "Choose...");
  setText("aeroWomenDropdown", "Choose...");
  setText("aeroMathDropdown", "Choose...");
  setText("aeroQuizResultLabel", "Choose your answer!");
  // Computer Science
  setText("compFirstLangDropdown", "Choose...");
  setText("compFirstProDropdown", "Choose...");
  setText("compWWIIDropdown", "Choose...");
  setText("compImportantDropdown", "Choose...");
  setText("compLangNumDropdown", "Choose...");
  setText("compQuizResultLabel", "Choose your answer!");
  // Civil Engineering
  setText("civilTermDropdown", "Choose...");
  setText("civilFatherDropdown", "Choose...");
  setText("civilRollerDropdown", "Choose...");
  setText("civilProductDropdown", "Choose...");
  setText("civilWaterslideDropdown", "Choose...");
}

var ranNumFact;
var factsCount;
function factsGenerator(list) {
  factsCount = list.length;
  if(factsCount == 0) {
    biologyFacts = ["It is impossible for plants to grow hair.", "The color of a reptile can help keep it warm.", "It is easy for bats to transfer disease to humans, and vice versa.", "The largest organism on Earth is a blue whale.", "Monarch butterflies are brightly colored to scare away predators."];
    showElement("bioFinishedMessage");
    chemicalFacts = ["Chemical engineering and economics are never intertwined.", "Chemical engineering is important in the business of agriculture.", "Chemical engineers are required to follow a step-by-step process for innovation.", "Chemical engineers work in manufacturing, marketing, research, laboratories, and other sections of the innovative process.", "Energy corporations cannot benefit from chemical engineers."];
    showElement("chemFinishLabel");
  } else {
    hideElement("bioFinishedMessage");
    hideElement("chemFinishLabel");
  }
  ranNumFact = randomNumber(0, list.length - 1);
  if (list == biologyFacts) {
    setText("bioFactsLabel", biologyFacts[ranNumFact]);
  } else {
    setText("chemFactLabel", chemicalFacts[ranNumFact]);
  }
  if (factsCount != 0) {
    removeItem(list, ranNumFact);
  }
}

var fact;
function factsAnswers(list) {
  if (list == biologyFactsDescriptions) {
    fact = getText("bioFactsLabel");
    if (fact == "It is impossible for plants to grow hair.") {
      setText("bioFactDescriptionLabel", list[0]);
    } else if (fact == "The color of a reptile can help keep it warm.") {
      setText("bioFactDescriptionLabel", list[1]);
    } else if (fact == "It is easy for bats to transfer disease to humans, and vice versa.") {
      setText("bioFactDescriptionLabel", list[2]);
    } else if (fact == "The largest organism on Earth is a blue whale.") {
      setText("bioFactDescriptionLabel", list[3]);
    } else {
      setText("bioFactDescriptionLabel", list[4]);
    }
  } else if (list == chemicalFactsDescriptions) {
    fact = getText("chemFactLabel");
      if (fact == "Chemical engineering and economics are never intertwined.") {
        setText("chemFactDescriptionLabel", list[0]);
      } else if (fact == "Chemical engineering is important in the business of agriculture.") {
        setText("chemFactDescriptionLabel", list[1]);
      } else if (fact == "Chemical engineers are required to follow a step-by-step process for innovation.") {
        setText("chemFactDescriptionLabel", list[2]);
      } else if (fact == "Chemical engineers work in manufacturing, marketing, research, labs, and other innovative fields.") {
        setText("chemFactDescriptionLabel", list[3]);
      } else {
        setText("chemFactDescriptionLabel", list[4]);
      }
    }
}


// RESEARCH SOURCES
/* 
https://blogs.nasa.gov/womenatnasa/tag/nasa-women-historical/#:~:text=In%201922%2C%20Pearl%20I.,women%20at%20Langley%20Research%20Center. 

https://www.nasa.gov/offices/oct/40-years-of-nasa-spinoff/enriched-baby-food 

https://lsa.umich.edu/eeb/news-events/all-news/science-fun-facts.html 

https://www.mastersindatascience.org/learning/what-is-computer-science/ 

https://www.computerscience.org/resources/most-influential-women-computer-science/ 

https://www.usnews.com/best-graduate-schools 

https://funtech.co.uk/latest/cool-facts-about-coding-programming 

https://www.mtu.edu/mechanical/engineering/ 

https://magazine.northeast.aaa.com/daily/life/cars-trucks/auto-history/women-auto-history/ 

https://www.acs.org/careers/chemical-sciences/areas/chemical-engineering.html 

https://www.thoughtco.com/famous-women-in-chemistry-609453

https://www.aiche.org/resources/publications/cep/2020/february/innovation-chemical-engineering  

https://www.goconstruct.org/construction-careers/what-jobs-are-right-for-me/civil-engineer/ 

https://constructible.trimble.com/construction-industry/10-innovative-women-who-changed-the-history-of-the-aec-industry 

https://masonandassociates.us/2020/01/fun-facts-about-civil-engineering/ 
*/





