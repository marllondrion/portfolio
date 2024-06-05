using System.ComponentModel;

namespace portfolio.Enums
{
    public enum ESectionType : int
    {
        [StringValue("a")]
        [Description("Education")]
        Education,
        [Description("Persoanl Information")]
        PersonalInformation,
        [Description("Projects")]
        Projects,
        [Description("Services")]
        Services,
        [Description("Skills")]
        Skills,
        [Description("WorkExperience")]
        WorkExperience

    }
}