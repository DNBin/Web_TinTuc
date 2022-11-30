using System;
using Unity.Mvc5;
using System.Web.Mvc;
using Unity;
using Web_TinTuc.Interfaces;
using Web_TinTuc.Service;

namespace Web_TinTuc
{
    /// <summary>
    /// Specifies the Unity configuration for the main container.
    /// </summary>
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            container.RegisterType<ITinTucService, TinTucService>();
            
         


            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}