import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";

const domains = [
  {
    id: "1",
    domain: "Professionalism and ethics",
    standards: [
      "Uphold professionalism in practice",
      "Observe and promote ethical standards",
      "Practise within applicable legal framework",
      "Maintain and extend professional competence",
      "Apply expertise in professional practice",
      "Contribute to continuous improvement in quality and safety"
    ]
  },
  {
    id: "2",
    domain: "Communication and collaboration",
    standards: [
      "Collaborate and work in partnership for the delivery of patientcentred, culturally responsive care",
      "Collaborate with professional colleagues",
      "Communicate effectively",
      "Apply interpersonal communication skills to address problems"
    ]
  },
  {
    id: "3",
    domain: "Medicines management and patient care",
    standards: [
      "Develop a patientcentred, culturally responsive approach to medication management",
      "Implement the medication management strategy or plan",
      "Monitor and evaluate medication management",
      "Compound medicines",
      "Support Quality Use of Medicines",
      "Promote health and well-being"
    ]
  },
  {
    id: "4",
    domain: "Leadership and management",
    standards: [
      "Show leadership of self",
      "Manage professional contribution",
      "Show leadership in practice",
      "Participate in organisational planning and review",
      "Plan and manage physical and financial resources",
      "Plan, manage and build human resource capability",
      "Participate in organisational management"
    ]
  },
  {
    id: "5",
    domain: "Education and research",
    standards: [
      "Deliver education and training",
      "Participate in research",
      "Research, synthesise and integrate evidence into practice"
    ]
  }
];

const useStyles = makeStyles({
  root: {}
});

export default function Competencies() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {domains.map(domain => {
        return (
          <div className="domain-item">
            <TreeItem
              nodeId={domain.id}
              label={"Domain " + domain.id + ": " + domain.domain}
            >
              <div>
                <div className="standards-title">Standards:</div>
                {domain.standards.map((item, index) => {
                  return (
                    <div className="standard-item">
                      <Checkbox />
                      <div>
                        {domain.id}
                        {"."}
                        {index + 1} {item}
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              </div>
            </TreeItem>
            <Divider />
          </div>
        );
      })}
    </TreeView>
  );
}
