// Detail page code


// this function describes what happens once submit is pressed. So both input fields are considered

let submitComment = function () {  // adding the event handler
  
  // data gathering
  console.log("button is clicked");
  const inputField = document.getElementById('name')  // grabbing the element
  console.log(inputField)
  const name = inputField.value  // storing the value of the inputfield element
  console.log(name)      // logging the name
  const textArea = document.getElementById('msg')
  const msg = textArea.value
  console.log(msg)
  
  // destination element creation
  const comment = document.createElement('section')
  const h3 = document.createElement('h3')   
  const p = document.createElement('p')
  
  // combine the gathered data with the created elements
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)
  console.log(comment)

  // displaying the combined element
  commentSection = getElementById("comment")
  console.log (commentSection)
  
  
}


