import React, { useState } from 'react';
import './TimeLine.css';

const Timeline = () => {
  const [selectedDate, setSelectedDate] = useState("16/01/2014");
  
  const events = [
    { date: "16/01/2014", title: "Horizontal Timeline", description: "Lorem ipsum dolor sit amet..." },
    { date: "28/02/2013", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "20/04/2013", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "20/05/2012", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "09/07/2011", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "30/08/2007", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "15/09/2001", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "01/11/1997", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "10/12/1994", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "19/01/1991", title: "Event title here", description: "Lorem ipsum dolor sit amet..." },
    { date: "03/03/1988", title: "Event title here", description: "Lorem ipsum dolor sit amet..." }
  ];
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  
  const handlePrevClick = () => {
    const currentIndex = events.findIndex(event => event.date === selectedDate);
    const prevIndex = (currentIndex - 1 + events.length) % events.length;
    setSelectedDate(events[prevIndex].date);
  };
  
  const handleNextClick = () => {
    const currentIndex = events.findIndex(event => event.date === selectedDate);
    const nextIndex = (currentIndex + 1) % events.length;
    setSelectedDate(events[nextIndex].date);
  };

  const selectedEvent = events.find(event => event.date === selectedDate);

  return (
    <section className="h--timeline js-h--timeline">
      <div className="h--timeline-container">
        <div className="h--timeline-dates">
          <div className="h--timeline-line">
            <ol>
              {events.map(event => (
                <li key={event.date}>
                  <a 
                    href="#0" 
                    data-date={event.date} 
                    className={`h--timeline-date ${event.date === selectedDate ? 'h--timeline-date--selected' : ''}`}
                    onClick={() => handleDateClick(event.date)}
                  >
                    {new Date(event.date).getFullYear()}
                  </a>
                </li>
              ))}
            </ol>
            <span className="h--timeline-filling-line" aria-hidden="true"></span>
          </div>
        </div>

        <nav className="h--timeline-navigation-container">
          <ul>
            <li>
              <a 
                href="#0" 
                className={`text-replace h--timeline-navigation h--timeline-navigation--prev ${events.findIndex(event => event.date === selectedDate) === 0 ? 'h--timeline-navigation--inactive' : ''}`}
                onClick={handlePrevClick}
              >
                Prev
              </a>
            </li>
            <li>
              <a 
                href="#0" 
                className="text-replace h--timeline-navigation h--timeline-navigation--next"
                onClick={handleNextClick}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h--timeline-events">
        <ol>
          <li className={`h--timeline-event ${selectedDate === selectedEvent.date ? 'h--timeline-event--selected' : ''} text-component`}>
            <div className="h--timeline-event-content container">
              <h2 className="h--timeline-event-title">{selectedEvent.title}</h2>
              <em className="h--timeline-event-date">{new Date(selectedEvent.date).toDateString()}</em>
              <p className="h--timeline-event-description">
                {selectedEvent.description}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
