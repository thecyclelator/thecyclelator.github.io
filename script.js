$(document).ready(function() 
{
    $("#firstBleedDay").datepicker();
    $("button").click(function()
	{
    	var selected = $("#dropdown option:selected").text();
        var firstBleedDay = $("#firstBleedDay").val();
		
        if (firstBleedDay == "")
		{
			alert("Please select 1st Bleed day.");
		} 
		else 
		{
			confirm(" Your first bleeding days was on " + firstBleedDay + "?");
		}
    });
});