//We want to find out the total number of rows in all the tables (click on hyperlink to get to site)

//"document.querySelectorAll("tr").length" will count all the rows in all the tables

//"document.querySelectorAll("table").length" will count all the tables on the page

//document.querySelectorAll("tr").length - document.querySelectorAll("table").length; We dont want to include the first row for each table as this is the header, so we count the total amount of rows and subtract the total amount of tables, in this case 333 - 8


var lis = document.querySelectorAll("tr").length - document.querySelectorAll("table").length;
console.log(lis);
