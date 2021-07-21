import React from "react";
import "./CharComponent.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CharComponent(props) {
  const classes = useStyles();

  return (
    <div className="Characters">
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Birth Year :</strong> {props.birth_year}
          </Card.Subtitle>
          <Card.Text>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}><strong>Films :</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {props.films.map((value) => {
                    if (props.id === value.id) {
                      return (
                        <div>
                          <ul>
                            <li>{value.datas.title}</li>
                          </ul>
                        </div>
                      );
                    }
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>Gender :</strong> {props.gender}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Eye Color :</strong> {props.eye_color}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Hair Color :</strong> {props.hair_color}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Height : </strong>
              {props.height} cm
            </ListGroupItem>
            <ListGroupItem>
              <strong>Weight : </strong>
              {props.weight} kg
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
