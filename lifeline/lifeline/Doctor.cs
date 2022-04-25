using System;
using System.Collections.Generic;

#nullable disable

namespace lifeline
{
    public partial class Doctor
    {
        public long Id { get; set; }
        public string Doctorname { get; set; }
        public string Speciality { get; set; }
        public string ImagePath { get; set; }
    }
}
