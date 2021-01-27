import React from "react";
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ContactsTable from "../../components/contacts-table";
import Statistics from "../../components/statistics";

const getContacts = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const { results } = await response.json();
  return results;
};

const Contacts = () => {
  const { isLoading, error, data } = useQuery("contacts", getContacts);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h3">Contacts</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {(() => {
              if (isLoading) {
                return <p>Loading...</p>;
              }

              if (error) {
                return <p>An error has occurred</p>;
              }
              return (
                <>
                  <ContactsTable data={data} />
                  <Statistics data={data} />
                </>
              );
            })()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contacts;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));
