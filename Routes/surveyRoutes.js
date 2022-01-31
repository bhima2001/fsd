const {Router}=require("express");
let surveyData=[];



const router=Router();


router.get("/",(req,res)=>{
    res.status("200").json(surveyData)
})

router.post("/",(req,res)=>{
    const tempSurvey={
        id:Math.floor(Math.random() * 1000),
        timeStamp: new Date().toLocaleString(),
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        educationProfile:req.body.educationProfile,
        address:req.body.address,
        radio1:req.body.radio1,
        radio2:req.body.radio2,
        radio3:req.body.radio3,
        radio4:req.body.radio4
    }
    surveyData.push(tempSurvey)
    res.status(200).json("Success")
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id)
    let temp={};
    for (let i=0;i<surveyData.length;i++){
        if (id==surveyData[i].id){
            temp=surveyData[i];
            break;
        }
    }
    res.status("200").json(temp)
})





module.exports=router;