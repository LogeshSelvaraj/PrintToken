


const loadOrder=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const orderString = urlParams.get('orderData');
    console.log(orderString);
    orderJson=JSON.parse(orderString);
    orderNames=Object.keys(orderJson);
    
    orderHtml="";
    for(let i=0;i<orderNames.length;i++){
        orderHtml=orderHtml+"<li class='list-group-item'><div class='item-container'><div class='name'>"+orderNames[i]+"</div><div class='count'>"+orderJson[orderNames[i]]+"</div></div></li>"
    }
    if(orderHtml){
        document.getElementById("order").innerHTML=orderHtml;
    }
}

loadOrder();


const prepareOrderKey=()=>{
  let key="";
  const urlParams = new URLSearchParams(window.location.search);
  const orderString = urlParams.get('orderData');
  orderJson=JSON.parse(orderString);
  orderItems=Object.keys(orderJson);
    for(let i=0;i<orderItems.length;i++){
     const lineLength=20-orderItems[i].length;
     let space="";
    for(let j=0;j<lineLength;j++){
      space=space+"%20";
    }
    key=key+orderItems[i]+space+"-"+orderJson[orderItems[i]]+"%0A";
  }
  return "Employee Id : "+urlParams.get("empId")+"%0A"+key;
}




  const handlePrint=()=>{
   
    const printString = prepareOrderKey();
    console.log(printString);
      window.location.href="app://zprint?key="+printString;

      // setTimeout(function(){
      //   window.open('','_self').close();
      //   }, 1000);

  }
  

  const handleClose=()=>{
    window.open('','_self').close();
}

