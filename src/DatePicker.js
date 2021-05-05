import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function MaterialUIPickers() {
  
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date(''));
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date(''));
  const handleDateChange = (date) => {
    setSelectedStartDate(date);
    setSelectedEndDate(date)
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <Card>          
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedStartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedEndDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Card>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
