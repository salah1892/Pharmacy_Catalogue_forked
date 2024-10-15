import React, { useContext } from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Checkbox from "@material-ui/core/Checkbox";

import { CoursesContext } from "../Context/CoursesContext";
import Topics from "./Topics";
import Competencies from "./Competencies";
import Type from "./Type";

function NavCatalogue() {
  const { topics, types, changeTopic } = useContext(CoursesContext);
  topics.sort(function(a, b) {
    if (a < b) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  console.log(topics);
  //topics.shift();
  let newTopics = [];
  for (let i = 0; i < topics.length; i++) {
    if (i !== 0) {
      newTopics.push(topics[i]);
    }
  }
  //topics = newTopics;
  types.sort(function(a, b) {
    if (a < b) {
      return -1;
    }
    if (a.types > b.types) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Type</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Type />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Topics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Topics />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Competencies</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Competencies />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default NavCatalogue;

/*
<List>
{types.map((text, index) => (
  <div className="list-item-nav">
    <ListItem button key={text}>
      <Checkbox />
      <ListItemText primary={text} />
    </ListItem>
  </div>
))}
</List>

<List>
            {newTopics.map((text, index) => (
              <div className="list-item-nav">
                <ListItem button key={text} onClick={() => changeTopic(text)}>
                  <Checkbox />
                  <ListItemText primary={text} />
                </ListItem>
              </div>
            ))}
          </List>

*/
