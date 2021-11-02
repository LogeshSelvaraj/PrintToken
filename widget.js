/*
const creatorSdkPromise = ZOHO.CREATOR.init();
creatorSdkPromise.then(function(data) {
    config = {
        reportName : "Latest_Order",
        id: "363463000424353402"
    }
    console.log("SDK runned");
    //get specific record API
    ZOHO.CREATOR.API.getRecordById(config).then(function(response){
        console.log("res: "+response.data);
    });
    console.log("API runned");
}).catch((err) => {
    console.log(err);
});
console.log("Running");
*/

// ZOHO.CREATOR.init()
//         .then(function(data) {
//             console.log("Creator function");
//             config = {
//                 reportName:"Latest_Order",
//                 id: "363463000424353402"
//             }

//             //get specific record API
// ZOHO.CREATOR.API.getRecordById(config).then(function(response){
//         console.log("Creator getRecordById function called");
//         console.log(response);
//         console.log(response.data)

//     });
//         });

/*
  const handlePrint=()=>{
      console.log("Print triggered");
      window.location.href="app://zprint?key=%20printed%20successfully";
  //    window.location.href="https://creatorapp.zoho.com/zohointranet/foodtopia/#Print_Token";
  }
  */

  const handleClose=()=>{
    window.open('','_self').close();
}