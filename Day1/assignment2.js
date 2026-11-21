/* const browserVersion = "Chrome"; declared outside the function
function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersion = "Firefox"; created another variable with the same name using var
    }
    console.log(browserVersion);
}
getBrowserVersion(); */ 

const browserVersion = "Chrome";
function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "Firefox";
    }

    console.log(browserVersion);
}
getBrowserVersion();