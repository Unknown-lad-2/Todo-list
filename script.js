var inp_field = document.getElementById("inp_field");
var inp_btn = document.getElementById("btn");
var un_list = document.getElementById("list_items");

inp_btn.addEventListener("click",addText);

function addText(){
    var delete_btn = document.createElement('button');
    delete_btn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    
    var mark_btn = document.createElement('button');
    mark_btn.innerHTML= '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    
    var new_list = document.createElement("li");
    new_list.innerText = inp_field.value;

    new_list.appendChild(delete_btn);
    new_list.appendChild(mark_btn);
    un_list.appendChild(new_list);

    delete_btn.addEventListener("click",()=>{
        console.log('deleted');
        new_list.remove();
    })

    mark_btn.addEventListener("click",()=>{
        new_list.style.textDecorationLine = 'line-through';
        console.log('marked');
    })
    mark_btn.addEventListener("dblclick",()=>{
        new_list.style.textDecoration = 'none';
        console.log('unmarked');
    })

    if(inp_field.value != ''){
        inp_field.value = '';
    }
}