using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVCAddressBook.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MinLength(10)]
        public string PhoneNumber { get; set; }
        [Required,EmailAddress]
        public string Email { get; set; }
        public string Landline { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
    }
}
