import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";

const ContactsTable = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uid}>
              <TableCell component="th" scope="row">
                <Avatar
                  src={contact.picture.thumbnail}
                  alt={contact.name.first}
                />
              </TableCell>
              <TableCell align="right">
                {contact.name.title} {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell align="right">
                {moment(contact.dob.date).format("dddd, MM/DD/YYYY, h:mm:ss A")}
                <p>{contact.dob.age} y/o</p>
              </TableCell>
              <TableCell align="right">{contact.email}</TableCell>
              <TableCell align="right">{contact.phone}</TableCell>
              <TableCell align="right">{contact.location.country}</TableCell>
              <TableCell align="right">{contact.nat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <Paper className={classes.paper}>{contact.name.first}</Paper>
  );
};

export default ContactsTable;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  table: {
    minWidth: 650
  }
}));
