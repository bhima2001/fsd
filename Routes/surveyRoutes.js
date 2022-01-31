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
    let temp={};
    for (let i=0;i<surveyData.length;i++){
        if (id==surveyData[i].id){
            temp=surveyData[i];
            break;
        }
    }
    res.status("200").json(temp)
})


router.delete("/:id",(req,res)=>{
    const id=req.params.id;
    let temp;
    for (let i=0;i<surveyData.length;i++){
        if (id==surveyData[i].id){
            temp=i
            break;
    }
}
    surveyData.splice(temp,1);
    res.json("Deleted Successfully")
})

router.patch("/:id",(req,res)=>{
    let temp
    const id=req.params.id;
    for (let i=0;i<surveyData.length;i++){
        if (id==surveyData[i].id){
            temp=i
            break;
       }
    }
    if (req.body.name!=="")surveyData[temp].name=req.body.name;
    if(req.body.age!=="")surveyData[temp].age=req.body.age;
    if (req.body.educationProfile!=="")surveyData[temp].educationProfile=req.body.educationProfile;
    if(req.body.address!=="")surveyData[temp].address=req.body.address;
    if (req.body.radio1!=="")surveyData[temp].radio1=req.body.radio1;
    if (req.body.radio2!=="")surveyData[temp].radio2=req.body.radio2;
    if (req.body.radio3!=="")surveyData[temp].radio3=req.body.radio3;
    if (req.body.radio4!=="")surveyData[temp].radio4=req.body.radio4;
    res.json("patch Successful")
})





module.exports=router;