const fs = require('fs')

//readFile
// fs.readFile("./abc.txt",(error,data)=>{
//     if(error){
//         console.log("error");
//         console.log(error);
//     }else{
//         // console.log(data); => it gives buffered output
//         console.log(data.toString());
//     }
// });
//If readFileSync is used then, codes will not run after 11 until full execution of readFileSync
////////////////////////////////////////////////////////////////////////////////////////////////

//writeFile
// let content = "This is the dynamic content added using writeFile";
// fs.writeFile('new_file.txt',content,(err)=>{
//     if(err){
//         console.log("error: "+err);
//     }else{
//         console.log("Content saved")
//     }
// });
////////////////////////////////////////////////////////////////////////////////////////////////

//appendFile
// fs.appendFile("./abc.txt","new Content",(error)=>{
//     if(error){
//         console.log("Error: "+error);
//     }else{
//         console.log("Content Added");
//     }
// });
///////////////////////////////////////////////////////////////////////////////////////////////

//deleteFile
fs.unlink("./deleteThis.txt",(err)=>{
    if(err){
        console.log("Error occured: "+err);
    }else{
        console.log("File deleted");
    }
});
