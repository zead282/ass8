

export const globalresponseerror=(err,req,res,next)=>{

    if(err)
        {
            res.status(err['cause']||400).json({
                message:"internal server error",
                error:err.message
            })
        }
}