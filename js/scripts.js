
form = document.getElementById('form');

form.addEventListener('submit',function (event){
  event.preventDefault();

  const question1Input = document.getElementById('question1Input').value; 
  console.log(question1Input)

  const question2Input = document.getElementById('question2Input').value; 
  console.log(question2Input)

  const question3Input = document.getElementById('question3Input').value; 
  console.log(question3Input)
 
  const question4Input = document.getElementById('question4Input').value; 
  console.log(question4Input)

  const question5Input = document.getElementById('question5Input').value; 
  console.log(question5Input)

  const question6Input = document.getElementById('question6Input').value; 
  console.log(question6Input)

  const form = document.getElementById('form')
});
