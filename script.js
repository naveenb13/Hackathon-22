let nav = document.createElement('div');
nav.setAttribute('id', 'nav1');
nav.innerHTML = "<h1>Search for the Nationality based on the Name</h1>"
document.body.append(nav);

let div2 = document.createElement('div');
div2.setAttribute('id', 'divtag');

let inp = document.createElement('input');
inp.setAttribute('id', 'inp1');
inp.setAttribute('type', 'text');

let but = document.createElement('button');
but.setAttribute('id', 'but1');
but.setAttribute('onclick', 'nationalize()');
but.innerHTML = "<b> S e a r c h <b>";

div2.append(inp);
div2.append(but);
document.body.append(div2);

let div3 = document.createElement('div');
div3.setAttribute('id', 'task')
document.body.append(div3);

let div4 = document.createElement('div');
div4.setAttribute('id', 'task1')
document.body.append(div4);

async function nationalize() {
    try {
        let val = document.getElementById("inp1").value;
        console.log(val);
        let res = await fetch(`https://api.nationalize.io?name=${val}`);
        let res1 = await res.json();
        console.log(res1);

        if (res1.country.length == 0) {
            document.getElementById('task').innerText = `Note : The Name is not listed in any of the Countries and it does not have any Probability Value`
            document.getElementById('task1').innerText = ``
        }

        else if (res1.country.length == 1) {

            let firstcountry = res1.country[0].country_id;
            let firstprobability = res1.country[0].probability;

            document.getElementById('task').innerText = `The 1st Top Country : ${firstcountry} and its Probability Value : ${firstprobability}`
            document.getElementById('task1').innerText = `Note : The Name has only 1 Country and 1 Probability Value`
        } else
            if (res1.country.length >= 2) {

                let firstcountry = res1.country[0].country_id;
                let firstprobability = res1.country[0].probability;

                let secondcountry = res1.country[1].country_id;
                let secondprobability = res1.country[1].probability;

                document.getElementById('task').innerText = `The 1st Top Country : ${firstcountry} and its Probability Value : ${firstprobability}`
                document.getElementById('task1').innerText = `The 2st Top Country : ${secondcountry} and its Probability Value : ${secondprobability}`
            }

    }
    catch (error) {
        console.log(error);
    }
}
nationalize();