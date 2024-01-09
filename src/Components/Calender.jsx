import React from "react";
import Card from "./Card";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const newTheme = (theme) =>
  createTheme({
    ...theme,
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            width: "270px",
            height: "300px",
            color: "#bbdefb",
            borderRadius: 10,
            borderWidth: 0,
            borderColor: "#2196f3",
            border: "0px solid",
          },
        },
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          root: {
            width:"275px",
            height:"100px",
            color: '#f8bbd0',
            borderRadius: 10,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          },
          label: {
            color: '#F0ECE5',
            borderRadius: 3,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          }
        }
      },
      MuiPickersYear: {
        styleOverrides: {
          root: {
            color: '#000000',
            borderRadius: 10,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          },
          yearButton: {
            color: "#F0ECE5"
          }
        }
      },
      MuiDayCalendar: {
        styleOverrides: {
          root: {
            color: '#f8bbd0',
            borderRadius: 10,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          },
          weekDayLabel: {
            color: '#F0ECE5',
            borderRadius: 10,
            borderWidth: 0,
            border: '0px solid',
          },
        }
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: '#F0ECE5',
            borderRadius: 17,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          },
          today: {
            color: '#F0ECE5',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#F0ECE5',
            border: '1px solid',
            backgroundColor: '#880e4f',
          }
        }
      },
      MuiPickersMonth: {
        styleOverrides: {
          root: {
            color: '#F0ECE5',
            borderRadius: 3,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
          }
        }
      },
    },
  });

export default function Calender() {
  return (
    <Card className="calendar">
      <ThemeProvider theme={newTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </ThemeProvider>
    </Card>
  );
}
