var words=["Cat","Dog","Pig","Chick","Deer","Rat"];
var randomWords=words[Math.floor((Math.random() * words.length))];
var answer=[];
var count;
    var input=document.getElementById(letter)
/*randomWordsValue(randomWords);
wordCheck()*/
input.addEventListener('onchange',function(event)
{
function randomWordsValue(value){
    
     
    for(var i=0;i<randomWords.length;i++)

    {
        answer[i]="_";
    }
    var guesses=answer.join(" ");
    console.log(guesses);

}



function wordCheck()
{
    
    
    var letter=input.value;
        for(var i=0;i<randomWords.length;i++)

        {
            //var letter=prompt("Enter a Letter");
            if(randomWords[i]===letter)
            {
                answer[i]=letter;
            }
        }
        count++;
    
    console.log("No Of Clicks"+count);
    var result=answer.join( " " );
    console.log(result);

}
});
//randomWords(randomWords);

