/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawUsersChart);

function reformatData(jsonData){
    var temp= jsonData.Count;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.date);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function reformatUserData(jsonData){
    var temp= jsonData.Count;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.date);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawMessageChart() {
    var jsonData = $.ajax({
        url: "http://localhost:4545/JEChat/messages/countperday",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', '# Messages');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Date'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('messages_per_day'));

    chart.draw(data, options);

}

function drawUsersChart() {
    var jsonData = $.ajax({
        url: "http://localhost:4545/JEChat/users/activity",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', '# of Posts');
    data.addRows(reformatUserData(JSON.parse(jsonData)));

    var options = {
        title: 'Activity by User',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Posts',
            minValue: 0
        },
        vAxis: {
            title: 'Date'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('active_users'));

    chart.draw(data, options);

}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawUsersChart);

function count(){

    var xhttp = new XMLHttpRequest();

}
//
// function drawBasic() {
//
//       // var data = google.visualization.arrayToDataTable([
//       //   ['City', '2010 Population',],
//       //   ['New York City, NY', 8175000],
//       //   ['Los Angeles, CA', 3792000],
//       //   ['Chicago, IL', 2695000],
//       //   ['Houston, TX', 2099000],
//       //   ['Philadelphia, PA', 1526000]
//       // ]);
//
//       data = countByPartId();
//
//       var options = {
//         title: 'Total Parts by Id/name',
//         chartArea: {width: '50%'},
//         hAxis: {
//           title: 'Total Number',
//           minValue: 0
//         },
//         vAxis: {
//           title: 'Part'
//         }
//       };
//
//       var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//
//       chart.draw(data, options);
// }
