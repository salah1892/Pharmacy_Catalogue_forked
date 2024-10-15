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

let topics = [
  {
    name: "Cardiovascular",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Heart failure",
      "Angina",
      "Hypertension",
      "Arrhythmias",
      "Dyslipidaemia",
      "Anticoagulants/antiplatelets",
      "Case studies"
    ]
  },
  {
    name: "Endocrinology",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Thyroid disorders",
      "Osteoporosis",
      "Women’s health",
      "Mens health",
      "Case studies"
    ]
  },
  {
    name: "Eyes",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Glaucoma",
      "Macular degeneration",
      "Dry eyes",
      "Conjunctivitis",
      "Eye infections",
      "Case studies"
    ]
  },
  {
    name: "Gastrointestinal",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Dyspepsia/GORD/peptic ulcer disease",
      "Nausea and vomiting",
      "Constipation",
      "Diarrhoea",
      "Inflammatory bowel disease",
      "Case studies"
    ]
  },
  {
    name: "Cancer",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Musculoskeletal",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Rheumatoid arthritis",
      "Gout",
      "Osteoarthritis",
      "Acute soft tissue injuries",
      "Case studies"
    ]
  },
  {
    name: "Neurology",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Epilepsy",
      "Parkinson’s disease",
      "Migraine",
      "Dementia",
      "Multiple sclerosis",
      "Case studies"
    ]
  },
  {
    name: "Mental health",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Depression",
      "Anxiety",
      "Schizophrenia",
      "Bipolar disorder",
      "Insomnia",
      "ADHD",
      "Drug and alcohol dependencies",
      "Case studies"
    ]
  },
  {
    name: "Allergy and anaphylaxis",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Pain",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Infectious diseases",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Dermatology",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Respiratory",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Wound care",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  },
  {
    name: "Diabetes",
    curriculum: [
      "Aetiology and epidemiology",
      "Pathophysiology and pathology",
      "Diagnosis and treatment guidelines",
      "Treatment and management",
      "Management issues",
      "Role of the pharmacist and other health professionals",
      "Compounding",
      "Case studies"
    ]
  }
];

const useStyles = makeStyles({
  root: {}
});

export default function Topics() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {topics.map(topic => {
        return (
          <div>
            <div className="topics-item">
              <TreeItem
                className="topics-item"
                nodeId={topic.name}
                label={topic.name}
              >
                <div>
                  {topic.curriculum.map((item, index) => {
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
            <Divider />
          </div>
        );
      })}
    </TreeView>
  );
}
