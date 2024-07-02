

export const searchbook=(key)=>{
    let arr={};
    if(key.title) arr.title={$regex:key.title,$options:"i"}
    if(key.author) arr.author={$regex:key.author,$options:'i'}
    return arr
}

export const searchauthor=(key)=>{
    let arr={};
    if(key.name) arr.name={$regex:key.name,$options:"i"}
    if(key.bio) arr.bio={$regex:key.bio,$options:'i'}

    return arr
}