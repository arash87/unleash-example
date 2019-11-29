using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Unleash;

namespace WebApplication
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers();
			services.AddSingleton<IUnleash>(c => new DefaultUnleash(new UnleashSettings()
			{
				UnleashApi = new Uri("http://localhost:4242"),
				AppName = "variant-sample",
				InstanceTag = "instance 1",
				SendMetricsInterval = TimeSpan.FromSeconds(10),
				FetchTogglesInterval = TimeSpan.FromSeconds(10)
			}));
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			PhysicalFileProvider fileProvider = new PhysicalFileProvider(Path.Combine(
					Directory.GetCurrentDirectory(), "front/build"
					));

			DefaultFilesOptions defOptions = new DefaultFilesOptions();
			defOptions.FileProvider = fileProvider;

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			//app.UseHttpsRedirection();
			app.UseDefaultFiles(defOptions);
			app.UseStaticFiles(new StaticFileOptions
			{
				FileProvider = fileProvider
			});


			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
