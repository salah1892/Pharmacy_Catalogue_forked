import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import uuid from "uuid";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

const types = [
  {
    id: "1",
    domain: "Online",
    items: [
      "Australian Journal of Pharmacy",
      "Australian Pharmacist",
      "Online module",
      "Podcast ",
      "Recorded session"
    ]
  },
  {
    id: "2",
    domain: "Face to face",
    items: ["Conference", "Workshop"]
  }
];

const useStyles = makeStyles({
  root: {}
});

export default function Type() {
  const classes = useStyles();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {types.map(domain => {
          return (
            <div>
              <div className="topics-item">
                <div className="second-level-container">
                  <div className="second-level-container-checkbox">
                    <Checkbox />
                  </div>
                  <TreeItem
                    className="topics-item"
                    nodeId={domain.id}
                    label={domain.domain}
                  >
                    <div>
                      {domain.items.map((item, index) => {
                        return (
                          <div>
                            <div className="topic-item">
                              <Checkbox />
                              <div>{item}</div>
                            </div>
                            <Divider />
                          </div>
                        );
                      })}
                    </div>
                  </TreeItem>
                </div>
              </div>
              <Divider />
            </div>
          );
        })}
      </TreeView>
    </div>
  );
}
