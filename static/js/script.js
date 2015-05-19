var myApp = angular.module('tasks', ['ngRoute']);

myApp.factory('tasksFactory', function(){
    var tasks = [
        {task: 'Eat Lunch', priority: 'HIGH', deadline: new Date(2015, 2, 23), created: new Date(2014, 5, 1)},
        {task: 'Get Black Belt', priority: 'HIGH', deadline: new Date(2015, 3, 15), created: new Date(2014, 5, 15)},
        {task: 'Play basketball', priority: 'MEDIUM', deadline: new Date(2015, 3, 11), created: new Date(2014, 6, 13)}];
    var priority = ['HIGH', 'MEDIUM', 'LOW'];
    var factory = {};
    factory.getTasks = function(callback){
        callback(tasks);
    }
    factory.getPriority = function(callback){
        callback(priority);
    }
    return factory;
});

myApp.controller('tasksController', function($scope, tasksFactory){
    $scope.tasks = [];
    $scope.priority = [];
    tasksFactory.getTasks(function(data){
        $scope.tasks = data;
    });
    tasksFactory.getPriority(function(data){
        $scope.priority = data;
    });
    $scope.addTask = function(){
        $scope.newTask.created = new Date();
        $scope.tasks.push($scope.newTask);
    }
    $scope.removeTask = function(task){
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    }
});