namespace SION.Models
{
    public class UserRoleModel
    {
        public List<UserModel> Users { get; set; } = new List<UserModel>();

        public List<RoleModel> Roles { get; set; } = new List<RoleModel>();
    }
}
