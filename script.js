const searchForm=document.getElementById('search-form');
const searchBox=document.getElementById('search-box');
const searchresult=document.getElementById('search-result');
const showMoreBtn=document.getElementById('show-more-btn');

const key='5V17f54fb8D09kQWJ9DB9LQEtJh5ELlCunIeTfKSSdM';
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}e&client_id=${key}&per_page=10`;
    const response=await fetch(url);
    const data=await response.json();
    if(page===1){
        searchresult.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement('img');
        image.src=result.urls.small;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);



    })
    showMoreBtn.style.display='block';
    

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showMoreBtn.addEventListener("click",(e)=>{
    page++;
    searchImages();
    document.body.style.background='linear-gradient(0deg,#cc2b5e , #753a88)'
})