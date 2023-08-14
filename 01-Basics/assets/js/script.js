var a = 10;
        let b = 20;
        const c = 30;
        var d = 50;
        if(d > 20)
        {
            document.write(`<p> a = ${a} ` );
            document.write(`<p> b = ${b} ` );
            document.write(`<p> c = ${c} ` );
            document.write(`<p> d = ${d} ` );
            
            var x = 100;
            let y = 200;
            const z = 300;
            document.write("<hr>")
            document.write(`<p> x = ${x} ` );
            document.write(`<p> y = ${y} ` );
            document.write(`<p> z = ${z} ` );
        }
        document.write("<hr>")
        document.write(`<p> x = ${x} ` );
       // document.write(`<p> y = ${y} ` );
        //document.write(`<p> z = ${z} ` );

        document.write("<hr>");
        var isAdmin = false;
        document.write(`<p> isAdmin = ${typeof(isAdmin)}</p>`);
        document.write(`<p> isAdmin = ${isAdmin}</p>`);

        var title = "Welcome to js";
        document.write(`<p>title = ${typeof(title)} </p>`);
        document.write(`<p> title = ${title} </p>`);

        var xx = 100;
        document.write(`<p>title = ${typeof(xx)} </p>`);
        document.write(`<p> title = ${xx}</p>`);

            var yy = 100.436;
        document.write(`<p>title = ${typeof(yy)}</p>`);
        document.write(`<p> title = ${yy}</p>`);

        var colors = ['apple','yellow','orange',20,true,20.45];
        document.write(`<p>colors = ${typeof(colors)}</p>`);
        document.write(`<p>colors = ${colors}</p>`);

        //object
        var user = {
            name : "prithviraj",
            email : "prithvirajkpatil29@gmail.com",
            mobile :9900
            
        };
        document.write(`<p>user = ${typeof(user)}</p>`);
        document.write(`<p>user = ${user}</p>`);
        
        //functions
        function defaultFunction()
        {
            document.write(`This is Default Function`);
        }
        defaultFunction();

        function fun(name,email)
        {
            var name = "prithviraj";
            var email = "prithvirajkpatil29@gmail.com";
            document.write(`<p>Name = ${name}`);
            document.write(`<p>Email = ${email}`);
        }
       // fun("prithviraj","patil29@gmail.com");
        fun();