import React, { Component } from 'react'
import GibberishAndAnswer from '../GibberishAndAnswer/GibberishAndAnswer';

import gibberish from "../gibberishdb/gibbDB"
import {navigate} from 'gatsby';


import ReactDOM from'react-dom'



// export default function GibberishGen(){}
export default class GibberishGen extends Component {
  //get random numbers
  // let first = Math.floor(Math.random() * gibberish.length)
   first = (Math.floor(Math.random() * gibberish.length)).toString();
  //state
  state = {
    gibb: gibberish[parseInt(this.first)].gibb,

    answer: gibberish[parseInt(this.first)].answer,
    guess: ''

  }
  submitData = this.submitData.bind(this)
  inputData = event => {
    this.setState({ guess: event.target.value });
  };
  submitData(event) {
    event.preventDefault();
    const { guess, answer } = this.state;
    var lower = guess.toLowerCase()
    const matches = lower.replace(/\s+/g, '').replace(/[0-9]/g, '') === answer;

   if (matches){
    navigate('/matches');
  }
  else{
    var labeltext = document.getElementById("labeltext");
    const text = ['Awwn, Try again', 'So close, yet so far', 
    'You can do it, keep trying!', "It's not as hard as it looks", "Don't give up",
    "Don't think too much about it"]

    labeltext.innerHTML = text[Math.floor(Math.random() * text.length)];
  }
  }

  //generate diffrent gibberish function
  generateRandomGibb = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * gibberish.length)

    let newgibb = gibberish[num];

    //update state
    this.setState({
      gibb: newgibb.gibb,
     
      answer: newgibb.answer
    })

    this.shufflegibbs(gibberish)

  }

  //shuufle quotes function
  shufflegibbs = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
  
    return (
      <div >
        
        

        <GibberishAndAnswer
          generateRandomGibb={this.generateRandomGibb}
          gibb={this.state}
          // onClick={onClick}
          />
        
                 
               
      
          <form onSubmit={this.submitData}>
          <label className='hiddenlabel' for="Guess">Guess</label>
  <br/>

          <input type="text" id='guess' name="guess" onChange={this.inputData}/>
          <br/>
          <button type="submit">Submit</button>
           <br/>
          <label id='labeltext' name="labeltext"></label>
        </form>

        
      </div>
    )
  }
}
// const Results = (props) => (<div className='Results'>
//   <form onSubmit={this.submitData}>
//           <label className='hiddenlabel' for="Guess">Guess</label>
//   <br/>

//           <input type="text" id='guess' name="guess" onChange={this.inputData}/>
//           <br/>
//           <button type="submit">Submit</button>
//            <br/>
//           <label id='labeltext' name="labeltext"></label>
//         </form>
//         </div>
// )
// export default Results
// ReactDOM.render(<Results />, document.getElementById("#gibbs"));





// // ReactDOM.render(
// //   <SectionThree />,
// //   document.getElementById('root')
// // );