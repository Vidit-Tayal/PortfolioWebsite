import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Link, TableHead } from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, problem, tags, rating, verdict, submission) {
  const formattedTags = Array.isArray(tags) ? tags.join(", ") : "";
  return { name, problem, tags: formattedTags, rating, verdict, submission };
}

const MakeTable = (props) => {
  const arr = props.data; // array of objects
  const showTags = props.showTag;
  const uniqueRows = {};

  // Iterate through the data array and filter unique rows
  arr.forEach((item) => {
    const key = `${item.problem.name}_${item.problem.contestID}_${item.problem.index}`;

    // Check if the row with the same key exists and has a lower submission ID
    if (!uniqueRows[key] || item.id > uniqueRows[key].id) {
      uniqueRows[key] = item;
    }
  });

  // Convert the unique rows object back to an array
  const filteredRows = Object.values(uniqueRows);

  const [len, setLen] = useState(filteredRows.length);

  const initialRows = filteredRows.map((item) =>
    createData(
      item.problem.name,
      item.problem.contestId + item.problem.index,
      item.problem.tags,
      item.problem.rating,
      item.verdict,
      item.id
    )
  );

  // Sort the rows array
  const sortedRows = initialRows.sort((a, b) => (a.rating < b.rating ? -1 : 1));

  const [rows, setRows] = useState(sortedRows);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {len === 0 ? (
        <div> HOORAY! NOTHING LEFT!!</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name </TableCell>
                <TableCell align="left">#</TableCell>
                {showTags && <TableCell align="left">Tags</TableCell>}

                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Verdict</TableCell>
                <TableCell align="left">Submission</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ minWidth: 200 }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell align="left">
                    <Link
                      href={
                        "https://codeforces.com/contest/" +
                        row.problem.substring(0, row.problem.length - 1) +
                        "/problem/" +
                        row.problem[row.problem.length - 1]
                      }
                      underline="hover"
                    >
                      {row.problem}
                    </Link>
                  </TableCell>
                  {showTags && <TableCell align="left">{row.tags}</TableCell>}

                  <TableCell align="left">{row.rating}</TableCell>
                  <TableCell salign="left">{row.verdict}</TableCell>
                  {/* <a href='#'> */}
                  <TableCell align="left">
                    <Link
                      href={
                        "https://codeforces.com/contest/" +
                        row.problem.substring(0, row.problem.length - 1) +
                        "/submission/" +
                        row.submission
                      }
                      underline="hover"
                    >
                      {row.submission}
                    </Link>
                  </TableCell>
                  {/* </a> */}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default MakeTable;
