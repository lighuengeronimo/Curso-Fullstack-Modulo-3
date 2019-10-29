var schedule = [
  { 
  month:"september",
  team1:"U1",
  team2:"U4",
  date:"9/01",
  day:"Saturday",
  time:"9:30 a.m.",
  school:"AJ Katzenmaier",
  },
  { 
    month:"september",
    team1:"U3",
    team2:"U2",
    date:"9/01",
    day:"Saturday",
    time:"1:00 p.m.",
    school:"Greenbay",
  },
  { 
    month:"september",
    team1:"U5",
    team2:"U6",
    date:"9/08",
    day:"Saturday",
    time:"9:30 a.m.",
    school:"Howard A Yeager",
  },
  { 
    month:"september",
    team1:"U6",
    team2:"U1",
    date:"9/08",
    day:"Saturday",
    time:"1:00 p.m.",
    school:"Marjorie P Hart",
  },
  { 
    month:"september",
    team1:"U2",
    team2:"U4",
    date:"9/15",
    day:"Saturday",
    time:"9:30 a.m.",
    school:"North",
  },
  { 
    month:"september",
    team1:"U3",
    team2:"U5",
    date:"9/15",
    day:"Saturday",
    time:"1:00 p.m.",
    school:"AJ Katzenmaier",
  },
  { 
    month:"september",
    team1:"U1",
    team2:"U3",
    date:"9/22",
    day:"Saturday",
    time:"9:30 a.m.",
    school:"South",
  },
  { 
    month:"september",
    team1:"U2",
    team2:"U6",
    date:"9/22",
    day:"Saturday",
    time:"1:00 p.m.",
    school:"Howard A Yeager",
  },
  { 
    month:"september",
    team1:"U4",
    team2:"U5",
    date:"9/29",
    day:"Saturday",
    time:"9:30 a.m.",
    school:"Greenbay",
  },

  { 
    month:"october",
    team1:"U2",
    team2:"U5",
    date:"10/06",
    day:"Sunday",
    time:"9:30 a.m.",
    school:"Marjorie P Hart",
  },
  { 
    month:"october",
    team1:"U1",
    team2:"U6",
    date:"10/06",
    day:"Sunday",
    time:"1:00 p.m.",
    school:"South",
  },
  { 
    month:"october",
    team1:"U3",
    team2:"U4",
    date:"10/13",
    day:"Sunday",
    time:"9:30 a.m.",
    school:"Howard A Yeager",
  },
  { 
    month:"october",
    team1:"U5",
    team2:"U1",
    date:"10/13",
    day:"Sunday",
    time:"1:00 p.m.",
    school:"Greenbay",
  },
  { 
    month:"october",
    team1:"U6",
    team2:"U3",
    date:"10/20",
    day:"Sunday",
    time:"9:30 a.m.",
    school:"North",
  },
  { 
    month:"october",
    team1:"U2",
    team2:"U4",
    date:"10/20",
    day:"Sunday",
    time:"1:00 p.m.",
    school:"Marjorie P Hart",
  },
  { 
    month:"october",
    team1:"U3",
    team2:"U1",
    date:"10/27",
    day:"Sunday",
    time:"9:30 a.m.",
    school:"AJ Katzenmaier",
  },
  { 
    month:"october",
    team1:"U5",
    team2:"U6",
    date:"10/27",
    day:"Sunday",
    time:"1:00 p.m.",
    school:"Howard A Yeager",
  }
  
]

var locations =[
  {
    school:"AJ Katzenmaier",
    adress:"24 W. Walton St., Chicago, IL 60610",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110987!2d-87.6312390845582!3d41.90029237922041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913537479"
  },
  {
    school:"Greenbay",
    adress:"1734 N. Orleans St., Chicago, IL 60614",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913711254"
  },
  {
    school:"Howard A Yeager",
    adress:"2245 N. Southport Ave., Chicago, IL 60614",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913748446"
  },
  {
    school:"Marjorie P Hart",
    adress:"2625 N. Orchad St., Chicago, IL 60614",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-87.64808628505426!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913859991"
  },
  {
    school:"North",
    adress:"1409 N. Ogden Ave., Chicago, IL 60610",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3363025419576!2d-87.64835588505504!3d41.90712867157694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a8945%3A0xb6ad1ec2b6f379ba!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913888038"
  },
  {
    school:"South",
    adress:"2101 N. Fremont St., Chicago, IL 60614",  
    map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7477648265644!2d-87.65355538505459!3d41.91978077078475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913907711"
  }
]

var app = new Vue({
  el: '#app',
  data:{
    scheduleVue:[{ month:"September",monthSchedule:[]},
                 { month:"October",monthSchedule:[]}],
  }
});


//llena los datos adress y map_url en el array de schedule a partir del array locations


for (i=0;i<schedule.length;i++){
  var isFound=false;
  var j=0;
  schedule[i].gameNumber= "game"+i;
  schedule[i].callMapId= "#gameMap"+i;
  schedule[i].mapNumber= "gameMap"+i;
  while(j<locations.length && !isFound){
    schedule[j].school==locations[j].school ? 
    (schedule[i].adress=locations[j].adress, schedule[i].map_url=locations[j].map_url,isFound=true) : (schedule[i].adress="",schedule[i].map_url="")
    j++;
  }
}




function createSchedule() {
  var checkedBoxesTeams = Array.from(document.querySelectorAll('input[name=teams]:checked')).map(elt => elt.value);;
  var checkedBoxesTime = Array.from(document.querySelectorAll('input[name=time]:checked')).map(elt => elt.value);
  var checkedBoxesLocation = Array.from(document.querySelectorAll('input[name=locations]:checked')).map(elt => elt.value);
  var dropdownValue = $("#timeDropdown").val();
  var cont=0;
  
  filterMonth("september");
  filterMonth("october");

  for (i=0;i<2;i++){

    for(j=0;j<app.scheduleVue[i].monthSchedule.length;j++){
      j==0 ? app.scheduleVue[i].monthSchedule[j].collapseType="collapse show" : app.scheduleVue[i].monthSchedule[j].collapseType="collapse";
    }
  }


  function filterMonth(monthParam){
    app.scheduleVue[cont].monthSchedule = 
    schedule.filter(schedule => ((checkedBoxesTeams.includes(schedule.team1)) || (checkedBoxesTeams.includes(schedule.team2))) 
                            && (schedule.time == dropdownValue || dropdownValue == "Any")
                            && checkedBoxesLocation.includes(schedule.school)
                            && schedule.month == monthParam);
    cont++;
  }

  function readDeviceOrientation() {
                 		
    if (Math.abs(window.orientation) === 90) {
        alert('Landscape');
    } else {
    	alert('Portrait');
    }
  }
  

  window.addEventListener('orientationchange', readDeviceOrientation);
  readDeviceOrientation();

}





createSchedule();