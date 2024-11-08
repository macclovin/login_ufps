import urlBackend from "../urlBackend";


async function saveDocumentacionApi(file){
    const token=localStorage.getItem("token")
    const result=await fetch(urlBackend+"documento/modalidad/save",{
        method:'POST',
        body:JSON.stringify(file),
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"application/json"
        }
    })
    return result;

}



export {saveDocumentacionApi }