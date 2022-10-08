
import './App.css';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Countdown from './components/Timer';


function App() {

  const [questions, setQuestions] = useState([ 
  {
      question:"Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
  },
  {
      question:"Css Stands For _______________________",
      options: [
          "Casecading Style Sheet",
          "Java",
          "Ram",
          "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
  },
  {
      question:"Js Stands For _______________________",
      options: [
          "Java Style",
          "Java Script",
          "Script",
          "Script Src"
      ],
      correctAns: "Java Script",
  },
  {
      question:"Dom Stands For _______________________",
      options: [
          "Document Object Model",
          "html",
          "Css",
          "Java"
      ],
      correctAns: "Document Object Model",
  },
  {
      question:"Ram Stands For _______________________",
      options: [
          "Read Only Memory",
          "Dom",
          "Random Acccess Memory",
          "For Pc"
      ],
      correctAns: "Random Acccess Memory",
  },
  {
      question:"Rom Stands For _______________________",
      options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
  },

  ]);
const [IndexNumber, setIndexNumber] = useState(0)
const [score, setScore] = useState(0)
const [showResult, setShowResult] = useState(false)



let checkQuestion = (a,b) => {
    console.log(a,b);
    if(a==b){
    setScore (score + 1);
    }
if (IndexNumber + 1 == questions.length) {
    setShowResult(true)
}else{
       setIndexNumber (IndexNumber + 1);
} 
};


let timeover = () =>{
setShowResult(true);
}



  return (
    <div className="App">
   
 {  showResult ? <h1> Your percentage is {(score / questions.length)* 100} <br/>  <img src="https://images.unsplash.com/photo-1581574919402-5b7d733224d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/> </h1> : <Box> 



<Box sx = {{padding:1,
backgroundColor:" orange",
}} > 
<Countdown  func= {timeover} />
</Box> 

<Box > 
    <img className="que"  src ="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 "></img>
     </Box>



    <Box sx = {{padding:1, margin:5}}>
    <Typography variants="h6"> Questions # {IndexNumber + 1} / {questions.length} </Typography>
    </Box>
<Box> 
<Typography variants="h5"> {questions[IndexNumber].question} </Typography>
</Box>

<Box> 

<Grid container   >
{questions[IndexNumber].options.map((x,i) => (
<Grid key = {i}  item md = {6}> 
<Chip sx = {{ margin:3, backgroundColor: "orange"}} onClick = {()=> checkQuestion(x, questions[IndexNumber].correctAns)} 
label= {x} />
</Grid>
))}

</Grid>
</Box>

  {/* <Button variant="contained"> Next </Button> */}
  {/* //box used as div */}
{/* <Box> 
    <Chip  onClick = {()=>{}}   label="Next" color="primary" />
</Box> */}

</Box>
   }
    </div>
  );
}

export default App;
