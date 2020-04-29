const imgUrl = document.querySelector("#img");
const Uppertext = document.querySelector("#upperText");
const Lowertext = document.querySelector("#lowerText");
const generatebtn = document.querySelector("#generatebtn");
const Memedone = document.querySelector("#Memedone");
const removeButton = document.querySelector("#delete");


generatebtn.addEventListener('click',function(e){
    e.preventDefault();
    if(imgUrl.value !== ''){
        let newcontainer = document.createElement('div');
        newcontainer.setAttribute('id', 'newMeme');
        let newimg = document.createElement('IMG');
        newimg.setAttribute("src", imgUrl.value);
        let newDivUpper = document.createElement('div');
        newDivUpper.setAttribute('id', 'newupper');
        let newDivlower = document.createElement('div');
        newDivlower.setAttribute('id', 'newlower');
        let removebtn = document.createElement('BUTTON');
        removebtn.setAttribute('id', 'delete');

        newDivUpper.innerText = Uppertext.value;
        newDivlower.innerText = Lowertext.value;
        removebtn.innerText = "Remove";
        //console.log(imgUrl.value);
        Memedone.appendChild(newcontainer);
        newcontainer.appendChild(newimg);
        newcontainer.appendChild(newDivUpper);
        newcontainer.appendChild(newDivlower);
        newcontainer.appendChild(removebtn);

        imgUrl.value = "";
        Uppertext.value = "";
        Lowertext.value = "";
    }else{
        alert(`Please put the Image Url`)
    }
})

Memedone.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})