var search= document.querySelector('.search')
search.addEventListener('submit',(e)=>{
    e.preventDefault()
    var submit =document.querySelector('[placeholder="Enter phone Number"]')
     var submit_value =submit.value
     console.log(submit_value)
     api(submit_value)

})
async function api(submit_value){
    var data = fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=3af8e94d0f724baab5b149a1efc6c488&phone=${submit_value}`)
    var prom = await data
    var response = prom.json()
    var data_result = await response
    console.log(data_result)
    // submit_value=''
     var user_data =document.querySelector('.user_data')
     var users =document.querySelector('.users')
     user_data.innerHTML=''
     users.innerHTML=`
     <span class="hlo">Carrier : </span>
     <p>${data_result.carrier}</p>
     <span class="hlo">CountryName : </span>
     <p>${data_result.country.name}</p>
     <span class="hlo">Format : </span>
     <p>${data_result.format.international}</p>
     <span class="hlo">Type :</span>
     <p>${data_result.type}</p>
     <span class="hlo">Valid :</span>
     <p>${data_result.valid}</p>`
     
     user_data.append(users)  
}
api()

