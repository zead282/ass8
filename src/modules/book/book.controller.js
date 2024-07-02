import bookModel from "../../../DB/models/book.model.js";
import {paginationfunction} from '../../utils/pagination.js'
import{searchbook} from '../../utils/seaarch.js'
export const addbook=async(req,res,next)=>{

    ///destruct data
    const{title,content,author}=req.body;
    
    const add=await bookModel.create({title,author,content})
    if(!add) return next(Error('somthing wrong',{cause:400}))
    
    res.status(200).json({message:"added",book:add})    
    
}

export const getallbooks=async(req,res,next)=>{
    const{page,size,...query}=req.query
    const{limit,skip}=paginationfunction({size,page})
    const filter=searchbook(query)
    const books=await bookModel.find(filter)
    //.limit(limit).skip(skip)
    res.status(200).json({books:books})

}

export const get_sp_book=async(req,res,next)=>{

    ///destruct id
    const{bookid}=req.query;

    const findbook=await bookModel.findById({_id:bookid});
    if(!findbook) return next(Error("book not found",{cause:400}))
    res.status(200).json({book:findbook})    

}


export const update_sp_book=async(req,res,next)=>{
     
    const{bookid}=req.params
    const{title,author,publishedDate}=req.body

    const upbook=await bookModel.findByIdAndUpdate({_id:bookid},{title,author,publishedDate},{new:true})
    if(!upbook) return next(Error("not updated"))
    res.status(200).json({message:"updated",Date:upbook})
}

export const del_sp_book=async(req,res,next)=>{

   const{bookid}=req.params;

   const del=await bookModel.findByIdAndDelete({_id:bookid});
   if(!del) return next(Error("somthing wrong"));
   res.status(200).json({message:"deleted success"})

}



















