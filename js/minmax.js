let nbrs = [
    106, 573, 204, 804, 482,
    457, 769, 889, 860, 399,
    599, 824, 346, 851, 450,
    590, 520, 321, 341, 619,
    505, 769, 532, 764, 101
]
const displayMin = () => {
    /* if we have array of number and we would like to find min and max value in it. If we send an array to Math.min or Math.max methods we will get NaN. That is because Math.min or Math.max functions 
    expect distinct variables and not an array. The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. … in front of an array will convert array to distinct variables and send them to the function.
    */
    minnbr = Math.min(...nbrs);
    //get the access to the input box object
    let htmlctrl = document.getElementById("minMax");
    //display the min # to the text box
    htmlctrl.value = minnbr;
}
const displayMax = () => {
    maxnbr = Math.max(...nbrs)
    //get the access to the input box object
    let htmlctrl = document.getElementById("minMax");
    //display the max # to the text box
    htmlctrl.value = maxnbr;
}   