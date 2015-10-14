/**
 * Created by session2 on 10/8/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Ethnicity', 'Percent of Arizona population'],
        ['White alone',     57.8],
        ['Hispanic',      29.6],
        ['Black or African American',     4.1],
        ['American Indian',    4.6],
        ['Asian',    2.8],
        ['Native Hawaiian',    0.2],
    ]);

    var options = {
        title: 'Largest ancestries in Arizona'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}