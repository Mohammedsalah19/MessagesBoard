using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        static List<Messages> messagesList = new List<Messages>(){
                new Messages
                {
                    Owner = "Mohammed",
                    Text = "Hello Mohammed"
                },
                new Messages
                {
                    Owner = "Salah",
                    Text = "Hello Salah"
                }
            };
        public IEnumerable<Messages> Get()
        {
            return  messagesList;
        }
        [HttpPost]
        public void Post( Messages message)
        {

            messagesList.Add(message);
        }
    }
}