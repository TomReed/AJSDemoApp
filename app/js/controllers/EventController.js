'use strict'  //means errors will be thrown for global variables including accidental typos etc


//the controller function on our eventsApp module can take two parameters,
// the name of the Controller and a function that will be the controller itself  
eventsApp.controller('EventController',

//>>controllers are responsible for creating scope<<: they take an empty $scope object and 
// populate it with whatever is necessary for the view
    
    function EventController($scope){


        $scope.event = {
            name: 'Angular Boot Camp',
            date: '11/3/2019',
            time: '14:00',
            location: {
                city: 'Bridgend',
                office: 'Hughes Park',
                room: '101'

            },
            imageUrl: '/img/kludge.jpg'


            

        }


    }






);

