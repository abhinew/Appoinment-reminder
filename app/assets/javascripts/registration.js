/**
 * Created by abhi on 27/09/16.
 */

function validateFormSubmit() {
    
    var password = document.registration.password.value;
    var rePassword = document.registration.rePassword.value;
    if (password != rePassword) {
        alert("Passwords do not match.");
        return false;
    }
    var xhttp = new XMLHttpRequest();
    var url = "/registration";
    var name = document.registration.uname.value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var country = document.registration.country.value;
    var state = document.registration.state.value;
    var city = document.registration.city.value;
   
    var param = "username="+name+"&password="+password+"&gender="+gender+"&country="+country+"&state="+state+"&city="+city;
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            alert(xhttp.responseText);
        }
    };
    xhttp.send(param);
    return false;


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

       //console.log($(".state").not(":first-child"));
        $(".state").not(":first-child").empty();
        var countrySelected = $(".country").val();
        for (var i=0; i<countryList.length; i++ )
        {
            if (countryList[i].country == countrySelected)
            {
                $(".state").append($("<option></option>"));
                var stateList = countryList[i].states;
                for(var j=0; j<stateList.length; j++)
                {;
                    $(".state").append($("<option></option>").text(stateList[j].stateName));

                }

            }
        }
        var e = document.getElementsByClassName("country");
       console.log(e);
        e = e[0];

        var selectedValue = e.options[e.selectedIndex].value;
        console.log(selectedValue);
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

