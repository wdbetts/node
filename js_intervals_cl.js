var intervalGenerator = (function () {
    var startTime,
        maxTimeInt,
        displayOrder;

    function initModule() {
        startTime = new Date().getTime()
        maxTimeInt = 0;
        displayOrder = 1;
        console.log("Random" + "\t" + "Generated Order" + "\t" + "Time" + "\t" + "Display Order");
    }


    function logIntervalData(order, timeInterval) {
        var randNumber = Math.round(Math.random() * 101);
        console.log(randNumber + "\t" + order + "\t" + timeInterval + "\t" + displayOrder++);
    }

    function logCompletionTime(startTime) {
        var timeTaken = (new Date().getTime()) - startTime;
        timeTaken = Math.round(timeTaken / 1000 * 100) / 100; //convert from MS to seconds and round to 2 digits
        console.log("Time to run: " + timeTaken + " s");
    }

    function run() {


        for (var timeIntCount = 0; timeIntCount < 100; timeIntCount++) {
            //Generate random number between 0-5, add 5 so it will 5-10
            var timeInterval = (Math.random() * 5) + 5;

            setTimeout(logIntervalData, timeInterval * 1000, timeIntCount + 1, timeInterval);

            if (timeInterval > maxTimeInt)
                maxTimeInt = timeInterval;
        }

        setTimeout(logCompletionTime, maxTimeInt * 1000, startTime);
    }

    return {
        initModule:initModule,
        run:run
    }
})();

intervalGenerator.initModule();
intervalGenerator.run();