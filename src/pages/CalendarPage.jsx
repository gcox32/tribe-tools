import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Calendar } from 'rsuite';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <Calendar
        value={selectedDate}
        onChange={handleDateSelect}
      />
    );
  };
  
  export default CalendarPage;
  