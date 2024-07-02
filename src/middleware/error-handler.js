

export const errorhandler=(api)=>{
    return(req,res,next)=>{
        api(req,res,next).catch((err)=>{console.log("error in errorhandler",err)

            next(Error("internal server error",{cause:400}))
        })

    }
}