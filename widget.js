

const loadOrder=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const orderString = urlParams.get('orderString');
    console.log(orderString);
    orderJson=JSON.parse(orderString);
    orderNames=Object.keys(orderJson);
    
    orderHtml="";
    for(let i=0;i<orderNames.length;i++){
        orderHtml=orderHtml+"<li class='list-group-item'>"+orderNames[i]+" - "+orderJson[orderNames[i]]+"</li>"
    }
    if(orderHtml){
        document.getElementById("order").innerHTML=orderHtml;
    }
}




  const handlePrint=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const printString = urlParams.get('key');
      window.location.href="app://zprint?key="+printString;

      setTimeout(function(){
        window.open('','_self').close();
        }, 1000);

  }
  

  const handleClose=()=>{
    window.open('','_self').close();
}

loadOrder();
