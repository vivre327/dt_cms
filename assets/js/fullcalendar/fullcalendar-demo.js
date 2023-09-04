/*
 * fullcalendar 4.3.1
 * https://fullcalendar.io/
 */

var preSelDate = new Object();
var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
    height: 900, 
    plugins: ['dayGrid'],
    header: {
        left: "prevYear,prev,title,next,nextYear",
        //center: "today",
        right: ""
    },
    locale: 'ko',
    events: [{
            title: '블리자드 / [이벤트] 2022년 설연휴 이벤트',
            start: '2022-02-01',
            end: '2022-02-10', 
            className: "event-color-red" 
        },
        {
            title: '조이시티 / 프리스타일 버전 업그레이드',
            start: '2022-02-10',
            end: '2022-02-10',
            className: "event-color-blue" 
        },
        {
            title: 'KT / 고스트러너 출시 이벤트',
            start: '2022-02-01',
            end: '2022-02-03',
            className: "event-color-gray" 
        },
    ],
});

calendar.render();


