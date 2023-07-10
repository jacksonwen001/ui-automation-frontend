import {
  Alert,
  Box,
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useFetchPages } from "../hooks/useFetchPages";
import { nanoid } from "nanoid";
import { PageResponse } from "@/api/page";
import { EditPage } from "./EditPage";
import { DeletePage } from "./DeletePage";
import { usePagination } from "@/hooks/usePaginate";

export const ListPage = () => {
  const { isLoading, isError, errorMessage, pages, total, params, setParams } =
    useFetchPages();

  const range = usePagination({
    total,
    size: params.size,
    page: params.current,
  });
  if (isLoading)
    return (
      <Box>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  if (isError) return <Alert>{errorMessage.response.statusText}</Alert>;
  const columns = ["name", "created_at"];
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={nanoid()}>{column}</TableCell>
              ))}
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {total === 0 ? (
              <TableRow>
                <TableCell rowSpan={3} colSpan={3} >
                  <Typography className="text-center text-gray-500">No data</Typography>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {pages.map((page) => (
                  <TableRow key={nanoid()}>
                    {columns.map((column) => (
                      <TableCell key={nanoid()}>
                        {page[column as keyof PageResponse]}
                      </TableCell>
                    ))}

                    <TableCell>
                      <div>
                        <EditPage {...page} />
                        <DeletePage {...page} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="w-full flex justify-end">
        <Pagination count={range.length} page={params.current} hidden={total === 0} onChange={(_,current) => setParams({
          ...params, 
          current
        })}/>
      </div>
    </>
  );
};
