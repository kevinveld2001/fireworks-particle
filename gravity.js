console.log("gravity js")

var balllist = []

function newbal(x, y, ) {
    var bal1 = {
        x: x,
        y: y,
        s: 10,
        movex: 1,
        movey: 0,
    }
    var bal2 = {
        x: x,
        y: y,
        s: 10,
        movex: 0,
        movey: 1,
    }
    var bal3 = {
        x: x,
        y: y,
        s: 10,
        movex: -1,
        movey: 0,
    }
    var bal4 = {
        x: x,
        y: y,
        s: 10,
        movex: 0,
        movey: -1,
    }
    var bal5 = {
        x: x,
        y: y,
        s: 7,
        movex: -0.7,
        movey: -0.7,
    }
    var bal6 = {
        x: x,
        y: y,
        s: 7,
        movex: 0.7,
        movey: -0.7,
    }
    var bal7 = {
        x: x,
        y: y,
        s: 7,
        movex: 0.7,
        movey: 0.7,
    }
    var bal8 = {
        x: x,
        y: y,
        s: 7,
        movex: -0.7,
        movey: 0.7,
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
