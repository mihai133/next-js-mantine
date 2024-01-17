import BlogLayout from '../blog/layout';
import BlogPage from '../blog/page';
import Blog from '../blog/page';
import DashboardLayout from './layout';

export default function Dashboard() {
  return (
    
        <div >
          Hello dashboard
          <DashboardLayout>New</DashboardLayout>
          <BlogLayout>Blog</BlogLayout>
        </div>

  );
}
