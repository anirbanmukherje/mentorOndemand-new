﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorOnDemand.Data;
using MentorOnDemand.Dtos;
using MentorOnDemand.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorOnDemand.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        IRepository repository;
        public CourseController(IRepository repository)
        {
            this.repository = repository;
        }
        
        // GET: api/Course
        [HttpGet]
        public IActionResult GetCourses()
        {
            return Ok(repository.GetCourses());
        }

       
        [HttpPost]

        [Authorize(Roles = "Admin")]

        public IActionResult Post([FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddCourses(course);
                if (result)
                {
                    return Created("AddCourse", course);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Course/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]

        public IActionResult Put(int id, [FromBody] Course course)
        {
            if (ModelState.IsValid && id == course.Id)
            {
                bool result = repository.UpdateCourse(course);
                if (result)
                {
                    return Created("UpdatedCourse", course.Id);
                }
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
       [Authorize(Roles = "Admin")]

        public IActionResult Delete(int id)
        {
            var course = repository.GetCourse(id);
            if (course == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteCourse(course);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpGet("search/{criteria}")]
        public IActionResult SearchCourse(string criteria)
        {
            var result = repository.SearchCourse(criteria);
            return Ok(result);
        }


      

        [HttpGet("mentorsList")]
       [Authorize(Roles = "Admin")]

        public IActionResult GetMentorsList()
        {
            return Ok(repository.GetMentorsList());
        }

        [HttpGet("studentsList")]

        [Authorize(Roles = "Admin")]

        public IActionResult GetStudentsList()
        {
            return Ok(repository.GetStudentsList());
        }

        [HttpGet("blockunblock/{id}")]
        [Authorize(Roles = "Admin")]

        public IActionResult GetBlockUnblock(string id)
        {
            var result =repository.BlockUser(id);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        [HttpGet("mentorProfile/{email}")]
       [Authorize(Roles = "Mentor")]

        public IActionResult mentorProfileDetails(string email)
        {
            var result = repository.mentorProfileDetails(email);
            return Ok(result);
        }

        [HttpPut("mentorProfile/{mentorId}")]
       [Authorize(Roles = "Mentor")]
        public IActionResult UpdateMentorDetails(string mentorId, [FromBody] ProfileDto mentorData)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateMentorDetails(mentorData, mentorId);
                if (result)
                {
                    return Created("UpdatedCourse", null);
                }
            }
            return BadRequest(ModelState);
        }


        [HttpGet("studentProfile/{email}")]

        [Authorize(Roles = "Student")]
        public IActionResult ProfileDetails(string email)
        {
            var result = repository.studentProfileDetails(email);
            return Ok(result);
        }



        [HttpPut("studentProfile/{studentId}")]

       [Authorize(Roles = "Student")]
        public IActionResult UpdateStudentDetails(string studentId, [FromBody] ProfileDto studentData)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateStudentDetails(studentData, studentId);
                if (result)
                {
                    return Created("UpdatedCourse", null);
                }
            }
            return BadRequest(ModelState);
        }




    }
}
