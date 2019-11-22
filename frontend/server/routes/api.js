const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./models/user');
const Courses = require('./models/courses');
const EnrolledCourse = require('./models/enrolledcourses');
const Mentor = require('./models/mentors');
const Admin = require('./models/admin');
const jwt = require('jsonwebtoken')
const db="mongodb://localhost:27017/anirban";
let userId=""
let teacherId=""

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
}); 

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token,'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
router.get('/events', (req, res) => {
  Courses.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/special',(req, res) => {
  EnrolledCourse.find({ studentId: userId },(err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
  });
});
router.get('/mentor_courses',(req, res) => {
  EnrolledCourse.find({mentorId: teacherId },(err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
  });
});
router.post('/special',(req, res) => {
  let SpecialEventData = req.body
  delete SpecialEventData._id
  userId = req.body.studentId
  console.log("*******from Post Method Api*****"+ userId);

  EnrolledCourse.findOne({ name: SpecialEventData.name , studentId: SpecialEventData.studentId }, (err, eventdetails) => {
    if (!eventdetails) {
      let specialevents = new EnrolledCourse(SpecialEventData)
      specialevents.save((err, enrolledEvents) => {
        if (err) {
          console.log(err)      
        } else {
          let enrollEvents = {keyCourse:enrolledEvents.studentId}
          res.status(200).send({enrollEvents})
        }
      })
    } else {
      res.status(401).send('Alraedy you enrolled for the course, Choose another')
      console.log(err+" ******Alraedy A Course exist") 
    }
  })
})
router.post('/mentor_register', (req, res) => {
  let userData = req.body
  let user = new Mentor(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login',(req, res) => {
  let userData = req.body
  userId = req.body.email
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        let sample = {email : user.email, key:token}
        res.status(200).send({sample})
      }
    }
  })
})
router.post('/mentor_login',(req, res) => {
  let userData = req.body
   teacherId=req.body.email
  Mentor.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        let sample = {email : user.email, key:token}
        res.status(200).send({sample})
      }
    }
  })
})
router.post('/admin_login',(req, res) => {
  let userData = req.body
  Admin.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;