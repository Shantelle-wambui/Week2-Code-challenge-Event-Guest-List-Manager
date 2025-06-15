const guestForm=document.getElementById('guestForm');
const guestInput=document.getElementById('guestInput');
const  guestList=document.getElementById('guestList');
//get the form,input box and list from the html using their ids


guestForm.addEventListener('submit', function(e) {
    e.preventDefault();//stop the page from reloading
    const name=guestInput.value.trim();//get the name typed by the user,and remove extra spaces
    if(name==='')return;
//check if there are already 10 guests in the list
    if(guestList.children.length>=10){
        alert("Guest list is full! Maximum 10 guest allowed");
        return;//stop adding if we have 10 guests already

    }
    addGuest(name);//if everything is okay , add the guest
    guestInput.value='';
    guestInput.focus();
    //clears the input box and focus the cursor back in the input
});

//this function creates and adds a new guest item to the list
function addGuest(name){
    const li=document.createElement('li');//create a new <Li>element(list item)
    const nameSpan=document.createElement('span');

    nameSpan.textContent=name;//set the name inside the span

    //RSVP button
    const rsvpBtn=document.createElement('button')
    rsvpBtn.textContent='Attending';//default text
    rsvpBtn.className='btn rsvp-btn';

    rsvpBtn.addEventListener('click', ()=>{//when rsvp button is clicked , toggle the text and background color
        if(rsvpBtn.textContent==='Attending'){
            rsvpBtn.textContent='Not Attending';
            rsvpBtn.style.backgroundColor='#cc'
        }else {
            rsvpBtn.textContent='Attending';
            rsvpBtn.style.backgroundColor='#3498db'
        }
    });

    //remove button
    const removeBtn=document.createElement('button');
    removeBtn.textContent='Remove';
    removeBtn.className='btn remove-btn'
    removeBtn.addEventListener('click', ()=> //when remove is clicked, remove this guest from the list
        {guestList.removeChild(li);
});
//add the guest name, rsvp button and remove button into the<li>
    li.appendChild(nameSpan);
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);

    guestList.appendChild(li);//add the<li> to the list shown on the page


}
