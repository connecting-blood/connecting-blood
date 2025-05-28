import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import React from 'react'

const CustomPaginate = (props) => {
    return <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious href={props?.prev_page_url} />
            </PaginationItem>
            <PaginationContent>
                {Array.isArray(props.links) && [...props.links].map(
                    (link, linkIndex) => (!isNaN(link.label) || (link.label == '...')) && <PaginationItem key={linkIndex.toString()}>
                        <PaginationLink href={!link.active ? link.url : null} isActive={link.active}>{link.label}</PaginationLink>
                    </PaginationItem>
                )}
            </PaginationContent>
            <PaginationItem>
                <PaginationNext href={props?.next_page_url} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
}

export default CustomPaginate