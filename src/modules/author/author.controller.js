

import{searchauthor} from '../../utils/seaarch.js'
import authormodel from '../../../DB/models/author.model.js'
import { DateTime } from 'luxon';
export const addauthor=async(req,res,next)=>{
    const{name,bio,birthDate,books}=req.body
    const birthdate=DateTime.fromFormat(birthDate, 'dd-MM-yyyy').toJSDate();
    const auth=await authormodel.create({name,bio,birthDate:birthdate,books});
    if(!auth) return next(new Error("author not added",{cause:400}))
    res.status(200).json({message:"added",data:auth})    

}

export const update_author=async(req,res,next)=>{

    const{authorid}=req.params;
    const{name,bio,books}=req.body
    const upauth=await authormodel.findByIdAndUpdate({_id:authorid},{name,books,bio},{new:true})
    if(!upauth) return next(new Error("somthing wrong"))
    res.status(200).json({message:"updated",data:upauth})    
    
}
export const delete_author=async(req,res,next)=>{
    const{authorid}=req.params

    const delauthor=await authormodel.findByIdAndDelete({_id:authorid})
    if(!delauthor) return next(new Error("somthing wrong"))
    res.status(200).json({message:"deleted success"})    
    
}
export const get_sp_author=async(req,res,next)=>{
    const{authorid}=req.params
    const getauthor=await authormodel.findById(authorid).populate('books')
    if(!getauthor) return next(new Error("no author found"))
    res.status(200).json({author:getauthor})    
}
export const get_all_authors=async(req,res,next)=>{
    const{...query}=req.query;
    const filter=searchauthor(query)
    const allauthor=await authormodel.find(filter).populate([{path:"books"}])
    if(!addauthor) return next(new Error("no author found"))
    res.status(200).json({message:"authors",authors:allauthor})    
}


