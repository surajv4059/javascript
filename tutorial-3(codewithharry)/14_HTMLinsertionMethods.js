let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1>Hello World </h1>";

// More insertion methods

let div1 = document.createElement("div1");
div1.innerHTML = "<h1>Hello dosto 1</h1>";
a.prepend(div1);

let div2 = document.createElement("div2");
div2.innerHTML = "<h1>Hello dosto 2</h1>";
a.append(div2);

let div3 = document.createElement("div3");
div3.innerHTML = "<h1>Hello dosto 3</h1>";
a.before(div3);

let div4 = document.createElement("div4");
div4.innerHTML = "<h1>Hello dosto 4</h1>";
a.after(div4);

a.replaceWith(div1);
