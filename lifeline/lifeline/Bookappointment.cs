using System;
using System.Collections.Generic;

#nullable disable

namespace lifeline
{
    public partial class Bookappointment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        public string Email { get; set; }
        public string Doctorname { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
    }
}
