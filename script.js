

const fetchReddit = (search) => { //can see data for example link if we take out variable search term

    const endpoint =  `https://www.reddit.com/search.json?q=${search}+nsfw:no` //url of api we want to link up //works with example cats 
    fetch(endpoint) //api url as argument returns a fetch object that contains data we want
    .then((fetchObj)=>{
        return fetchObj.json() //unwrap fetch object to get json data
    })
    .then((jsonData)=>{
        // these DOM instructions access the photo attached to each post
        //displayImage(jsonData.data.children[0].data.gallery_data.items) //get this checked out
        // displayImage()
        addPhotos(jsonData)
        
            // for (let i=0; i<jsonData.data.children.length; i++){
        
            //     let slideshow = document.createElement('img')
            //     const img_source = jsonData.data.children[i].data.thumbnail
                
            //     slideshow.src = img_source /// source should be changing every 2 seconds 
                        
            //     document.querySelector('#slideshow').appendChild(slideshow) 
            //     console.log(img_source)
            // }
            // let slideshow = document.createElement('img')
            // slideshow.src = img_source

            // document.querySelector('#slideshow').appendChild(slideshow) 
            
        // console.log(img_source)
            
    
    })
    .catch(err=>{
        console.log('error fetching data')
    })

} 


const addPhotos = (apiResults) => {
    for (let i=0; i<apiResults.data.children.length; i++){
        //let photosArray = []
        //photosArray = apiResults.data.children[i].data.thumbnail


        let img_source = apiResults.data.children[i].data.thumbnail
        let slideshow = document.createElement('img')
        slideshow.src = img_source /// source should be changing every 2 seconds 
        
        document.querySelector('#slideshow').appendChild(slideshow) 

        //slideshow logic:
    //let photos_array = 



        
    }


}





//json data shows an arrangement of photos in console as data.children[].data.thumbnail



//what happens on event search
document.querySelector('button').addEventListener('click', e=>{
    e.preventDefault() //prevents refresh
    redditQuery = document.getElementById('redditSearch').value //user input in form converted to value
    fetchReddit(redditQuery) //fetch users
    document.querySelector('p').innerText = ''
    document.querySelector('form').style.display = 'none'
    

})



//add a stop button that basically resets to original page 
const reset = document.getElementById('reset')
reset.addEventListener('click', e=>{
    document.querySelector('p').innerText = 'Type your query below and click "search" to reveal a slideshow of related SFW images live from Reddit.'
    document.querySelector('form').style.display = 'block'
    //document.querySelector('#slideshow').display = 'none'
    // set src to '' as well didnt work 
})
//add event listener hides images/slideshow/display none and restores original 


//still need to get images to clear when reset clicked. need images to display as slideshow