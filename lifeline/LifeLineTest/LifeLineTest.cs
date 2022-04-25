using lifeline;
using lifeline.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestPlatform.Utilities;

namespace LifeLineTest
{
    [TestClass]

         public class LifeLineTest
             {
                
                [TestMethod]
                    public  void TestGetDoctors() 
                    {
                        var streamWriter = new StreamWriter("log.txt");
                        //Arrange
                        var context = new postgresContext();
                        var doctorAbc = context.Doctors.Where(cust => cust.Doctorname == "Dr.Anjani").FirstOrDefault();
                        streamWriter.WriteLine(doctorAbc.Doctorname);
                        var controller = new DoctorsController(context); //Act
                        var doctors = controller.GetDoctors().Result.Value;
                        var result = doctors.FirstOrDefault();
                        Console.WriteLine(result.Doctorname + "taken from doctors table");
                        //Assert
                        Assert.IsNotNull(result, "No Customer data returned");
                    }



    }
}
