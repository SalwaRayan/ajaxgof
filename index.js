$(function(){
  var charGot = $("#char-got")
  var input = $("input").val()
  var chars = []
  
  $.ajax({
    url: "https://thronesapi.com/api/v2/Characters",
    success: function(data) {
      display(data)
      chars.push(data)
      console.log(chars)
    }
  })
  
  function display(array) {
    var html = array.forEach(function(element) {
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

  $('#form').submit(function(e) {
    e.preventDefault()

    var filteredChars = chars.filter(function(char){
      return char.fullName.toLowerCase().includes(input)
    }) 
    console.log(input)
    console.log(filteredChars)
    display(filteredChars)

  })



  // $.ajax({
  //   url: "https://thronesapi.com/api/v2/Characters",
  //   success: function(datas) {
  //     $("button").click(function(){
  //       var filteredData = datas.filter(function(data){
  //         return data.fullName = input
  //       })
  //       display(filteredData)

  //     })
  //   }
  // })

})