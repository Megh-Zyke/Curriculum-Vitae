let c = document.getElementById("c");
        let c1 = document.querySelector("#c1");
        let python = document.querySelector("#python");
        let sql = document.querySelector("#sql");
        let html = document.querySelector("#html");
        let css = document.querySelector("#css");
        let js = document.querySelector("#js");
        let nodejs = document.querySelector("#nodejs");

        c.addEventListener("mouseover" , function(){
            document.querySelector(".c-progress").style.display = "block";
            document.querySelector(".c-p").style.display = "block";

        })

        c1.addEventListener("mouseover" , function(){
            document.querySelector(".c1-progress").style.display = "block";
            document.querySelector(".c1-p").style.display = "block";

        })

        python.addEventListener("mouseover" , function(){
            document.querySelector(".python-progress").style.display = "block";
            document.querySelector(".python-p").style.display = "block";

        })

        sql.addEventListener("mouseover" , function(){
            document.querySelector(".sql-progress").style.display = "block";
            document.querySelector(".sql-p").style.display = "block";

        })

        html.addEventListener("mouseover" , function(){
            document.querySelector(".html-progress").style.display = "block";
            document.querySelector(".html-p").style.display = "block";

        })

        css.addEventListener("mouseover" , function(){
            document.querySelector(".css-progress").style.display = "block";
            document.querySelector(".css-p").style.display = "block";

        })

        js.addEventListener("mouseover" , function(){
            document.querySelector(".js-progress").style.display = "block";
            document.querySelector(".js-p").style.display = "block";

        })

        nodejs.addEventListener("mouseover" , function(){
            document.querySelector(".nodejs-progress").style.display = "block";
            document.querySelector(".nodejs-p").style.display = "block";

        })
