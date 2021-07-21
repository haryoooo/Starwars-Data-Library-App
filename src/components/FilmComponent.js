import React from "react";
import './FilmComponent.css'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FilmComponent(props) {
  const classes = useStyles();

  return (
    <div className="Film">
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Release Date :</strong> {props.release_date}
          </Card.Subtitle>
          <Card.Text>
            {props.opening}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}><strong>Character :</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {props.character.map((val) => { if (val.id === props.id) { return <ul><li>{val.datas.name}</li></ul> } })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListGroupItem>
            <ListGroupItem><strong>Producer : </strong>{props.producer}</ListGroupItem>
            <ListGroupItem><strong>Director : </strong>{props.director}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
