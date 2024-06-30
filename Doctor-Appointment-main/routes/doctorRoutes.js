const express = require('express') 
const router =  express.Router() 
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController, updateProfileController, getDoctorByIdController } = require('../controllers/doctorCtrl');


//Get Single Doc Info 

router.post('/getDoctorInfo' , authMiddleware , getDoctorInfoController) ; 

// Post update profile updateProfile

router.post('/updateProfile' , authMiddleware , updateProfileController);  

// POST GET SINGLE DOC INFO 

router.post('/getDoctorById' , authMiddleware , getDoctorByIdController);
module.exports = router;
