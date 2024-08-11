const router = require('express').Router();
const Banner=require('../models/banner-schema');


router.get('/',async(req,res)=>{
   try{
        const banner=await Banner.find();
        if(!banner){
            return res.status(404).json({message:"banner not found"})
        }
        res.status(200).json(banner)

   }catch(err){
         console.error(err.message);
         res.status(500).send("server error")
   }
})

router.post('/',async(req,res)=>{
    const {description,timer,isVisible}=req.body;


    try{  

        //first  checking is there any banner already exist or not
        const banner=Banner.find();

        //if not then creating a new banner
        if(!banner){
            banner=new Banner({
                description,
                timer,
                isVisible
            })
        }
        //if banner already exist then  updating the banner
        else{
            banner.description=description;
            banner.timer=timer;
            banner.isVisible=isVisible;
        }
        await banner.save();
        res.json(banner);

    }
    catch(err){
        console.error(err.message);
        res.status(500).send("server error")
    }
})

module.exports=router;