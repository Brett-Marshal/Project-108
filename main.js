function classification_starter()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZPbIiVQno/model.json", ModelLoaded)
}

function ModelLoaded() 
{
    classifier.classify(gotResults);
}

function gotResults(error, result)
{
    if (error)
    {
        console.log(error);
    }
     else
    {
        console.log(result);

        rgb_r = Math.floor(Math.random() * 255) + 1;
        rgb_g = Math.floor(Math.random() * 255) + 1;
        rgb_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";
        document.getElementById("result_accuracy").style.color = "rgb(" + rgb_r + "," + rgb_g + "," + rgb_b + ")";

        document.getElementById("result_label").innerHTML = "I can hear : " + result[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy : " + (result[0].confidence * 100).toFixed(3) + "%";
    }

    img = document.getElementById("gif");

    if (result[0].label == "Background Noise")
    {
        img.src = "hearing.gif";
    }
    else if (result[0].label == "Praying Mantis Sound")
    {
        img.src = "Mantis.gif";
    }
    else if (result[0].label == "Cat")
    {
        img.src = "cat.gif";
    }
    else if(result[0] == "Dog")
    {
        img.src = "dog.gif";
    }
}