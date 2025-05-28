import CustomPaginate from "@/components/Paginate/CustomPaginate";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
function TableDemo({ errors, auth, appName, users }) {
  const { current_page, data, first_page_url, from, last_page, last_page_url, links, next_page_url, path, per_page, prev_page_url, to, total } = users;
  return (
    <AuthenticatedLayout>
      {JSON.stringify(isNaN((links[1]).label))}
      <Table>
        <TableCaption>List Of Users we have</TableCaption>
        <TableHeader>
          <TableRow>
            {Object.keys(data[0]).map(headText => <TableHead className="uppercase">{headText}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {Object.keys(item).map((key) => (
                <TableCell>{item[key]}</TableCell>
              ))}
            </TableRow>
          )
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>{current_page}/{last_page} page</TableCell>
            <TableCell className="">{total} users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <CustomPaginate {...users} />
    </AuthenticatedLayout>
  )
}
export default TableDemo
