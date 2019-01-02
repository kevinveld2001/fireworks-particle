console.log("gravity js")

var balllist = []
var colorlist = ['#ff0000','#1CAFFE','#F6FA67','#1FFF00','#1FFF00','#002EFF','#FF7C00','#00FFAA','#FF0000','#FF8700']
function newbal(x, y, ) {
    
    
    var thiscolor = colorlist[Math.round(Math.random() * 10)]
 var nutraal = "#ffffff"
    if (Math.round(Math.random() * 10) > 8){
        nutraal = thiscolor
    }else if (Math.round(Math.random() * 10) > 4){
        nutraal = colorlist[Math.round(Math.random() * 10)]
    }else{
        nutraal = "#ffffff"
    }


    var bal1 = {
        x: x,
        y: y,
        s: 10,
        movex: 1,
        movey: 0,
        color:nutraal
    }
    var bal2 = {
        x: x,
        y: y,
        s: 10,
        movex: 0,
        movey: 1,
        color:nutraal
    }
    var bal3 = {
        x: x,
        y: y,
        s: 10,
        movex: -1,
        movey: 0,
        color:nutraal
    }
    var bal4 = {
        x: x,
        y: y,
        s: 10,
        movex: 0,
        movey: -1,
        color:nutraal
    }



    var bal5 = {
        x: x,
        y: y,
        s: 7,
        movex: -0.7,
        movey: -0.7,
        color:thiscolor
    }
    var bal6 = {
        x: x,
        y: y,
        s: 7,
        movex: 0.7,
        movey: -0.7,
        color:thiscolor
    }
    var bal7 = {
        x: x,
        y: y,
        s: 7,
        movex: 0.7,
        movey: 0.7,
        color:thiscolor
    }
    var bal8 = {
        x: x,
        y: y,
        s: 7,
        movex: -0.7,
        movey: 0.7,
        color:thiscolor
    }

    balllist.push(bal1)
    balllist.push(bal2)
    balllist.push(bal3)
    balllist.push(bal4)
    balllist.push(bal5)
    balllist.push(bal6)
    balllist.push(bal7)
    balllist.push(bal8)
}