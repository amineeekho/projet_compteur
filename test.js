function incrementer(){
            let demoElement = document.getElementById("demo");
            let cpt = Number(demoElement.innerHTML);
            cpt += 1;
            demoElement.innerHTML = cpt;
        }

         function desincrementer(){
            let demoElement = document.getElementById("demo");
            let cpt = Number(demoElement.innerHTML);
            cpt -= 1;
            demoElement.innerHTML = cpt;
        }