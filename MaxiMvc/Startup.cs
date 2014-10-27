using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MaxiMvc.Startup))]
namespace MaxiMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
