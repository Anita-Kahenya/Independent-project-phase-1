document.addEventListener("DOMContentLoaded",() =>{
    fetch("http://localhost:3000/Guests")
    .then(response => response.json())
    .then(data =>{
      for(let guest of data){
        displayGuests(guest)
      }
    })
  })

  let form = document.getElementById("styleForm")
  form = document.addEventListener("submit",addNewGuestDetails)

  function addNewGuestDetails(event){
    event.preventDefault()
    let guestDetails = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      seatno: event.target.seatno.value,
      typeofaccess: event.target.typeofaccess.value
    }
    fetch("http://localhost:3000/Guests", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify(guestDetails)
    })
  }

  function displayGuests(guest){
    let li = document.createElement("div");
    let span = document.createElement("span")
    span.textContent = `${guest.firstname} ${guest.lastname} - ${guest.email} - ${guest.seatno} -${guest.typeofaccess}`;
    let deleteGuest = document.createElement("button");
    deleteGuest.textContent = "delete";
    li.append(span, deleteGuest);
    document.querySelector(".guests").appendChild(li)
    deleteGuest.addEventListener("click",e =>{
      e.target.closest("div").remove()
    })
  }

