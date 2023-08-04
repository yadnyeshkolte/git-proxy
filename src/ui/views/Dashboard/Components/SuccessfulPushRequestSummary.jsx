/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accessibility from '@material-ui/icons/Accessibility';
import Card from '../../../components/Card/Card.jsx';
import CardHeader from '../../../components/Card/CardHeader.jsx';
import CardIcon from '../../../components/Card/CardIcon.jsx';
import CardFooter from '../../../components/Card/CardFooter.jsx';
import styles from '../../../assets/jss/material-dashboard-react/views/dashboardStyle.js';
import {getPushes} from '../../../services/git-push';
import {Redirect} from 'react-router-dom';
const useStyles = makeStyles(styles);

export default function SuccessfulPushRequestSummary(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const query={canceled: false, authorised: true, rejected: false};
    getPushes(setIsLoading, setData, setAuth, setIsError, query);
    }, [props]);

    if (isLoading) return (<div>Loading ...</div>);
    if (isError) return (<div>Something went wrong ...</div>);
    if (!auth) return (<Redirect to={{pathname: '/login'}} />);

  return (
    <Card>
      <CardHeader color="info" stats icon>
        <CardIcon color="info">
          <Accessibility />
        </CardIcon>
        <p className={classes.cardCategory}>Successful Pushes</p>
        <h3 className={classes.cardTitle}>{data.length}</h3>
      </CardHeader>
      <CardFooter stats>
      </CardFooter>
    </Card>
  );
}
