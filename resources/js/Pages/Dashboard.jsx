import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"

export default function Dashboard(props) {
  // console.log(props)
  return (
    <AuthenticatedLayout>
      Dashboard
    </AuthenticatedLayout>
  )
}
