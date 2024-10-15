import React, { useContext } from "react";
import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";

function NavCPD() {
  return (
    <div>
      <List>
        <div className="select-container">
          <FormControl className="select">
            <InputLabel htmlFor="year">2018/19</InputLabel>
            <Select
              value={""}
              onChange={""}
              inputProps={{
                name: "age",
                id: "year"
              }}
            >
              <MenuItem value={10}>2018/19</MenuItem>
              <MenuItem value={20}>2017/18</MenuItem>
              <MenuItem value={30}>2016/17</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Link to="/plan" style={{ color: "white" }}>
          <div className="plan-container">
            <i className="material-icons plan-icon">assignment</i>
            <span className="plan-text"> My 2018/19 Plan </span>
          </div>
        </Link>
        <Divider />
        <div className="cpd-nav-progress">
          <div className="cpd-nav-progress-title">Progress</div>
          <div className="cpd-nav-progress-points">23 / 40 CPD Points</div>
          <div className="cpd-nav-progress-bar">
            <progress max="100" value={58}>
              <strong>Skill Level: 50%</strong>
            </progress>
          </div>
        </div>
        <Divider />
        <div className="cpd-nav-progress">
          <div className="cpd-nav-progress-title">CPD Activities</div>
        </div>
        <div className="checkboxes cpd-checkboxes">
          <div className="checkbox">
            <Checkbox
              /*checked={}*/
              color="inherit"
              onChange={""}
              value="gilad"
            />
            Not started
          </div>
          <div className="checkbox">
            <Checkbox color="inherit" onChange={""} value="gilad" />
            In progress
          </div>
          <div className="checkbox">
            <Checkbox
              /*checked={}*/
              color="inherit"
              onChange={""}
              value="gilad"
            />
            Complete
          </div>
        </div>
      </List>
      ;
    </div>
  );
}

export default NavCPD;
