import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '11:15 am', title: 'POWER' },
        { time: '12:00 pm', title: 'Open Gym' },
        { time: '12:15 pm', title: 'POWER' },
        { time: '12:30 pm', title: 'Open Gym' },
        { time: '12:45 pm', title: 'POWER' },
        { time: '01:00 pm', title: 'Open Gym' },
      ];
    case 12:
      return [
        { time: '11:15 am', title: 'POWER' },
      ]
    case 15:
      return [
        { time: '09:30 am', title: 'PUSH' },
      ];
    default:
      return [];
  }
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const renderCell = (date) => {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <Calendar
      bordered
      value={selectedDate}
      renderCell={renderCell}
      onChange={handleDateSelect}
    />
  );
};

export default CalendarPage;
