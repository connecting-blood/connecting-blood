import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import React from 'react'
import { Link } from "@inertiajs/react"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    (<header
      className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={route('dashboard')}>
                {import.meta.env.VITE_APP_NAME}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              {window.location.pathname
                .split('/')
                .filter(path => path.length > 0)
                .map((path, i, arr) => {
                  const href = '/' + arr.slice(0, i + 1).join('/');
                  return (
                    <React.Fragment key={i}>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <Link href={href}>
                        <BreadcrumbPage className="capitalize">{path}</BreadcrumbPage>
                      </Link>
                    </React.Fragment>
                  );
                })}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>)
  );
}
