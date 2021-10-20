$(function(){
  var charGot = $("#char-got")
  var chars = []
  
  $.ajax({
    url: "https://thronesapi.com/api/v2/Characters",
    success: function(data) {
      display(data)
      chars = data
    }
  })
  
  function display(array) {
    charGot.empty()
    array.forEach(function(element) {
      charGot.append(`
        <div class="charbox">
          <div class="image-box">
            <img src="${element.imageUrl}">
          </div>
          <h2>${element.firstName} ${element.lastName}</h2>
          <p>${element.family}</p> 
        </div> 
      `)
    })
  }
  
  
  $('form').submit(function(e) {
    e.preventDefault()

    var input = $("input").val()
    var filteredChars = chars.filter(function(char){
      return char.fullName.toLowerCase().includes(input)
    })
    display(filteredChars)
    
  })
})