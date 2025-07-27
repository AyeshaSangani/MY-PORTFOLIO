function result() {

    let eng = +document.getElementById("eng").value

    let phy = +document.getElementById("phy").value

    let maths = +document.getElementById("maths").value

    let chem = +document.getElementById("chem").value

    let comp = +document.getElementById("comp").value

    if (eng >= 99|| phy >= 99 || maths >= 99 || chem >= 99 || comp >= 99) {
        alert("Invalid Marks Entered (Max. Marks 98)")
    }
    else {
        let obt = document.getElementById("obt").innerHTML = eng + phy + maths + chem + comp

        let totalmarks = 500

        let per = document.getElementById("per").innerHTML = obt / totalmarks * 100

        // document.write("per"   +   per.toFixed(2) + "%" )


        if (per >= 80 && per <= 99) {
            document.getElementById("grade").innerHTML = "A+"
            document.getElementById("grade").style.color = "darkblue"
        }
        else if (per >= 70 && per < 80) {
            document.getElementById("grade").innerHTML = "A"
            document.getElementById("grade").style.color = "orange"

        }
        else if (per >= 60 && per < 70) {
            document.getElementById("grade").innerHTML = "B"
            document.getElementById("grade").style.color = "green"

        }
        else if (per >= 50 && per < 60) {

            document.getElementById("grade").innerHTML = "C"
            document.getElementById("grade").style.color = "darkgreenyellow"
        }
        else if (per >= 40 && per < 50) {
            document.getElementById("grade").innerHTML = "D"
            document.getElementById("grade").style.color = "orchid"
        }
        else {
            document.getElementById("grade").innerHTML = "FAIL"

            document.getElementById("grade").style.color = "red"


        }

    }
}

function reload () {
    window.location.reload()
}