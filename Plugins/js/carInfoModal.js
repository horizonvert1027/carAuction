
function openModal()
{
    document.getElementById('modal').style.display = 'block'
    document.getElementById('modalBackground').style.display = 'block'


}

function closeModal() 
{          
    document.getElementById('modalBackground').style.display = 'none'
    document.getElementById('modal').style.display = 'none'
}

function getCustomerName(){
    let CustomerName = document.getElementById('modalCustomerDataCustomerName').textContent;
    alert(CustomerName);
}