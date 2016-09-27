/**
 * Created by abhi on 27/09/16.
 */

function validateForm() {

    if ($(".password").val() != $(".re-password").val()) {
        alert("Passwords do not match.");
        return false;
    }

}

$(document).ready(function(){


    var countryList = [
        {
            "country" : "India",
            "states" :
                [
                    {
                        "stateName" : "Uttar Pradesh",
                         "cities" : ["Allahabad","Agra","Fatehpur","Jhansi"]
                    },
                    {
                        "stateName" : "Tamil Nadu",
                        "cities" : ["Chennai","Coimbatore","Trichy"]
                    },
                    {
                        "stateName" : "Karnataka",
                        "cities" : ["Banglore","Coorg","Mysore","Udupi"]

                    }
                ]
        },
        {
            "country" : "Australia",
            "states" :
                [
                    {
                        "stateName" : "Queensland",
                        "cities" : ["Arukun","Brisbane","GoldCoast","Logan"]
                    },
                    {
                        "stateName" : "Victoria",
                        "cities" : ["ALphine","Indigo","Kingston","Melbourne"]
                    },
                    {
                        "stateName" : "New South Wales",
                        "cities" : ["Bourke","Sydney","Wellington","Wentworth"]

                    }
                ]

        }
    ];

    $(".country").change(function(){

       console.log($(".state").not(":first-child"));
        $(".state").not(":first-child").empty();
        var countrySelected = $(".country").val();
        for (var i=0; i<countryList.length; i++ )
        {
            if (countryList[i].country == countrySelected)
            {
                var stateList = countryList[i].states;
                for(var j=0; j<stateList.length; j++)
                {
                    $(".state").append($("<option></option>").attr("value",stateList[j].stateName).text(stateList[j].stateName));

                }

            }
        }
    });


    $(".state").change(function(){
        $(".city").empty();
        var countrySelected = $(".country").val();
        var stateSelected = $(".state").val();
        for (var i=0; i<countryList.length; i++)
        {
            if (countryList[i].country == countrySelected)
            {
                var stateList = countryList[i].states;
                for(var j=0; j<stateList.length; j++)
                {
                    if (stateList[j].stateName == stateSelected)
                    {
                        var cityList = stateList[j].cities;
                        for(var k=0; k<cityList.length; k++)
                        {
                            $(".city").append($("<option></option>").attr("value",cityList[k]).text(cityList[k]));
                        }

                    }
                }

            }

        }
    })

});

