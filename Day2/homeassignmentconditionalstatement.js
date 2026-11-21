/* function launchBrowser(browsername){
    if(browsername=== "Chrome" ) {
    console.log(browsername);
    }
    else {
    console.log("launched other browser");
    }
    }
    launchBrowser ("Chrome" ); */

    function runTests (testType) {
        switch (testType) {
        case"smoke":
        console.log("smoke");
        break;
        case"sanity":
        console.log("sanity");
        break;
        case"regression":
        console.log("regression");
        break;
        default:
        console.log("smoke")
        }
        }
        runTests ("smoke");