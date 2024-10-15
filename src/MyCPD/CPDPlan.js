import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { EnrolmentsContext } from "../Context/EnrolmentsContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
  const classes = useStyles();
  const { enrolments } = React.useContext(EnrolmentsContext);
  console.log(enrolments);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Reflection</TableCell>
            <TableCell align="left">Topic</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Points</TableCell>
            <TableCell align="left">Group</TableCell>
            <TableCell align="left">Competencies</TableCell>
            <TableCell align="left">Start Date</TableCell>
            <TableCell align="left">End Date</TableCell>
            <TableCell align="left">Provider</TableCell>
            <TableCell align="left">Accredited</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enrolments &&
            enrolments.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell align="center">
                  <i className="material-icons edit-icon">edit</i>
                </TableCell>
                <TableCell align="left">{row.topic}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.points}</TableCell>
                <TableCell align="left">{row.group}</TableCell>
                <TableCell align="left">{row.competencies}</TableCell>
                <TableCell align="left">{row.start_date}</TableCell>
                <TableCell align="left">{row.end_date}</TableCell>
                <TableCell align="left">{row.provider}</TableCell>
                <TableCell align="left">{row.accredited}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
