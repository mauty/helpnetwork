export default function formatAMPM (date) {
  let day = date.getDay();
  let month = date.getMonth();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, '0');
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  let strTime = monthNames[month] + ' ' + day + ', ' + hours + ':' + minutes + ' ' + ampm;
  return strTime;
}