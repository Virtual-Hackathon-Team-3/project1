import React from "react";
import {
  Avatar,
  div,
  Paper,
  Button,
  TextField,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import StorageIcon from "@material-ui/icons/Storage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DescriptionIcon from "@material-ui/icons/Description";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

const EmployeeForm = () => {
  const useStyle = makeStyles({
    input: {
      width: "50%",
      marginBottom: "2rem",
    },
    button: {
      marginTop: "3rem",
      width: "20%",
    },
  });

  const classes = useStyle();

  const avatarStyle = { backgroundColor: "green" };

  const [startDate, setStartDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [applyByDate, setApplyDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const DateChange = (date) => {
    setApplyDate(date);
  };

  return (
    <>
      <div>
        <div align="center">
          <Avatar style={avatarStyle}>
            <WorkOutlineIcon />
          </Avatar>
          <h2>Post A New Job</h2>
        </div>

        <div style={{ textAlign: "center" }}>
          <div>
            <TextField
              className={classes.input}
              id="input-with-icon-div"
              label="Role"
              fullWidth
              required
            />
          </div>

          <div>
            <TextField
              className={classes.input}
              id="input-with-icon-div"
              label="Qualifications"
              fullWidth
              required
              multiline
              rows={3}
            />
          </div>

          <div alignItems="flex-end">
            <TextField
              className={classes.input}
              id="input-with-icon-div"
              label="Job Description"
              fullWidth
              required
              multiline
              rows={3}
            />
          </div>

          <div alignItems="flex-end">
            <TextField
              className={classes.input}
              id="input-with-icon-div"
              label="Salary"
              fullWidth
            />
          </div>

          {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Joining Date"
                value={startDate}
                onChange={handleDateChange}
                fullWidth
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Applied before date"
                value={applyByDate}
                onChange={DateChange}
                fullWidth
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
          </MuiPickersUtilsProvider>*/}
        </div>
        <Button
          className={classes.button}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Post
        </Button>
      </div>
    </>
  );
};

export default EmployeeForm;
