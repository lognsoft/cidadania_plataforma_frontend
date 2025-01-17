export function verifyStoreValue(value:any){
    let verify:boolean = true;

    if(typeof value === "boolean"){
        if(value === false) verify = false;
    } else {
        if(value === undefined || value === ""){
            verify = false;
        }
    }

    return verify;
}