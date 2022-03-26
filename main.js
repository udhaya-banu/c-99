var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    talk();
}
Webcam.attach("#camera");
function talk(){
    var synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
}
Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:90
});
cam=document.getElementById("camera");
