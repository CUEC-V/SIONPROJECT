using SION.Models;

namespace SION.Models
{
    public static class Utils
    {
        public static async Task<string> Create(this IFormFile file, IWebHostEnvironment pathTo, string store = "../SION-UI/SIONPROJECT/src/assets/ressource")
        {
            string flName = string.Empty;

            if (file?.Length > 0)
            {
                string wwwRootPath = pathTo.WebRootPath;
                string fileName = Path.GetFileNameWithoutExtension(file.FileName);
                string extension = Path.GetExtension(file.FileName);

                flName = fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                string path = string.Empty;

                if (wwwRootPath != null)
                {
                    path = Path.Combine($"{wwwRootPath}/{store}/", fileName);
                }
                else
                {
                    path = Path.Combine($"{store}/", fileName);
                }

                try
                {
                    using var fileStream = new FileStream(path, FileMode.Create);
                    await file.CopyToAsync(fileStream);
                }
                catch (Exception ex) { 
                }
            }

            return $"assets/ressource/{flName}";
        }
    }
}
