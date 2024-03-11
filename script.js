var globalpageno=0;

async function fetchdata(pageno){
    let data = await fetch("https://vidsrc.to/vapi/movie/new/"+(pageno));
    data=await data.json();
    document.getElementById("display-list").innerHTML='';
    document.getElementById("page-no-display").innerText=data.result.page;
    document.getElementById("page-no-input").value=data.result.page;
    console.log("page: ",data.result.page);
    globalpageno=data.result.page;
    let items=data.result.items; 

    let index=0;
    for (let i of items){

        var chilDiv=document.createElement("div");
        chilDiv.innerHTML=i.title
        chilDiv.id="movieItem";
        chilDiv.addEventListener('click',()=>{
            window.open(i.embed_url_imdb, '_blank');
        });
        
        document.getElementById("display-list").appendChild(chilDiv);
        index++;
    }
}


function next(){
    document.getElementById("display-list").innerHTML='Loading';
    fetchdata(globalpageno+1);    
}

function prev(){
    document.getElementById("display-list").innerHTML='Loading';
    fetchdata(globalpageno-1);
    
}

function topage(){
    var num=document.getElementById("page-no-input").value;
    fetchdata(num);  
}