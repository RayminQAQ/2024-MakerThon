// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1-F8nYTU8w1TFZgpZv1x5V9FatVYM7CsaZ_DzSqMXqfI";
// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

const fish_catch_tag = document.getElementById("fish_catch_tag");


function loadData() {
  $.ajax({
      type: "GET",
      url: sheetURL,
      dataType: "text",
      success: function (response) {
          var data = $.csv.toObjects(response);
          console.log(data);
          
          // ADD CODE FOR WEBPAGE
          document.cookie = data;
          
          // Iterate through each object in the array
          data.forEach(function(obj) {
            fish_catch_tag.textContent = obj["釣到魚"];
            console.log(obj["釣到魚"]);
          });
      },
      error: function (error) {
          console.error("Error loading data: ", error);
      }
  });
}

loadData();

setInterval(loadData, 5000);