using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace portfolio.Models
{
    public class Section
    {
        public required string Title { get; set; }
        public required string Description { get; set; }

        public required ESectionType Type { get; set; }
    }
}