/**
 * Created by session2 on 10/8/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Ethnicity', 'Percent of U.S. population'],
        ['German',     17.1],
        ['Irish',      11.6],
        ['African',     13.6],
        ['English',     9],
        ['Self-identified American',     6.7],
        ['Mexican',     10.9],
        ['Italian',     5.9],
        ['Polish',     3],
        ['French',     2.9],
        ['Scotish',     1.9],
        ['Scotish-Irish',     1.7],
        ['Amerindian',     1.6],
        ['Netherlands',     1.6],
        ['Puerto Rican',     1.5],
        ['Norwegian',     1.5],
        ['All Other',     9.5],
    ]);

    var options = {
        title: 'Fifteen Largest Ancestries in the United States'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}