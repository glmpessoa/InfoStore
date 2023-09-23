using Microsoft.EntityFrameworkCore;

namespace InfoStore.infrastructure.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
